import { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  solutions: [
    { label: "SEO & Optimization", href: "/growth" },
    { label: "Web Development", href: "/development" },
    { label: "Custom Software", href: "/custom-software" },
    { label: "AI & Automation", href: "/ai-automation" },
    { label: "Google & Meta Ads", href: "/google-ads" },
    { label: "Social Media", href: "/growth" },
    { label: "Video & Design", href: "/video-design" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Our Process", href: "/about#process" },
    { label: "Careers", href: "/about#careers" },
    { label: "Partners", href: "/about#partners" },
  ],
  resources: [
    { label: "Solutions Overview", href: "/solutions" },
    { label: "AI Transformations", href: "/ai-automation" },
    { label: "Tech Architecture", href: "/development" },
    { label: "Growth Analytics", href: "/growth" },
  ],
};

/** The six core solution pages, in the order shown in the Solutions menu. */
export const solutionPages = [
  { label: "Web Development", href: "/development", desc: "Next.js apps & custom software" },
  { label: "AI & Automation", href: "/ai-automation", desc: "Intelligent business workflows" },
  { label: "SEO & Growth", href: "/growth", desc: "Rank higher, convert faster" },
  { label: "Video & Design", href: "/video-design", desc: "Motion, branding & UI design" },
  { label: "Google & Meta Ads", href: "/google-ads", desc: "High-ROAS paid search & social campaigns" },
  { label: "Custom Software", href: "/custom-software", desc: "Scalable SaaS & internal tools" },
];
