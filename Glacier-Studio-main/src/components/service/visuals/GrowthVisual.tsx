import React from "react";
import { ArrowUpRight, Search, TrendingUp } from "lucide-react";
import { Window, Stage, FloatCard } from "./Frame";

// Organic sessions, 12 months (normalised 0–100)
const points = [12, 14, 13, 18, 22, 21, 30, 38, 44, 55, 68, 84];

const W = 400;
const H = 140;
const stepX = W / (points.length - 1);
const toY = (v: number) => H - (v / 100) * (H - 10) - 4;
const line = points.map((v, i) => `${i === 0 ? "M" : "L"} ${i * stepX} ${toY(v)}`).join(" ");
const area = `${line} L ${W} ${H} L 0 ${H} Z`;

const keywords = [
  { kw: "web development company", pos: 1, delta: 14 },
  { kw: "ai automation agency", pos: 2, delta: 9 },
  { kw: "next.js developers india", pos: 3, delta: 21 },
];

export const GrowthVisual: React.FC = () => (
  <Stage>
    <Window title="analytics · organic search">
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[12px] font-medium text-[#64748B]">Organic sessions · last 12 months</div>
            <div className="mt-1 flex items-baseline gap-3">
              <span className="text-3xl font-bold tracking-[-0.04em] text-[#0B1220]">128,430</span>
              <span className="inline-flex items-center gap-0.5 rounded-full bg-[#F0FDF4] px-2 py-0.5 text-[12px] font-semibold text-[#15803D]">
                <ArrowUpRight size={13} /> 240%
              </span>
            </div>
          </div>
          <div className="flex rounded-lg bg-[#F1F5F9] p-0.5 text-[11px] font-semibold text-[#64748B]">
            {["30d", "90d", "12m"].map((r) => (
              <span key={r} className={r === "12m" ? "rounded-md bg-white px-2.5 py-1 text-[#0B1220] shadow-sm" : "px-2.5 py-1"}>
                {r}
              </span>
            ))}
          </div>
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} className="mt-6 h-36 w-full overflow-visible" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="growthArea" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#159FE5" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#159FE5" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0.25, 0.5, 0.75].map((g) => (
            <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} stroke="#EEF2F6" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" />
          ))}
          <path d={area} fill="url(#growthArea)" />
          <path d={line} fill="none" stroke="#159FE5" strokeWidth="2.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" className="draw-line" />
        </svg>
        <div className="mt-2 flex justify-between font-mono text-[10px] text-[#94A3B8]">
          {["Oct", "Dec", "Feb", "Apr", "Jun", "Sep"].map((m) => <span key={m}>{m}</span>)}
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-[#EEF2F6]">
          <div className="grid grid-cols-[1fr_auto_auto] gap-4 bg-[#F8FAFC] px-4 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-[#94A3B8]">
            <span>Keyword</span><span>Pos.</span><span className="w-12 text-right">Δ</span>
          </div>
          {keywords.map((k) => (
            <div key={k.kw} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-t border-[#EEF2F6] px-4 py-2.5 text-[12.5px]">
              <span className="flex min-w-0 items-center gap-2 text-[#334155]">
                <Search size={12} className="shrink-0 text-[#94A3B8]" />
                <span className="truncate">{k.kw}</span>
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#0B1220] text-[11px] font-bold text-white">{k.pos}</span>
              <span className="w-12 text-right font-semibold text-[#15803D]">+{k.delta}</span>
            </div>
          ))}
        </div>
      </div>
    </Window>

    <FloatCard className="-top-4 -left-2 lg:-left-10">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F0FDF4] text-[#16A34A]">
          <TrendingUp size={17} />
        </span>
        <div>
          <div className="text-[11px] font-medium text-[#64748B]">Conversion rate</div>
          <div className="text-lg font-bold tracking-[-0.03em] text-[#0B1220]">4.8% <span className="text-[12px] font-semibold text-[#15803D]">+3.5x</span></div>
        </div>
      </div>
    </FloatCard>
  </Stage>
);
