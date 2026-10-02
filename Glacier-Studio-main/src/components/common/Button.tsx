import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Apple SwiftUI Button Configuration Styles
 * - borderedProminent: Filled background with vibrant tint color (Primary actions)
 * - bordered: Tinted background fill with standard text (Secondary actions)
 * - borderless / plain: Text or icon only with translucent hover fill (Tertiary actions)
 * - dark: Dark glass filled prominent button
 */
export type SwiftUIStyle =
  | "borderedProminent"
  | "bordered"
  | "borderless"
  | "plain"
  | "dark";

/**
 * Apple SwiftUI Button Roles
 * - destructive: Dynamically colors text/background red for irreversible actions
 * - cancel: Formats layout to indicate dismissal or backing out of a flow
 */
export type SwiftUIRole = "normal" | "destructive" | "cancel";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "outline" | SwiftUIStyle;
  styleConfig?: SwiftUIStyle;
  role?: SwiftUIRole;
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  styleConfig,
  role = "normal",
  size = "md",
  href,
  children,
  className,
  icon,
  iconPosition = "right",
  ...props
}) => {
  // Resolve SwiftUI style configuration from either `styleConfig` or legacy `variant` mapping
  const resolvedStyle: SwiftUIStyle = styleConfig || (
    variant === "primary"
      ? "borderedProminent"
      : variant === "secondary"
      ? "bordered"
      : variant === "outline" || variant === "plain"
      ? "borderless"
      : variant === "dark"
      ? "dark"
      : (variant as SwiftUIStyle)
  );

  // Apple HIG System Button Base Styles (Tactile spring press, continuous rounded corners)
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#159FE5] focus-visible:ring-offset-2 active:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none rounded-2xl select-none";

  // Role-based overrides (HIG: destructive turns red, cancel formats layout)
  const roleStyles = {
    normal: "",
    destructive:
      "bg-red-500/10 text-red-600 border border-red-200 hover:bg-red-500 hover:text-white shadow-xs focus-visible:ring-red-500",
    cancel:
      "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 dark:bg-white/10 dark:border-white/15 dark:text-slate-300 dark:hover:bg-white/20",
  };

  // SwiftUI Style Variants
  const styleVariants: Record<SwiftUIStyle, string> = {
    // Primary: Filled background with vibrant tint color & glass top highlight
    borderedProminent:
      "bg-gradient-to-b from-[#159FE5] to-[#0867A5] text-white border border-[#159FE5]/50 shadow-md shadow-[#159FE5]/25 hover:shadow-lg hover:shadow-[#159FE5]/35 hover:brightness-110 hover:-translate-y-0.5",
    
    // Secondary: Tinted background fill with clear boundary definition
    bordered:
      "bg-[#EAF7FF] text-[#0867A5] border border-[#D5EDFA] hover:bg-[#159FE5]/15 hover:border-[#159FE5] hover:text-[#063B63] shadow-xs hover:-translate-y-0.5",
    
    // Tertiary / Minimal: Text or icon only with subtle hover pill fill
    borderless:
      "bg-transparent text-[#0867A5] hover:bg-[#159FE5]/10 hover:text-[#159FE5] border border-transparent",
    
    plain:
      "bg-transparent text-[#0867A5] hover:bg-[#159FE5]/10 hover:text-[#159FE5] border border-transparent",
    
    // Dark Glass Prominent
    dark:
      "bg-[#050505] text-white border border-white/15 hover:bg-[#0A1A28] hover:border-[#159FE5]/60 shadow-md hover:shadow-lg hover:shadow-[#063B63]/40 hover:-translate-y-0.5",
  };

  // Apple HIG Standard System Control Sizes
  const sizes = {
    sm: "h-8 px-3.5 text-xs font-semibold gap-1.5 rounded-full",
    md: "h-10 px-4.5 text-sm font-semibold gap-2 rounded-xl sm:rounded-2xl",
    lg: "h-12 px-6 text-sm sm:text-base font-bold gap-2.5 rounded-2xl sm:rounded-full",
  };

  // Apply role styles if role is not normal, otherwise apply resolved SwiftUI style
  const appliedStyle = role !== "normal" ? roleStyles[role] : styleVariants[resolvedStyle];

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, appliedStyle, sizes[size], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, appliedStyle, sizes[size], className)}
      {...props}
    >
      {content}
    </button>
  );
};
