import React from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Sparkles } from "lucide-react";
import { Container } from "@/components/common/Container";
import { btnBase, btnPrimary, btnSecondary } from "@/components/service/ui";
import { DevVisual } from "@/components/service/visuals/DevVisual";
import { AIVisual } from "@/components/service/visuals/AIVisual";
import { GrowthVisual } from "@/components/service/visuals/GrowthVisual";
import { cn } from "@/lib/utils";
import { HeroShowcase, Spotlight } from "./HeroMotion";

/*
 * The intro copy animates with pure CSS so it is visible (and animating) on first paint,
 * before hydration. Only the interactive showcase needs client JS.
 */

type DelayStyle = React.CSSProperties & { "--d": string };
const delay = (s: number): DelayStyle => ({ "--d": `${s}s` });

const FadeUp: React.FC<{ delay?: number; className?: string; children: React.ReactNode }> = ({
  delay: d = 0, className, children,
}) => (
  <div className={cn("hero-fade", className)} style={delay(d)}>
    {children}
  </div>
);

const HeroHeadline: React.FC<{ lines: { text: string; accent?: boolean }[] }> = ({ lines }) => {
  let wordIndex = 0;
  return (
    <h1 className="text-[3rem] leading-[0.98] sm:text-7xl lg:text-[5.75rem] font-bold tracking-[-0.05em] text-[#0B1220]">
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.text.split(" ").map((word) => {
            const i = wordIndex++;
            return (
              <span
                key={`${li}-${word}`}
                className="hero-word inline-block pr-[0.22em] last:pr-0"
                style={delay(0.15 + i * 0.12)}
              >
                <span className={cn(line.accent && "hero-gradient-text")}>{word}</span>
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
};

const trust = ["Next.js & TypeScript", "24/7 AI automation", "Measurable growth ROI"];

export const Hero: React.FC = () => (
  <section className="relative overflow-hidden bg-white">
    {/* ── Backdrop: aurora + grid + beams ── */}
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="hero-aurora absolute left-1/2 top-[-18rem] h-[46rem] w-[80rem] -translate-x-1/2" />
      <div className="absolute inset-0 bg-grid-light [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_20%,transparent_100%)]" />
      <div className="hero-beam absolute left-[18%] top-0 h-[60%] w-px" />
      <div className="hero-beam absolute right-[22%] top-0 h-[50%] w-px [animation-delay:2.2s]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
    </div>
    <Spotlight />

    <Container size="large" className="relative z-10 pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* ── Copy ── */}
      <div className="mx-auto max-w-4xl text-center">
        <FadeUp>
          <Link
            href="/ai-automation"
            className="group inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white/80 py-1 pl-1 pr-3 text-[13px] font-medium text-[#334155] shadow-[0_1px_2px_rgba(15,23,42,0.04)] backdrop-blur transition-colors hover:border-[#BFE3F7]"
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-b from-[#159FE5] to-[#0867A5] px-2.5 py-0.5 text-[11.5px] font-semibold text-white">
              <Sparkles size={11} /> New
            </span>
            AI agents that qualify leads 24/7
            <ChevronRight size={14} className="text-[#94A3B8] transition-transform group-hover:translate-x-0.5" />
          </Link>
        </FadeUp>

        <div className="mt-8">
          <HeroHeadline lines={[{ text: "Build. Automate." }, { text: "Grow smarter.", accent: true }]} />
        </div>

        <FadeUp delay={0.7}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#475569] sm:text-xl text-pretty">
            AI-powered software, automation, marketing and digital solutions that help modern businesses move faster and scale further.
          </p>
        </FadeUp>

        <FadeUp delay={0.85}>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className={cn(btnBase, btnPrimary, "h-[52px] px-7")}>
              Start a project
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link href="/solutions" className={cn(btnBase, btnSecondary, "h-[52px] px-7")}>
              Explore solutions
            </Link>
          </div>
        </FadeUp>

        <FadeUp delay={1}>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-[13px] font-medium text-[#475569]">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
                  <Check size={10} strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>

      {/* ── Product showcase ── */}
      <FadeUp delay={1.1} className="mt-16 sm:mt-20">
        <HeroShowcase
          tabs={[
            { id: "build", label: "Build", caption: "Production-grade apps", panel: <DevVisual /> },
            { id: "automate", label: "Automate", caption: "AI agents on autopilot", panel: <AIVisual /> },
            { id: "grow", label: "Grow", caption: "Compounding traffic", panel: <GrowthVisual /> },
          ]}
        />
      </FadeUp>
    </Container>
  </section>
);
