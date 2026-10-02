import React from "react";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { ScrollReveal, AnimatedText } from "@/components/common/ScrollReveal";
import { SectionBadge } from "@/components/common/Badge";
import { IconBox } from "@/components/common/IconBox";
import { industriesData } from "@/data/industries";

export const Industries: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white/85 border-b border-[#D5EDFA] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#EAF7FF]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#F2FAFF]/80 rounded-full blur-2xl pointer-events-none" />

      <Container size="large" className="relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-6">
            <SectionBadge>INDUSTRIES WE SERVE</SectionBadge>
          </div>
        </ScrollReveal>

        <AnimatedText
          text="Tailored solutions for every growth stage"
          tag="h2"
          className="text-4xl sm:text-5xl font-black text-[#111827] tracking-tight leading-[1.15] text-center mb-6"
          delay={100}
          baseDelay={60}
        />

        <ScrollReveal direction="fade" delay={300}>
          <p className="text-center text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto mb-16 leading-relaxed">
            We bring deep domain expertise across vertical markets, configuring specialized software and digital systems.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {industriesData.map((ind, idx) => (
            <ScrollReveal key={ind.id} delay={idx * 80} direction="up" className="h-full">
              <div className="group bg-white rounded-3xl border border-[#D5EDFA] shadow-sm hover:shadow-[0_20px_45px_-15px_rgba(21,159,229,0.18)] hover:border-[#159FE5]/50 transition-all duration-300 h-full flex flex-col overflow-hidden">
                {/* Image Banner */}
                {ind.image && (
                  <div className="relative h-44 w-full overflow-hidden bg-[#EAF7FF] shrink-0">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
                    
                    {/* Floating Icon Box */}
                    <div className="absolute bottom-3 left-4 z-10">
                      <div className="shadow-md rounded-2xl bg-white/90 backdrop-blur-xs p-1">
                        <IconBox iconName={ind.iconName} size="sm" variant="ice" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl font-extrabold text-[#111827] group-hover:text-[#0867A5] transition-colors duration-300">
                      {ind.title}
                    </h3>

                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {ind.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-[#D5EDFA]/60 text-xs text-[#0867A5] font-medium leading-normal">
                    <span className="font-bold text-[#111827] block mb-0.5">Key Impact:</span>
                    <span className="text-[#0867A5] font-semibold">{ind.useCase}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
