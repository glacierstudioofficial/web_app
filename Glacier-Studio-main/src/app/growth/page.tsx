import { ServicePage } from "@/components/service/ServicePage";
import { GrowthVisual } from "@/components/service/visuals/GrowthVisual";
import type { ServicePageConfig } from "@/components/service/types";
import { constructMetadata } from "@/lib/seo";
import { TrendingUp, Search, Share2, Target, BarChart2, Award } from "lucide-react";

export const metadata = constructMetadata({
  title: "Glacier Studio Growth | SEO, Google Ads & Digital Marketing",
  description:
    "Data-driven SEO strategies, precision Google Ads management, conversion rate optimization, and multi-channel digital growth campaigns.",
  canonical: "/growth",
});

const config: ServicePageConfig = {
  href: "/growth",
  name: "SEO & Growth",
  hero: {
    eyebrow: "Measurable digital growth",
    icon: TrendingUp,
    title: "Turn traffic into measurable business growth.",
    highlight: "measurable business growth.",
    description:
      "Technical SEO, strategic PPC and conversion optimization working as one compounding engine — reported weekly, attributed to revenue.",
    primaryCta: { label: "Scale your growth", href: "/contact" },
    secondaryCta: { label: "See benchmarks", href: "#capabilities" },
    trust: ["No lock-in contracts", "Weekly GA4 reports", "Dedicated manager"],
    visual: <GrowthVisual />,
  },
  metrics: [
    { value: "4.2x", label: "Average ROAS", caption: "Managed search ads" },
    { value: "+240%", label: "Organic reach", caption: "Within 120 days of SEO" },
    { value: "-38%", label: "Cost per acquisition", caption: "Via CRO optimization" },
    { value: "99.4%", label: "Attribution precision", caption: "GA4 multi-touch" },
  ],
  capabilities: {
    eyebrow: "Growth pillars",
    title: "Six channels. One compounding growth engine.",
    description:
      "Integrated SEO, ads and content — every channel feeding data to the next, so growth compounds instead of plateauing.",
    items: [
      {
        title: "Technical SEO & Ranking Domination",
        description: "Page speed, schema markup and keyword positioning engineered to capture a dominant share of organic search in your category.",
        icon: Search,
        metric: "+240% organic",
        features: ["Technical audits", "Schema & Core Web Vitals", "Keyword strategy"],
      },
      {
        title: "Google Ads & High-ROAS PPC",
        description: "Search, Display and Shopping campaigns targeting high-intent buyers.",
        icon: TrendingUp,
        metric: "4.2x ROAS",
        features: ["Smart bidding", "Negative keywords"],
      },
      {
        title: "Conversion Rate Optimization",
        description: "A/B testing, journey mapping and frictionless UX that turns visitors into clients.",
        icon: Target,
        metric: "3.5x lift",
        features: ["A/B testing", "Landing pages"],
      },
      {
        title: "Social Media & Visual Brand Growth",
        description: "Strategic content systems, brand storytelling and video assets across LinkedIn, Instagram and X — built to earn attention, not just impressions.",
        icon: Share2,
        metric: "+180% engagement",
        features: ["Content calendars", "Short-form video", "Community growth"],
      },
      {
        title: "Attribution & Analytics",
        description: "GA4 event tracking, custom reporting dashboards and insights you can act on.",
        icon: BarChart2,
        metric: "100% attribution",
        features: ["GA4 & GTM", "Custom dashboards"],
      },
      {
        title: "Content Marketing & Authority",
        description: "High-value technical articles, case studies and lead magnets that establish you as the obvious leader in your industry — and keep ranking for years.",
        icon: Award,
        features: ["Pillar content", "Case studies", "Lead magnets"],
      },
    ],
  },
  process: {
    eyebrow: "The growth loop",
    title: "A system, not a set of one-off campaigns.",
    description: "Every engagement runs on the same loop — so each month builds on the last.",
    steps: [
      { title: "Audit & baseline", description: "Technical SEO audit, ad account review and full tracking setup so every result is measurable.", duration: "Week 1–2" },
      { title: "Strategy & roadmap", description: "Keyword, channel and content plan prioritised by revenue impact, not vanity metrics.", duration: "Week 2" },
      { title: "Launch & optimize", description: "Campaigns, content and landing pages go live, with weekly testing and bid adjustments.", duration: "Monthly" },
      { title: "Report & compound", description: "Weekly GA4-attributed reports and a monthly strategy review to double down on what works.", duration: "Weekly" },
    ],
  },
  faqs: [
    { question: "Are there long-term contracts?", answer: "No. Engagements are performance-based and month-to-month — we earn the renewal every month." },
    { question: "How quickly will we see SEO results?", answer: "Technical fixes often show impact within weeks; compounding organic growth typically builds over three to six months." },
    { question: "Who manages our account?", answer: "A dedicated campaign manager who knows your business — not a rotating pool of account reps." },
    { question: "Is landing page optimization included?", answer: "Yes. CRO on your landing pages is included with every paid media campaign." },
  ],
  cta: {
    title: "Let's make growth predictable.",
    description: "Get a free audit of your SEO and ad accounts, with the three highest-impact fixes we'd make first.",
    label: "Get a free growth audit",
  },
};

export default function GrowthPage() {
  return <ServicePage config={config} />;
}
