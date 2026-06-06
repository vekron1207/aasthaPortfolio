"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" },
  }),
};

const highlights = [
  { label: "Current Role", value: "Editorial Assistant, NCERT" },
  { label: "Education", value: "MA English Literature, University of Delhi" },
  { label: "Location", value: "New Delhi, India" },
  { label: "Specialisation", value: "Editing · Communication · Research" },
];

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-36 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] text-gold uppercase font-sans mb-16"
        >
          About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Aastha Sharma — professional portrait"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
              {/* Gold border accent */}
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
            </div>
            {/* Decorative offset block */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/10 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-gold/30 -z-10" />
          </motion.div>

          {/* Text content */}
          <div>
            <motion.h2
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="font-serif font-light text-4xl lg:text-5xl text-ink leading-[1.1] mb-8"
            >
              Crafting narratives,
              <br />
              <em className="italic text-gold">building impact.</em>
            </motion.h2>

            <motion.p
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-stone font-sans font-light text-base leading-relaxed mb-5"
            >
              I am an Editorial Assistant at NCERT, where I have overseen the publication
              of over 30 titles — from foundational textbooks to e-content — guiding each
              project from manuscript to final release with meticulous attention to detail.
            </motion.p>

            <motion.p
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-stone font-sans font-light text-base leading-relaxed mb-5"
            >
              Beyond editing, I serve as a Project Officer for Communications at U.N. SDSN Youth,
              where I develop strategic communications for global sustainable development initiatives,
              building partnerships and amplifying impact across digital platforms.
            </motion.p>

            <motion.p
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-stone font-sans font-light text-base leading-relaxed mb-10"
            >
              My academic grounding in English Literature from the University of Delhi informs
              my approach — combining rigorous research, compelling storytelling, and a
              commitment to ideas that matter.
            </motion.p>

            {/* Key details grid */}
            <motion.div
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="grid grid-cols-2 gap-5 mb-10"
            >
              {highlights.map((item) => (
                <div key={item.label} className="border-l-2 border-gold/40 pl-4">
                  <p className="text-[10px] tracking-[0.2em] text-gold uppercase font-sans mb-1">{item.label}</p>
                  <p className="text-sm text-ink font-sans leading-snug">{item.value}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.a
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              href="/Resume_Aastha_Sharma.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm tracking-wider text-ink border-b border-ink hover:text-gold hover:border-gold transition-all duration-300 uppercase font-sans pb-1"
            >
              Download Full Resume
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="translate-y-px">
                <path d="M7 1v8M3 7l4 4 4-4M1 12h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
