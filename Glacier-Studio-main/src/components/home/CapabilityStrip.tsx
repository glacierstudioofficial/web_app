"use client";

import React from "react";
import LogoLoop, { LogoItem } from "@/components/common/LogoLoop";
import {
  TypeScriptLogo,
  TailwindLogo,
  VercelLogo,
  GithubLogo,
  DockerLogo,
  PrismaLogo,
  SupabaseLogo,
  StripeLogo,
  ReactLogo,
  NextjsLogo,
  PythonLogo,
  OpenAILogo,
} from "@/components/common/TechLogos";

const techLogos: LogoItem[] = [
  { node: <TypeScriptLogo className="h-10 w-10 text-white" fill="white" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <TailwindLogo className="h-9 w-9 text-white" fill="white" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <VercelLogo className="h-8 w-8 text-white" fill="white" />, title: "Vercel", href: "https://vercel.com" },
  { node: <GithubLogo className="h-9 w-9 text-white" fill="white" />, title: "GitHub", href: "https://github.com" },
  { node: <DockerLogo className="h-9 w-9 text-white" fill="white" />, title: "Docker", href: "https://www.docker.com" },
  { node: <PrismaLogo className="h-9 w-9 text-white" fill="white" />, title: "Prisma", href: "https://www.prisma.io" },
  { node: <SupabaseLogo className="h-9 w-9 text-white" fill="white" />, title: "Supabase", href: "https://supabase.com" },
  { node: <StripeLogo className="h-9 w-9 text-white" fill="white" />, title: "Stripe", href: "https://stripe.com" },
  { node: <ReactLogo className="h-10 w-10 text-white" fill="white" />, title: "React", href: "https://react.dev" },
  { node: <NextjsLogo className="h-10 w-10 text-white" fill="white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <PythonLogo className="h-9 w-9 text-white" fill="white" />, title: "Python", href: "https://www.python.org" },
  { node: <OpenAILogo className="h-9 w-9 text-white" fill="white" />, title: "OpenAI", href: "https://openai.com" },
];

export const CapabilityStrip: React.FC = () => {
  return (
    <section className="bg-[#0B0F17] text-white py-8 border-y border-white/10 overflow-hidden relative shadow-inner">
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={40}
        gap={56}
        hoverSpeed={0}
        scaleOnHover={true}
        fadeOut={true}
        fadeOutColor="#0B0F17"
        ariaLabel="Technology partners and stack"
      />
    </section>
  );
};
