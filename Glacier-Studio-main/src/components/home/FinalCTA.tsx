import React from "react";
import { Container } from "@/components/common/Container";
import { ContactForm } from "@/components/common/ContactForm";
import { ScrollReveal, AnimatedText } from "@/components/common/ScrollReveal";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/site";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-white via-[#F2FAFF] to-[#EAF7FF] relative overflow-hidden" id="contact">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#159FE5]/5 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0867A5]/5 rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none blur-[60px]" />

      <Container size="large" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Contact Info */}
          <div className="lg:col-span-5 space-y-7">
            <ScrollReveal direction="pop" delay={0}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#EAF7FF] text-[#0867A5] border border-[#D5EDFA]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#159FE5] animate-pulse" />
                <span>LET&apos;S CONNECT</span>
              </div>
            </ScrollReveal>

            <AnimatedText
              text="Ready to build what's next?"
              tag="h2"
              className="text-4xl sm:text-5xl font-black text-[#111827] tracking-tight leading-[1.1]"
              delay={100}
              baseDelay={80}
            />

            <ScrollReveal direction="up" delay={250}>
              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
                Transform your business with next-generation IT solutions, custom software, high-ROAS marketing, and AI automation.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={350}>
              <div className="space-y-4 pt-2 border-t border-[#D5EDFA]">
                <div className="flex items-center gap-3 text-sm font-semibold text-[#111827]">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#D5EDFA] text-[#159FE5] flex items-center justify-center shadow-sm">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] font-medium">Direct Hotline</div>
                    <a href={`tel:${siteConfig.contact.phoneClean}`} className="hover:text-[#159FE5] transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm font-semibold text-[#111827]">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#D5EDFA] text-[#159FE5] flex items-center justify-center shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] font-medium">Project Inquiries</div>
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#159FE5] transition-colors break-all">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm font-semibold text-[#111827]">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#D5EDFA] text-[#159FE5] flex items-center justify-center shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] font-medium">Headquarters</div>
                    <span>{siteConfig.contact.location}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="fade" delay={450}>
              <div className="pt-2 space-y-2 text-xs font-semibold text-[#64748B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#16A34A]" />
                  <span>Response within 24 business hours guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#16A34A]" />
                  <span>Free technical scope & architecture consultation</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={150}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};
