import { ServicePage } from "@/components/service/ServicePage";
import { VideoVisual } from "@/components/service/visuals/VideoVisual";
import type { ServicePageConfig } from "@/components/service/types";
import { constructMetadata } from "@/lib/seo";
import { Video, Palette, Film, Sparkles, Layers, Wand2, Clapperboard } from "lucide-react";

export const metadata = constructMetadata({
  title: "Video Production & Graphic Design | Glacier Studio",
  description:
    "High-converting video assets, product explainer reels, motion graphics, brand identity design systems, and high-performance ad creatives.",
  canonical: "/video-design",
});

const config: ServicePageConfig = {
  href: "/video-design",
  name: "Video & Design",
  hero: {
    eyebrow: "Creative & visual media",
    icon: Clapperboard,
    title: "Visuals engineered to capture attention and convert.",
    highlight: "capture attention and convert.",
    description:
      "From scroll-stopping social ads to complete brand identity systems, we create visual work that elevates your story and moves your numbers.",
    primaryCta: { label: "Start a creative brief", href: "/contact" },
    secondaryCta: { label: "Explore services", href: "#capabilities" },
    trust: ["4K 60fps production", "Every format included", "Review links at every stage"],
    visual: <VideoVisual />,
  },
  metrics: [
    { value: "5.8%", label: "Average video CTR", caption: "Across paid social" },
    { value: "+210%", label: "Watch time lift", caption: "Hook-first editing" },
    { value: "4K", label: "Production quality", caption: "60fps masters" },
    { value: "3", label: "Aspect ratios", caption: "9:16 · 1:1 · 16:9 per asset" },
  ],
  capabilities: {
    eyebrow: "Creative capabilities",
    title: "End-to-end video production & visual design.",
    description:
      "Cinematic editing combined with conversion design principles — so every asset looks premium and performs.",
    items: [
      {
        title: "Short-Form Reels & Ad Production",
        description: "Fast-paced, hook-driven edits optimized for TikTok, Instagram Reels, YouTube Shorts and Meta ads — with variants built for testing.",
        icon: Video,
        features: ["Dynamic captions & SFX", "Hook-driven edits", "A/B test variants"],
      },
      {
        title: "Motion Graphics & Animation",
        description: "2D/3D motion, logo reveals, UI walkthroughs and kinetic typography.",
        icon: Wand2,
        features: ["Product UI animation", "Explainers"],
      },
      {
        title: "Brand Identity Systems",
        description: "Logos, palettes, typography and brand guidelines that hold together everywhere.",
        icon: Palette,
        features: ["Vector logo systems", "Style guides"],
      },
      {
        title: "Pitch Decks, Banners & Social Kits",
        description: "Investor pitch decks, social templates, display ad banners and corporate presentations designed to persuade at a glance.",
        icon: Layers,
        features: ["Investor decks", "Display & PPC banners", "Social media kits"],
      },
      {
        title: "Product Demos & 3D Renders",
        description: "Realistic 3D product renders with cinematic lighting and camera moves.",
        icon: Film,
        features: ["3D modeling", "Feature reels"],
      },
      {
        title: "Creative Direction & VFX",
        description: "Complete visual storytelling — colour grading, audio engineering, green-screen keying and visual effects that give every frame a finished, cinematic feel.",
        icon: Sparkles,
        features: ["DaVinci colour grading", "Sound design & mixing", "VFX & transitions"],
      },
    ],
  },
  process: {
    eyebrow: "Production workflow",
    title: "A creative process built for speed and polish.",
    description: "Clear stages, shared review links and fast turnarounds — without cutting corners on craft.",
    steps: [
      { title: "Discovery & storyboard", description: "We analyze your audience, define message hooks and map scene-by-scene storyboards." },
      { title: "Asset creation & edit", description: "Footage, motion graphics, soundtrack and precise pacing assembled into a first cut." },
      { title: "Colour & audio master", description: "Colour correction, voiceover balancing, sound effects and final visual polish." },
      { title: "Multi-format export", description: "Delivered in 4K and 1080p across 9:16, 1:1 and 16:9 — ready to publish everywhere." },
    ],
  },
  faqs: [
    { question: "What do you need from us to start?", answer: "A short brief, your brand assets and any footage you have. If you don't have footage, we can script, source or produce it." },
    { question: "How many revisions are included?", answer: "Revision rounds are agreed up front in your proposal, and you review every stage — storyboard, first cut and final master — through shared links." },
    { question: "Do you deliver every format?", answer: "Yes. Each asset is exported for vertical, square and landscape placements at no extra cost." },
    { question: "Can you create ad variants for testing?", answer: "Yes — we produce hook and caption variants designed specifically for A/B testing on Meta, TikTok and YouTube." },
  ],
  cta: {
    title: "Make them stop scrolling.",
    description: "Share your brief and we'll come back with creative direction, a storyboard outline and a timeline.",
    label: "Start a creative brief",
  },
};

export default function VideoDesignPage() {
  return <ServicePage config={config} />;
}
