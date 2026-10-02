import React from "react";
import Link from "next/link";
import { Code, Boxes, Bot, Clapperboard, TrendingUp, Megaphone, ArrowRight } from "lucide-react";
import { Window, Stage, FloatCard, LiveDot } from "./Frame";

const lanes = [
  {
    label: "Build",
    items: [
      { icon: Code, name: "Web Development", href: "/development" },
      { icon: Clapperboard, name: "Video & Design", href: "/video-design" },
    ],
  },
  {
    label: "Automate",
    items: [
      { icon: Bot, name: "AI & Automation", href: "/ai-automation" },
      { icon: Boxes, name: "Custom Software", href: "/custom-software" },
    ],
  },
  {
    label: "Grow",
    items: [
      { icon: TrendingUp, name: "SEO & Growth", href: "/growth" },
      { icon: Megaphone, name: "Google & Meta Ads", href: "/google-ads" },
    ],
  },
];

/** Build → Automate → Grow pipeline for the Solutions hero. */
export const SolutionsVisual: React.FC = () => (
  <Stage>
    <Window
      title="glacier · your growth stack"
      right={<span className="flex items-center gap-1.5 text-[10px] font-semibold text-[#15803D]"><LiveDot className="h-1.5 w-1.5" />Live</span>}
    >
      <div className="bg-dots-light p-4 sm:p-6">
        <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-stretch">
          {lanes.map((lane, i) => (
            <React.Fragment key={lane.label}>
              <div className="rounded-2xl border border-[#E8EDF3] bg-white p-3 shadow-[0_8px_24px_-16px_rgba(15,23,42,0.25)]">
                <div className="flex items-center justify-between px-1 pb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">{lane.label}</span>
                  <span className="font-mono text-[10px] text-[#CBD5E1]">0{i + 1}</span>
                </div>
                <div className="space-y-2">
                  {lane.items.map((it) => (
                    <Link
                      key={it.href}
                      href={it.href}
                      className="group flex items-center gap-2.5 rounded-xl border border-[#EEF2F6] bg-[#FBFCFE] px-2.5 py-2.5 transition-colors hover:border-[#BFE3F7] hover:bg-white"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-b from-[#159FE5] to-[#0867A5] text-white">
                        <it.icon size={13} />
                      </span>
                      <span className="truncate text-[12.5px] font-semibold text-[#0B1220]">{it.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              {i < lanes.length - 1 && (
                <div className="hidden items-center justify-center sm:flex" aria-hidden>
                  <svg width="28" height="12" viewBox="0 0 28 12" className="overflow-visible">
                    <line x1="0" y1="6" x2="22" y2="6" stroke="#159FE5" strokeWidth="1.5" className="dash-flow" />
                    <path d="M20 2 L26 6 L20 10" fill="none" stroke="#159FE5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Outcome bar */}
        <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl bg-[#0B1220] px-5 py-4 text-white">
          <div>
            <div className="text-[11px] font-medium text-white/50">Outcome</div>
            <div className="text-[14px] font-semibold">More leads, less manual work, faster growth</div>
          </div>
          <span className="hidden items-center gap-1 rounded-full bg-[#159FE5]/20 px-3 py-1 text-[12px] font-semibold text-[#7DD3FC] sm:flex">
            3.4x avg. ROI <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Window>

    <FloatCard className="-top-4 -right-2 lg:-right-6">
      <div className="text-[11px] font-medium text-[#64748B]">One team · one roadmap</div>
      <div className="mt-0.5 text-[13px] font-semibold text-[#0B1220]">No agency hand-offs</div>
    </FloatCard>
  </Stage>
);
