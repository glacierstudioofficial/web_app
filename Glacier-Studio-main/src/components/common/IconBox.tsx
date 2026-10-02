import React from "react";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

interface IconBoxProps {
  iconName: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "ice" | "blue" | "dark";
}

export const IconBox: React.FC<IconBoxProps> = ({
  iconName,
  className,
  size = "md",
  variant = "ice",
}) => {
  // Dynamically resolve icon component from Lucide icons
  const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[iconName] || Icons.HelpCircle;

  const sizeClasses = {
    sm: "w-10 h-10 p-2 text-base",
    md: "w-12 h-12 p-2.5 text-xl",
    lg: "w-16 h-16 p-3.5 text-2xl",
  };

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 32,
  };

  const variantClasses = {
    ice: "bg-[#EAF7FF] text-[#0867A5] border border-[#D5EDFA] group-hover:bg-[#159FE5] group-hover:text-white transition-colors duration-200",
    blue: "bg-[#159FE5] text-white shadow-md shadow-[#159FE5]/20",
    dark: "bg-[#063B63] text-[#159FE5] border border-[#159FE5]/30",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-2xl shrink-0",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <IconComponent size={iconSizes[size]} strokeWidth={2} />
    </div>
  );
};
