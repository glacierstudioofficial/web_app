import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface ServiceCta {
  label: string;
  href: string;
}

export interface ServiceCapability {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  /** Optional short proof point shown as a tag on the card */
  metric?: string;
}

export interface ServiceStep {
  title: string;
  description: string;
  /** e.g. "Week 1" — optional timing hint */
  duration?: string;
}

export interface ServiceStackGroup {
  category: string;
  tools: string[];
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServicePageConfig {
  /** Route of the current page; used to exclude it from "related" links */
  href: string;
  /** Short name used in the breadcrumb, e.g. "Web Development" */
  name: string;
  hero: {
    eyebrow: string;
    icon: LucideIcon;
    title: string;
    highlight?: string;
    description: string;
    primaryCta: ServiceCta;
    secondaryCta?: ServiceCta;
    trust: string[];
    visual: ReactNode;
  };
  metrics: { value: string; label: string; caption?: string }[];
  capabilities: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceCapability[];
  };
  /** Optional full-bleed section rendered after the capabilities grid */
  showcase?: ReactNode;
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ServiceStep[];
  };
  stack?: {
    eyebrow: string;
    title: string;
    description: string;
    groups: ServiceStackGroup[];
  };
  faqs: ServiceFaq[];
  cta: {
    title: string;
    description: string;
    label: string;
  };
}
