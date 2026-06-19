"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY  = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%",  "6%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] bg-cream overflow-hidden"
    >

      {/* ── Photo panel — starts at 44% so section bg cream and gradient are identical ── */}
      <div className="hidden md:block absolute inset-y-0 right-0 left-[44%]">
        <motion.div style={{ y: photoY }} className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Aastha Sharma"
            fill
            priority
            className="object-cover object-[center_85%]"
            sizes="56vw"
          />
        </motion.div>

        {/* Left fade — from full cream (matches section bg) to transparent, wide enough to fully dissolve edge */}
        <div
          className="absolute inset-y-0 left-0 z-10 pointer-events-none"
          style={{ width: "55%", background: "linear-gradient(to right, #FAFAF7 0%, #FAFAF7 18%, rgba(250,250,247,0.7) 55%, transparent 100%)" }}
        />
        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-cream to-transparent z-10 pointer-events-none" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-cream to-transparent z-10 pointer-events-none" />
      </div>

      {/* ── Text — left half, always above photo ────────────────────── */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 h-full flex flex-col justify-end pb-20 px-8 md:px-16 lg:px-24 pt-16 md:max-w-[58%]"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="text-[10px] tracking-[0.42em] text-gold uppercase font-sans mb-7"
        >
          Editor · Writer · Strategist
        </motion.p>

        {/* Name — curtain reveal */}
        <div className="mb-8">
          <div className="overflow-hidden leading-[0.9]">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.58, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-light text-ink"
              style={{ fontSize: "clamp(3.8rem, 7.2vw, 7.5rem)", lineHeight: 0.92 }}
            >
              Aastha
            </motion.h1>
          </div>
          <div className="overflow-hidden leading-[0.9]">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.72, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif italic font-light text-ink"
              style={{ fontSize: "clamp(3.8rem, 7.2vw, 7.5rem)", lineHeight: 0.92 }}
            >
              Sharma
            </motion.h1>
          </div>
        </div>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.0, duration: 0.7, ease: "easeOut" }}
          className="origin-left h-px w-12 bg-gold mb-7"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-stone font-sans font-light text-sm lg:text-base leading-relaxed max-w-sm mb-10"
        >
          Shaping ideas into impact — through editorial precision,
          strategic communication, and the power of the written word.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-wrap gap-3 mb-14"
        >
          <button
            onClick={() => document.querySelector("#publications")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-ink text-cream text-[11px] tracking-[0.2em] uppercase px-7 py-3.5 hover:bg-gold hover:text-ink transition-all duration-300 font-sans"
          >
            View Publications
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-ink text-ink text-[11px] tracking-[0.2em] uppercase px-7 py-3.5 hover:border-gold hover:text-gold transition-all duration-300 font-sans"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.38, duration: 0.7 }}
          className="flex items-center gap-6"
        >
          <div>
            <p className="font-serif text-[1.6rem] text-ink font-light leading-none">30+</p>
            <p className="text-[9px] text-stone/60 tracking-[0.22em] uppercase font-sans mt-1.5">Titles Published</p>
          </div>
          <div className="w-px h-8 bg-border flex-shrink-0" />
          <div>
            <p className="font-serif text-[1.6rem] text-ink font-light leading-none">5+</p>
            <p className="text-[9px] text-stone/60 tracking-[0.22em] uppercase font-sans mt-1.5">Years Experience</p>
          </div>
          <div className="w-px h-8 bg-border flex-shrink-0" />
          <div>
            <p className="font-serif text-[1.6rem] text-ink font-light leading-none">2</p>
            <p className="text-[9px] text-stone/60 tracking-[0.22em] uppercase font-sans mt-1.5">Research Papers</p>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.8 }}
        className="absolute bottom-8 left-8 md:left-16 lg:left-24 flex items-center gap-3 z-30"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-7 bg-gradient-to-b from-gold/50 to-transparent"
        />
        <span className="text-[9px] tracking-[0.45em] text-stone/50 uppercase font-sans">Scroll</span>
      </motion.div>

    </section>
  );
}
