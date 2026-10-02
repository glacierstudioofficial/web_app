"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─────────────────────────────────────────
   Showcase: auto-rotating tabs + scroll tilt
───────────────────────────────────────── */

export interface ShowcaseTab {
  id: string;
  label: string;
  caption: string;
  panel: React.ReactNode;
}

const TAB_MS = 6000;

export const HeroShowcase: React.FC<{ tabs: ShowcaseTab[] }> = ({ tabs }) => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Flatten the tilted window as it scrolls into view
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.35"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 22, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0.92, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 40, 0]);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % tabs.length), TAB_MS);
    return () => clearTimeout(t);
  }, [active, paused, reduce, tabs.length]);

  return (
    <div
      ref={ref}
      className="relative mx-auto max-w-6xl [perspective:1600px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Tab switcher */}
      <div className="mb-8 flex justify-center">
        <div role="tablist" aria-label="What we do" className="grid w-full max-w-2xl grid-cols-3 gap-1 rounded-2xl border border-[#E8EDF3] bg-white/80 p-1.5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] backdrop-blur">
          {tabs.map((tab, i) => {
            const isActive = i === active;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`hero-panel-${tab.id}`}
                onClick={() => setActive(i)}
                className={cn(
                  "relative overflow-hidden rounded-xl px-3 py-2.5 text-left transition-colors sm:px-4",
                  isActive ? "bg-[#0B1220] text-white" : "text-[#475569] hover:bg-[#F1F5F9]"
                )}
              >
                <span className="block text-[13px] font-semibold sm:text-sm">{tab.label}</span>
                <span className={cn("hidden text-[12px] sm:block", isActive ? "text-white/60" : "text-[#94A3B8]")}>
                  {tab.caption}
                </span>
                {/* Progress bar for the auto-rotation */}
                {isActive && !reduce && (
                  <motion.span
                    key={`${tab.id}-${paused}`}
                    className="absolute bottom-0 left-0 h-[2px] bg-[#7DD3FC]"
                    initial={{ width: "0%" }}
                    animate={{ width: paused ? "0%" : "100%" }}
                    transition={{ duration: paused ? 0 : TAB_MS / 1000, ease: "linear" }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <motion.div style={{ rotateX, scale, y, transformOrigin: "50% 0%" }} className="relative">
        {/* Glow under the product */}
        <div className="pointer-events-none absolute -inset-x-10 -bottom-10 top-10 -z-10 rounded-[3rem] bg-gradient-to-b from-[#159FE5]/25 via-[#7DD3FC]/15 to-transparent blur-3xl" aria-hidden />

        <div className="relative rounded-[1.75rem] border border-white/60 bg-white/50 p-2 shadow-[0_40px_120px_-40px_rgba(8,103,165,0.45)] ring-1 ring-[#0B1220]/5 backdrop-blur-xl sm:p-3">
          <div className="relative overflow-hidden rounded-[1.25rem] bg-gradient-to-b from-[#F8FBFF] to-[#EEF6FC]">
            <div className="absolute inset-0 bg-grid-light opacity-60" aria-hidden />
            <div className="relative min-h-[440px] px-2 py-8 sm:min-h-[520px] sm:px-10 sm:py-10">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={tabs[active].id}
                  id={`hero-panel-${tabs[active].id}`}
                  role="tabpanel"
                  initial={reduce ? false : { opacity: 0, y: 16, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={reduce ? undefined : { opacity: 0, y: -12, filter: "blur(6px)" }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="mx-auto max-w-4xl"
                >
                  {tabs[active].panel}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* ─────────────────────────────────────────
   Pointer spotlight that follows the cursor
───────────────────────────────────────── */

export const Spotlight: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;
    const onMove = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      el.style.setProperty("--x", `${e.clientX - r.left}px`);
      el.style.setProperty("--y", `${e.clientY - r.top}px`);
      el.style.opacity = "1";
    };
    const onLeave = () => (el.style.opacity = "0");
    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    return () => {
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(520px circle at var(--x, 50%) var(--y, 30%), rgba(21,159,229,0.10), transparent 60%)",
      }}
    />
  );
};
