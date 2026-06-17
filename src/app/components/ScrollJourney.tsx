"use client";

import { useScroll, motion, useTransform } from "framer-motion";

// Three paths drawn independently so each can be timed to the right scroll range.
// No ghost track — nothing renders until the line actually draws to that point.
const PRE  = "M 100 0 L 100 380";

// Symmetric heart, center dip at (100,380), bumps at ~(65,330)/(135,330), bottom (100,560)
const HEART =
  "M 100 380 " +
  "C 128 318, 165 348, 165 415 " +  // center dip → right lobe top
  "C 165 488, 100 530, 100 560 " +  // right lobe → bottom point
  "C 100 530,  35 488,  35 415 " +  // bottom → left lobe top (mirror)
  "C  35 348,  72 318, 100 380";    // left lobe → center dip (mirror)

const POST = "M 100 380 L 100 1000";

export default function ScrollJourney() {
  const { scrollYProgress } = useScroll();

  // Fade the whole element in after a breath of scroll
  const baseOpacity = useTransform(scrollYProgress, [0, 0.018], [0, 1]);

  // Pre-heart straight line — draws during 0 → 23% scroll
  const preLen = useTransform(scrollYProgress, [0, 0.23], [0, 1]);

  // Heart — draws during 21% → 38% scroll (overlaps a touch for seamless join)
  const heartLen  = useTransform(scrollYProgress, [0.21, 0.38], [0, 1]);
  const heartOpac = useTransform(scrollYProgress, [0.19, 0.23], [0, 1]);

  // Post-heart straight line — draws during 36% → 100% scroll
  const postLen  = useTransform(scrollYProgress, [0.36, 1.0], [0, 1]);
  const postOpac = useTransform(scrollYProgress, [0.34, 0.38], [0, 1]);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-1/2 -translate-x-1/2 h-full pointer-events-none hidden md:block"
      style={{ width: "200px", zIndex: 30 }}
    >
      <svg
        viewBox="0 0 200 1000"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-full"
        fill="none"
      >
        <defs>
          <filter id="heart-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Pre-heart line ── */}
        <motion.path
          d={PRE}
          stroke="#C4A882"
          strokeWidth="0.9"
          strokeLinecap="round"
          style={{ pathLength: preLen, opacity: baseOpacity }}
        />

        {/* ── Heart: glow layer ── */}
        <motion.path
          d={HEART}
          stroke="#C4A882"
          strokeWidth="2.8"
          strokeLinecap="round"
          filter="url(#heart-glow)"
          style={{ pathLength: heartLen, opacity: heartOpac }}
        />

        {/* ── Heart: crisp top layer ── */}
        <motion.path
          d={HEART}
          stroke="#C4A882"
          strokeWidth="0.9"
          strokeLinecap="round"
          style={{ pathLength: heartLen, opacity: heartOpac }}
        />

        {/* ── Post-heart line ── */}
        <motion.path
          d={POST}
          stroke="#C4A882"
          strokeWidth="0.9"
          strokeLinecap="round"
          style={{ pathLength: postLen, opacity: postOpac }}
        />
      </svg>
    </div>
  );
}
