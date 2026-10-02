import { ServicePage } from "@/components/service/ServicePage";
import { AIVisual } from "@/components/service/visuals/AIVisual";
import type { ServicePageConfig } from "@/components/service/types";
import { AIShowcase } from "@/components/home/AIShowcase";
import { constructMetadata } from "@/lib/seo";
import { Bot, Zap, Database, ShieldAlert, BarChart, MessageSquare, Sparkles } from "lucide-react";

export const metadata = constructMetadata({
  title: "Glacier Studio AI & Automation | Intelligent Business Workflows",
  description:
    "Turn repetitive manual work into intelligent, autonomous AI workflows. We build custom AI assistants, CRM lead triage agents, and document processing pipelines.",
  canonical: "/ai-automation",
});

const config: ServicePageConfig = {
  href: "/ai-automation",
  name: "AI & Automation",
  hero: {
    eyebrow: "AI transformation partner",
    icon: Sparkles,
    title: "Turn repetitive work into intelligent workflows.",
    highlight: "intelligent workflows.",
    description:
      "Replace manual data entry and slow responses with autonomous AI agents that qualify, route and act — around the clock, inside the tools you already use.",
    primaryCta: { label: "Deploy AI automation", href: "/contact" },
    secondaryCta: { label: "See live dashboard", href: "#showcase" },
    trust: ["Private by default", "Works with your stack", "Live in weeks"],
    visual: <AIVisual />,
  },
  metrics: [
    { value: "48,920+", label: "Tasks automated", caption: "Across client workflows" },
    { value: "0.4s", label: "Response time", caption: "Lead to action" },
    { value: "80%", label: "Support deflection", caption: "Resolved without a human" },
    { value: "24/7", label: "Always on", caption: "No queues, no downtime" },
  ],
  capabilities: {
    eyebrow: "Capabilities",
    title: "Where AI creates the most business impact.",
    description:
      "Custom AI systems deployed into your daily operations to remove friction and multiply the output of every person on your team.",
    items: [
      {
        title: "Autonomous Lead Qualification",
        description: "AI agents capture, qualify, score and book high-intent prospects straight into your CRM — 24/7, in under a second.",
        icon: Bot,
        metric: "Sub-second reply",
        features: ["Intent scoring", "Auto-booking", "CRM sync"],
      },
      {
        title: "Workflow Automation",
        description: "Connect Slack, HubSpot, Gmail, PostgreSQL and OpenAI into unified automated channels.",
        icon: Zap,
        metric: "100+ app syncs",
        features: ["Triggers & webhooks", "Multi-step flows"],
      },
      {
        title: "Document AI & Parsing",
        description: "Extract structured data from PDFs, invoices, receipts and logistics documents instantly.",
        icon: Database,
        metric: "99.8% accuracy",
        features: ["OCR", "Structured JSON"],
      },
      {
        title: "24/7 Intelligent Support Agents",
        description: "AI assistants trained on your own documentation that resolve customer questions autonomously and hand off gracefully when a human is needed.",
        icon: MessageSquare,
        metric: "80% deflection",
        features: ["Trained on your docs", "Human hand-off", "WhatsApp & web chat"],
      },
      {
        title: "Business Intelligence",
        description: "AI analytics that surface ad-spend waste, churn risk and operational bottlenecks automatically.",
        icon: BarChart,
        metric: "Real-time",
        features: ["Anomaly alerts", "Weekly digests"],
      },
      {
        title: "Security & Data Governance",
        description: "Enterprise privacy controls ensure proprietary knowledge is never leaked or used to train public models. Access is scoped, logged and auditable.",
        icon: ShieldAlert,
        metric: "SOC2 & GDPR ready",
        features: ["Role-scoped access", "Audit logs", "No public training"],
      },
    ],
  },
  showcase: (
    <div id="showcase" className="scroll-mt-20">
      <AIShowcase />
    </div>
  ),
  process: {
    eyebrow: "Workflow architecture",
    title: "From inbound signal to closed deal — automatically.",
    description: "A four-stage pipeline that connects every lead source straight to action, with humans in the loop wherever you want them.",
    steps: [
      { title: "Ingest", description: "Capture every signal — forms, email, WhatsApp and webhooks — in one stream." },
      { title: "Evaluate", description: "An LLM triage agent reads context, scores intent and decides the next best action." },
      { title: "Execute", description: "CRM updated, quote sent, SMS fired and your team notified — in parallel." },
      { title: "Scale", description: "Reclaim 100+ hours a month and keep improving with every run." },
    ],
  },
  faqs: [
    { question: "Is our data used to train public AI models?", answer: "No. We deploy with enterprise API agreements and private data stores so your proprietary information stays yours." },
    { question: "Which tools can you integrate with?", answer: "Most modern SaaS tools — HubSpot, Salesforce, Slack, Gmail, WhatsApp, Google Sheets, PostgreSQL and anything with an API or webhook." },
    { question: "Do we need an in-house AI team?", answer: "No. We design, build, host and monitor the workflows, and give your team simple dashboards and controls." },
    { question: "How do we measure ROI?", answer: "Every workflow ships with metrics — hours saved, response time and conversion impact — so you can see the return from week one." },
  ],
  cta: {
    title: "Put your busywork on autopilot.",
    description: "Show us one repetitive process. We'll show you how an AI agent can run it — and what it's worth.",
    label: "Start your AI transformation",
  },
};

export default function AIAutomationPage() {
  return <ServicePage config={config} />;
}
