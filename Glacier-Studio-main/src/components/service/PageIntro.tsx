import React from "react";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { cn } from "@/lib/utils";
import { CtaLink, btnPrimary, btnSecondary } from "./ui";
import type { ServiceCta } from "./types";

interface PageIntroProps {
  /** Breadcrumb parent; defaults to Home */
  parent?: ServiceCta;
  crumb: string;
  eyebrow: string;
  icon: LucideIcon;
  title: string;
  highlight?: string;
  description: string;
  primaryCta?: ServiceCta;
  secondaryCta?: ServiceCta;
  trust?: string[];
  /** Right-hand visual. Without one, the intro is a single wide column. */
  visual?: React.ReactNode;
  /** Extra content under the copy (e.g. stats) */
  children?: React.ReactNode;
}

/** Page-level hero shared by Work, About and Contact — same language as the solution pages. */
export const PageIntro: React.FC<PageIntroProps> = ({
  parent = { label: "Home", href: "/" }, crumb, eyebrow, icon: Icon, title, highlight, description,
  primaryCta, secondaryCta, trust, visual, children,
}) => {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <section className="relative overflow-hidden bg-white border-b border-[#EEF2F6]">
      <div className="absolute inset-0 bg-grid-light mask-radial-fade pointer-events-none" aria-hidden />
      <div className="absolute -top-40 right-[-10%] h-[620px] w-[620px] rounded-full bg-[#159FE5]/15 blur-[140px] pointer-events-none" aria-hidden />
      <div className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-[#7DD3FC]/15 blur-[120px] pointer-events-none" aria-hidden />

      <Container size="large" className="relative pt-[7.25rem] pb-20 sm:pt-[8.25rem] lg:pt-[9.25rem] lg:pb-28">
        <div className={cn("grid items-center gap-14 lg:gap-10", visual && "lg:grid-cols-12")}>
          <div className={cn("space-y-8", visual ? "lg:col-span-6 xl:col-span-5" : "max-w-4xl")}>
            <ScrollReveal direction="up">
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[13px] font-medium text-[#64748B]">
                <Link href={parent.href} className="hover:text-[#0B1220] transition-colors">{parent.label}</Link>
                <ChevronRight size={14} className="text-[#CBD5E1]" />
                <span className="text-[#0B1220]">{crumb}</span>
              </nav>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={60}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#E2E8F0] bg-white/80 py-1 pl-1 pr-4 text-[13px] font-medium text-[#334155] shadow-[0_1px_2px_rgba(15,23,42,0.04)] backdrop-blur">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-b from-[#159FE5] to-[#0867A5] text-white">
                  <Icon size={13} strokeWidth={2.5} />
                </span>
                {eyebrow}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={120}>
              <h1 className="text-[2.6rem] sm:text-6xl xl:text-[4.25rem] font-bold leading-[1.02] tracking-[-0.045em] text-[#0B1220] text-balance">
                {highlight && parts.length > 1 ? (
                  <>
                    {parts[0]}
                    <span className="bg-gradient-to-r from-[#159FE5] via-[#0E86C8] to-[#0867A5] bg-clip-text text-transparent">
                      {highlight}
                    </span>
                    {parts[1]}
                  </>
                ) : (
                  title
                )}
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={180}>
              <p className="max-w-xl text-lg leading-relaxed text-[#475569] text-pretty">{description}</p>
            </ScrollReveal>

            {(primaryCta || secondaryCta) && (
              <ScrollReveal direction="up" delay={240}>
                <div className="flex flex-col gap-3 sm:flex-row">
                  {primaryCta && <CtaLink cta={primaryCta} className={btnPrimary} />}
                  {secondaryCta && <CtaLink cta={secondaryCta} className={btnSecondary} arrow={false} />}
                </div>
              </ScrollReveal>
            )}

            {trust && (
              <ScrollReveal direction="fade" delay={320}>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                  {trust.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-[13px] font-medium text-[#475569]">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            )}

            {children}
          </div>

          {visual && (
            <div className="lg:col-span-6 xl:col-span-7">
              <ScrollReveal direction="up" delay={200}>{visual}</ScrollReveal>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
