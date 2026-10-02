import React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  subtext?: string;
  className?: string;
  dark?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  subtext,
  className,
  dark = false,
}) => {
  return (
    <div
      className={cn(
        "p-6 rounded-2xl border transition-all duration-200",
        dark
          ? "bg-[#063B63]/30 border-white/10 text-white"
          : "bg-white border-[#D5EDFA] text-[#111827] shadow-sm hover:border-[#159FE5]/40",
        className
      )}
    >
      <div className="text-3xl sm:text-4xl font-extrabold text-[#159FE5] tracking-tight mb-1">
        {value}
      </div>
      <div className="text-sm font-semibold tracking-wide uppercase opacity-90">
        {label}
      </div>
      {subtext && (
        <div
          className={cn(
            "text-xs mt-2",
            dark ? "text-[#94A3B8]" : "text-[#64748B]"
          )}
        >
          {subtext}
        </div>
      )}
    </div>
  );
};
