import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDownRight, Sparkles } from "lucide-react";
import { Window, Stage, FloatCard, LiveDot } from "./Frame";

const kpis = [
  { label: "ROAS", value: "5.4x", delta: "+1.8x", up: true },
  { label: "CPA", value: "₹412", delta: "-38%", up: false },
  { label: "Conversions", value: "2,184", delta: "+185%", up: true },
];

// Weekly revenue split (Google, Meta), normalised 0–100
const weeks = [
  [28, 18], [34, 22], [31, 30], [42, 33], [48, 40], [55, 46], [63, 52], [72, 64],
];

const campaigns = [
  { logo: "/googleadslogo.webp", name: "Search · High intent", roas: "6.2x", spend: 72 },
  { logo: "/metalogo.webp", name: "Reels · Advantage+", roas: "4.9x", spend: 58 },
  { logo: "/googleadslogo.webp", name: "PMax · Shopping", roas: "5.1x", spend: 44 },
];

export const AdsVisual: React.FC = () => (
  <Stage>
    <Window
      title="paid media · all channels"
      right={<span className="flex items-center gap-1.5 text-[10px] font-semibold text-[#15803D]"><LiveDot className="h-1.5 w-1.5" />Live</span>}
    >
      <div className="p-5 sm:p-6">
        <div className="grid grid-cols-3 gap-3">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-xl border border-[#EEF2F6] p-3 sm:p-4">
              <div className="text-[11px] font-medium text-[#64748B]">{k.label}</div>
              <div className="mt-1 text-lg font-bold tracking-[-0.03em] text-[#0B1220] sm:text-2xl">{k.value}</div>
              <div className="mt-1 inline-flex items-center gap-0.5 text-[11px] font-semibold text-[#15803D]">
                {k.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {k.delta}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-[12px] font-semibold text-[#0B1220]">Attributed revenue · 8 weeks</div>
          <div className="flex gap-3 text-[11px] font-medium text-[#64748B]">
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-[#159FE5]" />Google</span>
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-[#0B1220]" />Meta</span>
          </div>
        </div>
        <div className="mt-4 flex h-32 items-end gap-2 sm:gap-3">
          {weeks.map(([g, m], i) => (
            <div key={i} className="flex h-full flex-1 items-end gap-1">
              <span className="bar-grow flex-1 rounded-t-[4px] bg-[#159FE5]" style={{ height: `${g}%`, animationDelay: `${i * 70}ms` }} />
              <span className="bar-grow flex-1 rounded-t-[4px] bg-[#0B1220]" style={{ height: `${m}%`, animationDelay: `${i * 70 + 35}ms` }} />
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-2">
          {campaigns.map((c) => (
            <div key={c.name} className="flex items-center gap-3 rounded-lg px-1 py-1.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#EEF2F6] bg-white">
                <Image src={c.logo} alt="" width={16} height={16} className="object-contain" />
              </span>
              <span className="min-w-0 flex-1 truncate text-[12.5px] font-medium text-[#334155]">{c.name}</span>
              <span className="hidden h-1.5 w-24 overflow-hidden rounded-full bg-[#F1F5F9] sm:block">
                <span className="block h-full rounded-full bg-[#159FE5]" style={{ width: `${c.spend}%` }} />
              </span>
              <span className="w-10 text-right text-[12.5px] font-bold text-[#0B1220]">{c.roas}</span>
            </div>
          ))}
        </div>
      </div>
    </Window>

    <FloatCard className="-top-6 -right-2 w-64 lg:-right-8">
      <div className="flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-b from-[#159FE5] to-[#0867A5] text-white">
          <Sparkles size={14} />
        </span>
        <div>
          <div className="text-[12.5px] font-semibold text-[#0B1220]">Budget rebalanced</div>
          <div className="mt-0.5 text-[11.5px] leading-snug text-[#64748B]">+18% to Reels · paused 14 low-intent keywords</div>
        </div>
      </div>
    </FloatCard>
  </Stage>
);
