import React from "react";
import { GitBranch, CheckCircle2 } from "lucide-react";
import { Window, Stage, FloatCard, LiveDot } from "./Frame";

// Token colours for the faux syntax highlighting
const k = "text-[#C792EA]"; // keyword
const f = "text-[#82AAFF]"; // function
const s = "text-[#C3E88D]"; // string
const t = "text-[#FFCB6B]"; // type / component
const c = "text-white/30"; // comment
const p = "text-[#89DDFF]"; // punctuation / tag

const lines: React.ReactNode[] = [
  <><span className={c}>{"// app/dashboard/page.tsx"}</span></>,
  <><span className={k}>import</span> {"{ "}<span className={t}>Suspense</span>{" }"} <span className={k}>from</span> <span className={s}>&quot;react&quot;</span>;</>,
  <><span className={k}>import</span> {"{ "}<span className={f}>getMetrics</span>{" }"} <span className={k}>from</span> <span className={s}>&quot;@/lib/db&quot;</span>;</>,
  <>&nbsp;</>,
  <><span className={k}>export default async function</span> <span className={f}>Dashboard</span>() {"{"}</>,
  <>&nbsp;&nbsp;<span className={k}>const</span> data = <span className={k}>await</span> <span className={f}>getMetrics</span>({"{ "}cache: <span className={s}>&quot;force-cache&quot;</span>{" }"});</>,
  <>&nbsp;</>,
  <>&nbsp;&nbsp;<span className={k}>return</span> (</>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<span className={p}>&lt;</span><span className={t}>Suspense</span> fallback=<span className={p}>{"{"}</span>&lt;<span className={t}>Skeleton</span> /&gt;<span className={p}>{"}"}</span><span className={p}>&gt;</span></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={p}>&lt;</span><span className={t}>RevenueChart</span> data=<span className={p}>{"{"}</span>data<span className={p}>{"}"}</span> <span className={p}>/&gt;</span></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<span className={p}>&lt;/</span><span className={t}>Suspense</span><span className={p}>&gt;</span></>,
  <>&nbsp;&nbsp;);<span className="caret-blink ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5 bg-[#7DD3FC]" /></>,
  <>{"}"}</>,
];

const scores = [
  { label: "Perf", value: 100 },
  { label: "A11y", value: 100 },
  { label: "Best", value: 100 },
  { label: "SEO", value: 100 },
];

const Ring: React.FC<{ value: number }> = ({ value }) => {
  const r = 15;
  const circ = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 36 36" className="h-10 w-10 -rotate-90">
      <circle cx="18" cy="18" r={r} fill="none" stroke="#DCFCE7" strokeWidth="3" />
      <circle
        cx="18" cy="18" r={r} fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round"
        strokeDasharray={circ} strokeDashoffset={circ * (1 - value / 100)}
      />
    </svg>
  );
};

export const DevVisual: React.FC = () => (
  <Stage>
    <Window
      dark
      title="glacier-app — page.tsx"
      right={<span className="flex items-center gap-1 font-mono text-[10px] text-white/40"><GitBranch size={11} />main</span>}
    >
      <div className="flex">
        {/* File tree */}
        <div className="hidden w-40 shrink-0 border-r border-white/10 py-4 font-mono text-[11px] text-white/40 md:block">
          {["app/", "  dashboard/", "    page.tsx", "  layout.tsx", "components/", "lib/", "  db.ts"].map((n, i) => (
            <div
              key={i}
              className={
                n.trim() === "page.tsx"
                  ? "bg-[#159FE5]/10 px-4 py-1 text-[#7DD3FC] whitespace-pre"
                  : "px-4 py-1 whitespace-pre"
              }
            >
              {n}
            </div>
          ))}
        </div>
        {/* Code */}
        <pre className="flex-1 overflow-hidden py-4 font-mono text-[11.5px] leading-[1.75] text-[#E2E8F0] sm:text-[12.5px]">
          {lines.map((l, i) => (
            <div key={i} className="flex">
              <span className="w-10 shrink-0 select-none pr-4 text-right text-white/20">{i + 1}</span>
              <span className="whitespace-pre">{l}</span>
            </div>
          ))}
        </pre>
      </div>
      {/* Status bar */}
      <div className="flex items-center justify-between border-t border-white/10 bg-[#159FE5]/10 px-4 py-2 font-mono text-[10.5px] text-[#7DD3FC]">
        <span>TypeScript 5 · strict</span>
        <span className="flex items-center gap-1.5"><CheckCircle2 size={11} /> 0 errors</span>
      </div>
    </Window>

    <FloatCard className="-bottom-6 -left-4 lg:-left-10">
      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">Lighthouse</div>
      <div className="mt-3 flex gap-3">
        {scores.map((sc) => (
          <div key={sc.label} className="relative flex flex-col items-center">
            <Ring value={sc.value} />
            <span className="absolute top-[11px] text-[11px] font-bold text-[#15803D]">{sc.value}</span>
            <span className="mt-1 text-[10px] font-medium text-[#64748B]">{sc.label}</span>
          </div>
        ))}
      </div>
    </FloatCard>

    <FloatCard className="-top-4 -right-2 lg:-right-6 py-3" delay="1.5s">
      <div className="flex items-center gap-3">
        <LiveDot />
        <div>
          <div className="text-[13px] font-semibold text-[#0B1220]">Deployed to production</div>
          <div className="font-mono text-[11px] text-[#64748B]">build 38s · edge · 0.8s LCP</div>
        </div>
      </div>
    </FloatCard>
  </Stage>
);
