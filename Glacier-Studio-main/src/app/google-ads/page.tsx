import Image from "next/image";
import { ServicePage, ShowcaseSection } from "@/components/service/ServicePage";
import { AdsVisual } from "@/components/service/visuals/AdsVisual";
import type { ServicePageConfig } from "@/components/service/types";
import { AdsDashboardPreview } from "@/components/ads/AdsDashboardPreview";
import { constructMetadata } from "@/lib/seo";
import { Target, DollarSign, BarChart3, Search, MousePointerClick, Users, Megaphone } from "lucide-react";

export const metadata = constructMetadata({
  title: "Google & Meta Ads (PPC) Management | Glacier Studio",
  description:
    "Data-backed pay-per-click management across Google Search, PMax, YouTube, Facebook, and Instagram. Drive high ROAS with live conversion optimization.",
  canonical: "/google-ads",
});

const config: ServicePageConfig = {
  href: "/google-ads",
  name: "Google & Meta Ads",
  hero: {
    eyebrow: "High-performance paid media",
    icon: Megaphone,
    title: "Stop wasting ad spend. Scale profit with Google & Meta.",
    highlight: "Google & Meta.",
    description:
      "Search, Performance Max, YouTube, Facebook and Instagram Reels — managed as one portfolio and optimized daily for return on ad spend.",
    primaryCta: { label: "Get a free ads audit", href: "/contact" },
    secondaryCta: { label: "View live dashboard", href: "#dashboard" },
    trust: ["Google Ads partner", "Meta business partner", "Server-side tracking"],
    visual: <AdsVisual />,
  },
  metrics: [
    { value: "5.4x", label: "Average campaign ROAS", caption: "Return on ad spend" },
    { value: "-38%", label: "CPA reduction", caption: "Cost per acquisition" },
    { value: "+185%", label: "Qualified leads", caption: "Month over month" },
    { value: "100%", label: "CAPI attribution", caption: "Server-side tracking" },
  ],
  capabilities: {
    eyebrow: "Paid media capabilities",
    title: "Full-spectrum Google & Meta Ads growth.",
    description:
      "Rigorous creative testing, server-side conversion tracking and automated bid management — across every placement that matters.",
    items: [
      {
        title: "Google Search & Smart Bidding",
        description: "Capture high-intent searches with precise keyword targeting, automated smart bidding and ruthless negative-keyword filtering.",
        icon: Search,
        features: ["Exact-match intent", "Negative keyword scrubbing", "Automated smart bidding"],
      },
      {
        title: "Meta Reels & Feed Ads",
        description: "Short-form video campaigns across Instagram Reels, Facebook and Advantage+.",
        icon: Target,
        features: ["Advantage+ audiences", "Creative testing"],
      },
      {
        title: "Shopping & Performance Max",
        description: "Feed management, title enhancement and segment pricing for e-commerce.",
        icon: DollarSign,
        features: ["Merchant Center", "PMax"],
      },
      {
        title: "Retargeting & Custom Audiences",
        description: "Re-engage lost visitors and scale high-value lookalikes across Meta with dynamic catalog ads and server-side event matching.",
        icon: Users,
        features: ["Dynamic catalog ads", "Lookalike scaling", "Conversions API sync"],
      },
      {
        title: "High-Converting Landing Pages",
        description: "Fast landing pages built to lift Quality Score and conversion rate.",
        icon: MousePointerClick,
        features: ["Headline matching", "< 1s load"],
      },
      {
        title: "Multi-Touch Attribution & GA4",
        description: "Complete conversion tracking with GA4, server-side Tag Manager and Meta Conversions API — so every rupee is attributed to real revenue.",
        icon: BarChart3,
        features: ["Server-side GTM", "Custom GA4 dashboards", "Offline conversion sync"],
      },
    ],
  },
  showcase: (
    <ShowcaseSection
      id="dashboard"
      eyebrow="Live demo"
      title="One dashboard for every channel."
      description="Track ROAS, Conversions API events and cross-channel attribution in real time — the same view we use to optimize your spend."
    >
      <div className="mb-10 flex flex-wrap items-center gap-x-10 gap-y-4">
        {[
          { src: "/googleadslogo.webp", label: "Google Ads Certified Partner" },
          { src: "/metalogo.webp", label: "Meta Business Partner" },
        ].map((p) => (
          <div key={p.label} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
              <Image src={p.src} alt="" width={22} height={22} className="object-contain" />
            </span>
            <span className="text-sm font-semibold text-white/80">{p.label}</span>
          </div>
        ))}
      </div>
      <AdsDashboardPreview />
    </ShowcaseSection>
  ),
  process: {
    eyebrow: "How we scale spend",
    title: "Audit. Rebuild. Test. Scale.",
    description: "We don't touch budgets until tracking is right — then we scale only what's proven to be profitable.",
    steps: [
      { title: "Account & tracking audit", description: "We find wasted spend, broken tracking and missed opportunities across Google and Meta.", duration: "Week 1" },
      { title: "Rebuild the foundation", description: "Server-side tracking, clean campaign structure and landing pages matched to intent.", duration: "Week 2" },
      { title: "Test creatives & audiences", description: "Structured experiments on hooks, offers and audiences, with clear winners every week.", duration: "Weekly" },
      { title: "Scale profitably", description: "Budget shifts to proven winners daily, protecting ROAS as spend grows.", duration: "Ongoing" },
    ],
  },
  faqs: [
    { question: "What does the free ads audit include?", answer: "A review of your Google and Meta accounts, tracking setup and landing pages, with the highest-impact fixes ranked by expected return." },
    { question: "Is there a minimum ad budget?", answer: "We work with a range of budgets. During the audit we'll recommend a starting spend that can produce statistically meaningful results." },
    { question: "Who owns the ad accounts?", answer: "You do. We work inside your accounts with partner access, so all data and history stays with your business." },
    { question: "Do you create the ad creatives too?", answer: "Yes — our in-house video and design team produces ad creatives and testing variants for every campaign." },
  ],
  cta: {
    title: "Every rupee, working harder.",
    description: "Get a free audit of your Google and Meta accounts and see exactly where your budget is leaking.",
    label: "Get my free ads audit",
  },
};

export default function GoogleAdsPage() {
  return <ServicePage config={config} />;
}
