/**
 * Offline answers for Glacier AI. Used when the Claude API isn't configured or is
 * unavailable, so the assistant always responds.
 */

const BRAND = {
  name: "Glacier Studio",
  phone: "+91 63819 45534",
  email: "glacierstudioofficial@gmail.com",
  location: "Tamil Nadu, India",
  url: "https://glacierstudio.in",
};

type ResponseEntry = {
  patterns: RegExp[];
  reply: string | (() => string);
  chips?: string[];
};

const RESPONSES: ResponseEntry[] = [
  {
    patterns: [/^\s*(hi|hello|hey|hola|greetings|sup)|good (morning|afternoon|evening)/i],
    reply: `👋 Hello! I'm **Glacier AI** — your intelligent assistant from **Glacier Studio**.\n\nI can help you explore our services, explain how we work, or connect you with our team. What brings you here today?`,
    chips: ["Our Services", "AI Automation", "Web Development", "Contact Team"],
  },
  {
    patterns: [/service|offer|what do you do|what can you|capabilities|help with|specializ/i],
    reply: `We offer **8 core service areas** to transform your business:\n\n🌐 **Web & App Development** — Next.js, React, custom SaaS\n🤖 **AI & Automation** — Chatbots, workflows, LLM agents\n📈 **SEO & Growth** — Technical SEO, content marketing\n📣 **Google Ads (PPC)** — High-ROAS paid campaigns\n📱 **Social Media** — Multi-platform brand growth\n🎬 **Video & Design** — Motion, branding & creative\n🛠️ **Custom Software** — Internal tools & dashboards\n☁️ **Cloud & DevOps** — AWS, Vercel, CI/CD pipelines\n\nWhich area interests you most?`,
    chips: ["AI & Automation", "Web Development", "Marketing & SEO", "Get a Quote"],
  },
  {
    patterns: [/ai|automat|chatbot|bots?|llm|gpt|workflow|intelligent|machine learn/i],
    reply: `🚀 Our **AI & Automation** solutions are our most powerful offering:\n\n• **AI Chatbots** — Fine-tuned on your business data, 24/7\n• **Lead Qualification Agents** — Auto-score & book prospects\n• **Document AI** — Extract data from PDFs & invoices (99.8% accuracy)\n• **Workflow Automation** — Connect Slack, CRM, Gmail, OpenAI\n• **Business Intelligence** — Predictive analytics & reporting\n\n⚡ Average result: **100+ hours/month saved**, sub-second response times.\n\nWant to see a live demo or discuss your use case?`,
    chips: ["Book a Demo", "Discuss My Use Case", "Get a Quote", "Contact Team"],
  },
  {
    patterns: [/web|apps?|next\.?js|react|site|website|frontend|backend|software|saas|portal|dashboard/i],
    reply: `💻 Our **Development team** builds production-ready software:\n\n• **Next.js Web Apps** — SSR, App Router, <1s load time\n• **Custom SaaS Platforms** — Multi-tenant, Stripe integrated\n• **API & Microservices** — REST, GraphQL, WebSockets\n• **Database Architecture** — PostgreSQL, Redis, Supabase\n• **Enterprise Security** — JWT, OWASP, end-to-end encryption\n\n🏆 **Tech Stack:** Next.js · TypeScript · Node.js · Python · AWS · Docker\n\nReady to build something amazing?`,
    chips: ["Start a Project", "View Tech Stack", "Get a Quote", "Contact Team"],
  },
  {
    patterns: [/seo|google|search|rank|organic|traffic|keyword|ppc|ads|market|growth|social|content/i],
    reply: `📈 Our **Growth & Marketing** services are data-driven:\n\n• **Technical SEO** — +240% organic traffic in 120 days\n• **Google Ads (PPC)** — Average **4.2x ROAS** across campaigns\n• **CRO** — **3.5x** conversion lift through A/B testing\n• **Social Media** — +180% engagement growth\n• **GA4 Analytics** — 100% multi-touch attribution\n\n💡 We're **performance-based** — your results are our metric.\n\nShall we discuss your growth targets?`,
    chips: ["Get a Growth Audit", "Discuss SEO", "PPC Campaign", "Contact Team"],
  },
  {
    patterns: [/price|cost|pricing|budget|how much|quote|package|plan|rate|fee|charge/i],
    reply: `💬 Every project at **Glacier Studio** is **custom-quoted** based on your scope, so we don't publish fixed prices.

Here's how to get your quote:
1. Share your requirements via the [contact form](/contact) or WhatsApp
2. Hop on a **free scoping call** with our team
3. Receive a **tailored proposal** with timeline and quote

No obligation, and we reply within 4 business hours.`,
    chips: ["Get a Free Quote", "Schedule a Call", "Contact Team"],
  },
  {
    patterns: [/contact|reach|talk|speak|call|email|phone|whatsapp|meet|schedule|connect|human|person|team/i],
    reply: () => `📞 **Reach Glacier Studio directly:**\n\n📱 **Phone/WhatsApp:** ${BRAND.phone}\n📧 **Email:** ${BRAND.email}\n📍 **Location:** ${BRAND.location}\n\n⏰ Response time: **Within 4 business hours**\n\nOr click below to fill out our project brief — we'll get back to you within the day!`,
    chips: ["Open Contact Form", "WhatsApp Us", "Send an Email"],
  },
  {
    patterns: [/about|who are you|glacier|company|team|founded|story|background/i],
    reply: `🧊 **Glacier Studio** is a next-generation IT & digital solutions studio based in **Tamil Nadu, India**.\n\nWe help ambitious businesses:\n🔨 **Build** — Premium web apps & software\n⚡ **Automate** — AI workflows that run 24/7\n📊 **Grow** — Data-driven marketing & SEO\n\n**Our metrics:**\n• 50+ systems deployed in production\n• 99.4% client satisfaction rate\n• < 0.8s average page load time\n• 3.4x average ROI increase\n\nWe're not just an agency — we're your **technical co-founder**.`,
    chips: ["Services", "Our Process", "Contact Team", "Start a Project"],
  },
  {
    patterns: [/process|how do|how does|timeline|delivery|timeline|sprint|step|workflow|project work/i],
    reply: `⚙️ Our **delivery process** is structured for speed & quality:\n\n**1. Discovery** (Day 1–2) — Free scoping call & technical brief\n**2. Architecture** (Week 1) — Tech stack, DB schema, wireframes\n**3. Development** (Week 2–6) — Agile sprints with weekly demos\n**4. QA & Testing** (Week 6–7) — Load testing, security audit\n**5. Launch** (Week 8) — Go-live with zero-downtime deployment\n**6. Support** — Ongoing SLA monitoring & updates\n\n⏱️ Most projects deliver in **4–8 weeks** depending on scope.`,
    chips: ["Get a Timeline Estimate", "Start a Project", "Contact Team"],
  },
  {
    patterns: [/thank|thanks|awesome|great|perfect|love|nice|cool|wow|amazing/i],
    reply: `😊 You're very welcome! Is there anything else I can help you with?\n\nOur team is always happy to chat further — feel free to reach out anytime!`,
    chips: ["Services", "Our Process", "Contact Team", "Start a Project"],
  },
  {
    patterns: [/(bye|goodbye|exit|quit)/i],
    reply: `👋 Thanks for chatting! If you ever need us, we're just a message away.\n\n**Glacier Studio** — *Next Gen IT Solutions*\n🌐 glacierstudio.in`,
    chips: [],
  },
];

const FALLBACK =
  `I'm not sure about that specific question, but I'm here to help with anything related to **Glacier Studio's services**! 😊\n\nCould you try rephrasing, or pick one of these topics?`;
const FALLBACK_CHIPS = ["Services", "Our Process", "AI Automation", "Contact Team"];

export const CHIP_SHORTCUTS: Record<string, string> = {
  "Our Services": "What services do you offer?",
  "Services": "What services do you offer?",
  "Our Process": "What is your project process?",
  "AI & Automation": "Tell me about AI and automation services",
  "Web Development": "Tell me about web development services",
  "Marketing & SEO": "Tell me about SEO and digital marketing",
  "Contact Team": "How can I contact the team?",
  "Get a Quote": "I want a quote for my project",
  "Book a Demo": "I want to book a demo",
  "Get a Free Quote": "I want a free quote",
  "Schedule a Call": "I want to schedule a call",
  "Open Contact Form": "How can I contact you?",
  "WhatsApp Us": `How can I contact you?`,
  "Send an Email": "What is your email address?",
  "Start a Project": "I want to start a project",
  "Discuss My Use Case": "I want to discuss my use case for AI automation",
  "Discuss SEO": "Tell me more about SEO services",
  "PPC Campaign": "Tell me about Google Ads and PPC campaigns",
  "Get a Growth Audit": "I want a growth audit",
  "Get a Timeline Estimate": "How long does a project take?",
  "View Tech Stack": "What technology stack do you use?",
};

export function getLocalReply(input: string): { text: string; chips?: string[] } {
  for (const entry of RESPONSES) {
    if (entry.patterns.some((p) => p.test(input))) {
      const text = typeof entry.reply === "function" ? entry.reply() : entry.reply;
      return { text, chips: entry.chips };
    }
  }
  return { text: FALLBACK, chips: FALLBACK_CHIPS };
}
