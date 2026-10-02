export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  badge?: string;
  features: string[];
  metrics?: { label: string; value: string }[];
  href: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  useCase: string;
  image?: string;
}

export type ProjectCategory = "ecommerce" | "chatbot" | "lms" | "website" | "software";

export interface CaseStudyItem {
  id: string;
  title: string;
  /** One-line hook shown under the title */
  tagline: string;
  client: string;
  industry: string;
  category: ProjectCategory;
  /** Lucide icon name, used when there is no image */
  iconName: string;
  /** Optional screenshot / product image in /public */
  image?: string;
  services: string[];
  challenge: string;
  solution: string;
  /** Concrete things the project includes */
  features: string[];
  /** Small stat tiles (facts about scope, not marketing claims) */
  metrics: { label: string; value: string }[];
  technologies: string[];
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface EnquiryFormState {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  budget?: string;
  message: string;
}
