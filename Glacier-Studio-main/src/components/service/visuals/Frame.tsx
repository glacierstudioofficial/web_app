import React from "react";
import { cn } from "@/lib/utils";

/** App-window chrome used by every hero visual. */
export const Window: React.FC<{
  title: string;
  dark?: boolean;
  className?: string;
  right?: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, dark, className, right, children }) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-2xl shadow-product",
      dark ? "bg-[#0B1220] ring-1 ring-white/10" : "bg-white",
      className
    )}
  >
    <div
      className={cn(
        "flex h-10 items-center gap-3 border-b px-4",
        dark ? "border-white/10 bg-white/[0.02]" : "border-[#EEF2F6] bg-[#FBFCFE]"
      )}
    >
      <div className="flex gap-1.5">
        <span className={cn("h-2.5 w-2.5 rounded-full", dark ? "bg-white/15" : "bg-[#E2E8F0]")} />
        <span className={cn("h-2.5 w-2.5 rounded-full", dark ? "bg-white/15" : "bg-[#E2E8F0]")} />
        <span className={cn("h-2.5 w-2.5 rounded-full", dark ? "bg-white/15" : "bg-[#E2E8F0]")} />
      </div>
      <div className={cn("flex-1 truncate text-center font-mono text-[11px]", dark ? "text-white/40" : "text-[#94A3B8]")}>
        {title}
      </div>
      <div className="flex min-w-[42px] justify-end">{right}</div>
    </div>
    {children}
  </div>
);

/** Positioning stage: gives floating overlay cards room without causing overflow. */
export const Stage: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn("relative mx-auto w-full max-w-[680px] lg:max-w-none sm:px-6 sm:py-6", className)}>{children}</div>
);

/** Small floating card layered over a window. */
export const FloatCard: React.FC<{ className?: string; children: React.ReactNode; delay?: string }> = ({
  className, children, delay = "0s",
}) => (
  <div
    style={{ animationDelay: delay }}
    className={cn(
      "float-soft absolute z-20 hidden rounded-2xl border border-[#E8EDF3] bg-white/95 p-4 shadow-product backdrop-blur sm:block",
      className
    )}
  >
    {children}
  </div>
);

export const LiveDot: React.FC<{ className?: string }> = ({ className }) => (
  <span className={cn("relative flex h-2 w-2", className)}>
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-60" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E]" />
  </span>
);
