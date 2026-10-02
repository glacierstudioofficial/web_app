import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { cn } from "@/lib/utils";
import type { ServiceCta } from "./types";

/* ─────────────────────────────────────────
   SHARED PRIMITIVES
───────────────────────────────────────── */

export const btnBase =
  "group inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full text-[15px] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#159FE5] focus-visible:ring-offset-2 active:scale-[0.98]";

export const btnPrimary =
  "bg-[#0B1220] text-white shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset,0_8px_24px_-8px_rgba(11,18,32,0.5)] hover:bg-[#16223A]";

export const btnSecondary =
  "bg-white text-[#0B1220] border border-[#E2E8F0] shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:border-[#CBD5E1] hover:bg-[#F8FAFC]";

export const btnBrand =
  "bg-[#159FE5] text-white shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_10px_30px_-10px_rgba(21,159,229,0.7)] hover:bg-[#0E8FD1]";

export const btnGhostDark =
  "bg-white/5 text-white border border-white/15 hover:bg-white/10 hover:border-white/25";

export const CtaLink: React.FC<{ cta: ServiceCta; className: string; arrow?: boolean }> = ({ cta, className, arrow = true }) => (
  <Link href={cta.href} className={cn(btnBase, className)}>
    <span>{cta.label}</span>
    {arrow && <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />}
  </Link>
);

export const Eyebrow: React.FC<{ children: React.ReactNode; dark?: boolean }> = ({ children, dark }) => (
  <div
    className={cn(
      "inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em]",
      dark ? "text-[#7DD3FC]" : "text-[#0867A5]"
    )}
  >
    <span className={cn("h-px w-6", dark ? "bg-[#7DD3FC]/60" : "bg-[#159FE5]/60")} />
    {children}
  </div>
);

export const SectionHeader: React.FC<{
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
}> = ({ eyebrow, title, description, dark }) => (
  <div className="grid gap-6 lg:grid-cols-12 lg:items-end mb-14 lg:mb-16">
    <ScrollReveal direction="up" className="lg:col-span-7 space-y-5">
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "text-[2rem] sm:text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-balance",
          dark ? "text-white" : "text-[#0B1220]"
        )}
      >
        {title}
      </h2>
    </ScrollReveal>
    <ScrollReveal direction="up" delay={120} className="lg:col-span-5">
      <p className={cn("text-base sm:text-lg leading-relaxed text-pretty", dark ? "text-[#94A3B8]" : "text-[#475569]")}>
        {description}
      </p>
    </ScrollReveal>
  </div>
);
