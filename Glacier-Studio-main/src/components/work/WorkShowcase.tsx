"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bot,
  CandlestickChart,
  Check,
  GraduationCap,
  LayoutDashboard,
  MessageCircle,
  MessagesSquare,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeader, btnBase, btnPrimary, btnSecondary } from "@/components/service/ui";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { caseStudiesData, projectCategories } from "@/data/caseStudies";
import { siteConfig } from "@/data/site";
import { CaseStudyItem, ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────
   Helpers
───────────────────────────────────────── */
const iconMap: Record<string, React.ElementType> = {
  ShoppingBag,
  Bot,
  MessagesSquare,
  MessageCircle,
  GraduationCap,
  BadgeCheck,
  CandlestickChart,
  LayoutDashboard,
};

const categoryLabel: Record<ProjectCategory, string> = {
  ecommerce: "E-commerce",
  chatbot: "AI Chatbot",
  lms: "LMS",
  website: "Website",
  software: "Custom Software",
};

const whatsappLink = (title: string) =>
  `${siteConfig.socials.whatsapp}?text=${encodeURIComponent(
    `Hi Glacier Studio, I saw your "${title}" project and I'd like something similar. Can we talk?`
  )}`;

/* ─────────────────────────────────────────
   Visual: image, or a small UI mock-up per category
───────────────────────────────────────── */
const ProjectVisual: React.FC<{ project: CaseStudyItem; className?: string }> = ({ project, className }) => {
  const Icon = iconMap[project.iconName] ?? Sparkles;

  if (project.image) {
    return (
      <div className={cn("relative overflow-hidden bg-[#0B1220]", className)}>
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-[#063B63] via-[#0A5A8E] to-[#159FE5] flex items-center justify-center",
        className
      )}
      aria-hidden
    >
      {/* grid texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-white/10 blur-2xl" />

      <div className="relative w-[78%] max-w-[300px] transition-transform duration-500 group-hover:scale-105">
        {project.category === "chatbot" && (
          <div className="space-y-2.5">
            <div className="max-w-[78%] rounded-2xl rounded-bl-md bg-white/95 px-3.5 py-2 text-[11px] font-semibold text-[#111827] shadow-lg">
              Hi! How can I help you today?
            </div>
            <div className="ml-auto max-w-[70%] rounded-2xl rounded-br-md bg-[#0B1220] px-3.5 py-2 text-[11px] font-semibold text-white shadow-lg">
              Where is my order?
            </div>
            <div className="max-w-[46%] rounded-2xl rounded-bl-md bg-white/95 px-3.5 py-2.5 shadow-lg flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#159FE5] animate-pulse" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#159FE5] animate-pulse [animation-delay:150ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#159FE5] animate-pulse [animation-delay:300ms]" />
            </div>
          </div>
        )}

        {project.category === "lms" && (
          <div className="rounded-2xl bg-white/95 p-3.5 shadow-xl space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#159FE5] text-white flex items-center justify-center">
                <Icon size={20} />
              </div>
              <div className="flex-1 space-y-1.5">
                <div className="h-2 w-3/4 rounded bg-[#111827]/80" />
                <div className="h-1.5 w-1/2 rounded bg-[#111827]/25" />
              </div>
            </div>
            <div className="h-2 rounded-full bg-[#EAF7FF] overflow-hidden">
              <div className="h-full w-2/3 rounded-full bg-[#159FE5]" />
            </div>
            <div className="flex items-center justify-between text-[10px] font-bold text-[#0867A5]">
              <span>Lesson 8 of 12</span>
              <span className="inline-flex items-center gap-1">
                <BadgeCheck size={12} /> Certificate
              </span>
            </div>
          </div>
        )}

        {project.category === "software" && (
          <div className="rounded-2xl bg-white/95 p-3.5 shadow-xl space-y-3">
            <div className="flex items-end gap-1.5 h-16">
              {[38, 60, 44, 78, 56, 92, 70].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-[#159FE5] to-[#7CCBF5]" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-full rounded bg-[#111827]/15" />
              <div className="h-1.5 w-5/6 rounded bg-[#111827]/15" />
              <div className="h-1.5 w-2/3 rounded bg-[#111827]/15" />
            </div>
          </div>
        )}

        {project.category === "website" && (
          <div className="rounded-xl bg-[#0B1220] shadow-xl overflow-hidden border border-white/15">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#FF6677]" />
              <span className="w-2 h-2 rounded-full bg-[#FF9B54]" />
              <span className="w-2 h-2 rounded-full bg-[#CBFF4D]" />
            </div>
            <div className="p-3.5 flex items-end gap-1.5 h-24">
              {[30, 55, 40, 70, 52, 85, 62, 96].map((h, i) => (
                <div
                  key={i}
                  className={cn("flex-1 rounded-sm", i % 3 === 1 ? "bg-[#FF6677]" : "bg-[#CBFF4D]")}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        )}

        {project.category === "ecommerce" && (
          <div className="grid grid-cols-2 gap-2.5">
            {[0, 1].map((i) => (
              <div key={i} className="rounded-xl bg-white/95 p-2.5 shadow-lg space-y-2">
                <div className="aspect-square rounded-lg bg-[#EAF7FF] flex items-center justify-center text-[#159FE5]">
                  <Icon size={26} />
                </div>
                <div className="h-1.5 w-3/4 rounded bg-[#111827]/70" />
                <div className="h-1.5 w-1/3 rounded bg-[#159FE5]" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   Detail modal
───────────────────────────────────────── */
const ProjectModal: React.FC<{ project: CaseStudyItem; onClose: () => void }> = ({ project, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-[#070B14]/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="relative w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto bg-white rounded-t-[1.75rem] sm:rounded-[1.75rem] shadow-product"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-[#0B1220] ring-1 ring-black/5 shadow-md flex items-center justify-center hover:bg-white transition-colors"
        >
          <X size={16} />
        </button>

        <ProjectVisual project={project} className="h-52 sm:h-72" />

        <div className="p-6 sm:p-10 space-y-8">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-[12px] font-medium">
              <span className="px-2.5 py-1 rounded-full bg-[#F0F9FF] text-[#0867A5] ring-1 ring-[#BAE6FD]/70">
                {categoryLabel[project.category]}
              </span>
              <span className="text-[#64748B]">{project.industry}</span>
            </div>
            <h3 className="text-2xl sm:text-[2rem] font-bold text-[#0B1220] tracking-[-0.035em] leading-tight">{project.title}</h3>
            <p className="text-[15px] text-[#64748B]">{project.client}</p>
          </div>

          <div className="grid grid-cols-3 divide-x divide-[#EEF2F6] rounded-2xl border border-[#EEF2F6]">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-4 sm:p-5">
                <div className="text-xl sm:text-2xl font-bold tracking-[-0.03em] text-[#0B1220]">{m.value}</div>
                <div className="text-[12px] font-medium text-[#64748B] mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0867A5]">The challenge</div>
              <p className="text-[15px] text-[#475569] leading-relaxed">{project.challenge}</p>
            </div>
            <div className="space-y-2">
              <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0867A5]">What we built</div>
              <p className="text-[15px] text-[#475569] leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0867A5]">Key features</div>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[14px] text-[#334155] leading-snug">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#F0F9FF] text-[#159FE5]">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full bg-[#F8FAFC] ring-1 ring-[#E8EDF3] text-[12.5px] font-medium text-[#334155]">
                {t}
              </span>
            ))}
          </div>

          <div className="pt-6 border-t border-[#EEF2F6] flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className={cn(btnBase, btnPrimary)}>
              Get something like this <ArrowRight size={16} />
            </Link>
            <a
              href={whatsappLink(project.title)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(btnBase, btnSecondary)}
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   Main showcase
───────────────────────────────────────── */
export const WorkShowcase: React.FC = () => {
  const [active, setActive] = useState<"all" | ProjectCategory>("all");
  const [selected, setSelected] = useState<CaseStudyItem | null>(null);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: caseStudiesData.length };
    caseStudiesData.forEach((p) => (c[p.category] = (c[p.category] ?? 0) + 1));
    return c;
  }, []);

  const visible = useMemo(() => {
    const list = active === "all" ? caseStudiesData : caseStudiesData.filter((p) => p.category === active);
    // featured first, keeps original order otherwise
    return [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }, [active]);

  return (
    <section className="relative bg-[#F7F9FC] py-24 sm:py-32 scroll-mt-20" id="projects">
      <Container size="large">
        <SectionHeader
          eyebrow="Selected projects"
          title="Real products, shipped and running."
          description="Filter by what you're planning to build. Open any project to see the challenge, what we built and the stack behind it."
        />

        {/* Segmented filter */}
        <div className="-mx-4 mb-10 overflow-x-auto px-4 no-scrollbar sm:mx-0 sm:px-0">
          <div className="inline-flex gap-1 rounded-full border border-[#E8EDF3] bg-white p-1 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            {projectCategories
              .filter((c) => (counts[c.id] ?? 0) > 0)
              .map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  aria-pressed={active === c.id}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-2 h-9 px-4 rounded-full text-[13.5px] font-semibold whitespace-nowrap transition-all duration-200",
                    active === c.id
                      ? "bg-[#0B1220] text-white shadow-sm"
                      : "text-[#475569] hover:text-[#0B1220] hover:bg-[#F1F5F9]"
                  )}
                >
                  {c.label}
                  <span className={cn("font-mono text-[11px]", active === c.id ? "text-white/50" : "text-[#94A3B8]")}>
                    {counts[c.id]}
                  </span>
                </button>
              ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {visible.map((project, idx) => (
            <ScrollReveal key={`${active}-${project.id}`} delay={(idx % 3) * 80} direction="up" className="h-full">
              <article className="group relative h-full flex flex-col overflow-hidden rounded-3xl border border-[#E8EDF3] bg-white transition-all duration-300 hover:border-[#BFE3F7] hover:shadow-[0_24px_48px_-24px_rgba(8,103,165,0.3)]">
                <div className="relative m-2 overflow-hidden rounded-[1.25rem]">
                  <ProjectVisual project={project} className="h-56" />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-white/95 text-[11.5px] font-semibold text-[#0B1220] shadow-sm backdrop-blur">
                      {categoryLabel[project.category]}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0B1220]/80 backdrop-blur text-[11.5px] font-semibold text-white">
                        <Sparkles size={11} className="text-[#7DD3FC]" /> Featured
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col flex-1 px-6 pb-6 pt-4 sm:px-7 sm:pb-7">
                  <div className="text-[12.5px] font-medium text-[#64748B]">{project.client}</div>
                  <h3 className="mt-1.5 text-xl font-semibold tracking-[-0.02em] text-[#0B1220] leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] text-[#64748B] leading-relaxed">{project.tagline}</p>

                  <div className="mt-6 grid grid-cols-3 divide-x divide-[#EEF2F6] border-y border-[#EEF2F6]">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="px-3 py-3 first:pl-0">
                        <div className="text-[17px] font-bold tracking-[-0.02em] text-[#0B1220] leading-tight">{m.value}</div>
                        <div className="mt-0.5 text-[11px] font-medium text-[#64748B] leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full bg-[#F8FAFC] ring-1 ring-[#E8EDF3] text-[11.5px] font-medium text-[#475569]">
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1 rounded-full bg-[#F8FAFC] ring-1 ring-[#E8EDF3] text-[11.5px] font-medium text-[#94A3B8]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* The ::after overlay makes the whole card clickable */}
                  <button
                    onClick={() => setSelected(project)}
                    className="mt-auto pt-6 inline-flex items-center gap-1.5 self-start text-[14px] font-semibold text-[#0B1220] after:absolute after:inset-0 after:content-['']"
                  >
                    View case study
                    <ArrowUpRight size={16} className="text-[#159FE5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};
