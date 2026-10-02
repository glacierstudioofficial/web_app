import React from "react";
import { Webhook, Sparkles, Database, MessageSquare, Mail, Play } from "lucide-react";
import { Window, Stage, FloatCard, LiveDot } from "./Frame";
import { cn } from "@/lib/utils";

const Node: React.FC<{
  icon: React.ElementType;
  label: string;
  sub: string;
  className?: string;
  accent?: boolean;
}> = ({ icon: Icon, label, sub, className, accent }) => (
  <div
    className={cn(
      "absolute z-10 flex w-[42%] max-w-[210px] -translate-y-1/2 items-center gap-2.5 rounded-xl border bg-white p-2.5 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.25)] sm:p-3",
      accent ? "border-[#159FE5] ring-4 ring-[#159FE5]/10" : "border-[#E8EDF3]",
      className
    )}
  >
    <span
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
        accent ? "bg-gradient-to-b from-[#159FE5] to-[#0867A5] text-white" : "bg-[#F1F5F9] text-[#334155]"
      )}
    >
      <Icon size={15} />
    </span>
    <span className="min-w-0">
      <span className="block truncate text-[12px] font-semibold text-[#0B1220] sm:text-[13px]">{label}</span>
      <span className="block truncate text-[10.5px] text-[#64748B] sm:text-[11px]">{sub}</span>
    </span>
  </div>
);

export const AIVisual: React.FC = () => (
  <Stage>
    <Window
      title="workflows / lead-qualification"
      right={
        <span className="flex items-center gap-1.5 rounded-full bg-[#F0FDF4] px-2 py-0.5 text-[10px] font-semibold text-[#15803D]">
          <LiveDot className="h-1.5 w-1.5" /> Live
        </span>
      }
    >
      <div className="relative aspect-[5/4] bg-dots-light sm:aspect-[16/11]">
        {/* Connectors */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          <g fill="none" stroke="#159FE5" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="dash-flow">
            <path d="M 27 22 C 27 38, 50 30, 50 46" vectorEffect="non-scaling-stroke" />
            <path d="M 50 54 C 50 68, 18 66, 18 80" vectorEffect="non-scaling-stroke" />
            <path d="M 50 54 L 50 80" vectorEffect="non-scaling-stroke" />
            <path d="M 50 54 C 50 68, 82 66, 82 80" vectorEffect="non-scaling-stroke" />
          </g>
        </svg>

        <Node icon={Webhook} label="New lead" sub="Form · WhatsApp · Email" className="left-[6%] top-[16%]" />
        <Node icon={Sparkles} label="AI Triage Agent" sub="Qualify · score · route" className="left-1/2 top-[50%] -translate-x-1/2" accent />
        <Node icon={Database} label="CRM" sub="Deal created" className="left-[3%] top-[86%] w-[30%]" />
        <Node icon={MessageSquare} label="Slack" sub="#sales ping" className="left-1/2 top-[86%] w-[30%] -translate-x-1/2" />
        <Node icon={Mail} label="Email" sub="Quote sent" className="right-[3%] top-[86%] w-[30%]" />

        {/* Run button */}
        <div className="absolute right-4 top-4 z-10 hidden items-center gap-1.5 rounded-lg bg-[#0B1220] px-3 py-1.5 text-[11px] font-semibold text-white sm:flex">
          <Play size={11} fill="currentColor" /> Test run
        </div>
      </div>
    </Window>

    <FloatCard className="-left-2 top-[34%] w-60 lg:-left-10">
      <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">
        Run log <span className="font-mono normal-case tracking-normal text-[#94A3B8]">#48,921</span>
      </div>
      <ul className="mt-3 space-y-2 font-mono text-[11px]">
        {[
          ["Lead received", "0.02s"],
          ["Intent score: 92/100", "0.31s"],
          ["Deal + Slack + email", "0.40s"],
        ].map(([l, tm]) => (
          <li key={l} className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2 text-[#334155]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
              {l}
            </span>
            <span className="text-[#94A3B8]">{tm}</span>
          </li>
        ))}
      </ul>
    </FloatCard>
  </Stage>
);
