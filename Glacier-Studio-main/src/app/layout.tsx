import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { constructMetadata } from "@/lib/seo";
import { ChatBot } from "@/components/chat/ChatBot";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakarta.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col text-[#111827] selection:bg-[#159FE5] selection:text-white relative"
      >
        {/* Hardware Accelerated GPU Fixed Background (Zero Scroll Lag) */}
        <div className="fixed inset-0 -z-50 pointer-events-none transform-gpu">
          <Image
            src="/layoutbg.webp"
            alt="Layout Background"
            fill
            priority
            quality={85}
            className="object-cover object-center w-full h-full opacity-60"
          />
        </div>

        {children}
        <WhatsAppButton />
        <ChatBot />
      </body>
    </html>
  );
}
