import { PageContainer } from "@/components/layout/PageContainer";
import { Hero } from "@/components/home/Hero";
import { CapabilityStrip } from "@/components/home/CapabilityStrip";
import { SolutionsPreview } from "@/components/home/SolutionsPreview";
import { WhyGlacier } from "@/components/home/WhyGlacier";
import { Process } from "@/components/home/Process";
import { Industries } from "@/components/home/Industries";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Faq } from "@/components/service/ServicePage";

const faqs = [
  {
    question: "What services does Glacier Studio offer?",
    answer:
      "Web and app development, custom software and SaaS, AI and automation, SEO and growth marketing, Google and Meta Ads, and video and design, all delivered by one team working from one roadmap.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Starter projects deliver in 2–3 weeks. Custom web apps and AI workflow integrations typically take 4–8 weeks, with weekly milestone demos so you always see progress.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Projects are fixed-scope, usually 50% upfront and 50% on final testing and deployment. Marketing and SEO retainers are billed monthly on a flexible 30-day basis.",
  },
  {
    question: "Do we own the code and designs?",
    answer:
      "Yes. Source code, designs, documentation and infrastructure accounts belong to you from day one.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. We're happy to sign a standard NDA before your initial scoping call so you can share confidential details freely.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer ongoing maintenance, monitoring and growth retainers, or a clean hand-off with documentation if your team takes over.",
  },
];

/** FAQPage structured data so the questions can appear as rich results in search. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function HomePage() {
  return (
    <PageContainer>
      <Hero />
      <CapabilityStrip />
      <SolutionsPreview />
      <WhyGlacier />
      <Process />
      <Industries />
      <Faq faqs={faqs} />
      <FinalCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </PageContainer>
  );
}
