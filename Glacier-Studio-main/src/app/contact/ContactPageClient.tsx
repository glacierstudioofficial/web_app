"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ArrowRight,
  ChevronRight,
  MessageCircle,
  Send,
  Lock,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const CONTACT_INFO = {
  phone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  location: siteConfig.contact.location,
  hours: "Mon – Sat · 9:00 AM – 8:00 PM IST",
};

const SERVICES = [
  "AI & Automation",
  "Web & App Development",
  "SEO & Growth Marketing",
  "Custom SaaS / Software",
  "Google & Meta Ads",
  "Video & Design",
  "Technical Consultation",
];

const NEXT_STEPS = [
  { title: "We review your brief", text: "A senior team member reads every enquiry — no bots, no sales scripts." },
  { title: "Free scoping call", text: "A short call to understand your goals, constraints and timeline." },
  { title: "Your proposal", text: "A clear plan with scope, timeline and a fixed quote. No obligation." },
];

const inputCls =
  "w-full rounded-xl border border-[#E2E8F0] bg-white px-4 text-[15px] text-[#0B1220] placeholder:text-[#94A3B8] shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all focus:border-[#159FE5] focus:outline-none focus:ring-4 focus:ring-[#159FE5]/10";

const labelCls = "mb-2 block text-[13px] font-semibold text-[#0B1220]";

const emptyForm = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  service: SERVICES[0],
  message: "",
};

export const ContactPageClient: React.FC = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const update = (field: keyof typeof emptyForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((p) => ({ ...p, [field]: e.target.value }));

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(key);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please complete all required fields (*).");
      setStatus("error");
      return;
    }
    setStatus("submitting");

    const text = `Hello Glacier Studio! 👋\n\nI submitted a project inquiry:\n\n👤 *Name:* ${formData.name}\n🏢 *Company:* ${formData.businessName || "N/A"}\n📧 *Email:* ${formData.email}\n📞 *Phone:* ${formData.phone || "N/A"}\n🛠️ *Service:* ${formData.service}\n📝 *Overview:* ${formData.message}`;

    const whatsappUrl = `${siteConfig.socials.whatsapp}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setStatus("success");
      window.open(whatsappUrl, "_blank");
    }, 600);
  };

  const channels = [
    {
      key: "phone",
      icon: Phone,
      label: "Phone & WhatsApp",
      value: CONTACT_INFO.phone,
      copy: CONTACT_INFO.phone,
      action: { label: "WhatsApp", href: siteConfig.socials.whatsapp, external: true },
    },
    {
      key: "email",
      icon: Mail,
      label: "Email",
      value: CONTACT_INFO.email,
      copy: CONTACT_INFO.email,
      action: { label: "Send", href: `mailto:${CONTACT_INFO.email}`, external: false },
    },
    { key: "location", icon: MapPin, label: "Headquarters", value: CONTACT_INFO.location },
    { key: "hours", icon: Clock, label: "Business hours", value: CONTACT_INFO.hours },
  ];

  return (
    <section className="relative overflow-hidden bg-white border-b border-[#EEF2F6]">
      <div className="absolute inset-0 bg-grid-light mask-radial-fade pointer-events-none" aria-hidden />
      <div className="absolute -top-40 right-[-10%] h-[620px] w-[620px] rounded-full bg-[#159FE5]/15 blur-[140px] pointer-events-none" aria-hidden />
      <div className="absolute top-1/2 -left-40 h-[420px] w-[420px] rounded-full bg-[#7DD3FC]/15 blur-[120px] pointer-events-none" aria-hidden />

      <Container size="large" className="relative pt-[7.25rem] pb-20 sm:pt-[8.25rem] lg:pt-[9.25rem] lg:pb-28">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-12">
          {/* ═══ LEFT: intro + channels ═══ */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-7">
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[13px] font-medium text-[#64748B]">
                <Link href="/" className="hover:text-[#0B1220] transition-colors">Home</Link>
                <ChevronRight size={14} className="text-[#CBD5E1]" />
                <span className="text-[#0B1220]">Contact</span>
              </nav>

              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#E2E8F0] bg-white/80 py-1 pl-1 pr-4 text-[13px] font-medium text-[#334155] shadow-[0_1px_2px_rgba(15,23,42,0.04)] backdrop-blur">
                <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[#DCFCE7]">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-[#22C55E] opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-[#22C55E]" />
                </span>
                Replying within 4 business hours
              </div>

              <h1 className="text-[2.6rem] sm:text-6xl font-bold leading-[1.02] tracking-[-0.045em] text-[#0B1220] text-balance">
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-[#159FE5] via-[#0E86C8] to-[#0867A5] bg-clip-text text-transparent">
                  extraordinary.
                </span>
              </h1>

              <p className="max-w-lg text-lg leading-relaxed text-[#475569]">
                Have a project in mind, need an AI automation strategy, or want to level up your web presence? Talk directly with our core engineering team.
              </p>
            </div>

            {/* Channels */}
            <ul className="divide-y divide-[#EEF2F6] overflow-hidden rounded-2xl border border-[#E8EDF3] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              {channels.map((c) => (
                <li key={c.key} className="flex items-center gap-4 px-5 py-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE] text-[#0867A5] ring-1 ring-[#BAE6FD]/70">
                    <c.icon size={17} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[12px] font-medium text-[#64748B]">{c.label}</div>
                    <div className="truncate text-[14.5px] font-semibold text-[#0B1220]">{c.value}</div>
                  </div>
                  {c.copy && (
                    <button
                      type="button"
                      onClick={() => copyToClipboard(c.copy!, c.key)}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#64748B] transition-colors hover:bg-[#F1F5F9] hover:text-[#0B1220]"
                      aria-label={`Copy ${c.label.toLowerCase()}`}
                    >
                      {copiedField === c.key ? <Check size={15} className="text-[#16A34A]" /> : <Copy size={15} />}
                    </button>
                  )}
                  {c.action && (
                    <a
                      href={c.action.href}
                      {...(c.action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="shrink-0 rounded-full border border-[#E2E8F0] px-3 py-1.5 text-[12px] font-semibold text-[#0B1220] transition-colors hover:border-[#CBD5E1] hover:bg-[#F8FAFC]"
                    >
                      {c.action.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* What happens next */}
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#0867A5]">What happens next</div>
              <ol className="relative mt-6 space-y-6 before:absolute before:bottom-3 before:left-[15px] before:top-3 before:w-px before:bg-[#E2E8F0]">
                {NEXT_STEPS.map((s, i) => (
                  <li key={s.title} className="relative flex gap-4">
                    <span
                      className={cn(
                        "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-[12px] font-semibold",
                        i === 0 ? "border-[#159FE5] bg-[#159FE5] text-white" : "border-[#E2E8F0] bg-white text-[#0B1220]"
                      )}
                    >
                      {i + 1}
                    </span>
                    <div className="pt-1">
                      <div className="text-[15px] font-semibold text-[#0B1220]">{s.title}</div>
                      <div className="mt-1 text-[14px] leading-relaxed text-[#64748B]">{s.text}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* ═══ RIGHT: form ═══ */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-white p-6 shadow-product sm:p-10">
              {status === "success" ? (
                <div className="py-14 text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F0FDF4] text-[#16A34A] ring-8 ring-[#F0FDF4]/60">
                    <CheckCircle2 size={32} />
                  </span>
                  <h2 className="mt-8 text-3xl font-bold tracking-[-0.035em] text-[#0B1220]">Brief received.</h2>
                  <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-[#64748B]">
                    Thanks for reaching out. We&apos;ve opened WhatsApp with your details — our team will review your project and respond within <strong className="text-[#0B1220]">4 business hours</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData(emptyForm);
                    }}
                    className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[#0B1220] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#16223A]"
                  >
                    Send another enquiry <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2 border-b border-[#EEF2F6] pb-6">
                    <h2 className="text-2xl sm:text-[1.75rem] font-bold tracking-[-0.035em] text-[#0B1220]">Tell us about your project</h2>
                    <p className="text-[14.5px] text-[#64748B]">
                      Get a tailored proposal and scoping estimate. Takes about 2 minutes.
                    </p>
                  </div>

                  {status === "error" && (
                    <div role="alert" className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-3.5 text-[14px] font-medium text-red-700">
                      <AlertCircle size={17} className="shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  {/* Service chips */}
                  <fieldset>
                    <legend className={labelCls}>What do you need help with?</legend>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((s) => {
                        const isSelected = formData.service === s;
                        return (
                          <button
                            key={s}
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() => setFormData((p) => ({ ...p, service: s }))}
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[13px] font-medium transition-all duration-150",
                              isSelected
                                ? "border-[#0B1220] bg-[#0B1220] text-white"
                                : "border-[#E2E8F0] bg-white text-[#334155] hover:border-[#CBD5E1] hover:bg-[#F8FAFC]"
                            )}
                          >
                            {isSelected && <Check size={13} strokeWidth={3} />}
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelCls}>
                        Full name <span className="text-[#159FE5]">*</span>
                      </label>
                      <input id="name" name="name" type="text" autoComplete="name" required value={formData.name} onChange={update("name")} placeholder="John Doe" className={cn(inputCls, "h-12")} />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelCls}>
                        Work email <span className="text-[#159FE5]">*</span>
                      </label>
                      <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={update("email")} placeholder="john@company.com" className={cn(inputCls, "h-12")} />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelCls}>Phone / WhatsApp</label>
                      <input id="phone" name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={update("phone")} placeholder="+91 98765 43210" className={cn(inputCls, "h-12")} />
                    </div>
                    <div>
                      <label htmlFor="businessName" className={labelCls}>Company</label>
                      <input id="businessName" name="businessName" type="text" autoComplete="organization" value={formData.businessName} onChange={update("businessName")} placeholder="Acme Corp" className={cn(inputCls, "h-12")} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelCls}>
                      Project details <span className="text-[#159FE5]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={update("message")}
                      placeholder="Your goals, key features, audience or desired timeline…"
                      className={cn(inputCls, "resize-y py-3")}
                    />
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#159FE5] px-6 text-[15px] font-semibold text-white shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_10px_30px_-10px_rgba(21,159,229,0.7)] transition-all hover:bg-[#0E8FD1] disabled:opacity-70"
                    >
                      {status === "submitting" ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send project brief
                          <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>
                    <a
                      href={siteConfig.socials.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-6 text-[15px] font-semibold text-[#0B1220] transition-colors hover:border-[#CBD5E1] hover:bg-[#F8FAFC]"
                    >
                      <MessageCircle size={16} /> Chat instead
                    </a>
                  </div>

                  <p className="flex items-center justify-center gap-1.5 text-[12.5px] text-[#94A3B8]">
                    <Lock size={12} /> Confidential. Happy to sign an NDA before we talk specifics.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactPageClient;
