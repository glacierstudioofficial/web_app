import React from "react";
import { Play, Type, Music2, Film, Download } from "lucide-react";
import { Window, Stage, FloatCard } from "./Frame";

const tracks = [
  { icon: Type, clips: [{ l: 6, w: 18, c: "bg-[#A78BFA]" }, { l: 42, w: 14, c: "bg-[#A78BFA]" }, { l: 70, w: 20, c: "bg-[#A78BFA]" }] },
  { icon: Film, clips: [{ l: 2, w: 30, c: "bg-[#159FE5]" }, { l: 33, w: 26, c: "bg-[#0E86C8]" }, { l: 60, w: 36, c: "bg-[#159FE5]" }] },
  { icon: Music2, clips: [{ l: 2, w: 94, c: "bg-[#22C55E]/70" }] },
];

export const VideoVisual: React.FC = () => (
  <Stage>
    <Window dark title="brand-launch_v3.prproj" right={<span className="font-mono text-[10px] text-white/40">00:14:08</span>}>
      <div className="grid gap-4 p-4 sm:grid-cols-[1fr_auto] sm:p-5">
        {/* Preview monitor */}
        <div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-[#0867A5] via-[#0B1220] to-[#4C1D95]">
          <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden />
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#7DD3FC]/40 blur-3xl" aria-hidden />
          <div className="absolute left-5 top-5 space-y-1.5 sm:left-6 sm:top-6">
            <div className="h-2 w-16 rounded-full bg-white/70" />
            <div className="text-xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-2xl">
              Built to<br />stop the scroll.
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur">
              <Play size={18} fill="currentColor" className="ml-0.5" />
            </span>
          </div>
          <div className="absolute bottom-3 left-3 rounded-md bg-black/50 px-2 py-0.5 font-mono text-[10px] text-white/80">4K · 60fps</div>
        </div>

        {/* Formats */}
        <div className="flex gap-2 sm:flex-col">
          {[
            { r: "9:16", cls: "h-10 w-6" },
            { r: "1:1", cls: "h-8 w-8" },
            { r: "16:9", cls: "h-6 w-10" },
          ].map((fmt, i) => (
            <div
              key={fmt.r}
              className={
                "flex flex-1 flex-col items-center justify-center gap-1.5 rounded-lg border px-3 py-2 " +
                (i === 0 ? "border-[#159FE5]/60 bg-[#159FE5]/10" : "border-white/10 bg-white/[0.03]")
              }
            >
              <span className={`rounded-[3px] border ${i === 0 ? "border-[#7DD3FC]" : "border-white/30"} ${fmt.cls}`} />
              <span className="font-mono text-[10px] text-white/60">{fmt.r}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="border-t border-white/10 px-4 pb-5 pt-3 sm:px-5">
        <div className="mb-2 flex justify-between pl-8 font-mono text-[9.5px] text-white/30">
          {["00:00", "00:05", "00:10", "00:15", "00:20"].map((tc) => <span key={tc}>{tc}</span>)}
        </div>
        <div className="relative space-y-1.5">
          {tracks.map((tr, i) => {
            const Icon = tr.icon;
            return (
              <div key={i} className="flex items-center gap-2">
                <Icon size={13} className="w-6 shrink-0 text-white/40" />
                <div className="relative h-6 flex-1 rounded-md bg-white/[0.04]">
                  {tr.clips.map((cl, j) => (
                    <span
                      key={j}
                      className={`absolute top-0.5 bottom-0.5 rounded ${cl.c}`}
                      style={{ left: `${cl.l}%`, width: `${cl.w}%` }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
          {/* Playhead */}
          <div className="pointer-events-none absolute inset-y-[-6px] left-8 right-0">
            <div className="playhead-sweep absolute inset-y-0 w-px bg-[#F43F5E]">
              <span className="absolute -left-[5px] -top-1 h-2.5 w-2.5 rotate-45 rounded-[2px] bg-[#F43F5E]" />
            </div>
          </div>
        </div>
      </div>
    </Window>

    <FloatCard className="-bottom-6 -left-2 lg:-left-10">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F0F9FF] text-[#0867A5]">
          <Download size={16} />
        </span>
        <div>
          <div className="text-[13px] font-semibold text-[#0B1220]">12 variants exported</div>
          <div className="text-[11px] text-[#64748B]">Reels · Shorts · Feed · Stories</div>
        </div>
      </div>
    </FloatCard>

    <FloatCard className="-top-4 -right-2 lg:-right-6" delay="2s">
      <div className="text-[11px] font-medium text-[#64748B]">Avg. hook retention</div>
      <div className="mt-1 text-xl font-bold tracking-[-0.03em] text-[#0B1220]">
        78% <span className="text-[12px] font-semibold text-[#15803D]">+210% watch time</span>
      </div>
    </FloatCard>
  </Stage>
);
