"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollTextHighlightProps {
  text: string;
  className?: string;
}

export const ScrollTextHighlight: React.FC<ScrollTextHighlightProps> = ({
  text,
  className,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const rawProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.8)));
            // Quantize to 0.01 step to avoid unnecessary re-renders
            const roundedProgress = Math.round(rawProgress * 100) / 100;
            setScrollProgress((prev) => (Math.abs(prev - roundedProgress) >= 0.02 ? roundedProgress : prev));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = text.split(" ");

  return (
    <h2
      ref={ref}
      className={cn(
        "text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] flex flex-wrap gap-x-2.5 gap-y-1",
        className
      )}
    >
      {words.map((word, idx) => {
        const wordThreshold = idx / words.length;
        const isHighlighted = scrollProgress >= wordThreshold;

        return (
          <span
            key={idx}
            className={cn(
              "transition-all duration-300 transform",
              isHighlighted
                ? "text-[#111827] opacity-100 translate-y-0"
                : "text-[#94A3B8]/40 opacity-30 translate-y-1"
            )}
          >
            {word}
          </span>
        );
      })}
    </h2>
  );
};
