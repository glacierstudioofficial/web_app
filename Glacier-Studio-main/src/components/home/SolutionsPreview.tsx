import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { ScrollReveal, AnimatedText } from "@/components/common/ScrollReveal";
import { SectionBadge } from "@/components/common/Badge";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  ShoppingCart,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  CreditCard,
  UserCheck,
  Check,
  Globe,
  Code,
  Cpu,
  Layers,
  Search,
  Share2,
} from "lucide-react";

export const SolutionsPreview: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden">
      {/* Background Decor & Soft Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#EAF7FF]/80 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#F1F5F9]/80 rounded-full blur-3xl translate-y-1/3 pointer-events-none" />

      <Container size="large" className="relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-4">
            <SectionBadge>OUR SERVICES</SectionBadge>
          </div>
        </ScrollReveal>

        <AnimatedText
          text="Digital solutions that drive real growth"
          tag="h2"
          className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] text-center mb-5"
          delay={100}
          baseDelay={60}
        />

        <ScrollReveal direction="fade" delay={200}>
          <p className="text-center text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-16 leading-relaxed">
            Comprehensive technology, AI, software, and marketing services engineered for high performance, automation, and maximum return on investment.
          </p>
        </ScrollReveal>

        {/* ================= Bento Grid Layout (3 Columns) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* ================= COLUMN 1 (LEFT) ================= */}
          <div className="flex flex-col gap-6">
            
            {/* Bento Card 1: Web App Development */}
            <ScrollReveal direction="up" delay={100} className="h-full">
              <Link
                href="/development"
                className="group h-full bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden relative"
              >
                {/* Visual Graphic: Funnel & Nodes */}
                <div className="w-full h-48 sm:h-56 bg-slate-50/80 rounded-2xl p-4 relative overflow-hidden flex flex-col items-center justify-center border border-slate-100 mb-6">
                  {/* Avatar node bubbles top */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-3">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-xs shadow-xs">
                      👩‍💻
                    </span>
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyan-100 border border-cyan-200 flex items-center justify-center text-xs shadow-xs">
                      👨‍🎨
                    </span>
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-xs shadow-xs">
                      🧑‍💼
                    </span>
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rose-100 border border-rose-200 flex items-center justify-center text-xs shadow-xs">
                      👨‍🚀
                    </span>
                  </div>

                  {/* Funnel V-line graphic */}
                  <div className="w-24 h-10 border-b-2 border-x-2 border-slate-300/60 rounded-b-xl relative flex items-center justify-center mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#159FE5] animate-ping" />
                  </div>

                  {/* Central Logo disk */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0867A5] to-[#159FE5] text-white flex items-center justify-center font-black text-lg shadow-lg shadow-cyan-500/25 mb-3 group-hover:scale-110 transition-transform">
                    G
                  </div>

                  {/* Floating badge */}
                  <div className="bg-white border border-slate-200/90 shadow-sm rounded-full px-3 py-1 text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    <span>98+ Lighthouse Speed</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#0867A5] transition-colors mb-2">
                    Web App Development
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    High-performance, scalable modern web applications built with Next.js, React, and resilient cloud architectures.
                  </p>
                </div>
              </Link>
            </ScrollReveal>

            {/* Bento Card 2: SEO & Website Optimization */}
            <ScrollReveal direction="up" delay={200}>
              <Link
                href="/growth"
                className="group bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Graphic: Warm Checkout Card */}
                <div className="w-full bg-gradient-to-br from-amber-500/10 via-amber-100/30 to-yellow-50/20 rounded-2xl p-5 border border-amber-200/50 mb-6 relative overflow-hidden flex flex-col items-center">
                  <div className="w-full bg-white rounded-xl p-3.5 shadow-sm border border-slate-200/60 max-w-xs space-y-2.5">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                        <Search size={14} className="text-amber-600" />
                        <span>SEO Rank Audit</span>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">+240% Reach</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">Page Speed Index</span>
                      <span className="font-bold text-emerald-600">0.8s</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">Target Keywords</span>
                      <span className="font-bold text-slate-900">#1 - 3 Page</span>
                    </div>

                    <div className="pt-1 border-t border-dashed border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                      <span>Core Web Vitals Status</span>
                      <span className="text-emerald-600 font-bold">Passed ✓</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0867A5] transition-colors mb-2">
                    SEO & Website Optimization
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Maximize technical performance, organic reach, core web vitals, and search rankings with engineered SEO strategies.
                  </p>
                </div>
              </Link>
            </ScrollReveal>

          </div>

          {/* ================= COLUMN 2 (MIDDLE) ================= */}
          <div className="flex flex-col gap-6">

            {/* Bento Card 3: AI & Automation Solutions */}
            <ScrollReveal direction="up" delay={150}>
              <Link
                href="/ai-automation"
                className="group bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Graphic: Live Bar Chart */}
                <div className="w-full bg-slate-50/90 rounded-2xl p-5 border border-slate-100 mb-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-emerald-50 text-emerald-600 border border-emerald-200/80 rounded-full px-2.5 py-0.5 text-[11px] font-bold inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      24/7 AI Active
                    </span>
                    <span className="text-[11px] font-bold text-slate-500">120+ hrs Saved/mo</span>
                  </div>

                  {/* Bar graph bars */}
                  <div className="flex items-end justify-center gap-2 h-20 pt-2">
                    {[40, 65, 85, 55, 95, 70, 80, 100, 75, 90, 60, 85].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className="w-2 sm:w-2.5 rounded-full bg-gradient-to-t from-emerald-500 to-emerald-400 group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all duration-300"
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0867A5] transition-colors mb-2">
                    AI & Automation Solutions
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Transform manual tasks into autonomous, intelligent AI workflows that operate 24/7 without manual friction.
                  </p>
                </div>
              </Link>
            </ScrollReveal>

            {/* Bento Card 4: Custom Software Development */}
            <ScrollReveal direction="up" delay={250}>
              <Link
                href="/custom-software"
                className="group bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Graphic: Radial Integration Orbit */}
                <div className="w-full bg-slate-50/80 rounded-2xl p-5 border border-slate-100 mb-6 flex items-center justify-center relative overflow-hidden min-h-[140px]">
                  {/* Concentric rings */}
                  <div className="absolute w-36 h-36 rounded-full border border-cyan-500/15 animate-spin" style={{ animationDuration: "25s" }} />
                  <div className="absolute w-24 h-24 rounded-full border border-blue-500/15" />

                  {/* Central Logo badge */}
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#0867A5] to-[#159FE5] text-white flex items-center justify-center font-black text-sm shadow-md z-10 group-hover:scale-110 transition-transform">
                    G
                  </div>

                  {/* Satellite badges */}
                  <span className="absolute top-2 left-6 bg-white border border-slate-200 rounded-full px-2 py-0.5 text-[10px] font-bold text-slate-600 shadow-2xs">
                    REST API
                  </span>
                  <span className="absolute top-3 right-6 bg-white border border-slate-200 rounded-full px-2 py-0.5 text-[10px] font-bold text-slate-600 shadow-2xs">
                    CRM/ERP
                  </span>
                  <span className="absolute bottom-2 left-8 bg-white border border-slate-200 rounded-full px-2 py-0.5 text-[10px] font-bold text-slate-600 shadow-2xs">
                    GraphQL
                  </span>
                  <span className="absolute bottom-3 right-8 bg-white border border-slate-200 rounded-full px-2 py-0.5 text-[10px] font-bold text-slate-600 shadow-2xs">
                    Docker
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0867A5] transition-colors mb-2">
                    Custom Software Development
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tailor-made internal business software, client portals, API backends, and platform architectures.
                  </p>
                </div>
              </Link>
            </ScrollReveal>

            {/* Bento Card 5: Social Media & Branding */}
            <ScrollReveal direction="up" delay={350}>
              <Link
                href="/growth"
                className="group bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Graphic: Stacked Cards Deck */}
                <div className="w-full bg-slate-50/80 rounded-2xl p-5 border border-slate-100 mb-6 flex items-center justify-center">
                  <div className="relative w-full max-w-xs h-16 flex items-center justify-center">
                    <div className="absolute w-11/12 h-12 bg-slate-200/50 rounded-xl top-0 translate-y-0 scale-95 border border-slate-300/40" />
                    <div className="absolute w-11/12 h-12 bg-white rounded-xl top-2 shadow-md border border-slate-200/80 p-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-[10px]">
                          ✦
                        </span>
                        <span className="text-xs font-bold text-slate-800">Brand System</span>
                      </div>
                      <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">+180% Reach</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0867A5] transition-colors mb-2">
                    Social Media & Content Strategy
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Strategic content creation, community engagement, and multi-channel brand positioning for modern businesses.
                  </p>
                </div>
              </Link>
            </ScrollReveal>

          </div>

          {/* ================= COLUMN 3 (RIGHT) ================= */}
          <div className="flex flex-col gap-6">

            {/* Bento Card 6: Google & Meta Ads Management */}
            <ScrollReveal direction="up" delay={200} className="h-full">
              <Link
                href="/google-ads"
                className="group h-full bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Graphic: Status Bridge */}
                <div className="w-full bg-slate-50/80 rounded-2xl p-5 border border-slate-100 mb-6 flex flex-col items-center justify-center space-y-2 relative">
                  <div className="w-full bg-white border border-rose-100 shadow-2xs rounded-xl p-2.5 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-rose-600 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      Unoptimized CPA
                    </span>
                    <span className="font-bold text-slate-500">$48.00</span>
                  </div>

                  <div className="w-full py-1 rounded-lg bg-gradient-to-r from-[#0867A5] to-[#159FE5] text-white text-[11px] font-extrabold text-center tracking-widest uppercase shadow-xs">
                    Glacier Ads Optimization
                  </div>

                  <div className="w-full bg-white border border-emerald-100 shadow-2xs rounded-xl p-2.5 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Optimized ROAS
                    </span>
                    <span className="font-bold text-emerald-600">5.4x Avg</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0867A5] transition-colors mb-2">
                    Google & Meta Ads Management
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Data-backed paid media management across Google Search, Performance Max, Facebook, and Instagram Reels.
                  </p>
                </div>
              </Link>
            </ScrollReveal>

            {/* Bento Card 7: Featured Gradient CTA Card */}
            <ScrollReveal direction="up" delay={300} className="h-full">
              <div className="h-full bg-gradient-to-br from-[#159FE5]/20 via-[#818CF8]/15 to-blue-50/50 border border-blue-200/60 rounded-3xl p-6 sm:p-7 shadow-[0_6px_24px_rgba(21,159,229,0.12)] flex flex-col justify-between relative overflow-hidden">
                {/* Background soft glow bubble */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#159FE5]/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="mb-6">
                  {/* Lightning badge */}
                  <div className="w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-md text-[#0867A5] border border-blue-200/80 flex items-center justify-center shadow-sm mb-5">
                    <Zap size={20} className="fill-[#159FE5] text-[#159FE5]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-3">
                    Accelerate Your Growth With Glacier Studio
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed">
                    Our platform is engineered for ambitious businesses looking to scale faster through cutting-edge technology, AI automation, and high-converting marketing.
                  </p>
                </div>

                <div>
                  <Link
                    href="/about#contact"
                    className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm px-6 py-3 rounded-full shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>✦ Get Started</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </Container>
    </section>
  );
};


