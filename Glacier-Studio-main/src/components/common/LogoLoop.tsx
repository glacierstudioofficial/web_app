"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface LogoItem {
  node?: React.ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number; // lower number = faster, default 80
  direction?: "left" | "right" | "up" | "down";
  logoHeight?: number; // default 48
  gap?: number; // default 40
  hoverSpeed?: number; // e.g. 0 to pause
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string; // e.g. "#ffffff" or "#0B0F17"
  ariaLabel?: string;
  className?: string;
}

export const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 80,
  direction = "left",
  logoHeight = 48,
  gap = 40,
  hoverSpeed,
  scaleOnHover = false,
  fadeOut = true,
  fadeOutColor = "#0B0F17",
  ariaLabel = "Technology partners and logos",
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate logos array for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  const isVertical = direction === "up" || direction === "down";

  // Calculate animation duration based on speed
  const duration = Math.max(10, Math.round(1000 / (speed || 80)));

  // Animation direction CSS name
  const animName =
    direction === "left"
      ? "loopLeft"
      : direction === "right"
      ? "loopRight"
      : direction === "up"
      ? "loopUp"
      : "loopDown";

  // Effective duration when hovered
  let currentDuration = duration;
  if (isHovered && hoverSpeed !== undefined) {
    if (hoverSpeed === 0) {
      // Paused state handled via inline style
    } else {
      currentDuration = Math.max(10, Math.round(1000 / hoverSpeed));
    }
  }

  return (
    <div
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden w-full ${isVertical ? "h-full min-h-[200px]" : "py-3"} ${className}`}
    >
      {/* Inline styles for keyframe animations */}
      <style jsx>{`
        @keyframes loopLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes loopRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes loopUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes loopDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>

      {/* Fade Out Edge Gradients */}
      {fadeOut && !isVertical && (
        <>
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
            }}
          />
        </>
      )}

      {fadeOut && isVertical && (
        <>
          <div
            className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, ${fadeOutColor}, transparent)`,
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to top, ${fadeOutColor}, transparent)`,
            }}
          />
        </>
      )}

      {/* Track */}
      <div
        className={`flex ${isVertical ? "flex-col items-center" : "flex-row items-center"} w-max`}
        style={{
          gap: `${gap}px`,
          animation: `${animName} ${currentDuration}s linear infinite`,
          animationPlayState: isHovered && hoverSpeed === 0 ? "paused" : "running",
          willChange: "transform",
        }}
      >
        {duplicatedLogos.map((item, idx) => {
          const content = (
            <div
              key={idx}
              title={item.title || item.alt}
              className={`flex items-center justify-center shrink-0 transition-all duration-200 ${
                scaleOnHover ? "hover:scale-110" : ""
              }`}
              style={{
                height: `${logoHeight}px`,
              }}
            >
              {item.node ? (
                <div className="flex items-center justify-center shrink-0 transition-opacity duration-200 hover:opacity-90">
                  {item.node}
                </div>
              ) : item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt || item.title || "Logo"}
                  width={logoHeight * 2}
                  height={logoHeight}
                  className="max-h-full w-auto object-contain"
                />
              ) : (
                <span className="text-sm font-semibold">{item.title}</span>
              )}
            </div>
          );

          if (item.href) {
            return (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center"
              >
                {content}
              </a>
            );
          }

          return content;
        })}
      </div>
    </div>
  );
};

export default LogoLoop;
