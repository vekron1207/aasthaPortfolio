"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden bg-cream flex">
      {/* Left — text panel */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex flex-col justify-end pb-20 px-8 md:px-16 lg:px-24 w-full md:w-1/2 lg:w-[55%]"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xs tracking-[0.3em] text-gold uppercase font-sans mb-6"
        >
          Editorial Assistant · Writer · Strategist
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-light text-ink leading-[1.05] mb-6"
          style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
        >
          Aastha
          <br />
          <em className="font-light italic">Sharma</em>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="origin-left h-px w-16 bg-gold mb-6"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-stone font-sans font-light text-base lg:text-lg leading-relaxed max-w-md mb-10"
        >
          Shaping ideas into impact — through editorial precision,
          strategic communication, and the power of the written word.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => document.querySelector("#publications")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-ink text-cream text-sm tracking-wider uppercase px-7 py-3.5 hover:bg-gold hover:text-ink transition-all duration-400 font-sans"
          >
            View Publications
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-ink text-ink text-sm tracking-wider uppercase px-7 py-3.5 hover:border-gold hover:text-gold transition-all duration-400 font-sans"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex gap-10 mt-14"
        >
          {[
            { num: "30+", label: "Titles Published" },
            { num: "5+", label: "Years Experience" },
            { num: "2", label: "Research Papers" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-2xl text-ink font-light">{stat.num}</p>
              <p className="text-xs text-stone-light tracking-wider uppercase font-sans mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right — image panel */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 top-0 h-full w-full md:w-1/2 lg:w-[45%] overflow-hidden"
      >
        <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
          <Image
            src="/images/hero.jpg"
            alt="Aastha Sharma"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </motion.div>
        {/* Gradient overlay on left edge to blend with text */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/20 to-transparent pointer-events-none" />
      </motion.div>

      {/* Mobile image overlay gradient */}
      <div className="absolute inset-0 bg-cream/60 md:hidden pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] tracking-[0.3em] text-stone uppercase font-sans">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-stone to-transparent"
        />
      </motion.div>
    </section>
  );
}
