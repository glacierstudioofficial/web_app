"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/components/common/Container";
import { ScrollReveal, AnimatedText } from "@/components/common/ScrollReveal";
import { SectionBadge } from "@/components/common/Badge";
import {
  Award,
  Target,
  Cpu,
  TrendingUp,
  Wrench,
  Handshake,
} from "lucide-react";

export const WhyGlacier: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const pillars = [
    {
      id: "experience",
      title: "Deep Tech Experience",
      description:
        "Many years of specialized engineering in high-scale web systems, AI workflows, and digital growth platforms.",
      icon: Award,
    },
    {
      id: "strategy",
      title: "Revenue-Focused Strategy",
      description:
        "We align all code and marketing campaigns directly with your core revenue objectives. Zero vanity metrics.",
      icon: Target,
    },
    {
      id: "technology",
      title: "Modern Tech Architecture",
      description:
        "Built on enterprise Next.js, TypeScript, cloud microservices, and cutting-edge autonomous AI engines.",
      icon: Cpu,
    },
    {
      id: "performance",
      title: "Sub-Second Performance",
      description:
        "Relentless focus on sub-second page loads, core web vitals, and frictionless user conversion flows.",
      icon: TrendingUp,
    },
    {
      id: "solutions",
      title: "Tailored Custom Solutions",
      description:
        "Bespoke software, CRM/ERP integrations, and workflow automation tailored precisely to your operations.",
      icon: Wrench,
    },
    {
      id: "partnership",
      title: "Dedicated Partnership",
      description:
        "Dedicated tech leads, weekly transparent reporting, strict timelines, and continuous long-term support.",
      icon: Handshake,
    },
  ];

  const stats = [
    { value: "100", suffix: "+", label: "HAPPY CLIENTS" },
    { value: "6", suffix: "+", label: "YEARS OF EXPERIENCE" },
    { value: "16", suffix: "+", label: "MARKETING CUSTOMERS" },
    { value: "110", suffix: "+", label: "SUCCESSFUL PROJECTS" },
  ];

  // Auto-rotate every 5 seconds unless user manually interacts
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pillars.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [pillars.length]);

  const activePillar = pillars[activeIndex];

  return (
    <section className="py-24 sm:py-32 bg-slate-50/70 border-b border-[#E2E8F0] relative overflow-hidden">
      {/* Background Soft Geometric Accent Decor */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-l from-blue-100/60 to-transparent rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EAF7FF]/60 rounded-full blur-2xl pointer-events-none" />

      {/* Decorative Shape Graphic on Right */}
      <div className="absolute top-12 right-0 w-80 h-96 bg-blue-50/50 rounded-l-[120px] -z-0 pointer-events-none hidden lg:block" />

      <Container size="large" className="relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-4">
            <SectionBadge>WHY CHOOSE US</SectionBadge>
          </div>
        </ScrollReveal>

        <AnimatedText
          text="Why Choose Glacier Studio"
          tag="h2"
          className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] text-center mb-4"
          delay={100}
          baseDelay={55}
        />

        <ScrollReveal direction="fade" delay={200}>
          <p className="text-center text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-16 leading-relaxed">
            Leading businesses recommend Glacier Studio as a reliable corporate website developer and digital growth engineering partner.
          </p>
        </ScrollReveal>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT COLUMN: Radial Dial Wheel Diagram ================= */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] md:w-[480px] md:h-[480px] flex items-center justify-center">
              
              {/* Thin Outer Ring SVG */}
              <svg className="absolute inset-0 w-full h-full text-slate-200" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  strokeDasharray="3 3"
                />
              </svg>

              {/* Central Information Box */}
              <div className="z-10 text-center px-6 sm:px-10 max-w-[240px] sm:max-w-[300px]">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-2 transition-all duration-300">
                  {activePillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed transition-all duration-300">
                  {activePillar.description}
                </p>
              </div>

              {/* 6 Radial Node Buttons */}
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const angle = (idx * 360) / pillars.length - 90;
                const rad = (angle * Math.PI) / 180;
                const radiusPercent = 42; // matches circle SVG r=42
                const left = 50 + radiusPercent * Math.cos(rad);
                const top = 50 + radiusPercent * Math.sin(rad);
                const isActive = idx === activeIndex;

                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveIndex(idx)}
                    style={{ left: `${left}%`, top: `${top}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "bg-gradient-to-tr from-[#0867A5] to-[#159FE5] text-white shadow-xl shadow-cyan-500/35 scale-110 border-2 border-white ring-4 ring-cyan-500/20 z-20"
                        : "bg-white text-[#0867A5] border border-slate-200/90 shadow-md hover:border-[#159FE5] hover:scale-105 z-10"
                    }`}
                    title={pillar.title}
                  >
                    <Icon size={isActive ? 24 : 22} />
                  </button>
                );
              })}

            </div>
          </div>

          {/* ================= RIGHT COLUMN: 2x2 Stats Grid ================= */}
          <div className="lg:col-span-5 relative z-10">
            <div className="grid grid-cols-2 gap-8 sm:gap-10">
              {stats.map((stat, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 80}>
                  <div className="flex flex-col items-start group">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight flex items-start gap-0.5">
                      <span>{stat.value}</span>
                      <span className="text-amber-500 font-bold text-2xl sm:text-3xl lg:text-4xl mt-1">
                        {stat.suffix}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-500 tracking-wider uppercase mt-2.5">
                      {stat.label}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

