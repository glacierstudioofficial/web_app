import { CaseStudyItem, ProjectCategory } from "@/types";

export const projectCategories: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "chatbot", label: "AI Chatbots" },
  { id: "lms", label: "LMS & EdTech" },
  { id: "website", label: "Websites" },
  { id: "software", label: "Custom Software" },
];

/**
 * NOTE FOR THE TEAM
 * ─────────────────
 * Written from real source code:   daluxe-skincare-store, nuve-trades, glacier-ai-assistant
 * Drafts (no client names or
 * results are claimed):            every entry marked "TODO: replace"
 *
 * Replace the drafts with real project details, screenshots and live links as you ship them,
 * or delete any you don't want to show.
 */
export const caseStudiesData: CaseStudyItem[] = [
  /* ───────────── E-COMMERCE (real) ───────────── */
  {
    id: "daluxe-skincare-store",
    title: "DALUXE: Luxury Ayurvedic Skincare Store",
    tagline: "A complete online store with its own admin control room.",
    client: "DALUXE (Virgin 5.0)",
    industry: "Beauty & Skincare",
    category: "ecommerce",
    iconName: "ShoppingBag",
    image: "/work/daluxe-store.png",
    services: ["E-commerce Development", "Admin Dashboard", "Custom Software"],
    challenge:
      "A premium skincare brand needed a store that feels as luxurious as its products, plus a back-office the team could run daily without a developer.",
    solution:
      "We built a custom storefront and a full admin dashboard from scratch: catalog, orders, coupons, offers, ad banners and customer messages, all managed from one place.",
    features: [
      "Product catalog with multiple images, categories, offers and stock control",
      "Cart, wishlist and checkout with Cash on Delivery",
      "Coupon engine with validation and usage tracking",
      "Customer accounts with saved addresses and order history",
      "Admin dashboard with 11 modules, from orders to payments to settings",
      "Ad-banner manager for promotions by page location",
      "Responsive layout for phones, tablets and desktops",
    ],
    metrics: [
      { label: "Admin Modules", value: "11" },
      { label: "API Endpoints", value: "50+" },
      { label: "Devices", value: "All" },
    ],
    technologies: ["Node.js", "Express", "MySQL", "JavaScript", "REST API"],
    featured: true,
  },

  /* ───────────── DALUXE ADMIN SUITE ───────────── */
  {
    id: "daluxe-admin-suite",
    title: "DALUXE Admin Suite",
    tagline: "A secure control room for products, orders, customers and store operations.",
    client: "DALUXE (Virgin 5.0)",
    industry: "Beauty & E-commerce",
    category: "software",
    iconName: "LayoutDashboard",
    image: "/work/daluxe-admin-suite.jpg",
    services: ["Custom Software", "Admin Dashboard", "E-commerce Operations"],
    challenge:
      "The storefront needed a separate back-office where the team could manage the business without editing code or touching the customer-facing site.",
    solution:
      "We built a dedicated admin suite with authentication, product and category management, order handling, customer records, payments, offers, coupons, banners and operational analytics.",
    features: [
      "Admin login and protected dashboard access",
      "Product, category and inventory management",
      "Order and payment management",
      "Customer records and support messages",
      "Offers, coupon and promotional-banner controls",
      "Sales overview and quick-action dashboard"
    ],
    metrics: [
      { label: "Admin Modules", value: "11" },
      { label: "Dashboard", value: "Live" },
      { label: "Access", value: "Protected" }
    ],
    technologies: ["Node.js", "Express", "MySQL", "JavaScript", "REST API"],
    featured: true,
  },

  /* ───────────── AI CHATBOTS ───────────── */
  {
    id: "glacier-ai-assistant",
    title: "Glacier AI: Website Sales Assistant",
    tagline: "The chatbot on this very site. Try it in the corner of your screen.",
    client: "Glacier Studio (in-house)",
    industry: "IT Services",
    category: "chatbot",
    iconName: "Bot",
    services: ["AI & Automation", "Frontend Development"],
    challenge:
      "Visitors have questions at all hours, and most leave before filling in a form.",
    solution:
      "We built a chat assistant that understands intent, answers questions about services, and hands visitors to the team through WhatsApp, email or the contact form.",
    features: [
      "Intent detection across services, pricing, timelines and contact",
      "One-tap quick replies so visitors never face a blank box",
      "Typing indicator and instant, natural-feeling responses",
      "Hand-off to WhatsApp, email or project brief form",
      "Floating widget that works on every page and on mobile",
    ],
    metrics: [
      { label: "Availability", value: "24/7" },
      { label: "Hand-off Channels", value: "3" },
      { label: "Live On", value: "Every page" },
    ],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    featured: true,
  },
  {
    // TODO: replace with a real project when available
    id: "ai-support-chatbot",
    title: "AI Customer Support Chatbot",
    tagline: "Answers customer questions instantly, and escalates to a human when it should.",
    client: "Built for online stores & service businesses",
    industry: "E-commerce & Services",
    category: "chatbot",
    iconName: "MessagesSquare",
    image: "/work/cyber-scouts-bot.png",
    services: ["AI Chatbot Development", "API Integration"],
    challenge:
      "Support teams spend most of the day answering the same questions about orders, delivery, returns and pricing.",
    solution:
      "A chatbot trained on your own FAQs, catalog and policies. It handles the repetitive questions instantly and passes complex cases to your team with the full conversation attached.",
    features: [
      "Trained on your products, policies and FAQs",
      "Order status and delivery lookups via your store's API",
      "Human hand-off with full chat history",
      "Website widget, plus WhatsApp where needed",
      "Conversation log and unanswered-question report for continuous improvement",
    ],
    metrics: [
      { label: "Availability", value: "24/7" },
      { label: "Channels", value: "Web + WhatsApp" },
      { label: "Human Hand-off", value: "Built in" },
    ],
    technologies: ["OpenAI API", "Node.js", "Next.js", "PostgreSQL", "WhatsApp API"],
  },
  {
    // TODO: replace with a real project when available
    id: "whatsapp-lead-bot",
    title: "WhatsApp Lead Qualification & Booking Bot",
    tagline: "Turns every enquiry into a qualified lead and a booked call, automatically.",
    client: "Built for clinics, coaching, real estate & agencies",
    industry: "Lead Generation",
    category: "chatbot",
    iconName: "MessageCircle",
    services: ["AI & Automation", "CRM Integration"],
    challenge:
      "Leads message at night and on weekends, and by the time someone replies the customer has moved on.",
    solution:
      "A WhatsApp bot that replies within seconds, asks the right qualifying questions, books appointments and drops the finished lead into your CRM or Google Sheet.",
    features: [
      "Instant reply to every new enquiry, day or night",
      "Smart qualification questions (budget, need, timeline)",
      "Appointment booking with reminders",
      "Lead sync to CRM, Google Sheets or email",
      "Follow-up messages for leads that go quiet",
    ],
    metrics: [
      { label: "First Response", value: "Instant" },
      { label: "Lead Sync", value: "Auto" },
      { label: "Follow-ups", value: "Automated" },
    ],
    technologies: ["WhatsApp Cloud API", "Node.js", "OpenAI API", "Google Sheets API"],
  },

  /* ───────────── LMS & EDTECH ───────────── */
  {
    // TODO: replace with a real project when available
    id: "cohort-lms-platform",
    title: "Learning Management System for Coaches & Academies",
    tagline: "Sell your course, teach it, and track every student. All on your own platform.",
    client: "Built for coaches, academies & course creators",
    industry: "Education",
    category: "lms",
    iconName: "GraduationCap",
    image: "/work/lms-portal.png",
    services: ["LMS Development", "Web App Development", "Payments"],
    challenge:
      "Selling courses over WhatsApp, Drive links and spreadsheets is messy, hard to protect and impossible to scale.",
    solution:
      "A branded learning platform with course delivery, student progress, live-class links, assignments and certificates, with separate dashboards for admins, instructors and students.",
    features: [
      "Course builder with modules, video lessons, notes and quizzes",
      "Student progress tracking and completion certificates",
      "Batch and cohort management with live-class scheduling",
      "Online payments with instant course access",
      "Assignments, grading and instructor feedback",
      "Admin analytics: enrolments, revenue and completion rates",
    ],
    metrics: [
      { label: "User Roles", value: "3" },
      { label: "Certificates", value: "Auto-issued" },
      { label: "Access", value: "Any device" },
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Razorpay", "Video Hosting"],
    featured: true,
  },
  {
    // TODO: replace with a real project when available
    id: "training-portal",
    title: "Corporate Training & Certification Portal",
    tagline: "Onboard, upskill and certify your team, with proof of completion.",
    client: "Built for companies & training institutes",
    industry: "Corporate Training",
    category: "lms",
    iconName: "BadgeCheck",
    services: ["LMS Development", "Custom Software"],
    challenge:
      "Companies need to show who completed which training, but tracking it by hand across teams doesn't hold up.",
    solution:
      "A secure portal that assigns courses by role or department, tests understanding with timed assessments, and produces completion reports and certificates for audits.",
    features: [
      "Role- and department-based course assignment",
      "Timed assessments with pass marks and retakes",
      "Manager dashboards and exportable completion reports",
      "Verifiable certificates with unique IDs",
      "Reminders for pending and expiring training",
    ],
    metrics: [
      { label: "Reporting", value: "Exportable" },
      { label: "Assessments", value: "Timed" },
      { label: "Certificates", value: "Verifiable" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Email API"],
  },

  /* ───────────── WEBSITES (real) ───────────── */
  {
    id: "nuve-trades",
    title: "Nuve Trades: Trading Mentorship Website",
    tagline: "A cinematic, conversion-focused site for a premium trading course.",
    client: "Nuve Trades",
    industry: "Trading Education",
    category: "website",
    iconName: "CandlestickChart",
    image: "/work/nuve-trades.png",
    services: ["Web Design", "Frontend Development", "Motion Design"],
    challenge:
      "The mentor needed a website that builds trust quickly and moves serious students toward joining, in a very crowded niche.",
    solution:
      "We designed a dark, data-inspired landing experience with scroll-driven animation, a clear curriculum, membership plans and a proof section that answers doubts before they're asked.",
    features: [
      "Scroll-triggered GSAP animations and animated intro",
      "Six-module masterclass curriculum showcase",
      "Membership plan comparison built to convert",
      "Student results and proof section",
      "FAQ that removes objections before the enquiry",
      "Fully responsive, single lightweight page",
    ],
    metrics: [
      { label: "Course Modules", value: "6" },
      { label: "Membership Tiers", value: "2" },
      { label: "Animation", value: "GSAP" },
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "ScrollTrigger"],
  },

  /* ───────────── CUSTOM SOFTWARE ───────────── */
  {
    // TODO: replace with a real project when available
    id: "business-ops-dashboard",
    title: "Business Operations Dashboard & CRM",
    tagline: "Leads, orders, staff and reports, in one screen instead of five spreadsheets.",
    client: "Built for growing SMEs",
    industry: "Operations",
    category: "software",
    iconName: "LayoutDashboard",
    services: ["Custom Software", "Automation"],
    challenge:
      "Growing businesses end up with data scattered across WhatsApp, Excel and notebooks, so nobody sees the full picture.",
    solution:
      "A custom internal tool that brings leads, customers, tasks and reporting together, with role-based access and automations for the boring, repetitive work.",
    features: [
      "Lead pipeline with follow-up reminders",
      "Customer and order records in one place",
      "Role-based access for owner, manager and staff",
      "Live charts and downloadable reports",
      "Automations for invoices, reminders and notifications",
    ],
    metrics: [
      { label: "Access Control", value: "Role-based" },
      { label: "Reports", value: "Live" },
      { label: "Built", value: "Around you" },
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
  },
];
