"use client";

import { siteConfig } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 px-8 lg:px-16 bg-green grid grid-cols-1 lg:grid-cols-2 gap-24 items-start relative overflow-hidden"
    >
      {/* Decorative circle */}
      <div className="absolute w-[700px] h-[700px] rounded-full -top-[300px] -right-[300px] border border-cream/5 pointer-events-none" />

      {/* Left */}
      <FadeUp>
        <SectionLabel light>Get In Touch</SectionLabel>
        <h2
          className="text-[clamp(2.2rem,4vw,3.4rem)] font-light leading-[1.15] text-cream mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Let&apos;s work together on your next project
        </h2>

        <p
          className="text-lg font-light leading-[1.8] text-cream/65 mb-10"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Have a project in mind? I&apos;d love to hear about it. Drop me a message
          and let&apos;s create something great.
        </p>

        {/* Contact info */}
        <div className="space-y-0">
          {[
            { icon: <Mail size={16} strokeWidth={1.5} />, label: "Email", value: siteConfig.email },
            { icon: <MapPin size={16} strokeWidth={1.5} />, label: "Location", value: siteConfig.location },
            { icon: <Phone size={16} strokeWidth={1.5} />, label: "Phone", value: siteConfig.phone },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 py-5 border-b border-cream/10"
            >
              <div className="w-9 h-9 border border-cream/20 flex items-center justify-center text-cream flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-[0.62rem] tracking-[0.1em] uppercase text-cream/40 mb-0.5">
                  {item.label}
                </p>
                <p className="text-[0.82rem] text-cream">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex gap-3 mt-8">
          {[
            { icon: <Linkedin size={16} strokeWidth={1.5} />, href: siteConfig.social.linkedin, label: "LinkedIn" },
            { icon: <Github size={16} strokeWidth={1.5} />, href: siteConfig.social.github, label: "GitHub" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-10 h-10 border border-cream/20 flex items-center justify-center text-cream/60 no-underline hover:bg-cream/10 hover:text-cream hover:border-cream/40 transition-all duration-200"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </FadeUp>

      {/* Right — Form */}
      <FadeUp delay={150}>
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="First Name" type="text" placeholder="Ahmed" />
            <FormField label="Last Name" type="text" placeholder="Belkacem" />
          </div>
          <FormField label="Email Address" type="email" placeholder="ahmed@example.com" />
          <FormField label="Subject" type="text" placeholder="Project Inquiry" />

          <div>
            <label className="block text-[0.62rem] tracking-[0.12em] uppercase text-cream/50 mb-2">
              Message
            </label>
            <textarea
              placeholder="Tell me about your project..."
              rows={5}
              className="w-full bg-cream/5 border border-cream/12 text-cream placeholder-cream/25 px-4 py-3.5 font-mono text-[0.8rem] outline-none focus:border-cream/40 focus:bg-cream/8 transition-all duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cream text-green py-4 text-[0.72rem] tracking-[0.12em] uppercase hover:bg-cream-dark transition-all duration-200 hover:-translate-y-0.5 mt-2"
          >
            Send Message →
          </button>
        </form>
      </FadeUp>
    </section>
  );
}

function FormField({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-[0.62rem] tracking-[0.12em] uppercase text-cream/50 mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-cream/5 border border-cream/12 text-cream placeholder-cream/25 px-4 py-3.5 font-mono text-[0.8rem] outline-none focus:border-cream/40 focus:bg-cream/8 transition-all duration-200"
      />
    </div>
  );
}
