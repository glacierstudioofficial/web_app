import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { PageIntro } from "@/components/service/PageIntro";
import { MetricsBar, SectionHeader, Eyebrow, Process, FinalPanel, btnBase, btnSecondary } from "@/components/service/ServicePage";
import { AboutVisual } from "@/components/service/visuals/AboutVisual";
import { studioProcess } from "@/data/studioProcess";
import { siteConfig } from "@/data/site";
import { constructMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import {
  ShieldCheck, Lightbulb, Users, Award, Handshake,
  Target, Compass, Check, Mail, Snowflake,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "About Glacier Studio | Next Gen IT Solutions",
  description:
    "Learn about Glacier Studio's mission, values, engineering philosophy, and digital transformation expertise for modern businesses.",
  canonical: "/about",
});

const values = [
  { title: "Integrity", description: "Uncompromising transparency, honest project scopes, and strict client NDA standards.", icon: ShieldCheck },
  { title: "Innovation", description: "Continuously deploying cutting-edge Next.js, AI, and cloud automation technologies.", icon: Lightbulb },
  { title: "Customer Success", description: "Your business revenue growth and operational ROI are our single source of truth.", icon: Users },
  { title: "Excellence", description: "Obsessive attention to code quality, Core Web Vitals, UI polish, and security.", icon: Award },
  { title: "Partnership", description: "Direct collaboration with senior tech leadership, not junior account managers.", icon: Handshake },
];

const whyChooseUs = [
  "End-to-end digital solutions under one roof",
  "AI-powered autonomous workflow integration",
  "Data-driven marketing with transparent GA4 attribution",
  "Agile sprint cycles with weekly video demos",
  "Dedicated technical leadership & ongoing SLA support",
];

const companyStats = [
  { value: "50+", label: "Systems deployed", caption: "Production ready" },
  { value: "99.4%", label: "Client satisfaction", caption: "Retention rate" },
  { value: "< 0.8s", label: "Avg. load speed", caption: "Lighthouse-tuned builds" },
  { value: "24/7", label: "AI operating", caption: "Autonomous workflows" },
];

export default function AboutPage() {
  return (
    <PageContainer>
      <PageIntro
        crumb="About"
        eyebrow="About Glacier Studio"
        icon={Snowflake}
        title="Building smarter solutions for a better tomorrow."
        highlight="smarter solutions"
        description="Glacier Studio is a next-generation IT solutions company helping modern businesses build, automate and grow through technology, creativity and AI."
        primaryCta={{ label: "Get in touch", href: "#contact" }}
        secondaryCta={{ label: "See our work", href: "/work" }}
        trust={["Senior-led teams", "NDA on every project", "Based in Tamil Nadu, India"]}
        visual={<AboutVisual />}
      />

      <MetricsBar metrics={companyStats} />

      {/* Mission & Vision */}
      <section className="bg-white py-24 sm:py-32">
        <Container size="large">
          <SectionHeader
            eyebrow="Our purpose"
            title="Mission. Vision. Values."
            description="Why we exist, where we're headed, and the principles we hold ourselves to on every project."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <ScrollReveal direction="up" className="h-full">
              <div className="group relative h-full overflow-hidden rounded-3xl border border-[#E8EDF3] bg-[#F7F9FC] p-8 sm:p-12">
                <Target aria-hidden strokeWidth={1} className="absolute -bottom-10 -right-8 h-56 w-56 text-[#0B1220]/[0.04]" />
                <div className="relative">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE] text-[#0867A5] ring-1 ring-[#BAE6FD]/70">
                    <Target size={20} />
                  </span>
                  <div className="mt-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#0867A5]">Our mission</div>
                  <p className="mt-4 text-xl sm:text-2xl font-medium leading-snug tracking-[-0.02em] text-[#0B1220] text-pretty">
                    To empower ambitious businesses with high-performance software, autonomous AI workflows and data-backed growth strategies that remove friction and drive real revenue.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100} className="h-full">
              <div className="relative h-full overflow-hidden rounded-3xl bg-[#070B14] p-8 sm:p-12">
                <div className="absolute inset-0 bg-grid-dark mask-radial-fade pointer-events-none" aria-hidden />
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#159FE5]/25 blur-3xl" aria-hidden />
                <div className="relative">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#7DD3FC] ring-1 ring-white/15">
                    <Compass size={20} />
                  </span>
                  <div className="mt-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#7DD3FC]">Our vision</div>
                  <p className="mt-4 text-xl sm:text-2xl font-medium leading-snug tracking-[-0.02em] text-white text-pretty">
                    To become the digital engineering studio known for blending senior software craftsmanship with next-generation AI and SaaS product innovation.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Values — editorial list */}
          <div className="mt-20 grid gap-10 lg:grid-cols-12">
            <ScrollReveal direction="up" className="lg:col-span-4 space-y-4">
              <Eyebrow>Core values</Eyebrow>
              <h3 className="text-3xl font-bold tracking-[-0.035em] text-[#0B1220]">
                The principles behind every decision.
              </h3>
            </ScrollReveal>
            <ol className="lg:col-span-8 divide-y divide-[#EEF2F6] border-y border-[#EEF2F6]">
              {values.map((v, i) => (
                <li key={v.title}>
                  <ScrollReveal direction="fade" delay={i * 60} className="grid grid-cols-[auto_1fr] items-start gap-5 py-6 sm:grid-cols-[3rem_14rem_1fr] sm:items-center sm:gap-6">
                    <span className="font-mono text-sm text-[#94A3B8]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex items-center gap-3 text-lg font-semibold tracking-[-0.02em] text-[#0B1220]">
                      <v.icon size={18} className="text-[#159FE5]" />
                      {v.title}
                    </span>
                    <p className="col-span-2 text-[15px] leading-relaxed text-[#64748B] sm:col-span-1">{v.description}</p>
                  </ScrollReveal>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Why choose us + partners */}
      <section id="partners" className="bg-[#F7F9FC] py-24 sm:py-32 scroll-mt-20">
        <Container size="large">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal direction="up" className="space-y-5">
                <Eyebrow>The Glacier difference</Eyebrow>
                <h2 className="text-[2rem] sm:text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-[#0B1220] text-balance">
                  Why forward-thinking companies choose us.
                </h2>
                <p className="text-lg leading-relaxed text-[#475569]">
                  Unlike traditional agencies that rely on templates, we operate as a technology-first studio.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={120}>
                <ul className="space-y-3.5 pt-2">
                  {whyChooseUs.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-[15px] font-medium text-[#0B1220]">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B1220] text-white">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={150} className="lg:col-span-6">
              <div className="rounded-3xl border border-[#E8EDF3] bg-white p-8 sm:p-10 shadow-[0_24px_48px_-32px_rgba(8,103,165,0.3)]">
                <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">Platform partners</div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    { src: "/googleadslogo.webp", label: "Google Ads", sub: "Certified Partner" },
                    { src: "/metalogo.webp", label: "Meta", sub: "Business Partner" },
                  ].map((p) => (
                    <div key={p.label} className="flex items-center gap-4 rounded-2xl border border-[#EEF2F6] p-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8FAFC] ring-1 ring-[#EEF2F6]">
                        <Image src={p.src} alt={`${p.label} logo`} width={26} height={26} className="object-contain" />
                      </span>
                      <div>
                        <div className="text-[15px] font-semibold text-[#0B1220]">{p.label}</div>
                        <div className="text-[13px] text-[#64748B]">{p.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t border-[#EEF2F6] pt-8">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">Built with</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "OpenAI", "Vercel", "AWS", "GA4"].map((t) => (
                      <span key={t} className="rounded-full bg-[#F8FAFC] px-3 py-1.5 text-[12.5px] font-medium text-[#334155] ring-1 ring-[#E8EDF3]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <Process data={studioProcess} />

      {/* Careers */}
      <section id="careers" className="bg-white pb-4 scroll-mt-20">
        <Container size="large">
          <ScrollReveal direction="up">
            <div className="flex flex-col gap-6 rounded-3xl border border-[#E8EDF3] bg-[#F7F9FC] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div className="space-y-3">
                <Eyebrow>Careers</Eyebrow>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.035em] text-[#0B1220]">Want to build with us?</h2>
                <p className="max-w-xl text-[15px] leading-relaxed text-[#64748B]">
                  We&apos;re always happy to hear from talented engineers, designers and marketers. Send us your work and a few lines about you.
                </p>
              </div>
              <a
                href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("Careers at Glacier Studio")}`}
                className={cn(btnBase, btnSecondary, "shrink-0")}
              >
                <Mail size={16} /> Send your portfolio
              </a>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <FinalPanel
        id="contact"
        cta={{
          title: "Let's build what's next, together.",
          description:
            "Tell us about your business and goals. You'll speak directly with our technical leadership, not a sales rep.",
          label: "Start a project",
        }}
      />
    </PageContainer>
  );
}
