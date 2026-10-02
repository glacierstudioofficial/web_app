import { ServicePage } from "@/components/service/ServicePage";
import { DevVisual } from "@/components/service/visuals/DevVisual";
import type { ServicePageConfig } from "@/components/service/types";
import { constructMetadata } from "@/lib/seo";
import { Code, Globe, Database, Layers, Lock, Server } from "lucide-react";

export const metadata = constructMetadata({
  title: "Glacier Studio Development | Web Apps & Custom Software",
  description:
    "Production-ready Next.js web applications, custom enterprise platforms, API microservices, and database systems engineered with strict TypeScript standards.",
  canonical: "/development",
});

const config: ServicePageConfig = {
  href: "/development",
  name: "Web Development",
  hero: {
    eyebrow: "Engineering excellence",
    icon: Code,
    title: "Build software that moves your business forward.",
    highlight: "moves your business forward.",
    description:
      "Clean architectures, strict TypeScript, modern Next.js and resilient cloud systems — engineered for speed on day one and scale on day one thousand.",
    primaryCta: { label: "Start a software project", href: "/contact" },
    secondaryCta: { label: "View tech stack", href: "#stack" },
    trust: ["Sub-1s page loads", "100% TypeScript", "You own the code"],
    visual: <DevVisual />,
  },
  metrics: [
    { value: "< 1s", label: "Page load time", caption: "Core Web Vitals in the green" },
    { value: "100%", label: "TypeScript coverage", caption: "Strict mode, zero any" },
    { value: "A+", label: "Security rating", caption: "OWASP-aligned builds" },
    { value: "99.9%", label: "Uptime", caption: "Edge-deployed on Vercel & AWS" },
  ],
  capabilities: {
    eyebrow: "Dev services",
    title: "Full-spectrum software engineering.",
    description:
      "From marketing sites to multi-tenant platforms, every build ships with the same standards: typed end to end, tested, observable and fast.",
    items: [
      {
        title: "Modern Web Applications",
        description: "Blazingly fast Next.js App Router applications with Server Components, streaming and dynamic SSR — built to rank and built to convert.",
        icon: Globe,
        features: ["Next.js & React 19", "Tailwind design systems", "Core Web Vitals < 1s"],
      },
      {
        title: "Custom Software & SaaS",
        description: "Multi-tenant SaaS products, client portals and bespoke management platforms.",
        icon: Code,
        features: ["RBAC", "Multi-tenant", "Stripe billing"],
      },
      {
        title: "APIs & Microservices",
        description: "Robust REST and GraphQL services connecting internal and third-party systems.",
        icon: Server,
        features: ["Node.js & Python", "FastAPI / Express", "OpenAPI specs"],
      },
      {
        title: "Database Systems & Architecture",
        description: "Scalable SQL and NoSQL schemas engineered for high-concurrency reads and writes, with pipelines and backups handled from day one.",
        icon: Database,
        features: ["PostgreSQL & Redis", "ETL pipelines", "Automated backups & indexing"],
      },
      {
        title: "Internal Tools & Dashboards",
        description: "Admin dashboards, inventory portals and operational suites your team will actually enjoy using.",
        icon: Layers,
        features: ["Real-time charts", "Granular filtering", "Workflow automation"],
      },
      {
        title: "Enterprise Security & Compliance",
        description: "Zero-trust security with strict encryption, audit logging and vulnerability prevention built into every layer — not bolted on at the end.",
        icon: Lock,
        features: ["JWT & OAuth2", "End-to-end encryption", "OWASP compliance"],
      },
    ],
  },
  process: {
    eyebrow: "How we ship",
    title: "From kickoff to production in focused sprints.",
    description: "A transparent, milestone-driven process with a working preview link from the very first week.",
    steps: [
      { title: "Discovery & architecture", description: "We map requirements, data models and integrations into a fixed-scope technical plan.", duration: "Week 1" },
      { title: "Design & prototype", description: "Clickable UI prototypes and a design system approved before a line of production code.", duration: "Week 2–3" },
      { title: "Build in sprints", description: "Weekly demos on a live preview URL, with typed code, tests and CI on every pull request.", duration: "Sprints" },
      { title: "Launch & scale", description: "Zero-downtime deploy, monitoring, analytics and a hand-off your team can own.", duration: "Ongoing" },
    ],
  },
  stack: {
    eyebrow: "Tech stack & tools",
    title: "Modern, production-proven technology.",
    description: "We use established, resilient frameworks chosen for long-term maintainability — not hype.",
    groups: [
      { category: "Frontend", tools: ["Next.js (App Router)", "TypeScript", "React", "Tailwind CSS", "Framer Motion"] },
      { category: "Backend & APIs", tools: ["Node.js", "Python (FastAPI)", "RESTful APIs", "GraphQL", "WebSockets"] },
      { category: "Databases & Storage", tools: ["PostgreSQL", "Redis", "Supabase", "Prisma ORM", "AWS S3"] },
      { category: "Cloud & DevOps", tools: ["Vercel", "Docker", "AWS Cloud", "GitHub Actions CI/CD", "Cloudflare"] },
    ],
  },
  faqs: [
    { question: "How long does a typical web project take?", answer: "It depends on scope. After a short discovery call we send a fixed-scope plan with milestones, so you know the timeline and deliverables before we start." },
    { question: "Do we own the source code?", answer: "Yes. The repository, infrastructure accounts and all intellectual property belong to you from day one." },
    { question: "Can you work with our existing codebase?", answer: "Absolutely. We regularly audit, refactor and extend existing React, Next.js and Node.js applications, and can migrate legacy stacks incrementally." },
    { question: "What happens after launch?", answer: "We offer ongoing maintenance, monitoring and feature development retainers — or a clean hand-off with documentation if your team takes over." },
  ],
  cta: {
    title: "Let's engineer your next product.",
    description: "Tell us what you're building. We'll come back with an architecture, a timeline and a fixed-scope proposal.",
    label: "Start engineering",
  },
};

export default function DevelopmentPage() {
  return <ServicePage config={config} />;
}
