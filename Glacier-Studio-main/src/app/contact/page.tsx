import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { PageContainer } from "@/components/layout/PageContainer";
import { Faq } from "@/components/service/ServicePage";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us | Glacier Studio - Next Gen IT & AI Solutions",
  description:
    "Get in touch with Glacier Studio. Discuss your web application, AI automation, or growth strategy with our technical leadership team.",
  canonical: "/contact",
});

const faqs = [
  {
    question: "How fast will I get a response?",
    answer: "We respond to all project enquiries within 4 business hours. If you need immediate help, call or WhatsApp us directly.",
  },
  {
    question: "Do you sign NDAs before discussing confidential specs?",
    answer: "Yes. We take data privacy and IP protection seriously and are happy to sign a standard NDA before your initial scoping call.",
  },
  {
    question: "What is your typical delivery timeline?",
    answer: "Starter projects deliver in 2–3 weeks. Custom web apps and AI workflow integrations typically take 4–8 weeks, with weekly milestone demos.",
  },
  {
    question: "What payment terms do you offer?",
    answer: "We usually work on 50% upfront and 50% on final testing and deployment. Monthly retainers for marketing and SEO are billed on a flexible 30-day basis.",
  },
];

export default function ContactPage() {
  return (
    <PageContainer>
      <ContactPageClient />
      <Faq faqs={faqs} />
    </PageContainer>
  );
}
