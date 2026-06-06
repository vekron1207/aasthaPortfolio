"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Literature" | "Mathematics" | "Environmental Studies" | "Music & Arts" | "Education";

const books = [
  {
    title: "Voices: An Anthology of Indian Women Writers",
    subject: "Literature · Anthology",
    level: "Adult / General",
    category: "Literature" as Category,
    color: "#F5EEE4",
    accent: "#C4A882",
    description: "A curated anthology celebrating the diversity and depth of Indian women's literary voices across generations.",
    pdf: "/books/Voices An Anthology of Indian Women Writers.pdf",
  },
  {
    title: "Kriti — Grade 6",
    subject: "Hindi Literature",
    level: "NCERT · Grade 6",
    category: "Literature" as Category,
    color: "#F5EEEE",
    accent: "#C48882",
    description: "An NCERT Hindi literature textbook fostering language appreciation and creative expression.",
    pdf: "/books/Kriti Grade 6.pdf",
  },
  {
    title: "Kriti — Grade 7",
    subject: "Hindi Literature",
    level: "NCERT · Grade 7",
    category: "Literature" as Category,
    color: "#F5EEEE",
    accent: "#C48882",
    description: "Building on Grade 6, this volume deepens students' engagement with Hindi literary traditions.",
    pdf: "/books/Kriti Grade 7.pdf",
  },
  {
    title: "Ganita Prakash — Grade 6",
    subject: "Mathematics",
    level: "NCERT · Grade 6",
    category: "Mathematics" as Category,
    color: "#F0EEF5",
    accent: "#9882C4",
    description: "A foundational mathematics textbook designed to make learning numeracy engaging and intuitive.",
    pdf: "/books/Ganita Prakash Grade 6.pdf",
  },
  {
    title: "Ganita Prakash Part 1 — Grade 7",
    subject: "Mathematics",
    level: "NCERT · Grade 7",
    category: "Mathematics" as Category,
    color: "#F0EEF5",
    accent: "#9882C4",
    description: "Continues the Ganita Prakash series, building mathematical reasoning and problem-solving skills.",
    pdf: "/books/Ganita Prakash Part 1 Grade 7.pdf",
  },
  {
    title: "Ganita Prakash Part 2 — Grade 7",
    subject: "Mathematics",
    level: "NCERT · Grade 7",
    category: "Mathematics" as Category,
    color: "#F0EEF5",
    accent: "#9882C4",
    description: "Second part of the Grade 7 mathematics series, advancing into more complex concepts.",
    pdf: "/books/Ganita Prakash Part 2 Grade 7.pdf",
  },
  {
    title: "Ganita Prakash Part 2 — Grade 8",
    subject: "Mathematics",
    level: "NCERT · Grade 8",
    category: "Mathematics" as Category,
    color: "#F0EEF5",
    accent: "#9882C4",
    description: "Advanced secondary mathematics for Grade 8 learners, emphasising analytical thinking.",
    pdf: "/books/Ganita Prakash Part 2 Grade 8.pdf",
  },
  {
    title: "Ganita Manjari Part 1 — Grade 9",
    subject: "Mathematics",
    level: "NCERT · Grade 9",
    category: "Mathematics" as Category,
    color: "#F0EEF5",
    accent: "#9882C4",
    description: "A rigorous secondary mathematics textbook preparing Grade 9 students for higher-level study.",
    pdf: "/books/Ganita Manjari Part 1 Grade 9.pdf",
  },
  {
    title: "The World Around Us — Grade 4",
    subject: "Environmental Studies",
    level: "NCERT · Grade 4",
    category: "Environmental Studies" as Category,
    color: "#EEF2F5",
    accent: "#8AAFC4",
    description: "An NCERT textbook guiding young learners to understand and appreciate the world around them.",
    pdf: "/books/The World Around Us Grade 4.pdf",
  },
  {
    title: "The World Around Us — Grade 5",
    subject: "Environmental Studies",
    level: "NCERT · Grade 5",
    category: "Environmental Studies" as Category,
    color: "#EEF2F5",
    accent: "#8AAFC4",
    description: "Continuation of the acclaimed environmental studies series, deepening inquiry and exploration.",
    pdf: "/books/The World Around Us Grade 5.pdf",
  },
  {
    title: "The World Around Us — Grade 5 Bridge Course",
    subject: "Environmental Studies",
    level: "NCERT · Grade 5",
    category: "Environmental Studies" as Category,
    color: "#EEF2F5",
    accent: "#8AAFC4",
    description: "A bridge course companion supporting learners transitioning across grade levels in EVS.",
    pdf: "/books/The World Around Us Grade 5 Bridge Course.pdf",
  },
  {
    title: "Exploration — Grade 9",
    subject: "Environmental Studies",
    level: "NCERT · Grade 9",
    category: "Environmental Studies" as Category,
    color: "#EEF2F5",
    accent: "#8AAFC4",
    description: "An exploratory sciences and environment textbook encouraging curiosity and critical inquiry at Grade 9.",
    pdf: "/books/Exploration Grade 9.pdf",
  },
  {
    title: "Bansuri — Grade 5",
    subject: "Music & Arts",
    level: "NCERT · Grade 5",
    category: "Music & Arts" as Category,
    color: "#F5F0EE",
    accent: "#C4A882",
    description: "An arts and music education text introducing students to the rich heritage of Indian classical music.",
    pdf: "/books/Bansuri Grade 5.pdf",
  },
  {
    title: "Professional Development Package for Early Childhood Care and Education",
    subject: "Education · Child Development",
    level: "Professional / Educators",
    category: "Education" as Category,
    color: "#EDF2EE",
    accent: "#8AAF92",
    description: "A comprehensive resource package for educators working in early childhood development and care settings.",
    pdf: "/books/Professional Development Package for Early Childhood Care and Education.pdf",
  },
  {
    title: "Udaan — Bridge Course",
    subject: "Education · Bridge Learning",
    level: "NCERT · Bridge",
    category: "Education" as Category,
    color: "#EDF2EE",
    accent: "#8AAF92",
    description: "A bridge learning programme designed to bring learners up to grade level through structured support.",
    pdf: "/books/Udaan Bridge Course.pdf",
  },
];

const categories: Category[] = ["All", "Literature", "Mathematics", "Environmental Studies", "Music & Arts", "Education"];

const categoryCounts: Record<Category, number> = {
  All: books.length,
  Literature: books.filter((b) => b.category === "Literature").length,
  Mathematics: books.filter((b) => b.category === "Mathematics").length,
  "Environmental Studies": books.filter((b) => b.category === "Environmental Studies").length,
  "Music & Arts": books.filter((b) => b.category === "Music & Arts").length,
  Education: books.filter((b) => b.category === "Education").length,
};

export default function Publications() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? books : books.filter((b) => b.category === active);

  return (
    <section id="publications" className="py-28 lg:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.3em] text-gold uppercase font-sans mb-4"
            >
              Publications
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-light text-4xl lg:text-5xl text-ink leading-[1.1]"
            >
              Books & Publications
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone font-sans text-sm leading-relaxed max-w-sm lg:text-right"
          >
            {books.length} titles edited, published, and administered at NCERT — from concept to release.
          </motion.p>
        </div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs font-sans tracking-wider uppercase px-4 py-2 border transition-all duration-250 ${
                active === cat
                  ? "bg-ink text-cream border-ink"
                  : "bg-transparent text-stone border-border hover:border-ink hover:text-ink"
              }`}
            >
              {cat}
              <span
                className={`ml-2 text-[10px] ${active === cat ? "text-gold" : "text-stone-light"}`}
              >
                {categoryCounts[cat]}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Books grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((book) => (
              <motion.a
                key={book.title}
                href={book.pdf}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative flex flex-col bg-white border border-border hover:border-gold/50 transition-colors duration-300 overflow-hidden cursor-pointer"
              >
                {/* Spine bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ backgroundColor: book.accent }}
                />

                {/* Cover block */}
                <div
                  className="h-36 flex items-center justify-center relative overflow-hidden pl-3"
                  style={{ backgroundColor: book.color }}
                >
                  {/* Decorative lines */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(4)].map((_, j) => (
                      <div
                        key={j}
                        className="absolute w-full h-px"
                        style={{ backgroundColor: book.accent, top: `${22 + j * 18}%` }}
                      />
                    ))}
                  </div>
                  <div className="relative px-5 text-center">
                    <p
                      className="font-serif text-sm font-semibold leading-tight line-clamp-3"
                      style={{ color: book.accent }}
                    >
                      {book.title}
                    </p>
                    <p className="text-[10px] tracking-widest uppercase mt-2 font-sans font-medium text-stone">NCERT</p>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-4 pl-6 flex flex-col flex-1">
                  <p
                    className="text-xs tracking-[0.15em] uppercase font-sans font-semibold mb-1.5"
                    style={{ color: book.accent }}
                  >
                    {book.subject}
                  </p>
                  <p className="font-serif text-sm font-semibold text-ink leading-snug mb-2 line-clamp-2">
                    {book.title}
                  </p>
                  <p className="text-sm text-stone font-sans leading-relaxed mb-3 line-clamp-2 flex-1">
                    {book.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
                    <span className="text-xs text-stone font-sans font-medium">{book.level}</span>
                    <span className="text-xs text-gold font-sans font-semibold tracking-wider group-hover:underline">
                      View ↗
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-stone font-sans mt-10 tracking-wider"
        >
          All titles published by the National Council of Educational Research and Training (NCERT), New Delhi
        </motion.p>
      </div>
    </section>
  );
}
