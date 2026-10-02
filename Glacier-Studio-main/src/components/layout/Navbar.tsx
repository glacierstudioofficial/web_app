"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/common/Button";

/* ─────────────────────────────────────────
   NAV DATA
───────────────────────────────────────── */
const navItems = [
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      { label: "Web Development", href: "/development", desc: "Next.js apps & custom software" },
      { label: "AI & Automation", href: "/ai-automation", desc: "Intelligent business workflows" },
      { label: "SEO & Growth", href: "/growth", desc: "Rank higher, convert faster" },
      { label: "Video & Design", href: "/video-design", desc: "Motion, branding & UI design" },
      { label: "Google & Meta Ads", href: "/google-ads", desc: "High-ROAS paid search & social campaigns" },
      { label: "Custom Software", href: "/custom-software", desc: "Scalable SaaS & internal tools" },
    ],
  },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/* ─────────────────────────────────────────
   DROPDOWN PANEL  (2-column, no icons)
───────────────────────────────────────── */
interface DropItem { label: string; href: string; desc: string; }

const DropdownPanel: React.FC<{ items: DropItem[]; visible: boolean }> = ({ items, visible }) => (
  <div
    className={cn(
      "absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[480px] origin-top transition-all duration-200 ease-out z-50 pointer-events-none",
      visible
        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
        : "opacity-0 scale-[0.97] -translate-y-1"
    )}
  >
    {/* Caret */}
    <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-[14px] h-[14px] bg-white border-l border-t border-[#E5E7EB] rotate-45 shadow-none z-10" />

    {/* Panel */}
    <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-xl shadow-black/8 overflow-hidden">
      <div className="grid grid-cols-2 gap-px bg-[#F3F4F6] p-px">
        {items.map((item) => (
          <Link
            key={item.label + item.href}
            href={item.href}
            className="group bg-white px-4 py-4 hover:bg-[#F9FAFB] transition-colors duration-150 flex flex-col gap-1"
          >
            <span className="text-[13.5px] font-semibold text-[#111827] group-hover:text-[#159FE5] transition-colors duration-150 leading-snug">
              {item.label}
            </span>
            <span className="text-[12px] text-[#6B7280] leading-snug font-normal">
              {item.desc}
            </span>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   MAIN NAVBAR
───────────────────────────────────────── */
export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let ticking = false;
    const fn = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isPast = window.scrollY > 20;
          setScrolled((prev) => (prev !== isPast ? isPast : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const open = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };
  const close = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 100);
  };

  /* ── Header styling ── */
  return (
    <>
      {/* ════════════ HEADER ════════════ */}
      <header
        suppressHydrationWarning
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-sm"
            : "bg-white/80 backdrop-blur-md border-b border-[#E5E7EB]/60"
        )}
        style={{ boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.05)" : "none" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center h-[68px] gap-8">

          {/* ── LOGO ── */}
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/navlogo.webp"
              alt="Glacier Studio"
              width={180}
              height={48}
              priority
              className="h-[46px] sm:h-[48px] w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* ── NAV LINKS (desktop) ── */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) => {
              const isSolutions = item.href === "/solutions";
              const isActive = isSolutions
                ? ["/solutions", "/development", "/ai-automation", "/growth", "/video-design", "/google-ads", "/custom-software"].some((p) => pathname.startsWith(p))
                : pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              const hasDropdown = !!item.dropdown;
              const isOpen = activeDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && open(item.label)}
                  onMouseLeave={close}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-1 px-3.5 py-2 text-[14px] font-medium rounded-lg transition-colors duration-150 select-none",
                      isActive
                        ? "text-[#111827] font-semibold"
                        : "text-[#4B5563] hover:text-[#111827] hover:bg-[#F3F4F6]"
                    )}
                  >
                    {item.label}
                    {hasDropdown && (
                      <ChevronDown
                        size={14}
                        strokeWidth={2}
                        className={cn(
                          "transition-transform duration-200",
                          isOpen && "rotate-180",
                          "text-[#9CA3AF]"
                        )}
                      />
                    )}
                  </Link>

                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full bg-[#111827]" />
                  )}

                  {hasDropdown && item.dropdown && (
                    <DropdownPanel items={item.dropdown} visible={isOpen} />
                  )}
                </div>
              );
            })}
          </nav>

          {/* ── RIGHT CTAs (desktop) ── */}
          <div className="hidden lg:flex items-center gap-2 shrink-0 ml-auto">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight size={14} strokeWidth={2.5} />}
            >
              Start for free
            </Button>
          </div>

          {/* ── MOBILE TOGGLE ── */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className="lg:hidden ml-auto p-2 rounded-lg transition-colors text-[#374151] hover:bg-[#F3F4F6]"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* ════════════ MOBILE DRAWER ════════════ */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          className={cn(
            "absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Panel */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[min(340px,88vw)] bg-white border-l border-[#E5E7EB] shadow-2xl flex flex-col transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#F3F4F6]">
            <Image src="/logo.webp" alt="Glacier Studio" width={130} height={32} className="h-8 w-auto object-contain" />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1.5 rounded-lg text-[#6B7280] hover:bg-[#F3F4F6] transition-colors"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-0.5">
            {navItems.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <React.Fragment key={item.label + idx}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-3 py-3 rounded-lg text-[15px] font-semibold transition-colors",
                      isActive
                        ? "bg-[#F3F4F6] text-[#111827]"
                        : "text-[#374151] hover:bg-[#F9FAFB] hover:text-[#111827]"
                    )}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={14} className="text-[#D1D5DB]" />
                  </Link>

                  {item.dropdown && (
                    <div className="pl-3 ml-2 border-l border-[#F3F4F6] space-y-0.5 pb-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label + sub.href}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-[#F9FAFB] transition-colors"
                        >
                          <span className="text-[13px] font-semibold text-[#374151]">{sub.label}</span>
                          <span className="text-[11px] text-[#9CA3AF] leading-snug">{sub.desc}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          {/* Footer CTA */}
          <div className="px-5 py-5 border-t border-[#F3F4F6] space-y-3">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              icon={<ArrowRight size={15} strokeWidth={2.5} />}
              className="w-full"
              onClick={() => setMobileOpen(false)}
            >
              Start for free
            </Button>
            <p className="text-center text-[11px] text-[#9CA3AF]">Free consultation · No commitment</p>
          </div>
        </div>
      </div>
    </>
  );
};
