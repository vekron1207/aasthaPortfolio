"use client";

import { useScroll, motion, useTransform } from "framer-motion";

export default function ScrollLine() {
  const { scrollYProgress } = useScroll();

  // Leading dot travels from top (0%) to bottom (100%) of the fixed container
  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      aria-hidden
      className="fixed left-6 lg:left-10 top-0 h-full w-[1px] z-40 pointer-events-none hidden md:block"
    >
      {/* Faint track — full height */}
      <div className="absolute inset-0 bg-stone/[0.12]" />

      {/* Gold fill — scales from top as you scroll */}
      <motion.div
        className="absolute top-0 left-0 right-0 bg-gold"
        style={{
          scaleY: scrollYProgress,
          transformOrigin: "top",
          height: "100%",
        }}
      />

      {/* Leading dot that rides the tip of the line */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-gold shadow-[0_0_6px_2px_rgba(196,168,130,0.5)]"
        style={{ top: dotY, translateX: "-50%" }}
      />
    </div>
  );
}
