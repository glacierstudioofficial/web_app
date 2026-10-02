import React from "react";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Check, Plus,
  Code, Bot, TrendingUp, Clapperboard, Megaphone, Boxes,
} from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { solutionPages } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import type { ServiceCapability, ServicePageConfig } from "./types";
import { btnBase, btnBrand, btnGhostDark, CtaLink, Eyebrow, SectionHeader } from "./ui";
import { PageIntro } from "./PageIntro";

export * from "./ui";

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */

const ServiceHero: React.FC<{ config: ServicePageConfig }> = ({ config }) => (
  <PageIntro
    parent={{ label: "Solutions", href: "/solutions" }}
    crumb={config.name}
    {...config.hero}
  />
);

/* ─────────────────────────────────────────
   METRICS BAR
───────────────────────────────────────── */

export const MetricsBar: React.FC<{ metrics: ServicePageConfig["metrics"] }> = ({ metrics }) => (
  <section className="bg-white">
    <Container size="large">
      <div className="grid grid-cols-2 lg:grid-cols-4 border-x border-b border-[#EEF2F6]">
        {metrics.map((m, i) => (
          <ScrollReveal
            key={m.label}
            direction="up"
            delay={i * 70}
            className={cn(
              "px-6 py-8 sm:px-8 sm:py-10",
              i % 2 === 1 && "border-l border-[#EEF2F6]",
              i >= 2 && "border-t border-[#EEF2F6] lg:border-t-0",
              i === 2 && "lg:border-l"
            )}
          >
            <div className="text-3xl sm:text-[2.75rem] font-bold leading-none tracking-[-0.04em] text-[#0B1220]">{m.value}</div>
            <div className="mt-3 text-sm font-semibold text-[#0B1220]">{m.label}</div>
            {m.caption && <div className="mt-1 text-[13px] text-[#64748B]">{m.caption}</div>}
          </ScrollReveal>
        ))}
      </div>
    </Container>
  </section>
);

/* ─────────────────────────────────────────
   CAPABILITIES — BENTO GRID
───────────────────────────────────────── */

/** Column spans on lg for 6 items: zig-zag rhythm of wide + narrow cards. */
const BENTO_SPANS = ["lg:col-span-2", "", "", "lg:col-span-2", "", "lg:col-span-2"];

const CapabilityCard: React.FC<{ item: ServiceCapability; index: number; wide: boolean; dark: boolean }> = ({
  item, index, wide, dark,
}) => {
  const Icon = item.icon;
  return (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-3xl border p-7 sm:p-8 transition-all duration-300",
        dark
          ? "bg-[#0B1220] border-white/10 text-white hover:border-[#159FE5]/40"
          : "bg-white border-[#E8EDF3] hover:border-[#BFE3F7] hover:shadow-[0_24px_48px_-24px_rgba(8,103,165,0.25)]"
      )}
    >
      {/* Decorative corner for wide cards */}
      {wide && (
        <>
          <div
            className={cn(
              "absolute -right-10 -top-10 h-64 w-64 rounded-full blur-3xl pointer-events-none transition-opacity duration-500",
              dark ? "bg-[#159FE5]/25" : "bg-[#159FE5]/10 opacity-0 group-hover:opacity-100"
            )}
            aria-hidden
          />
          <Icon
            aria-hidden
            strokeWidth={1}
            className={cn(
              "absolute -bottom-8 -right-6 h-48 w-48 pointer-events-none transition-transform duration-500 group-hover:-translate-y-1",
              dark ? "text-white/[0.06]" : "text-[#0B1220]/[0.04]"
            )}
          />
        </>
      )}

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xl",
              dark
                ? "bg-white/10 text-[#7DD3FC] ring-1 ring-white/15"
                : "bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE] text-[#0867A5] ring-1 ring-[#BAE6FD]/70"
            )}
          >
            <Icon size={20} strokeWidth={2} />
          </div>
          {item.metric ? (
            <span
              className={cn(
                "rounded-full px-2.5 py-1 text-[11px] font-semibold",
                dark ? "bg-[#159FE5]/15 text-[#7DD3FC]" : "bg-[#F0FDF4] text-[#15803D] ring-1 ring-[#BBF7D0]"
              )}
            >
              {item.metric}
            </span>
          ) : (
            <span className={cn("font-mono text-xs", dark ? "text-white/30" : "text-[#CBD5E1]")}>
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>

        <h3 className={cn("mt-8 text-xl font-semibold tracking-[-0.02em]", dark ? "text-white" : "text-[#0B1220]")}>
          {item.title}
        </h3>
        <p className={cn("mt-3 text-[15px] leading-relaxed", wide && "max-w-lg", dark ? "text-[#94A3B8]" : "text-[#64748B]")}>
          {item.description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-2 pt-8">
          {item.features.map((f) => (
            <li
              key={f}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12.5px] font-medium",
                dark ? "bg-white/5 text-[#CBD5E1] ring-1 ring-white/10" : "bg-[#F8FAFC] text-[#334155] ring-1 ring-[#E8EDF3]"
              )}
            >
              <Check size={12} strokeWidth={3} className={dark ? "text-[#7DD3FC]" : "text-[#159FE5]"} />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Capabilities: React.FC<{ data: ServicePageConfig["capabilities"] }> = ({ data }) => (
  <section id="capabilities" className="relative bg-[#F7F9FC] py-24 sm:py-32 scroll-mt-20">
    <Container size="large">
      <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {data.items.map((item, i) => {
          const span = BENTO_SPANS[i] ?? "";
          return (
            <ScrollReveal key={item.title} direction="up" delay={(i % 3) * 80} className={cn(span, "h-full")}>
              <CapabilityCard item={item} index={i} wide={span !== ""} dark={i === 3} />
            </ScrollReveal>
          );
        })}
      </div>
    </Container>
  </section>
);

/* ─────────────────────────────────────────
   PROCESS TIMELINE
───────────────────────────────────────── */

export const Process: React.FC<{ data: ServicePageConfig["process"]; id?: string }> = ({ data, id = "process" }) => (
  <section id={id} className="relative bg-white py-24 sm:py-32 scroll-mt-20">
    <Container size="large">
      <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} />

      <div className="relative">
        {/* Connector line on desktop */}
        <div
          className="absolute left-0 right-0 top-[22px] hidden h-px bg-gradient-to-r from-[#159FE5]/50 via-[#E2E8F0] to-[#E2E8F0] lg:block"
          aria-hidden
        />
        <ol className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {data.steps.map((step, i) => (
            <li key={step.title} className="relative">
              <ScrollReveal direction="up" delay={i * 100}>
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "relative z-10 flex h-11 w-11 items-center justify-center rounded-full border font-mono text-sm font-semibold",
                      i === 0
                        ? "border-[#159FE5] bg-[#159FE5] text-white shadow-[0_0_0_6px_rgba(21,159,229,0.12)]"
                        : "border-[#E2E8F0] bg-white text-[#0B1220]"
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step.duration && (
                    <span className="rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[11px] font-semibold text-[#475569] lg:bg-white lg:ring-1 lg:ring-[#E2E8F0]">
                      {step.duration}
                    </span>
                  )}
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-[#0B1220]">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#64748B]">{step.description}</p>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </Container>
  </section>
);

/* ─────────────────────────────────────────
   STACK (DARK)
───────────────────────────────────────── */

const Stack: React.FC<{ data: NonNullable<ServicePageConfig["stack"]> }> = ({ data }) => (
  <section id="stack" className="relative overflow-hidden bg-[#070B14] py-24 sm:py-32 scroll-mt-20">
    <div className="absolute inset-0 bg-grid-dark mask-radial-fade pointer-events-none" aria-hidden />
    <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#159FE5]/20 blur-[140px] pointer-events-none" aria-hidden />

    <Container size="large" className="relative">
      <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} dark />

      <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {data.groups.map((g, i) => (
          <ScrollReveal key={g.category} direction="fade" delay={i * 80} className="bg-[#0A0F1C] p-7 sm:p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">{g.category}</h3>
              <span className="font-mono text-[11px] text-white/30">{String(g.tools.length).padStart(2, "0")}</span>
            </div>
            <ul className="mt-6 space-y-1">
              {g.tools.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-3 rounded-lg px-2 py-2 -mx-2 text-[14px] text-[#CBD5E1] transition-colors hover:bg-white/5 hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#159FE5] shadow-[0_0_8px_rgba(21,159,229,0.8)]" />
                  {t}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        ))}
      </div>
    </Container>
  </section>
);

/* ─────────────────────────────────────────
   FAQ
───────────────────────────────────────── */

export const Faq: React.FC<{ faqs: ServicePageConfig["faqs"]; title?: string }> = ({ faqs, title = "Questions, answered." }) => (
  <section id="faq" className="bg-white py-24 sm:py-32 scroll-mt-20">
    <Container size="large">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <ScrollReveal direction="up" className="lg:sticky lg:top-28 space-y-5">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-[2rem] sm:text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-[#0B1220]">
              {title}
            </h2>
            <p className="text-base leading-relaxed text-[#475569]">
              Can&apos;t find what you need? Email{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-[#0867A5] hover:underline break-all">
                {siteConfig.contact.email}
              </a>
            </p>
          </ScrollReveal>
        </div>
        <div className="lg:col-span-8">
          <div className="divide-y divide-[#EEF2F6] border-y border-[#EEF2F6]">
            {faqs.map((f, i) => (
              <ScrollReveal key={f.question} direction="fade" delay={i * 50}>
                <details className="faq-item group py-6" open={i === 0}>
                  <summary className="flex cursor-pointer items-start justify-between gap-6 text-left">
                    <span className="text-[17px] font-semibold tracking-[-0.01em] text-[#0B1220] group-hover:text-[#0867A5] transition-colors">
                      {f.question}
                    </span>
                    <span className="faq-icon mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] text-[#475569] transition-transform duration-300">
                      <Plus size={14} />
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl pr-12 text-[15px] leading-relaxed text-[#64748B]">{f.answer}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </section>
);

/* ─────────────────────────────────────────
   RELATED SOLUTIONS
───────────────────────────────────────── */

const SOLUTION_ICONS: Record<string, React.ElementType> = {
  "/development": Code,
  "/ai-automation": Bot,
  "/growth": TrendingUp,
  "/video-design": Clapperboard,
  "/google-ads": Megaphone,
  "/custom-software": Boxes,
};

const Related: React.FC<{ currentHref: string }> = ({ currentHref }) => {
  const others = solutionPages.filter((s) => s.href !== currentHref);
  return (
    <section className="bg-[#F7F9FC] py-20 sm:py-24 border-t border-[#EEF2F6]">
      <Container size="large">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-4">
            <Eyebrow>Explore more</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.04em] text-[#0B1220]">One partner. Every growth lever.</h2>
          </div>
          <Link href="/solutions" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#0867A5]">
            All solutions
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {others.map((s, i) => {
            const Icon = SOLUTION_ICONS[s.href] ?? ArrowUpRight;
            return (
              <ScrollReveal key={s.href} direction="up" delay={i * 60} className="h-full">
                <Link
                  href={s.href}
                  className="group flex h-full flex-col rounded-2xl border border-[#E8EDF3] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#BFE3F7] hover:shadow-[0_16px_32px_-16px_rgba(8,103,165,0.25)]"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={18} className="text-[#0867A5]" />
                    <ArrowUpRight size={16} className="text-[#CBD5E1] transition-colors group-hover:text-[#159FE5]" />
                  </div>
                  <div className="mt-6 text-[15px] font-semibold text-[#0B1220]">{s.label}</div>
                  <div className="mt-1 text-[13px] leading-snug text-[#64748B]">{s.desc}</div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

/* ─────────────────────────────────────────
   FINAL CTA
───────────────────────────────────────── */

export const FinalPanel: React.FC<{ cta: ServicePageConfig["cta"]; id?: string }> = ({ cta, id }) => (
  <section id={id} className="bg-white py-20 sm:py-28 scroll-mt-20">
    <Container size="large">
      <ScrollReveal direction="up">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#070B14] px-6 py-16 sm:px-12 sm:py-20 lg:px-20">
          <div className="absolute inset-0 bg-grid-dark mask-radial-fade pointer-events-none" aria-hidden />
          <div className="absolute -bottom-40 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#159FE5]/35 blur-[120px] pointer-events-none" aria-hidden />
          <div className="absolute -top-32 -right-20 h-72 w-72 rounded-full bg-[#7DD3FC]/15 blur-[100px] pointer-events-none" aria-hidden />

          <div className="relative mx-auto max-w-3xl text-center">
            <Eyebrow dark>Let&apos;s build</Eyebrow>
            <h2 className="mt-6 text-[2.25rem] sm:text-6xl font-bold leading-[1.02] tracking-[-0.045em] text-white text-balance">
              {cta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#94A3B8]">{cta.description}</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <CtaLink cta={{ label: cta.label, href: "/contact" }} className={btnBrand} />
              <a href={siteConfig.socials.whatsapp} target="_blank" rel="noopener noreferrer" className={cn(btnBase, btnGhostDark)}>
                Chat on WhatsApp
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] font-medium text-[#94A3B8]">
              {["Free scope & strategy call", "Response within 24 business hours", "Fixed-scope proposal"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check size={14} className="text-[#7DD3FC]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </Container>
  </section>
);

/* ─────────────────────────────────────────
   PAGE SHELL
───────────────────────────────────────── */

export const ServicePage: React.FC<{ config: ServicePageConfig }> = ({ config }) => (
  <PageContainer>
    <ServiceHero config={config} />
    <MetricsBar metrics={config.metrics} />
    <Capabilities data={config.capabilities} />
    {config.showcase}
    <Process data={config.process} />
    {config.stack && <Stack data={config.stack} />}
    <Faq faqs={config.faqs} />
    <FinalPanel cta={config.cta} />
    <Related currentHref={config.href} />
  </PageContainer>
);

/** Dark wrapper for page-specific interactive demos (dashboards, etc.). */
export const ShowcaseSection: React.FC<{
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}> = ({ id, eyebrow, title, description, children }) => (
  <section id={id} className="relative overflow-hidden bg-[#070B14] py-24 sm:py-32 scroll-mt-20">
    <div className="absolute inset-0 bg-grid-dark mask-radial-fade pointer-events-none" aria-hidden />
    <div className="absolute left-1/2 top-1/3 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#159FE5]/15 blur-[140px] pointer-events-none" aria-hidden />
    <Container size="large" className="relative">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} dark />
      <ScrollReveal direction="up" delay={150}>{children}</ScrollReveal>
    </Container>
  </section>
);
