"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  {
    src: "/images/gallery-ocean.jpg",
    alt: "Aastha at cliffside overlooking the ocean",
    caption: "Nusa Penida, Bali",
    span: "row-span-2",
  },
  {
    src: "/images/gallery-garden-path.jpg",
    alt: "Aastha walking through a bougainvillea garden",
    caption: "Delhi Garden Walk",
    span: "",
  },
  {
    src: "/images/gallery-bougainvillea.jpg",
    alt: "Aastha with pink bougainvillea in bloom",
    caption: "Spring in Delhi",
    span: "",
  },
  {
    src: "/images/gallery-pergola.jpg",
    alt: "Aastha under a flowering orange pergola",
    caption: "Rose Garden, New Delhi",
    span: "row-span-2",
  },
  {
    src: "/images/gallery-riverside.jpg",
    alt: "Aastha by the riverside, Haridwar",
    caption: "Haridwar, Uttarakhand",
    span: "",
  },
  {
    src: "/images/gallery-night.jpg",
    alt: "Aastha in evening light",
    caption: "An evening in Delhi",
    span: "",
  },
  {
    src: "/images/gallery-flowers.jpg",
    alt: "Aastha surrounded by red bougainvillea",
    caption: "Winter in Delhi",
    span: "",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<null | typeof photos[0]>(null);

  return (
    <>
      <section id="gallery" className="py-28 lg:py-36 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-4">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs tracking-[0.3em] text-gold uppercase font-sans mb-4"
              >
                Gallery
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif font-light text-4xl lg:text-5xl text-ink leading-[1.1]"
              >
                Moments & Places
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-stone text-sm font-sans font-light max-w-xs"
            >
              A visual journal of journeys, ideas, and the places that inspire.
            </motion.p>
          </div>

          {/* Masonry grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px]">
            {photos.map((photo, i) => (
              <motion.button
                key={photo.src}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
                onClick={() => setLightbox(photo)}
                className={`relative overflow-hidden group cursor-zoom-in ${photo.span}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/25 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  <p className="text-cream text-xs tracking-wider uppercase font-sans">{photo.caption}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-2xl w-full"
            >
              <div className="relative aspect-[3/4] w-full max-h-[80vh] overflow-hidden">
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  fill
                  className="object-contain"
                  sizes="80vw"
                />
              </div>
              <p className="text-center text-cream/70 text-xs tracking-wider uppercase font-sans mt-3">
                {lightbox.caption}
              </p>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-10 right-0 text-cream/60 hover:text-cream text-sm tracking-widest uppercase font-sans"
              >
                Close ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
