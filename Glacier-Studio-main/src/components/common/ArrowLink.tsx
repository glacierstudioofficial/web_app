import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const ArrowLink: React.FC<ArrowLinkProps> = ({
  href,
  children,
  className,
  dark = false,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1.5 font-semibold text-sm group transition-colors duration-200",
        dark
          ? "text-[#159FE5] hover:text-white"
          : "text-[#0867A5] hover:text-[#159FE5]",
        className
      )}
    >
      <span>{children}</span>
      <ArrowRight
        size={16}
        className="transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  );
};
