"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { ScrollReveal, AnimatedText } from "@/components/common/ScrollReveal";
import { SectionBadge } from "@/components/common/Badge";
import { Flag, BarChart3, Box, Zap, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessStep {
  number: string;
  watermark: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  position: "top" | "bottom";
}

const steps: ProcessStep[] = [
  {
    number: "01",
    watermark: "1",
    title: "General Concept",
    subtitle: "Discovery & Audit",
    description: "In-depth audit of your tech stack, workflows, user journeys, and growth goals.",
    icon: Flag,
    position: "bottom",
  },
  {
    number: "02",
    watermark: "2",
    title: "System Architecture",
    subtitle: "Strategy & Wireframes",
    description: "Architecting bespoke Next.js roadmaps, high-converting UX, and cloud API blueprints.",
    icon: BarChart3,
    position: "top",
  },
  {
    number: "03",
    watermark: "3",
    title: "Agile Development",
    subtitle: "Code & Engineering",
    description: "Developing scalable, type-safe Next.js web apps and custom microservices.",
    icon: Box,
    position: "bottom",
  },
  {
    number: "04",
    watermark: "4",
    title: "AI & Automation",
    subtitle: "Workflow Triggers",
    description: "Deploying autonomous AI bots, CRM data syncs, and 24/7 intelligent workflows.",
    icon: Zap,
    position: "top",
  },
  {
    number: "05",
    watermark: "5",
    title: "Launch & Scale",
    subtitle: "Growth & Optimization",
    description: "Continuous Core Web Vitals optimization, PPC management, and infrastructure scaling.",
    icon: Rocket,
    position: "bottom",
  },
];

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 bg-[#050505] text-white border-b border-[#159FE5]/20 relative overflow-hidden">
      {/* Glow Orbs & Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#159FE5]/10 rounded-full blur-[100px] pointer-events-none pulse-glow" />

      <Container size="large" className="relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-4">
            <SectionBadge dark>OUR METHODOLOGY</SectionBadge>
          </div>
        </ScrollReveal>

        <AnimatedText
          text="Engineered process section."
          tag="h2"
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] text-center mb-4"
          delay={100}
          baseDelay={60}
        />

        <ScrollReveal direction="fade" delay={300}>
          <p className="text-center text-sm sm:text-base text-[#94A3B8] max-w-xl mx-auto mb-10 leading-relaxed">
            A structured 5-step framework designed to deliver high-converting digital products with senior engineering precision.
          </p>
        </ScrollReveal>

        {/* DESKTOP ANIMATED WAVE TIMELINE */}
        <div className="hidden lg:block relative w-full my-4">
          {/* Animated Curved Path SVG */}
          <div className="absolute inset-0 pointer-events-none z-0 flex items-center">
            <svg
              className="w-full h-[220px] overflow-visible"
              viewBox="0 0 1000 220"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="darkWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                  <stop offset="30%" stopColor="#38BDF8" stopOpacity="1" />
                  <stop offset="70%" stopColor="#159FE5" stopOpacity="1" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.5" />
                </linearGradient>

                <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Guide Shadow Line */}
              <path
                d="M 50 140 C 180 140, 220 40, 300 40 C 380 40, 420 160, 500 160 C 580 160, 620 40, 700 40 C 780 40, 820 140, 950 140"
                stroke="rgba(21, 159, 229, 0.15)"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Animated Glowing Wave Path */}
              <motion.path
                d="M 50 140 C 180 140, 220 40, 300 40 C 380 40, 420 160, 500 160 C 580 160, 620 40, 700 40 C 780 40, 820 140, 950 140"
                stroke="url(#darkWaveGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#neonGlow)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {/* Interactive Steps Grid */}
          <div className="relative z-10 grid grid-cols-5 gap-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isHovered = activeStep === idx;

              return (
                <div
                  key={idx}
                  className="relative flex flex-col items-center group cursor-pointer"
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Faint Background Watermark Number */}
                  <div
                    className={cn(
                      "absolute top-2 left-1/2 -translate-x-1/2 text-7xl font-black transition-colors duration-500 pointer-events-none select-none z-0",
                      isHovered ? "text-[#38BDF8]/20 scale-105" : "text-white/5"
                    )}
                  >
                    {step.watermark}
                  </div>

                  {step.position === "top" ? (
                    <>
                      {/* Top Card */}
                      <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.12 }}
                        className="w-full bg-[#0B1724]/90 backdrop-blur-md p-4 rounded-2xl border border-[#159FE5]/20 shadow-md group-hover:shadow-[0_8px_25px_-8px_rgba(56,189,248,0.35)] group-hover:border-[#38BDF8]/60 transition-all z-10 text-center mb-3"
                      >
                        <div className="text-[10px] font-bold uppercase tracking-widest text-[#38BDF8] mb-0.5">
                          STEP {step.number}
                        </div>
                        <h3 className="text-base font-extrabold text-white group-hover:text-[#38BDF8] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-xs text-[#94A3B8] mt-1 leading-snug line-clamp-2">
                          {step.description}
                        </p>
                      </motion.div>

                      {/* Icon Node resting on peak */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + idx * 0.12 }}
                        className="relative z-20 my-1"
                      >
                        <div className="relative group-hover:scale-110 transition-transform duration-300">
                          <div
                            className={cn(
                              "absolute -inset-2 rounded-2xl blur-md transition-opacity duration-300",
                              isHovered ? "bg-[#38BDF8]/60 opacity-100" : "opacity-0"
                            )}
                          />
                          <div
                            className={cn(
                              "w-13 h-13 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 shadow-md",
                              isHovered
                                ? "bg-[#38BDF8] text-[#050505] border-[#38BDF8] rotate-6"
                                : "bg-[#071927] text-[#38BDF8] border-[#159FE5]/40"
                            )}
                          >
                            <Icon size={22} strokeWidth={2.2} />
                          </div>
                        </div>
                      </motion.div>

                      {/* Empty Placeholder under node for bottom alignment balance */}
                      <div className="h-28 w-full" />
                    </>
                  ) : (
                    <>
                      {/* Empty Placeholder over node for top alignment balance */}
                      <div className="h-28 w-full" />

                      {/* Icon Node resting on valley */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + idx * 0.12 }}
                        className="relative z-20 my-1"
                      >
                        <div className="relative group-hover:scale-110 transition-transform duration-300">
                          <div
                            className={cn(
                              "absolute -inset-2 rounded-2xl blur-md transition-opacity duration-300",
                              isHovered ? "bg-[#38BDF8]/60 opacity-100" : "opacity-0"
                            )}
                          />
                          <div
                            className={cn(
                              "w-13 h-13 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 shadow-md",
                              isHovered
                                ? "bg-[#38BDF8] text-[#050505] border-[#38BDF8] rotate-6"
                                : "bg-[#071927] text-[#38BDF8] border-[#159FE5]/40"
                            )}
                          >
                            <Icon size={22} strokeWidth={2.2} />
                          </div>
                        </div>
                      </motion.div>

                      {/* Bottom Card */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.12 }}
                        className="w-full bg-[#0B1724]/90 backdrop-blur-md p-4 rounded-2xl border border-[#159FE5]/20 shadow-md group-hover:shadow-[0_8px_25px_-8px_rgba(56,189,248,0.35)] group-hover:border-[#38BDF8]/60 transition-all z-10 text-center mt-3"
                      >
                        <div className="text-[10px] font-bold uppercase tracking-widest text-[#38BDF8] mb-0.5">
                          STEP {step.number}
                        </div>
                        <h3 className="text-base font-extrabold text-white group-hover:text-[#38BDF8] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-xs text-[#94A3B8] mt-1 leading-snug line-clamp-2">
                          {step.description}
                        </p>
                      </motion.div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE TIMELINE */}
        <div className="lg:hidden space-y-5 relative">
          <div className="absolute top-2 bottom-2 left-6 w-0.5 bg-gradient-to-b from-[#38BDF8] via-[#159FE5] to-[#38BDF8] rounded-full pointer-events-none" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 80} direction="up">
                <div className="relative flex items-center gap-4 pl-1 group">
                  <div className="relative shrink-0 z-10">
                    <div className="w-10 h-10 rounded-xl bg-[#071927] border-2 border-[#38BDF8] text-[#38BDF8] flex items-center justify-center shadow-sm group-hover:bg-[#38BDF8] group-hover:text-[#050505] transition-colors">
                      <Icon size={18} strokeWidth={2.2} />
                    </div>
                  </div>

                  <div className="bg-[#0B1724]/90 backdrop-blur-md p-4 rounded-2xl border border-[#159FE5]/20 shadow-md group-hover:border-[#38BDF8]/60 transition-all flex-1 relative overflow-hidden">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#38BDF8] mb-0.5">
                      STEP {step.number} — {step.subtitle}
                    </div>

                    <h3 className="text-base font-extrabold text-white group-hover:text-[#38BDF8] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#94A3B8] mt-1 leading-snug">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
