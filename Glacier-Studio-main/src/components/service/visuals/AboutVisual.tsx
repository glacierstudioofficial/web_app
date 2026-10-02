import React from "react";
import Link from "next/link";
import { Code, Bot, TrendingUp, Clapperboard, Megaphone, Boxes, ArrowUpRight, Quote } from "lucide-react";
import { solutionPages } from "@/data/navigation";
import { Stage, FloatCard, LiveDot } from "./Frame";

const ICONS: Record<string, React.ElementType> = {
  "/development": Code,
  "/ai-automation": Bot,
  "/growth": TrendingUp,
  "/video-design": Clapperboard,
  "/google-ads": Megaphone,
  "/custom-software": Boxes,
};

/** "One studio, every discipline" panel for the About hero. */
export const AboutVisual: React.FC = () => (
  <Stage>
    <div className="overflow-hidden rounded-3xl bg-white shadow-product">
      <div className="flex items-center justify-between border-b border-[#EEF2F6] px-6 py-4">
        <div>
          <div className="text-[13px] font-semibold text-[#0B1220]">One studio. Six disciplines.</div>
          <div className="text-[12px] text-[#64748B]">Everything you need to build, automate and grow</div>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-[#F0FDF4] px-2.5 py-1 text-[11px] font-semibold text-[#15803D]">
          <LiveDot className="h-1.5 w-1.5" /> Taking projects
        </span>
      </div>
      <div className="grid grid-cols-2 gap-px bg-[#EEF2F6] sm:grid-cols-3">
        {solutionPages.map((s) => {
          const Icon = ICONS[s.href] ?? Code;
          return (
            <Link key={s.href} href={s.href} className="group bg-white p-5 transition-colors hover:bg-[#F8FAFC]">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE] text-[#0867A5] ring-1 ring-[#BAE6FD]/70">
                  <Icon size={16} />
                </span>
                <ArrowUpRight size={14} className="text-[#CBD5E1] transition-colors group-hover:text-[#159FE5]" />
              </div>
              <div className="mt-4 text-[13.5px] font-semibold text-[#0B1220]">{s.label}</div>
              <div className="mt-0.5 text-[12px] leading-snug text-[#64748B]">{s.desc}</div>
            </Link>
          );
        })}
      </div>
      <div className="relative overflow-hidden bg-[#070B14] px-6 py-6">
        <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-[#159FE5]/30 blur-3xl" aria-hidden />
        <Quote size={18} className="relative text-[#7DD3FC]" />
        <p className="relative mt-3 text-[15px] font-medium leading-relaxed text-white">
          Senior craftsmanship and AI, working together for businesses that want to move faster.
        </p>
      </div>
    </div>

    <FloatCard className="-bottom-6 -left-2 lg:-left-10">
      <div className="text-[11px] font-medium text-[#64748B]">Systems deployed</div>
      <div className="text-2xl font-bold tracking-[-0.03em] text-[#0B1220]">50+</div>
    </FloatCard>
  </Stage>
);
