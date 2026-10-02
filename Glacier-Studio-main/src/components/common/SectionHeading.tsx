"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Badge, SectionBadge } from "./Badge";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
  dark = false,
}) => {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <ScrollReveal direction="up" delay={50}>
      <div
        className={cn(
          "max-w-3xl space-y-4",
          align === "center" ? "mx-auto text-center" : "text-left",
          className
        )}
      >
        {eyebrow && (
          <div>
            <SectionBadge dark={dark}>{eyebrow}</SectionBadge>
          </div>
        )}

        <h2
          className={cn(
            "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]",
            dark ? "text-white" : "text-[#111827]"
          )}
        >
          {highlight && parts.length > 1 ? (
            <>
              {parts[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#159FE5] to-[#0867A5]">
                {highlight}
              </span>
              {parts[1]}
            </>
          ) : (
            title
          )}
        </h2>

        {description && (
          <p
            className={cn(
              "text-base sm:text-lg leading-relaxed max-w-2xl",
              align === "center" && "mx-auto",
              dark ? "text-[#94A3B8]" : "text-[#64748B]"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
};
