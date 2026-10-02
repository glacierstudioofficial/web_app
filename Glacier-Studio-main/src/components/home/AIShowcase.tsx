"use client";

import React, { useState } from "react";
import { Container } from "@/components/common/Container";
import { ScrollReveal, AnimatedText } from "@/components/common/ScrollReveal";
import { Badge, SectionBadge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Cpu, Sparkles, Bot, Zap, ArrowRight, CheckCircle, BarChart3, Database, ShieldCheck } from "lucide-react";

export const AIShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"leads" | "workflows" | "insights">("leads");

  return (
    <section className="py-24 sm:py-32 bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden">
      {/* Soft Light Ambient Glow Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#159FE5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#EAF7FF]/60 rounded-full blur-3xl pointer-events-none" />

      <Container size="large" className="relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-6">
            <SectionBadge>GLACIER AI ENGINE</SectionBadge>
          </div>
        </ScrollReveal>

        <AnimatedText
          text="Your business. Supercharged by AI."
          tag="h2"
          className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] text-center text-slate-900 mb-6"
          delay={100}
          baseDelay={70}
        />

        <ScrollReveal direction="fade" delay={350}>
          <p className="text-center text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-14 leading-relaxed">
            Turn manual data entry, customer support inquiries, and lead qualification into autonomous, 24/7 intelligent workflows.
          </p>
        </ScrollReveal>

        {/* Realistic Glacier AI Dashboard Mockup (Light Theme) */}
        <ScrollReveal direction="up" delay={200}>
          <div className="bg-white rounded-3xl border border-slate-200/90 p-4 sm:p-8 shadow-xl space-y-8">
            {/* Dashboard Header Control Bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0867A5] text-white flex items-center justify-center font-bold shadow-sm">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-slate-900 tracking-tight">Glacier AI Operations Center</h3>
                  <p className="text-xs text-slate-500">Autonomous agent cluster • Active & Monitoring</p>
                </div>
              </div>

              {/* Tab Switches */}
              <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200/80 text-xs font-semibold">
                <button
                  onClick={() => setActiveTab("leads")}
                  className={`px-3.5 py-1.5 rounded-lg transition-all ${
                    activeTab === "leads" ? "bg-[#0867A5] text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Lead Automation
                </button>
                <button
                  onClick={() => setActiveTab("workflows")}
                  className={`px-3.5 py-1.5 rounded-lg transition-all ${
                    activeTab === "workflows" ? "bg-[#0867A5] text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Task Workflows
                </button>
                <button
                  onClick={() => setActiveTab("insights")}
                  className={`px-3.5 py-1.5 rounded-lg transition-all ${
                    activeTab === "insights" ? "bg-[#0867A5] text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Growth Analytics
                </button>
              </div>
            </div>

            {/* 5 Core Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
                <div className="text-xs text-slate-500 font-medium mb-1">Qualified Leads</div>
                <div className="text-2xl font-black text-[#0867A5]">1,284</div>
                <div className="text-[10px] text-emerald-600 mt-1 font-semibold">↑ +38% this week</div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
                <div className="text-xs text-slate-500 font-medium mb-1">Active Campaigns</div>
                <div className="text-2xl font-black text-slate-900">18 Live</div>
                <div className="text-[10px] text-slate-500 mt-1">Multi-Channel Sync</div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
                <div className="text-xs text-slate-500 font-medium mb-1">Tasks Completed</div>
                <div className="text-2xl font-black text-emerald-600">48,920</div>
                <div className="text-[10px] text-emerald-600 mt-1 font-semibold">0 Manual Errors</div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
                <div className="text-xs text-slate-500 font-medium mb-1">Response Time</div>
                <div className="text-2xl font-black text-slate-900">0.4s</div>
                <div className="text-[10px] text-[#0867A5] mt-1">Instant Auto-Reply</div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70 col-span-2 sm:col-span-1">
                <div className="text-xs text-slate-500 font-medium mb-1">AI Recommendation</div>
                <div className="text-xs font-bold text-slate-800 line-clamp-2">
                  Boost Google Search ad budget on High Intent Keywords
                </div>
              </div>
            </div>

            {/* Interactive AI Agent Stream View */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Live Triage Stream */}
              <div className="lg:col-span-2 bg-slate-50 p-5 rounded-2xl border border-slate-200/70 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
                    <Sparkles size={16} className="text-[#0867A5]" />
                    <span>Autonomous AI Agent Activity Log</span>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded border border-emerald-200/80 font-bold">
                    REAL-TIME SYNC
                  </span>
                </div>

                <div className="space-y-2.5 font-mono text-xs text-slate-600">
                  <div className="p-3 bg-white rounded-xl border border-slate-200/60 flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-2 text-slate-900">
                      <CheckCircle size={14} className="text-emerald-600" />
                      <span>Inbound Lead #8492 parsed via CRM Webhook</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Just now</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200/60 flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-2 text-slate-900">
                      <Zap size={14} className="text-[#0867A5]" />
                      <span>AI Lead Scoring: High Intent (Score 94/100)</span>
                    </div>
                    <span className="text-[10px] text-slate-400">2s ago</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200/60 flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-2 text-slate-900">
                      <ShieldCheck size={14} className="text-[#0867A5]" />
                      <span>Instant Personalized Proposal PDF Generated & Emailed</span>
                    </div>
                    <span className="text-[10px] text-slate-400">5s ago</span>
                  </div>
                </div>
              </div>

              {/* AI Architecture Column */}
              <div className="bg-gradient-to-br from-[#EAF7FF] via-[#F2FAFF] to-blue-50/80 p-5 rounded-2xl border border-[#BBE3FF] space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0867A5] uppercase tracking-wider">
                    <Cpu size={14} />
                    <span>Enterprise AI Stack</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Ready to automate your operations?</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Deploy custom fine-tuned LLM agents, RAG document pipelines, and custom Python automation scripts.
                  </p>
                </div>

                <Button
                  href="/ai-automation"
                  variant="primary"
                  size="md"
                  className="w-full bg-[#0867A5] hover:bg-[#065285] text-white"
                  icon={<ArrowRight size={16} />}
                >
                  Explore AI Automation →
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
