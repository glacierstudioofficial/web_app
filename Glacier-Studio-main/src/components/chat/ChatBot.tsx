"use client";

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowUp, Bot, Check, ChevronDown, Clock, Copy, Mail, Maximize2,
  MessageCircle, Minimize2, RotateCcw, Sparkles, Square, Briefcase, X, CalendarCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { ChatMarkdown } from "./ChatMarkdown";
import { CHIP_SHORTCUTS, getLocalReply } from "./localReplies";

/* ═══════════════════════════════════════════════════════
   TYPES & CONSTANTS
═══════════════════════════════════════════════════════ */
interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  chips?: string[];
  status?: "streaming" | "done" | "error";
}

const STORAGE_KEY = "glacier-chat-v3";
const TEASER_KEY = "glacier-chat-teaser-seen";
const FALLBACK_SIGNAL = "\u0000FALLBACK";
const CHIPS_RE = /\[\[chips:([^\]]*)\]\]\s*$/;
const SPRING = { type: "spring" as const, stiffness: 380, damping: 32, mass: 0.8 };

const SUGGESTIONS = [
  { icon: Sparkles, label: "What can you build for me?", prompt: "What kind of projects can Glacier Studio build for my business?" },
  { icon: Briefcase, label: "Show me your work", prompt: "Can you show me some projects you have built?" },
  { icon: Bot, label: "Automate my business with AI", prompt: "How can AI automation help my business?" },
  { icon: Clock, label: "How long does a project take?", prompt: "How long does a typical project take?" },
];

const uid = () => Math.random().toString(36).slice(2, 10);

/** true only on the client after hydration (the widget depends on browser storage). */
const noopSubscribe = () => () => {};
const useIsClient = () => useSyncExternalStore(noopSubscribe, () => true, () => false);

/** Split a streamed reply into visible text and the trailing quick-reply chips. */
function splitChips(raw: string): { text: string; chips?: string[] } {
  const match = raw.match(CHIPS_RE);
  if (match) {
    const chips = match[1].split("|").map((c) => c.trim()).filter(Boolean).slice(0, 3);
    return { text: raw.slice(0, match.index).trimEnd(), chips };
  }
  // Hide a chips line that is still arriving
  const partial = raw.lastIndexOf("[[");
  return { text: partial >= 0 ? raw.slice(0, partial).trimEnd() : raw };
}

function loadMessages(): ChatMessage[] {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as ChatMessage[];
    return Array.isArray(parsed) ? parsed.filter((m) => m.status !== "streaming") : [];
  } catch {
    return [];
  }
}

/* ═══════════════════════════════════════════════════════
   SMALL PIECES
═══════════════════════════════════════════════════════ */

/** Animated gradient orb used as the assistant's avatar. */
function AssistantOrb({ size = 28, live = false }: { size?: number; live?: boolean }) {
  return (
    <span className="relative inline-flex shrink-0" style={{ width: size, height: size }}>
      <span className="chat-orb absolute inset-0 rounded-full" />
      <span className="absolute inset-[18%] flex items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
        <Sparkles size={size * 0.42} className="text-white" strokeWidth={2.4} />
      </span>
      {live && (
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0B1220] bg-[#22C55E]" />
      )}
    </span>
  );
}

function Thinking() {
  return (
    <div className="flex items-center gap-2 py-1" aria-label="Glacier AI is thinking">
      <span className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <span key={i} className="chat-dot h-1.5 w-1.5 rounded-full bg-[#159FE5]" style={{ animationDelay: `${i * 0.16}s` }} />
        ))}
      </span>
      <span className="chat-shimmer text-[12.5px] font-medium">Thinking</span>
    </div>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(text).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }).catch(() => {});
      }}
      className="inline-flex items-center gap-1 rounded-md px-1.5 py-1 text-[11px] font-medium text-[#94A3B8] transition-colors hover:bg-[#F1F5F9] hover:text-[#475569]"
      aria-label="Copy reply"
    >
      {copied ? <Check size={12} className="text-[#16A34A]" /> : <Copy size={12} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN WIDGET
═══════════════════════════════════════════════════════ */
export const ChatBot: React.FC = () => {
  const reduce = useReducedMotion();
  const mounted = useIsClient();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() =>
    typeof window === "undefined" ? [] : loadMessages()
  );
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [atBottom, setAtBottom] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const messagesRef = useRef<ChatMessage[]>([]);
  messagesRef.current = messages;

  /* ── Show the teaser once per visitor ── */
  useEffect(() => {
    let seen = false;
    try {
      seen = localStorage.getItem(TEASER_KEY) === "1";
    } catch {}
    if (seen) return;
    const t = setTimeout(() => setTeaser(true), 6000);
    return () => clearTimeout(t);
  }, []);

  /* ── Persist conversation for this tab ── */
  useEffect(() => {
    if (!mounted) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages.filter((m) => m.status !== "streaming")));
    } catch {}
  }, [messages, mounted]);

  const dismissTeaser = () => {
    setTeaser(false);
    try {
      localStorage.setItem(TEASER_KEY, "1");
    } catch {}
  };

  const openChat = () => {
    dismissTeaser();
    setOpen(true);
  };

  /* ── Focus + Escape + lock body scroll on mobile ── */
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 250);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const mobile = window.matchMedia("(max-width: 639px)").matches;
    const prev = document.body.style.overflow;
    if (mobile) document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  /* ── Auto-scroll while the visitor is at the bottom ── */
  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    if (messages.length === 0) el.scrollTop = 0; // welcome screen reads top-down
    else if (atBottom) el.scrollTop = el.scrollHeight;
  }, [messages, atBottom, open]);

  /* ── Let other floating buttons (WhatsApp) step aside while the chat is open ── */
  useEffect(() => {
    const root = document.documentElement;
    if (open) root.dataset.chatOpen = "true";
    else delete root.dataset.chatOpen;
    return () => {
      delete root.dataset.chatOpen;
    };
  }, [open]);

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setAtBottom(el.scrollHeight - el.scrollTop - el.clientHeight < 40);
  };

  const scrollToBottom = () => {
    const el = scrollRef.current;
    el?.scrollTo({ top: el.scrollHeight, behavior: reduce ? "auto" : "smooth" });
  };

  /* ── Auto-grow textarea ── */
  useLayoutEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = "0px";
    el.style.height = `${Math.min(el.scrollHeight, 140)}px`;
  }, [input, open]);

  const patchMessage = (id: string, patch: Partial<ChatMessage>) =>
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, ...patch } : m)));

  /** Types out an offline reply so it feels the same as a streamed one. */
  const typeOut = useCallback(
    async (id: string, full: string, chips: string[] | undefined, signal: AbortSignal) => {
      const step = reduce ? full.length : 4;
      for (let i = step; i < full.length + step; i += step) {
        if (signal.aborted) break;
        patchMessage(id, { text: full.slice(0, i) });
        await new Promise((r) => setTimeout(r, 12));
      }
      patchMessage(id, { text: signal.aborted ? undefined : full, chips, status: "done" });
    },
    [reduce]
  );

  /* ── Send a message ── */
  const send = useCallback(
    async (raw: string) => {
      const text = raw.trim();
      if (!text || busy) return;

      const history = messagesRef.current.filter((m) => m.status !== "error" && m.text);
      const userMsg: ChatMessage = { id: uid(), role: "user", text, status: "done" };
      const botId = uid();
      setMessages([...history, userMsg, { id: botId, role: "assistant", text: "", status: "streaming" }]);
      setInput("");
      setBusy(true);
      setAtBottom(true);

      const controller = new AbortController();
      abortRef.current = controller;

      const answerLocally = async () => {
        await new Promise((r) => setTimeout(r, 450));
        const local = getLocalReply(text);
        await typeOut(botId, local.text, local.chips, controller.signal);
      };

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [...history, userMsg].map((m) => ({ role: m.role, content: m.text })),
          }),
          signal: controller.signal,
        });

        if (res.status === 429) {
          const { error } = await res.json().catch(() => ({ error: "" }));
          patchMessage(botId, {
            text: error || "You're sending messages quickly. Please wait a moment and try again.",
            status: "error",
          });
          return;
        }
        if (!res.ok || !res.body) {
          await answerLocally();
          return;
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = "";
        for (;;) {
          const { value, done } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          if (acc.startsWith(FALLBACK_SIGNAL)) break;
          patchMessage(botId, { text: splitChips(acc).text });
        }

        if (acc.startsWith(FALLBACK_SIGNAL) || !acc.trim()) {
          await answerLocally();
          return;
        }
        const { text: finalText, chips } = splitChips(acc);
        patchMessage(botId, { text: finalText, chips, status: "done" });
      } catch {
        if (controller.signal.aborted) {
          setMessages((prev) =>
            prev
              .map((m) => (m.id === botId ? { ...m, status: "done" as const } : m))
              .filter((m) => !(m.id === botId && !m.text))
          );
        } else {
          await answerLocally();
        }
      } finally {
        setBusy(false);
        abortRef.current = null;
      }
    },
    [busy, typeOut]
  );

  const stop = () => abortRef.current?.abort();

  const reset = () => {
    abortRef.current?.abort();
    setMessages([]);
    setInput("");
    inputRef.current?.focus();
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      send(input);
    }
  };

  if (!mounted) return null;

  const lastBot = [...messages].reverse().find((m) => m.role === "assistant");
  const empty = messages.length === 0;

  /* ═══════════════════════════════════════════════════════
     RENDER
  ═══════════════════════════════════════════════════════ */
  return (
    <>
      {/* ═══ PANEL ═══ */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="false"
            aria-label="Chat with Glacier AI"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97 }}
            transition={SPRING}
            style={{ transformOrigin: "bottom right" }}
            className={cn(
              "fixed z-[9001] flex flex-col overflow-hidden bg-[#F8FAFC]",
              "inset-0 sm:inset-auto sm:bottom-[88px] sm:right-6 sm:rounded-[1.5rem] sm:border sm:border-black/5",
              "sm:shadow-[0_32px_80px_-20px_rgba(8,103,165,0.35),0_12px_32px_-12px_rgba(15,23,42,0.25)]",
              "sm:transition-[width,height] sm:duration-300 sm:ease-out",
              expanded
                ? "sm:h-[min(780px,calc(100vh-120px))] sm:w-[min(620px,calc(100vw-48px))]"
                : "sm:h-[min(660px,calc(100vh-120px))] sm:w-[400px]"
            )}
          >
            {/* ── Header ── */}
            <div className="relative shrink-0 overflow-hidden bg-[#070B14] px-4 pb-4 pt-[max(1rem,env(safe-area-inset-top))] text-white">
              <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60 [mask-image:linear-gradient(to_bottom,#000,transparent)]" aria-hidden />
              <div className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-[#159FE5]/40 blur-3xl" aria-hidden />
              <div className="pointer-events-none absolute -left-10 top-6 h-24 w-24 rounded-full bg-[#7DD3FC]/20 blur-2xl" aria-hidden />

              <div className="relative flex items-center gap-3">
                <AssistantOrb size={38} live />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[15px] font-semibold tracking-[-0.01em]">Glacier AI</span>
                    <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#7DD3FC] ring-1 ring-white/10">
                      Beta
                    </span>
                  </div>
                  <div className="mt-0.5 flex items-center gap-1.5 text-[12px] text-white/60">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22C55E]" />
                    Online · replies in seconds
                  </div>
                </div>

                <div className="flex items-center gap-0.5">
                  {!empty && (
                    <button type="button" onClick={reset} className="chat-icon-btn" aria-label="Start a new chat" title="New chat">
                      <RotateCcw size={15} />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setExpanded((v) => !v)}
                    className="chat-icon-btn hidden sm:inline-flex"
                    aria-label={expanded ? "Shrink chat" : "Expand chat"}
                    title={expanded ? "Shrink" : "Expand"}
                  >
                    {expanded ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
                  </button>
                  <button type="button" onClick={() => setOpen(false)} className="chat-icon-btn" aria-label="Close chat" title="Close">
                    <ChevronDown size={18} className="sm:hidden" />
                    <X size={17} className="hidden sm:block" />
                  </button>
                </div>
              </div>
            </div>

            {/* ── Messages ── */}
            <div className="relative min-h-0 flex-1">
              <div
                ref={scrollRef}
                onScroll={onScroll}
                className="chat-scroll h-full overflow-y-auto overscroll-contain px-4 py-5"
                aria-live="polite"
                aria-relevant="additions text"
              >
                {empty ? (
                  /* Welcome screen */
                  <motion.div
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex min-h-full flex-col"
                  >
                    <div className="pt-2">
                      <div className="text-[13px] font-medium text-[#64748B]">Hi there 👋</div>
                      <h2 className="mt-1 text-[1.6rem] font-bold leading-[1.1] tracking-[-0.035em] text-[#0B1220]">
                        How can we help you{" "}
                        <span className="bg-gradient-to-r from-[#159FE5] to-[#0867A5] bg-clip-text text-transparent">grow?</span>
                      </h2>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-[#64748B]">
                        Ask about our services, process, timelines or your idea. I answer instantly, and our team is one tap away.
                      </p>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {SUGGESTIONS.map((s, i) => (
                        <motion.button
                          key={s.label}
                          type="button"
                          onClick={() => send(s.prompt)}
                          initial={reduce ? false : { opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: 0.15 + i * 0.06 }}
                          className="group flex flex-col items-start gap-2.5 rounded-2xl border border-[#E8EDF3] bg-white p-3 text-left shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#BFE3F7] hover:shadow-[0_12px_24px_-12px_rgba(8,103,165,0.3)]"
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE] text-[#0867A5] ring-1 ring-[#BAE6FD]/70 transition-colors group-hover:from-[#159FE5] group-hover:to-[#0867A5] group-hover:text-white">
                            <s.icon size={15} />
                          </span>
                          <span className="text-[13px] font-semibold leading-snug text-[#0B1220]">{s.label}</span>
                        </motion.button>
                      ))}
                    </div>

                    <div className="mt-auto pt-4">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#94A3B8]">Prefer a human?</div>
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        <a href={siteConfig.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="chat-quick-link">
                          <MessageCircle size={15} className="text-[#16A34A]" /> WhatsApp
                        </a>
                        <a href={`mailto:${siteConfig.contact.email}`} className="chat-quick-link">
                          <Mail size={15} className="text-[#0867A5]" /> Email
                        </a>
                        <Link href="/contact" onClick={() => setOpen(false)} className="chat-quick-link">
                          <CalendarCheck size={15} className="text-[#0867A5]" /> Book call
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="space-y-5">
                    {messages.map((m) => {
                      const isUser = m.role === "user";
                      const isLastBot = m.id === lastBot?.id;
                      return (
                        <motion.div
                          key={m.id}
                          initial={reduce ? false : { opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className={cn("flex gap-2.5", isUser ? "justify-end" : "justify-start")}
                        >
                          {!isUser && (
                            <div className="mt-0.5">
                              <AssistantOrb size={26} />
                            </div>
                          )}

                          <div className={cn("flex min-w-0 flex-col", isUser ? "max-w-[82%] items-end" : "max-w-[88%] items-start")}>
                            <div
                              className={cn(
                                "text-[14px] leading-relaxed",
                                isUser
                                  ? "whitespace-pre-wrap break-words rounded-2xl rounded-br-md bg-[#0B1220] px-4 py-2.5 text-white shadow-[0_6px_16px_-8px_rgba(11,18,32,0.5)]"
                                  : cn(
                                      "rounded-2xl rounded-tl-md bg-white px-4 py-3 text-[#334155] ring-1 ring-[#E8EDF3] shadow-[0_1px_2px_rgba(15,23,42,0.04)]",
                                      m.status === "error" && "bg-[#FEF2F2] text-[#B91C1C] ring-[#FECACA]"
                                    )
                              )}
                            >
                              {isUser ? (
                                m.text
                              ) : m.status === "streaming" && !m.text ? (
                                <Thinking />
                              ) : (
                                <>
                                  <ChatMarkdown text={m.text} />
                                  {m.status === "streaming" && (
                                    <span className="caret-blink ml-0.5 inline-block h-4 w-[2px] translate-y-[3px] rounded-full bg-[#159FE5]" />
                                  )}
                                </>
                              )}
                            </div>

                            {/* Actions + quick replies under the latest reply */}
                            {!isUser && m.status === "done" && (
                              <div className="mt-1 flex items-center gap-1 opacity-70 transition-opacity hover:opacity-100">
                                <CopyButton text={m.text} />
                              </div>
                            )}
                            {!isUser && isLastBot && m.status === "done" && m.chips && m.chips.length > 0 && !busy && (
                              <div className="mt-2 flex flex-wrap gap-1.5">
                                {m.chips.map((chip, i) => (
                                  <motion.button
                                    key={chip}
                                    type="button"
                                    onClick={() => send(CHIP_SHORTCUTS[chip] ?? chip)}
                                    initial={reduce ? false : { opacity: 0, y: 6, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.25, delay: i * 0.06 }}
                                    className="rounded-full border border-[#D5EDFA] bg-white px-3 py-1.5 text-[12.5px] font-medium text-[#0867A5] shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all hover:-translate-y-px hover:border-[#159FE5] hover:bg-[#159FE5] hover:text-white"
                                  >
                                    {chip}
                                  </motion.button>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Jump to latest */}
              <AnimatePresence>
                {!atBottom && !empty && (
                  <motion.button
                    type="button"
                    onClick={scrollToBottom}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute bottom-3 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-white text-[#0B1220] shadow-lg ring-1 ring-black/5"
                    aria-label="Scroll to latest message"
                  >
                    <ArrowDown size={15} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* ── Composer ── */}
            <form onSubmit={onSubmit} className="shrink-0 border-t border-[#EEF2F6] bg-white px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
              <div className="flex items-end gap-2 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-1.5 pl-3.5 transition-all focus-within:border-[#159FE5] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#159FE5]/10">
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={input}
                  maxLength={2000}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Ask anything about your project…"
                  aria-label="Message Glacier AI"
                  className="max-h-[140px] min-h-[36px] flex-1 resize-none bg-transparent py-2 text-[14px] leading-snug text-[#0B1220] placeholder:text-[#94A3B8] focus:outline-none"
                />
                <AnimatePresence mode="wait" initial={false}>
                  {busy ? (
                    <motion.button
                      key="stop"
                      type="button"
                      onClick={stop}
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.6, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0B1220] text-white"
                      aria-label="Stop generating"
                    >
                      <Square size={12} fill="currentColor" />
                    </motion.button>
                  ) : (
                    <motion.button
                      key="send"
                      type="submit"
                      disabled={!input.trim()}
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.6, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-200",
                        input.trim()
                          ? "bg-gradient-to-b from-[#159FE5] to-[#0867A5] text-white shadow-[0_6px_16px_-6px_rgba(21,159,229,0.8)] hover:brightness-110"
                          : "bg-[#E2E8F0] text-[#94A3B8]"
                      )}
                      aria-label="Send message"
                    >
                      <ArrowUp size={17} strokeWidth={2.5} />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
              <p className="mt-2 text-center text-[11px] text-[#94A3B8]">
                AI can make mistakes. For a quote,{" "}
                <Link href="/contact" onClick={() => setOpen(false)} className="font-medium text-[#0867A5] hover:underline">
                  talk to our team
                </Link>
                .
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ TEASER BUBBLE ═══ */}
      <AnimatePresence>
        {teaser && !open && (
          <motion.div
            key="teaser"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={SPRING}
            style={{ transformOrigin: "bottom right" }}
            className="fixed bottom-[84px] right-[76px] z-[9001] w-[250px] sm:right-[88px]"
          >
            <div className="relative rounded-2xl rounded-br-md bg-white p-3.5 pr-8 shadow-[0_16px_40px_-12px_rgba(8,103,165,0.35)] ring-1 ring-black/5">
              <button
                type="button"
                onClick={dismissTeaser}
                className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-[#94A3B8] transition-colors hover:bg-[#F1F5F9] hover:text-[#475569]"
                aria-label="Dismiss"
              >
                <X size={13} />
              </button>
              <button type="button" onClick={openChat} className="flex items-start gap-2.5 text-left">
                <AssistantOrb size={28} />
                <span>
                  <span className="block text-[13px] font-semibold text-[#0B1220]">Hi, I&apos;m Glacier AI 👋</span>
                  <span className="mt-0.5 block text-[12.5px] leading-snug text-[#64748B]">
                    Planning a website, app or automation? Ask me anything.
                  </span>
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ LAUNCHER ═══ */}
      <div className={cn("fixed bottom-5 right-4 z-[9002] sm:right-6", open && "hidden sm:block")}>
        <motion.button
          type="button"
          onClick={() => (open ? setOpen(false) : openChat())}
          whileHover={reduce ? undefined : { scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="group relative flex h-[52px] w-[52px] items-center justify-center rounded-full text-white shadow-[0_12px_32px_-8px_rgba(21,159,229,0.75)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#159FE5]/30"
          aria-label={open ? "Close Glacier AI chat" : "Open Glacier AI chat"}
          aria-expanded={open}
        >
          {/* Rotating conic ring */}
          <span className="chat-ring absolute -inset-[3px] rounded-full" aria-hidden />
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#159FE5] via-[#0E86C8] to-[#0867A5]" aria-hidden />
          <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.45),transparent_55%)]" aria-hidden />

          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              {open ? <X size={22} strokeWidth={2.4} /> : <Sparkles size={22} strokeWidth={2.2} />}
            </motion.span>
          </AnimatePresence>

          {teaser && !open && (
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-[#EF4444] text-[9px] font-bold">
              1
            </span>
          )}
        </motion.button>
      </div>
    </>
  );
};
