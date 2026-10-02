"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  description: string;
  ctaLabel: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  dark?: boolean;
  stat1?: { value: string; label: string };
  stat2?: { value: string; label: string };
  stat3?: { value: string; label: string };
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  titleHighlight,
  description,
  ctaLabel,
  ctaHref = "/about#contact",
  secondaryCtaLabel,
  secondaryCtaHref,
  dark = false,
  stat1,
  stat2,
  stat3,
}) => {
  const parts = titleHighlight ? title.split(titleHighlight) : [title];

  return (
    <section
      className={cn(
        "relative pt-24 pb-32 sm:pt-32 sm:pb-40 overflow-hidden",
        dark
          ? "bg-[#050505]/95 text-white"
          : "bg-white/85"
      )}
    >
      {/* Ambient Radial Lighting */}
      <div
        className={cn(
          "absolute top-0 right-1/4 w-[650px] h-[650px] rounded-full blur-[130px] pointer-events-none opacity-60",
          dark ? "bg-[#159FE5]/15" : "bg-[#159FE5]/10"
        )}
      />
      <div
        className={cn(
          "absolute bottom-10 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none opacity-50",
          dark ? "bg-[#063B63]/40" : "bg-[#EAF7FF]"
        )}
      />

      {/* Hero Animated Floating SVG Wave Line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg
          className="w-full h-full opacity-30"
          viewBox="0 0 1440 400"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="pageHeroWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#159FE5" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0867A5" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 0 150 C 320 280, 600 50, 900 200 C 1200 350, 1350 100, 1440 180"
            stroke="url(#pageHeroWaveGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M 0 220 C 350 100, 700 320, 1050 120 C 1250 0, 1380 220, 1440 200"
            stroke="url(#pageHeroWaveGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <Container size="large" className="relative z-10 text-center space-y-8">
        {/* Eyebrow Badge */}
        <ScrollReveal direction="up" delay={0}>
          <div
            className={cn(
              "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold tracking-[0.14em] uppercase backdrop-blur-md shadow-xs",
              dark
                ? "bg-[#159FE5]/15 border-[#159FE5]/30 text-[#38BDF8]"
                : "bg-white/90 border-[#D5EDFA] text-[#0867A5]"
            )}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#159FE5] animate-pulse shrink-0" />
            <span>{eyebrow}</span>
          </div>
        </ScrollReveal>

        {/* Main Title */}
        <ScrollReveal direction="up" delay={100}>
          <h1
            className={cn(
              "text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] max-w-4xl mx-auto",
              dark ? "text-white" : "text-[#111827]"
            )}
          >
            {titleHighlight && parts.length > 1 ? (
              <>
                {parts[0]}
                <span className="gradient-text-ice">{titleHighlight}</span>
                {parts[1]}
              </>
            ) : (
              title
            )}
          </h1>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal direction="up" delay={200}>
          <p
            className={cn(
              "text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium",
              dark ? "text-[#94A3B8]" : "text-[#64748B]"
            )}
          >
            {description}
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal direction="up" delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={ctaHref}
              variant="primary"
              size="lg"
              icon={<ArrowRight size={18} />}
              className="shadow-xl shadow-[#159FE5]/25 w-full sm:w-auto"
            >
              {ctaLabel}
            </Button>
            {secondaryCtaLabel && (
              <Button
                href={secondaryCtaHref || "#"}
                variant={dark ? "dark" : "secondary"}
                size="lg"
                className={cn(
                  "w-full sm:w-auto",
                  dark && "bg-white/10 border-white/20 text-white hover:bg-white/15"
                )}
              >
                {secondaryCtaLabel}
              </Button>
            )}
          </div>
        </ScrollReveal>

        {/* Optional Stats Row */}
        {(stat1 || stat2 || stat3) && (
          <ScrollReveal direction="up" delay={400}>
            <div className="pt-6">
              <div
                className={cn(
                  "inline-flex flex-wrap items-center justify-center gap-8 sm:gap-12 px-8 py-4 rounded-2xl border backdrop-blur-md shadow-sm",
                  dark
                    ? "bg-white/5 border-white/10"
                    : "bg-white/80 border-[#D5EDFA]"
                )}
              >
                {[stat1, stat2, stat3].filter(Boolean).map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl sm:text-3xl font-black text-[#159FE5] flex items-center justify-center gap-1">
                      <span>{stat!.value}</span>
                      <Sparkles size={12} className="text-[#159FE5]/60" />
                    </div>
                    <div
                      className={cn(
                        "text-xs font-bold uppercase tracking-wider mt-0.5",
                        dark ? "text-[#94A3B8]" : "text-[#64748B]"
                      )}
                    >
                      {stat!.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
      </Container>

      {/* BOTTOM ANIMATED WAVE CURVE BOUNDARY */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-[60px] sm:h-[90px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Subtle Back Wave Layer */}
          <path
            d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,60 L1200,120 L0,120 Z"
            fill={dark ? "rgba(21,159,229,0.08)" : "rgba(234,247,255,0.7)"}
          />
          {/* Main Foreground Wave Layer connecting smoothly into the page section below */}
          <path
            d="M0,40 C300,110 600,10 900,80 C1050,115 1150,60 1200,40 L1200,120 L0,120 Z"
            fill={dark ? "#050505" : "#FAFDFE"}
          />
        </svg>
      </div>
    </section>
  );
};
