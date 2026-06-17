"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HEART_PATH =
  "M 250 112 C 250 86 215 60 182 60 C 125 60 78 108 78 162 C 78 246 160 318 250 410 C 340 318 422 246 422 162 C 422 108 375 60 318 60 C 285 60 250 86 250 112 Z";

const name = "Aastha";

export default function DrawingDivider() {
  const ref = useRef<HTMLElement>(null);

  // Progress 0 → 1 as the section travels from entering the bottom of the viewport
  // to its center reaching the middle of the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Heart draws across the full scroll range of this section entering view
  const pathLength  = useTransform(scrollYProgress, [0, 0.85], [0, 1]);
  const pathOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.5, 0.85], [0, 0.55]);

  // Name + tagline fade in after heart finishes
  const captionOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const captionY       = useTransform(scrollYProgress, [0.8, 1], [14, 0]);

  return (
    <section
      ref={ref}
      className="relative py-28 lg:py-40 bg-ink flex flex-col items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #C4A882 0%, transparent 65%)",
        }}
      />

      {/* Scroll-drawn heart */}
      <div className="relative">
        <svg
          viewBox="0 0 500 440"
          className="w-44 h-40 md:w-60 md:h-52 lg:w-72 lg:h-64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <defs>
            <filter id="heart-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Glow layer */}
          <motion.path
            d={HEART_PATH}
            stroke="#C4A882"
            strokeWidth="3"
            filter="url(#heart-glow)"
            style={{ pathLength, opacity: glowOpacity }}
          />

          {/* Crisp stroke */}
          <motion.path
            d={HEART_PATH}
            stroke="#C4A882"
            strokeWidth="1.2"
            style={{ pathLength, opacity: pathOpacity }}
          />
        </svg>
      </div>

      {/* Name + tagline */}
      <motion.div
        style={{ opacity: captionOpacity, y: captionY }}
        className="flex flex-col items-center gap-3 mt-5"
      >
        <div className="flex gap-[0.06em]">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.5, ease: "easeOut" }}
              className="font-serif italic text-gold text-2xl md:text-3xl font-light tracking-widest"
            >
              {char}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="origin-center h-px w-10 bg-gold/40"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-[10px] tracking-[0.4em] text-stone-light uppercase font-sans"
        >
          For the love of language
        </motion.p>
      </motion.div>
    </section>
  );
}
