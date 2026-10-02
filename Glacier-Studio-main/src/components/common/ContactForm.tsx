"use client";

import React, { useState } from "react";
import { Button } from "./Button";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { EnquiryFormState } from "@/types";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormState>({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: "AI & Automation",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill out all required fields.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const text = `Hello Glacier Studio! 👋\n\nI submitted an inquiry on your website:\n\n👤 *Name:* ${formData.name}\n🏢 *Company:* ${formData.businessName || "N/A"}\n📧 *Email:* ${formData.email}\n📞 *Phone:* ${formData.phone || "N/A"}\n🛠️ *Service:* ${formData.service}\n📝 *Details:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/916381945534?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setStatus("success");
      window.open(whatsappUrl, "_blank");
    }, 600);
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#D5EDFA] shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#159FE5]/10 to-transparent rounded-bl-full pointer-events-none" />

      {status === "success" ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 bg-[#EAF7FF] text-[#16A34A] rounded-full flex items-center justify-center mx-auto border border-[#16A34A]/30">
            <CheckCircle2 size={36} />
          </div>
          <h3 className="text-2xl font-bold text-[#111827]">Enquiry Received!</h3>
          <p className="text-[#64748B] max-w-md mx-auto">
            Thank you for reaching out to Glacier Studio. Our technical leadership team will review your project specs and respond within 24 business hours.
          </p>
          <Button
            variant="secondary"
            onClick={() => {
              setStatus("idle");
              setFormData({
                name: "",
                businessName: "",
                email: "",
                phone: "",
                service: "AI & Automation",
                message: "",
              });
            }}
          >
            Send Another Inquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <h3 className="text-2xl font-extrabold text-[#111827]">Start Your Project</h3>
            <p className="text-sm text-[#64748B]">
              Tell us about your business goals and technical requirements.
            </p>
          </div>

          {status === "error" && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl flex items-center gap-2">
              <AlertCircle size={18} />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase text-[#111827] mb-1.5">
                Full Name <span className="text-[#159FE5]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Sarah Jenkins"
                className="w-full h-11 px-4 text-sm bg-[#F2FAFF] border border-[#D5EDFA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#159FE5] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label htmlFor="businessName" className="block text-xs font-semibold uppercase text-[#111827] mb-1.5">
                Company / Organization
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="e.g. Apex Global"
                className="w-full h-11 px-4 text-sm bg-[#F2FAFF] border border-[#D5EDFA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#159FE5] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase text-[#111827] mb-1.5">
                Work Email <span className="text-[#159FE5]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="sarah@company.com"
                className="w-full h-11 px-4 text-sm bg-[#F2FAFF] border border-[#D5EDFA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#159FE5] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase text-[#111827] mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full h-11 px-4 text-sm bg-[#F2FAFF] border border-[#D5EDFA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#159FE5] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-xs font-semibold uppercase text-[#111827] mb-1.5">
              Primary Service Needed
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full h-11 px-4 text-sm bg-[#F2FAFF] border border-[#D5EDFA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#159FE5] focus:bg-white transition-all text-[#111827]"
            >
              <option value="SEO & Website Optimization">SEO & Website Optimization</option>
              <option value="Web App Development">Web App Development</option>
              <option value="Custom Software Development">Custom Software Development</option>
              <option value="Google & Meta Ads Management">Google & Meta Ads Management</option>
              <option value="AI & Automation Solutions">AI & Automation Solutions</option>
              <option value="Social Media Management">Social Media Management</option>
              <option value="Video & Graphic Design">Video & Graphic Design</option>
              <option value="Custom End-to-End Solution">Custom End-to-End Solution</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase text-[#111827] mb-1.5">
              Project Description <span className="text-[#159FE5]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Outline your timeline, goals, key features, or challenges..."
              className="w-full p-4 text-sm bg-[#F2FAFF] border border-[#D5EDFA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#159FE5] focus:bg-white transition-all"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={status === "submitting"}
            icon={status === "submitting" ? null : <Send size={18} />}
          >
            {status === "submitting" ? "Transmitting Specs..." : "Submit Project Enquiry →"}
          </Button>

          <p className="text-xs text-center text-[#94A3B8] pt-1">
            🔒 Strict NDA confidentiality guaranteed. No sales spam.
          </p>
        </form>
      )}
    </div>
  );
};
