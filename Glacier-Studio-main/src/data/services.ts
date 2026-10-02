import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "seo-optimization",
    title: "SEO & Website Optimization",
    slug: "seo-optimization",
    shortDescription:
      "Maximize technical performance, organic reach, core web vitals, and search rankings with engineered SEO strategies.",
    fullDescription:
      "Modern search engines demand blazingly fast load times, pristine semantic structure, high authority content, and user-centric architecture. We optimize every layer of your website to capture high-intent organic traffic.",
    iconName: "Search",
    badge: "Core Service",
    features: [
      "Technical SEO Audits & Schema Markup",
      "Page Speed & Core Web Vitals Optimization",
      "Keyword Research & Content Strategy",
      "Local SEO & Google Business Optimization",
    ],
    metrics: [
      { label: "Avg Rank Boost", value: "#1-3 Page" },
      { label: "Organic Traffic", value: "+240%" },
    ],
    href: "/growth",
  },
  {
    id: "web-app-development",
    title: "Web App Development",
    slug: "web-app-development",
    shortDescription:
      "High-performance, scalable modern web applications built with Next.js, React, and resilient cloud architectures.",
    fullDescription:
      "From complex SaaS platforms to real-time interactive dashboards, we deliver lightning-fast web applications with clean architecture, strict TypeScript security, and flawless user experience across all screen sizes.",
    iconName: "Globe",
    badge: "Popular",
    features: [
      "Next.js App Router & Server Components",
      "Responsive & Mobile-First UI/UX",
      "API Integrations & Cloud Architecture",
      "Enterprise Grade Security & Compliance",
    ],
    metrics: [
      { label: "Lighthouse Score", value: "98+" },
      { label: "Average Load", value: "< 0.8s" },
    ],
    href: "/development",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    slug: "custom-software",
    shortDescription:
      "Tailor-made internal business software, API backends, and platform architectures engineered for growth.",
    fullDescription:
      "Off-the-shelf software often creates bottlenecks. We build custom enterprise systems, client portals, inventory systems, and bespoke microservices engineered specifically for your operating workflow.",
    iconName: "Code",
    badge: "Enterprise",
    features: [
      "Bespoke Internal Tools & CRM/ERP Systems",
      "Scalable REST & GraphQL Microservices",
      "Database Architecture & Data Pipelines",
      "Automated Testing & CI/CD Pipelines",
    ],
    metrics: [
      { label: "Workflow Efficiency", value: "3.5x" },
      { label: "Code Coverage", value: "95%+" },
    ],
    href: "/custom-software",
  },
  {
    id: "google-ads",
    title: "Google & Meta Ads Management",
    slug: "google-ads",
    shortDescription:
      "Data-backed paid media management across Google Search, Performance Max, Facebook, and Instagram Reels.",
    fullDescription:
      "Stop wasting ad spend. We design targeted PPC & social campaigns across Google Search, Shopping, YouTube, Facebook, and Instagram Reels with precise audience segmentation and continuous conversion rate optimization.",
    iconName: "TrendingUp",
    badge: "High ROAS",
    features: [
      "Google Search, PMax & YouTube Campaigns",
      "Meta Reels, Feed & Advantage+ Ads",
      "High-Converting Landing Page Design",
      "Server-Side GA4 & Conversions API (CAPI)",
    ],
    metrics: [
      { label: "CPA Reduction", value: "-38%" },
      { label: "Average ROAS", value: "5.4x" },
    ],
    href: "/google-ads",
  },
  {
    id: "ai-automation",
    title: "AI & Automation Solutions",
    slug: "ai-automation",
    shortDescription:
      "Transform manual tasks into autonomous, intelligent AI workflows that operate 24/7 without manual friction.",
    fullDescription:
      "Leverage cutting-edge LLMs, custom fine-tuned AI agents, document processing pipelines, and autonomous workflow engines to streamline lead qualification, customer support, data extraction, and internal operations.",
    iconName: "Cpu",
    badge: "Next Gen",
    features: [
      "Custom AI Assistants & Agentic Bot Workflows",
      "Workflow Automation (Zapier, Make, Custom Python)",
      "Intelligent Lead Triage & CRM Auto-Sync",
      "Document AI & Data Extraction Pipelines",
    ],
    metrics: [
      { label: "Hours Saved/Mo", value: "120+ hrs" },
      { label: "Response Rate", value: "Instant" },
    ],
    href: "/ai-automation",
  },
  {
    id: "social-media",
    title: "Social Media Management",
    slug: "social-media",
    shortDescription:
      "Strategic content creation, community engagement, and multi-channel brand positioning for modern businesses.",
    fullDescription:
      "Build authority and consistent brand identity across LinkedIn, Instagram, X (Twitter), and Facebook with high-impact visual design, strategic copywriting, and growth analytics.",
    iconName: "Share2",
    features: [
      "Multi-Channel Content Creation & Scheduling",
      "Brand Voice & Visual Template Systems",
      "Community Management & Active Engagement",
      "Monthly Growth & Impression Analytics",
    ],
    metrics: [
      { label: "Engagement Increase", value: "+180%" },
      { label: "Brand Reach", value: "Multi-Platform" },
    ],
    href: "/growth",
  },
  {
    id: "video-production",
    title: "Video Editing & Production",
    slug: "video-production",
    shortDescription:
      "High-converting video assets, product explainer reels, brand commercials, and social short-form edits.",
    fullDescription:
      "Video is the highest converting medium on the internet. We craft crisp, dynamic product demos, promotional videos, motion graphics, and ad creatives designed to capture attention immediately.",
    iconName: "Video",
    features: [
      "Short-Form Reels & TikTok Ad Production",
      "High-Impact Product Demo Videos",
      "Motion Graphics & Dynamic Title Design",
      "Color Grading, Sound Engineering & VFX",
    ],
    metrics: [
      { label: "Watch Time Boost", value: "+210%" },
      { label: "Video CTR", value: "5.8%" },
    ],
    href: "/video-design",
  },
  {
    id: "graphic-design",
    title: "Graphic Design & Branding",
    slug: "graphic-design",
    shortDescription:
      "Premium visual identities, brand systems, marketing collaterals, and high-converting graphic assets.",
    fullDescription:
      "Your brand visual language sets the immediate standard for quality and trust. We build cohesive visual brand identities, design systems, pitch decks, and ad creatives that resonate with premium clients.",
    iconName: "Palette",
    features: [
      "Brand Identity & Visual Style Guides",
      "Marketing Collateral & Pitch Deck Design",
      "High-Converting Ad Creatives & Banners",
      "Vector Icons, Illustrations & Assets",
    ],
    metrics: [
      { label: "Brand Impression", value: "Premium" },
      { label: "Asset Delivery", value: "Vector Ready" },
    ],
    href: "/video-design",
  },
];
