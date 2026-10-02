import Anthropic from "@anthropic-ai/sdk";
import { ASSISTANT_SYSTEM_PROMPT } from "@/lib/assistantKnowledge";

export const maxDuration = 60;

/** Sent as the only stream content when the model is unavailable; the widget then answers locally. */
const FALLBACK_SIGNAL = "\u0000FALLBACK";

const MAX_MESSAGES = 20;
const MAX_CHARS = 2000;

/* ─────────────────────────────────────────
   Best-effort per-IP rate limit (per server instance)
───────────────────────────────────────── */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 30;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // keep memory bounded
  return recent.length > MAX_REQUESTS;
}

/* ─────────────────────────────────────────
   Input validation
───────────────────────────────────────── */
function parseMessages(body: unknown): Anthropic.Beta.BetaMessageParam[] | null {
  if (!body || typeof body !== "object" || !Array.isArray((body as { messages?: unknown }).messages)) return null;
  const raw = (body as { messages: unknown[] }).messages;

  const messages: Anthropic.Beta.BetaMessageParam[] = [];
  for (const m of raw) {
    if (!m || typeof m !== "object") return null;
    const { role, content } = m as { role?: unknown; content?: unknown };
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") return null;
    const text = content.trim().slice(0, MAX_CHARS);
    if (text) messages.push({ role, content: text });
  }

  // Keep the most recent turns, starting on a user message, ending on one.
  let recent = messages.slice(-MAX_MESSAGES);
  while (recent.length && recent[0].role !== "user") recent = recent.slice(1);
  if (!recent.length || recent[recent.length - 1].role !== "user") return null;
  return recent;
}

const hasCredentials = () => Boolean(process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_AUTH_TOKEN);

let client: Anthropic | null = null;
const getClient = () => (client ??= new Anthropic());

/* ─────────────────────────────────────────
   POST /api/chat → streamed plain text
───────────────────────────────────────── */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const messages = parseMessages(body);
  if (!messages) return Response.json({ error: "Invalid messages" }, { status: 400 });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (rateLimited(ip)) {
    return Response.json({ error: "Too many messages. Please wait a few minutes." }, { status: 429 });
  }

  // No key configured: tell the widget to use its built-in answers.
  if (!hasCredentials()) {
    return new Response(FALLBACK_SIGNAL, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let sentText = false;
      try {
        const response = getClient().beta.messages.stream(
          {
            model: "claude-opus-5",
            max_tokens: 2048,
            // Chat is latency-sensitive; low effort keeps replies fast and focused.
            output_config: { effort: "low" },
            betas: ["server-side-fallback-2026-07-01"],
            fallbacks: "default",
            cache_control: { type: "ephemeral" },
            system: ASSISTANT_SYSTEM_PROMPT,
            messages,
          },
          { signal: request.signal }
        );

        for await (const event of response) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            sentText = true;
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }

        const final = await response.finalMessage();
        if (final.stop_reason === "refusal" && !sentText) {
          controller.enqueue(
            encoder.encode(
              "I can't help with that one, but I'm happy to answer anything about Glacier Studio's services, process or projects.\n[[chips: What services do you offer? | Show me your work | Talk to the team]]"
            )
          );
        }
      } catch (error) {
        if (request.signal.aborted) {
          // Visitor pressed stop; nothing to report.
        } else if (!sentText) {
          if (error instanceof Anthropic.APIError) {
            console.error(`[chat] Claude API error ${error.status}:`, error.message);
          } else {
            console.error("[chat] Unexpected error:", error);
          }
          controller.enqueue(encoder.encode(FALLBACK_SIGNAL));
        }
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
