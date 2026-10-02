"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, ArrowRight, Phone, Mail } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/common/Button";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#050505]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#D5EDFA]">
            <Link href="/" onClick={onClose} className="flex items-center gap-2">
              <Image
                src="/navlogo.webp"
                alt="Glacier Studio Logo"
                width={180}
                height={48}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <button
              onClick={onClose}
              className="p-2 text-[#64748B] hover:text-[#111827] rounded-lg border border-[#D5EDFA] hover:bg-[#F2FAFF]"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <nav className="py-6 space-y-1">
            {mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-base transition-colors",
                    isActive
                      ? "bg-[#EAF7FF] text-[#159FE5]"
                      : "text-[#111827] hover:bg-[#F2FAFF] hover:text-[#0867A5]"
                  )}
                >
                  <span>{item.label}</span>
                  <ArrowRight size={16} className={isActive ? "text-[#159FE5]" : "text-[#94A3B8]"} />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="space-y-4 pt-6 border-t border-[#D5EDFA]">
          <Button
            href="/about#contact"
            variant="primary"
            size="lg"
            className="w-full"
            onClick={onClose}
            icon={<ArrowRight size={18} />}
          >
            Get Started
          </Button>

          <div className="pt-2 space-y-2 text-xs text-[#64748B]">
            <a
              href={`tel:${siteConfig.contact.phoneClean}`}
              className="flex items-center gap-2 hover:text-[#159FE5]"
            >
              <Phone size={14} className="text-[#159FE5]" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 hover:text-[#159FE5]"
            >
              <Mail size={14} className="text-[#159FE5]" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
