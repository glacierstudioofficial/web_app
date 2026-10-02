import { ServicePage } from "@/components/service/ServicePage";
import { SoftwareVisual } from "@/components/service/visuals/SoftwareVisual";
import type { ServicePageConfig } from "@/components/service/types";
import { constructMetadata } from "@/lib/seo";
import { Code, Cpu, Database, Server, ShieldCheck, Terminal, Boxes } from "lucide-react";

export const metadata = constructMetadata({
  title: "Custom Software & Enterprise SaaS | Glacier Studio",
  description:
    "Bespoke internal software solutions, multi-tenant SaaS platforms, client portals, microservices backends, and custom API integrations.",
  canonical: "/custom-software",
});

const config: ServicePageConfig = {
  href: "/custom-software",
  name: "Custom Software",
  hero: {
    eyebrow: "Bespoke software engineering",
    icon: Boxes,
    title: "Custom software built precisely for your workflow.",
    highlight: "precisely for your workflow.",
    description:
      "Outgrow off-the-shelf limitations with custom platforms, SaaS products and secure services designed around how your business actually runs.",
    primaryCta: { label: "Discuss your project", href: "/contact" },
    secondaryCta: { label: "View tech stack", href: "#stack" },
    trust: ["Fixed-scope proposals", "You own the IP", "Zero-downtime migrations"],
    visual: <SoftwareVisual />,
  },
  metrics: [
    { value: "3.5x", label: "Workflow efficiency", caption: "After replacing manual tools" },
    { value: "95%+", label: "Test coverage", caption: "On critical business logic" },
    { value: "99.99%", label: "System uptime", caption: "Monitored 24/7" },
    { value: "100%", label: "IP ownership", caption: "Code, designs & infra are yours" },
  ],
  capabilities: {
    eyebrow: "Software solutions",
    title: "Full-cycle custom software development.",
    description:
      "Scalable, type-safe systems that streamline operations today and grow with your business for years.",
    items: [
      {
        title: "Bespoke SaaS & Multi-Tenant Apps",
        description: "Platforms engineered for subscription businesses — with tenant data isolation, flexible billing and the admin tooling to run it all.",
        icon: Code,
        features: ["Multi-tenant architecture", "Stripe & Razorpay billing", "Tenant data isolation"],
      },
      {
        title: "Internal Tools & ERP",
        description: "Operations suites, inventory control, CRM extensions and workflow hubs.",
        icon: Terminal,
        features: ["RBAC", "Live dashboards"],
      },
      {
        title: "REST & GraphQL Microservices",
        description: "TypeScript and Python services designed for high-concurrency APIs.",
        icon: Server,
        features: ["OpenAPI specs", "Rate limiting"],
      },
      {
        title: "Database Architecture & Pipelines",
        description: "High-performance PostgreSQL, Redis and MongoDB with automated backups, indexing and analytics ETL pipelines that keep your data trustworthy.",
        icon: Database,
        features: ["PostgreSQL & Redis", "ETL pipelines", "Automated backups"],
      },
      {
        title: "Legacy Modernization",
        description: "Refactor monoliths into modern Next.js front-ends and cloud-native services.",
        icon: Cpu,
        features: ["Zero-downtime", "Type-safety audit"],
      },
      {
        title: "Enterprise Security & Compliance",
        description: "Zero-trust implementations with strict JWT/OAuth2 authentication, audit logging and field-level encryption — reviewed against OWASP on every release.",
        icon: ShieldCheck,
        features: ["JWT & OAuth2", "Field-level encryption", "OWASP scans"],
      },
    ],
  },
  process: {
    eyebrow: "Delivery model",
    title: "Predictable delivery for serious software.",
    description: "Fixed-scope phases, weekly demos and documentation that outlives the engagement.",
    steps: [
      { title: "Workflow discovery", description: "We shadow your team, map processes and turn them into a precise technical specification.", duration: "Week 1–2" },
      { title: "Architecture & UX", description: "System design, data model and clickable prototypes signed off before build begins.", duration: "Week 2–4" },
      { title: "Iterative build", description: "Two-week sprints with live demos, automated tests and staged releases.", duration: "Sprints" },
      { title: "Rollout & support", description: "Data migration, team training, monitoring and an SLA-backed support plan.", duration: "Ongoing" },
    ],
  },
  stack: {
    eyebrow: "Tech stack",
    title: "Engineered with modern enterprise tools.",
    description: "Battle-tested, well-documented technology your future engineers will be glad to inherit.",
    groups: [
      { category: "Frontend", tools: ["Next.js App Router", "TypeScript", "React 19", "Tailwind CSS", "Framer Motion"] },
      { category: "Backend", tools: ["Node.js", "Python (FastAPI)", "Express", "RESTful APIs", "GraphQL"] },
      { category: "Database & Cache", tools: ["PostgreSQL", "Redis", "Supabase", "Prisma ORM", "AWS S3"] },
      { category: "DevOps & Cloud", tools: ["Docker", "Vercel Enterprise", "AWS Cloud", "GitHub Actions CI/CD", "Cloudflare"] },
    ],
  },
  faqs: [
    { question: "Why custom software instead of an off-the-shelf tool?", answer: "When your workflow is your competitive advantage, generic tools force you to work around them. Custom software fits the process — and removes per-seat licence costs as you grow." },
    { question: "Can you migrate data from our current system?", answer: "Yes. We plan incremental, zero-downtime migrations with validation at every step." },
    { question: "Who owns the intellectual property?", answer: "You do — source code, designs, documentation and infrastructure are all yours." },
    { question: "Do you provide support after launch?", answer: "Yes. We offer SLA-backed maintenance, monitoring and feature development plans." },
  ],
  cta: {
    title: "Software that fits like it was made for you.",
    description: "Walk us through your workflow. We'll send back a specification, an architecture and a fixed-scope proposal.",
    label: "Discuss your software specs",
  },
};

export default function CustomSoftwarePage() {
  return <ServicePage config={config} />;
}
