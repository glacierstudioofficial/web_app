import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { PageIntro } from "@/components/service/PageIntro";
import { MetricsBar, SectionHeader, Process, Faq, FinalPanel } from "@/components/service/ServicePage";
import { SolutionsVisual } from "@/components/service/visuals/SolutionsVisual";
import { servicesData } from "@/data/services";
import { studioProcess } from "@/data/studioProcess";
import { constructMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight, Check, Code, Cpu, Globe, LayoutGrid, Palette, Rocket,
  Search, Share2, TrendingUp, Video, Workflow, LineChart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata = constructMetadata({
  title: "Glacier Studio Solutions | Complete Digital & AI Services",
  description:
    "Explore our complete suite of Next.js web app development, custom software, AI automation pipelines, SEO, Google Ads, and video production.",
  canonical: "/solutions",
});

const ICONS: Record<string, LucideIcon> = {
  Search, Globe, Code, TrendingUp, Cpu, Share2, Video, Palette,
};

const combos = [
  {
    icon: Rocket,
    title: "Launch",
    text: "A fast, search-ready website with a brand that looks the part from day one.",
    services: [
      { label: "Web Development", href: "/development" },
      { label: "SEO & Growth", href: "/growth" },
      { label: "Video & Design", href: "/video-design" },
    ],
  },
  {
    icon: LineChart,
    title: "Scale",
    text: "Paid and organic acquisition backed by creative that's built to be tested.",
    services: [
      { label: "Google & Meta Ads", href: "/google-ads" },
      { label: "SEO & Growth", href: "/growth" },
      { label: "Video & Design", href: "/video-design" },
    ],
  },
  {
    icon: Workflow,
    title: "Automate",
    text: "Replace manual work and scattered tools with AI agents and one custom system.",
    services: [
      { label: "AI & Automation", href: "/ai-automation" },
      { label: "Custom Software", href: "/custom-software" },
    ],
  },
];

const faqs = [
  {
    question: "Can we hire you for just one service?",
    answer: "Of course. Many clients start with a single service, such as a website or an ad account audit, and add more once they see results.",
  },
  {
    question: "What if we need something that isn't listed?",
    answer: "We regularly build bespoke solutions: complex internal databases, custom AI model workflows and multi-platform API integrations. Tell us the problem and we'll scope it.",
  },
  {
    question: "How is pricing structured?",
    answer: "Projects are fixed-scope, usually 50% upfront and 50% on final testing and deployment. Marketing and SEO retainers are billed monthly on a flexible 30-day basis.",
  },
  {
    question: "Where do we start?",
    answer: "With a free scoping call. We learn your goals, then send a clear plan with scope, timeline and a fixed quote. No obligation.",
  },
];

export default function SolutionsPage() {
  return (
    <PageContainer>
      <PageIntro
        crumb="Solutions"
        eyebrow="Our solutions"
        icon={LayoutGrid}
        title="Complete digital solutions for modern businesses."
        highlight="modern businesses."
        description="Everything your business needs to build, automate and grow, delivered by one senior team working from one roadmap."
        primaryCta={{ label: "Start a custom project", href: "/contact" }}
        secondaryCta={{ label: "Explore all services", href: "#service-grid" }}
        trust={["8 core services", "One point of contact", "Free scoping call"]}
        visual={<SolutionsVisual />}
      />

      <MetricsBar
        metrics={[
          { value: `${servicesData.length}`, label: "Core services", caption: "Under one roof" },
          { value: "50+", label: "Systems deployed", caption: "Production ready" },
          { value: "99.4%", label: "Client satisfaction", caption: "Retention rate" },
          { value: "3.4x", label: "Average ROI increase", caption: "Across engagements" },
        ]}
      />

      {/* Service directory */}
      <section id="service-grid" className="bg-[#F7F9FC] py-24 sm:py-32 scroll-mt-20">
        <Container size="large">
          <SectionHeader
            eyebrow="All services"
            title="Everything you need, under one roof."
            description="Each service integrates with your existing operations, and with each other, so your growth compounds instead of stalling between agencies."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
            {servicesData.map((s, i) => {
              const Icon = ICONS[s.iconName] ?? Globe;
              return (
                <ScrollReveal key={s.id} direction="up" delay={(i % 2) * 80} className="h-full">
                  <Link
                    href={s.href}
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#E8EDF3] bg-white p-7 transition-all duration-300 hover:border-[#BFE3F7] hover:shadow-[0_24px_48px_-24px_rgba(8,103,165,0.3)] sm:p-8"
                  >
                    <Icon aria-hidden strokeWidth={1} className="absolute -bottom-8 -right-6 h-40 w-40 text-[#0B1220]/[0.035] transition-transform duration-500 group-hover:-translate-y-1" />

                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE] text-[#0867A5] ring-1 ring-[#BAE6FD]/70 transition-colors group-hover:from-[#159FE5] group-hover:to-[#0867A5] group-hover:text-white">
                          <Icon size={20} />
                        </span>
                        {s.badge && (
                          <span className="rounded-full bg-[#F8FAFC] px-2.5 py-1 text-[11px] font-semibold text-[#475569] ring-1 ring-[#E8EDF3]">
                            {s.badge}
                          </span>
                        )}
                      </div>
                      <ArrowUpRight size={20} className="text-[#CBD5E1] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#159FE5]" />
                    </div>

                    <h3 className="relative mt-7 text-xl sm:text-2xl font-semibold tracking-[-0.025em] text-[#0B1220]">{s.title}</h3>
                    <p className="relative mt-2 max-w-lg text-[15px] leading-relaxed text-[#64748B]">{s.shortDescription}</p>

                    <ul className="relative mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-[13.5px] leading-snug text-[#334155]">
                          <Check size={14} strokeWidth={3} className="mt-0.5 shrink-0 text-[#159FE5]" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="relative mt-auto pt-7">
                      <div className="grid grid-cols-2 divide-x divide-[#EEF2F6] border-t border-[#EEF2F6] pt-5">
                        {(s.metrics ?? []).map((m, mi) => (
                          <div key={m.label} className={cn(mi === 1 && "pl-5")}>
                            <div className="text-xl font-bold tracking-[-0.03em] text-[#0B1220]">{m.value}</div>
                            <div className="mt-0.5 text-[12px] font-medium text-[#64748B]">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Ways to combine */}
      <section className="relative overflow-hidden bg-[#070B14] py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid-dark mask-radial-fade pointer-events-none" aria-hidden />
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#159FE5]/20 blur-[140px] pointer-events-none" aria-hidden />
        <Container size="large" className="relative">
          <SectionHeader
            dark
            eyebrow="Better together"
            title="Services that multiply each other."
            description="Pick one service or combine several. When the same team owns the whole journey, nothing gets lost between hand-offs."
          />
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
            {combos.map((c, i) => (
              <ScrollReveal key={c.title} direction="fade" delay={i * 80} className="flex flex-col bg-[#0A0F1C] p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#7DD3FC] ring-1 ring-white/15">
                    <c.icon size={20} />
                  </span>
                  <span className="font-mono text-xs text-white/30">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.025em] text-white">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#94A3B8]">{c.text}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                  {c.services.map((sv) => (
                    <Link
                      key={sv.href + sv.label}
                      href={sv.href}
                      className="rounded-full bg-white/5 px-3 py-1.5 text-[12.5px] font-medium text-[#CBD5E1] ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {sv.label}
                    </Link>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <Process data={studioProcess} />

      <Faq faqs={faqs} />

      <FinalPanel
        cta={{
          title: "Don't see what you need? We build it.",
          description:
            "Complex internal systems, custom AI workflows or multi-platform integrations: tell us the problem and our engineers will scope the solution.",
          label: "Talk to our experts",
        }}
      />
    </PageContainer>
  );
}
