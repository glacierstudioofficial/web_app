import React from "react";
import Link from "next/link";

/**
 * Minimal, safe Markdown renderer for chat replies: paragraphs, bullet and numbered
 * lists, **bold**, *italic*, `code`, [links](url) and bare URLs. Never injects HTML.
 */

const INLINE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\)|`[^`]+`|https?:\/\/[^\s)]+|\*[^*\s][^*]*\*)/g;

function ChatLink({ href, children }: { href: string; children: React.ReactNode }) {
  const cls = "font-semibold text-[#0867A5] underline decoration-[#159FE5]/40 underline-offset-2 hover:decoration-[#159FE5]";
  if (href.startsWith("/")) {
    return <Link href={href} className={cls}>{children}</Link>;
  }
  if (!/^(https?:|mailto:|tel:)/.test(href)) return <>{children}</>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  );
}

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  return text.split(INLINE).map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (!part) return null;
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={key} className="font-semibold text-[#0B1220]">{part.slice(2, -2)}</strong>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) return <ChatLink key={key} href={link[2]}>{link[1]}</ChatLink>;
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={key} className="rounded bg-[#F1F5F9] px-1 py-0.5 font-mono text-[12px] text-[#0B1220]">{part.slice(1, -1)}</code>;
    }
    if (/^https?:\/\//.test(part)) return <ChatLink key={key} href={part}>{part.replace(/^https?:\/\//, "")}</ChatLink>;
    if (part.length > 2 && part.startsWith("*") && part.endsWith("*")) return <em key={key}>{part.slice(1, -1)}</em>;
    return <React.Fragment key={key}>{part}</React.Fragment>;
  });
}

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

function toBlocks(text: string): Block[] {
  const blocks: Block[] = [];
  for (const raw of text.split("\n")) {
    const line = raw.trimEnd();
    const bullet = line.match(/^\s*(?:[-*•])\s+(.*)$/);
    const numbered = line.match(/^\s*\d+[.)]\s+(.*)$/);
    const last = blocks[blocks.length - 1];
    if (bullet) {
      if (last?.type === "ul") last.items.push(bullet[1]);
      else blocks.push({ type: "ul", items: [bullet[1]] });
    } else if (numbered) {
      if (last?.type === "ol") last.items.push(numbered[1]);
      else blocks.push({ type: "ol", items: [numbered[1]] });
    } else if (line.trim()) {
      blocks.push({ type: "p", text: line.replace(/^#+\s*/, "") });
    }
  }
  return blocks;
}

export function ChatMarkdown({ text }: { text: string }) {
  return (
    <div className="space-y-2.5">
      {toBlocks(text).map((b, i) => {
        if (b.type === "p") return <p key={i}>{renderInline(b.text, `p${i}`)}</p>;
        const List = b.type === "ul" ? "ul" : "ol";
        return (
          <List key={i} className={b.type === "ul" ? "space-y-1.5" : "list-decimal space-y-1.5 pl-5 marker:font-semibold marker:text-[#94A3B8]"}>
            {b.items.map((item, j) => (
              <li key={j} className={b.type === "ul" ? "relative pl-4" : "pl-1"}>
                {b.type === "ul" && <span className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-[#159FE5]" />}
                {renderInline(item, `l${i}-${j}`)}
              </li>
            ))}
          </List>
        );
      })}
    </div>
  );
}
