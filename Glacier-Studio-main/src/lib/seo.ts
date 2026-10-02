import { Metadata } from "next";
import { siteConfig } from "@/data/site";

interface ConstructMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title = `${siteConfig.name} | ${siteConfig.tagline}`,
  description = siteConfig.positioning,
  image = "/brand/og-image.jpg",
  canonical = "/",
  noIndex = false,
}: ConstructMetadataProps = {}): Metadata {
  const fullUrl = `${siteConfig.url}${canonical}`;

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [
      "Glacier Studio",
      "Next Gen IT Solutions",
      "AI Automation",
      "Custom Software Development",
      "Web App Development",
      "SEO Optimization",
      "Google Ads Management",
      "Digital Marketing",
      "Tamil Nadu IT Company",
      "India Tech Agency",
    ],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${siteConfig.tagline}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@glacierstudio",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/logo.webp",
      apple: "/logo.webp",
    },
  };
}
