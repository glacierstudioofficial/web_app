"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "pop" | "fade" | "none";
  once?: boolean;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -30px 0px" }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  const getAnimClass = () => {
    if (!isVisible) return "";
    switch (direction) {
      case "up":    return "reveal-up";
      case "down":  return "reveal-up"; // reuse
      case "left":  return "reveal-left";
      case "right": return "reveal-right";
      case "pop":   return "reveal-pop";
      case "fade":  return "reveal-fade";
      default:      return "reveal-fade";
    }
  };

  return (
    <div
      ref={ref}
      style={{ animationDelay: isVisible ? `${delay}ms` : "0ms" }}
      className={cn(
        "reveal-hidden",
        isVisible && getAnimClass(),
        className
      )}
    >
      {children}
    </div>
  );
};

/* ============================================
   Word-by-word animated text
   ============================================ */
interface AnimatedTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  baseDelay?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  wordClassName,
  delay = 0,
  baseDelay = 80,
  tag: Tag = "p",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -20px 0px" }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <div ref={ref}>
      <Tag className={cn("overflow-hidden", className)}>
        {words.map((word, i) => (
          <span
            key={i}
            className={cn(
              "inline-block mr-[0.28em] reveal-hidden",
              isVisible && "reveal-up",
              wordClassName
            )}
            style={{
              animationDelay: isVisible ? `${delay + i * baseDelay}ms` : "0ms",
            }}
          >
            {word}
          </span>
        ))}
      </Tag>
    </div>
  );
};
