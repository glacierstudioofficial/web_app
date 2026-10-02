import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "ice" | "dark" | "outline";
  className?: string;
  dot?: boolean;
  withLines?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "ice",
  className,
  dot = false,
  withLines = false,
}) => {
  const variants = {
    ice: "bg-[#EAF7FF] text-[#0867A5] border border-[#BBE3FF]",
    blue: "bg-[#159FE5] text-white border border-[#159FE5]",
    dark: "bg-[#063B63]/80 text-[#EAF7FF] border border-[#159FE5]/40 backdrop-blur-md",
    outline: "bg-transparent text-[#0867A5] border border-[#159FE5]",
  };

  const badgeContent = (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-[0.22em] shadow-sm",
        variants[variant],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full animate-pulse",
            variant === "blue" ? "bg-white" : "bg-[#159FE5]"
          )}
        />
      )}
      {children}
    </span>
  );

  if (withLines) {
    return (
      <div className="inline-flex items-center gap-3">
        <span className="h-[1.5px] w-10 sm:w-16 bg-gradient-to-r from-transparent via-[#159FE5]/50 to-[#159FE5]" />
        {badgeContent}
        <span className="h-[1.5px] w-10 sm:w-16 bg-gradient-to-r from-[#159FE5] via-[#159FE5]/50 to-transparent" />
      </div>
    );
  }

  return badgeContent;
};

export const SectionBadge: React.FC<{ children: React.ReactNode; className?: string; dark?: boolean }> = ({
  children,
  className,
  dark = false,
}) => {
  return (
    <div className={cn("inline-flex items-center gap-3 justify-center", className)}>
      <span
        className={cn(
          "h-[1.5px] w-10 sm:w-16 bg-gradient-to-r",
          dark
            ? "from-transparent via-[#159FE5]/60 to-[#159FE5]"
            : "from-transparent via-[#159FE5]/50 to-[#159FE5]"
        )}
      />
      <span
        className={cn(
          "px-4 py-1.5 rounded-full text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-[0.22em] shadow-sm border transition-all duration-300",
          dark
            ? "bg-slate-950/80 text-cyan-300 border-cyan-400/40 backdrop-blur-xl shadow-lg"
            : "bg-[#EAF7FF] text-[#0867A5] border-[#BBE3FF]"
        )}
      >
        {children}
      </span>
      <span
        className={cn(
          "h-[1.5px] w-10 sm:w-16 bg-gradient-to-r",
          dark
            ? "from-[#159FE5] via-[#159FE5]/60 to-transparent"
            : "from-[#159FE5] via-[#159FE5]/50 to-transparent"
        )}
      />
    </div>
  );
};
