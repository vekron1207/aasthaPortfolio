"use client";

import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    value: "1128aastha@gmail.com",
    href: "mailto:1128aastha@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Aastha Sharma",
    href: "https://www.linkedin.com/in/aastha-sharma",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 9953877338",
    href: "tel:+919953877338",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.01a16 16 0 0 0 6.08 6.08l1.38-1.38a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "New Delhi, India",
    href: "https://maps.google.com/?q=New+Delhi",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-36 bg-ink relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #C4A882 0px, #C4A882 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #C4A882 0px, #C4A882 1px, transparent 1px, transparent 60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] text-gold uppercase font-sans mb-6"
          >
            Get in Touch
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-light text-cream leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Let&apos;s create something
            <br />
            <em className="italic text-gold">remarkable together.</em>
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="origin-center h-px w-12 bg-gold mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-stone-light font-sans font-light text-base leading-relaxed mb-14 max-w-xl mx-auto"
          >
            Open to editorial collaborations, communications projects, consulting,
            and conversations about ideas that drive meaningful change.
          </motion.p>

          {/* Contact links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label === "Email" || link.label === "Phone" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 + i * 0.08, duration: 0.6 }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-4 text-left border border-white/10 hover:border-gold/60 bg-white/5 hover:bg-gold/5 px-6 py-4 transition-all duration-300 group"
              >
                <span className="text-gold shrink-0">{link.icon}</span>
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-stone-light uppercase font-sans mb-0.5">{link.label}</p>
                  <p className="text-cream text-sm font-sans group-hover:text-gold transition-colors duration-200">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Resume CTA */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.75 }}
            href="/Resume_Aastha_Sharma.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-ink text-sm tracking-[0.2em] uppercase font-sans px-8 py-4 hover:bg-gold-dark transition-all duration-300"
          >
            Download Resume
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v8M3 7l4 4 4-4M1 12h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
