import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { WorkShowcase } from "@/components/work/WorkShowcase";
import { PageIntro } from "@/components/service/PageIntro";
import { MetricsBar, SectionHeader, Process, FinalPanel } from "@/components/service/ServicePage";
import { WorkVisual } from "@/components/service/visuals/WorkVisual";
import { caseStudiesData } from "@/data/caseStudies";
import { studioProcess } from "@/data/studioProcess";
import { siteConfig } from "@/data/site";
import { constructMetadata } from "@/lib/seo";
import {
  ArrowUpRight,
  Bot,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  LayoutDashboard,
  ShieldCheck,
  ShoppingBag,
  Wrench,
  Zap,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Our Work | AI Chatbots, LMS, E-commerce & Custom Software Projects",
  description:
    "See what Glacier Studio builds: AI chatbots, learning management systems, e-commerce stores, high-converting websites and custom business software.",
  canonical: "/work",
});

const buildTiles = [
  {
    icon: Bot,
    title: "AI Chatbots",
    text: "Website and WhatsApp bots that answer customers, qualify leads and book appointments around the clock.",
    href: "/ai-automation",
  },
  {
    icon: GraduationCap,
    title: "LMS & Course Platforms",
    text: "Your own branded learning platform with courses, live classes, quizzes, payments and certificates.",
    href: "/custom-software",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Stores",
    text: "Fast, beautiful online stores with the admin dashboard your team needs to run them day to day.",
    href: "/development",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Software",
    text: "Dashboards, CRMs and internal tools that replace scattered spreadsheets with one clear system.",
    href: "/custom-software",
  },
];

const reasons = [
  {
    icon: Wrench,
    title: "Built for you, not from a template",
    text: "Every project is designed around your workflow, your brand and your customers.",
  },
  {
    icon: ShieldCheck,
    title: "You stay in control",
    text: "Admin dashboards and clean handovers mean you can run your product without calling a developer for every change.",
  },
  {
    icon: Zap,
    title: "Fast, modern and mobile-ready",
    text: "Performance-tuned builds that feel quick on the phones your customers actually use.",
  },
  {
    icon: HeartHandshake,
    title: "Support after launch",
    text: "We stay with you after go-live to fix, improve and grow what we've built together.",
  },
];

export default function WorkPage() {
  return (
    <PageContainer>
      <PageIntro
        crumb="Work"
        eyebrow="Our work"
        icon={Briefcase}
        title="Projects that turn visitors into customers."
        highlight="turn visitors into customers."
        description="AI chatbots that never sleep, learning platforms that sell and teach, and online stores that run themselves. See what we build, then let's build yours."
        primaryCta={{ label: "Start your project", href: "/contact" }}
        secondaryCta={{ label: "Browse projects", href: "#projects" }}
        trust={["Real, shipped products", "Admin dashboards included", "Support after launch"]}
        visual={<WorkVisual projectCount={caseStudiesData.length} />}
      />

      <MetricsBar metrics={siteConfig.metrics} />

      <WorkShowcase />

      {/* What we can build */}
      <section className="bg-white py-24 sm:py-32">
        <Container size="large">
          <SectionHeader
            eyebrow="What we can build for you"
            title="Have one of these in mind?"
            description="Tell us the problem. We'll come back with a clear plan, a realistic timeline and a fair quote."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {buildTiles.map((tile, i) => (
              <ScrollReveal key={tile.title} delay={i * 70} direction="up" className="h-full">
                <Link
                  href={tile.href}
                  className="group flex h-full flex-col rounded-3xl border border-[#E8EDF3] bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#BFE3F7] hover:shadow-[0_24px_48px_-24px_rgba(8,103,165,0.3)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE] text-[#0867A5] ring-1 ring-[#BAE6FD]/70 transition-colors group-hover:from-[#159FE5] group-hover:to-[#0867A5] group-hover:text-white">
                      <tile.icon size={20} />
                    </span>
                    <ArrowUpRight size={18} className="text-[#CBD5E1] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#159FE5]" />
                  </div>
                  <h3 className="mt-8 text-lg font-semibold tracking-[-0.02em] text-[#0B1220]">{tile.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-[#64748B]">{tile.text}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why clients choose us */}
      <section className="relative overflow-hidden bg-[#070B14] py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid-dark mask-radial-fade pointer-events-none" aria-hidden />
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#159FE5]/20 blur-[140px] pointer-events-none" aria-hidden />
        <Container size="large" className="relative">
          <SectionHeader
            dark
            eyebrow="Why Glacier Studio"
            title="Built to work as hard as your business does."
            description="Clients stay with us because what we build keeps paying off long after launch day."
          />
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 70} direction="fade" className="bg-[#0A0F1C] p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#7DD3FC] ring-1 ring-white/15">
                    <r.icon size={20} />
                  </span>
                  <span className="font-mono text-xs text-white/30">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-white">{r.title}</h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#94A3B8]">{r.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <Process data={studioProcess} />

      <FinalPanel
        cta={{
          title: "Got an idea like these? Let's build yours.",
          description:
            "Share a few lines about what you need. We'll get back with honest advice on how to build it, how long it takes and what it costs.",
          label: "Start your project",
        }}
      />
    </PageContainer>
  );
}
