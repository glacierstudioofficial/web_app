"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ServiceItem } from "@/types";
import { IconBox } from "@/components/common/IconBox";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  compact?: boolean;
  showMetrics?: boolean;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  compact = false,
  showMetrics = false,
  className,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Dynamic radial gradient background spotlight
  const spotlightBg = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(21, 159, 229, 0.12), transparent 80%)`;
  const spotlightBorder = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(21, 159, 229, 0.5), transparent 70%)`;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 45, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      whileHover={{ y: -8 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative rounded-3xl p-[1px] transition-shadow duration-500 h-full flex flex-col",
        isHovered
          ? "shadow-[0_20px_50px_-15px_rgba(21,159,229,0.22)]"
          : "shadow-sm shadow-[#0867A5]/5",
        className
      )}
    >
      {/* Dynamic Cursor Spotlight Border */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 z-10"
        style={{
          background: spotlightBorder,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Default Static Border fallback */}
      <div
        className={cn(
          "absolute inset-0 rounded-3xl border transition-colors duration-300 pointer-events-none",
          isHovered ? "border-[#159FE5]/50" : "border-[#D5EDFA]"
        )}
      />

      {/* Main Card Surface */}
      <div className="relative z-0 bg-gradient-to-b from-white via-[#FAFDFE] to-[#F3F9FE] rounded-[23px] p-6 sm:p-7 flex flex-col h-full overflow-hidden">
        {/* Top Active Shimmer Line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#159FE5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Ambient Light Orb in background */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#159FE5]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#159FE5]/20 transition-all duration-500" />

        {/* Mouse Spotlight Overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: spotlightBg,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Header: Icon Box & Badge */}
        <div className="flex items-center justify-between gap-4 mb-5 relative z-10">
          <div className="relative">
            <div className="absolute -inset-1 bg-[#159FE5]/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-300">
              <IconBox iconName={service.iconName} size="md" variant="ice" />
            </div>
          </div>

          {service.badge && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF7FF] text-[#0867A5] text-[11px] font-bold uppercase tracking-wider border border-[#D5EDFA] shadow-xs group-hover:border-[#159FE5]/40 transition-colors duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#159FE5] animate-pulse" />
              <span>{service.badge}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-black text-[#111827] group-hover:text-[#0867A5] transition-colors duration-300 tracking-tight mb-3 relative z-10">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#64748B] leading-relaxed mb-6 relative z-10 font-normal">
          {compact ? service.shortDescription : service.fullDescription || service.shortDescription}
        </p>

        {/* Key Metrics Grid (if enabled) */}
        {showMetrics && service.metrics && service.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2.5 mb-6 relative z-10">
            {service.metrics.map((m, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-xs p-3 rounded-2xl border border-[#D5EDFA] shadow-xs group-hover:border-[#159FE5]/30 transition-colors duration-300"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] mb-0.5">
                  {m.label}
                </div>
                <div className="text-base font-extrabold text-[#159FE5] flex items-center gap-1">
                  <span>{m.value}</span>
                  <Sparkles size={11} className="text-[#159FE5]/70" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Feature List */}
        <div className="pt-4 border-t border-[#D5EDFA]/70 mt-auto relative z-10">
          <ul className="space-y-2.5">
            {(compact ? service.features.slice(0, 3) : service.features).map((feat, fIdx) => (
              <li
                key={fIdx}
                className="flex items-start gap-2.5 text-xs font-semibold text-[#334155] group-hover:text-[#111827] transition-colors duration-200"
              >
                <div className="mt-0.5 rounded-full p-0.5 bg-[#EAF7FF] text-[#159FE5] shrink-0 border border-[#D5EDFA] group-hover:border-[#159FE5]/40 transition-colors duration-200">
                  <CheckCircle2 size={12} strokeWidth={2.5} />
                </div>
                <span className="leading-snug">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Link Footer */}
        <div className="pt-6 mt-5 relative z-10">
          <Link
            href={service.href}
            className="group/btn inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white/80 hover:bg-[#159FE5] text-[#0867A5] hover:text-white border border-[#D5EDFA] hover:border-[#159FE5] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xs"
          >
            <span>Learn More</span>
            <div className="w-6 h-6 rounded-full bg-[#EAF7FF] group-hover/btn:bg-white/20 flex items-center justify-center transition-colors duration-200">
              <ArrowRight
                size={14}
                className="group-hover/btn:translate-x-0.5 transition-transform duration-200"
              />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
