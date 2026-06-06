"use client";

import { motion } from "framer-motion";

const roles = [
  {
    org: "N.C.E.R.T",
    role: "Editorial Assistant",
    period: "Jan 2024 — Present",
    location: "New Delhi",
    type: "Full-time",
    highlights: [
      "Editing, publishing, and administering 30+ titles from concept to release",
      "Comprehensive proofreading and copyediting for error-free, high-quality content",
      "Coordinating with authors, illustrators, and designers on timelines and requirements",
      "Reviewing manuscripts for factual accuracy, grammar, and consistency",
    ],
  },
  {
    org: "U.N. SDSN Youth",
    role: "Project Officer, Communications",
    period: "Sep 2023 — Present",
    location: "New Delhi",
    type: "Freelance",
    highlights: [
      "Developing strategic content for SDSN's global development fellowship",
      "Executing communication plans achieving measurable audience growth across platforms",
      "Collaborating with stakeholders to secure partnerships and strengthen brand visibility",
    ],
  },
  {
    org: "N.C.E.R.T",
    role: "Project Fellow",
    period: "Sep 2022 — Jan 2024",
    location: "New Delhi",
    type: "Fellowship",
    highlights: [
      "Communicating with State officials for SDG 4 data collection and analysis",
      "Conducting field visits, focus group discussions, and stakeholder interviews",
      "Streamlining workflows for editorial and production teams",
    ],
  },
  {
    org: "Trex Company, Inc",
    role: "Web Content Specialist",
    period: "Oct 2021 — Sep 2022",
    location: "Remote",
    type: "Full-time",
    highlights: [
      "Led content and digital media team on editing and strategy",
      "Utilised SEO techniques to produce high-ranking, audience-focused content",
      "Increased site traffic and audience engagement significantly",
    ],
  },
  {
    org: "Youth Civic Engagement Academy",
    role: "Mentor",
    period: "Jun 2023 — Aug 2023",
    location: "New Delhi",
    type: "Volunteer",
    highlights: [
      "Led fellowship teams to success on capstone projects impacting African society",
      "Provided capacity-building to a new generation of change-makers",
    ],
  },
  {
    org: "UNLEASH Global Innovation Lab",
    role: "Participant",
    period: "Dec 2022",
    location: "Mysore, Karnataka",
    type: "Innovation Lab",
    highlights: [
      "Collaborated with 1000+ people on UN Sustainable Development Goals",
      "Co-created a youth mental health solution using human design thinking (SDG 3)",
    ],
  },
];

const research = [
  {
    title: "Parasite: A Synthesis of Cinematic Ideas and Metaphors",
    venue: "Oceanvale Workshop 2020, Kirori Mal College",
    type: "Research Paper",
    description: "A film studies research paper exploring the interaction of literary theories with Bong Joon-ho's Parasite.",
  },
  {
    title: "Solidarities: Challenging Hegemonies",
    venue: "Wordcraft Conference 2019, Ramjas College",
    type: "Research Paper",
    description: "An academic paper examining sisterhoods of resistance and their role in challenging dominant power structures.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 lg:py-36 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] text-gold uppercase font-sans mb-4"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-light text-4xl lg:text-5xl text-ink leading-[1.1] mb-16"
        >
          Work & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-10">
                {roles.map((role, i) => (
                  <motion.div
                    key={`${role.org}-${i}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.6 }}
                    className="relative pl-8"
                  >
                    {/* Dot */}
                    <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-gold border-2 border-cream-dark" />

                    <div className="flex flex-wrap items-start gap-x-4 gap-y-1 mb-2">
                      <h3 className="font-serif text-lg text-ink font-medium">{role.role}</h3>
                      <span className="text-xs tracking-wider text-gold uppercase font-sans border border-gold/40 px-2 py-0.5 self-start mt-0.5">
                        {role.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
                      <p className="text-sm font-sans text-ink font-semibold">{role.org}</p>
                      <span className="text-stone text-sm">·</span>
                      <p className="text-sm font-sans text-stone">{role.period}</p>
                      <span className="text-stone text-sm">·</span>
                      <p className="text-sm font-sans text-stone">{role.location}</p>
                    </div>

                    <ul className="space-y-1.5">
                      {role.highlights.map((h, j) => (
                        <li key={j} className="flex gap-3 text-sm text-stone font-sans leading-relaxed">
                          <span className="text-gold mt-1.5 shrink-0">—</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Research & Skills */}
          <div className="space-y-12">
            {/* Research Papers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xs tracking-[0.25em] text-gold uppercase font-sans font-semibold mb-5">
                Research & Writing
              </p>
              <div className="space-y-5">
                {research.map((r) => (
                  <div key={r.title} className="border-l-2 border-gold/40 pl-4">
                    <p className="text-xs tracking-widest text-gold uppercase font-sans font-semibold mb-1.5">{r.type}</p>
                    <h4 className="font-serif text-base font-semibold text-ink leading-snug mb-1.5">{r.title}</h4>
                    <p className="text-sm text-stone font-sans">{r.venue}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xs tracking-[0.25em] text-gold uppercase font-sans font-semibold mb-5">
                Core Competencies
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Editing", "Proofreading", "Copyediting", "Content Development",
                  "Project Management", "Strategic Communications", "Social Media",
                  "Research & Analysis", "SEO Writing", "Graphic Design",
                  "Stakeholder Management", "Canva", "Google Workspace",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs tracking-wider border border-stone/30 text-ink uppercase font-sans font-medium px-3 py-1.5 hover:border-gold hover:text-gold transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-xs tracking-[0.25em] text-gold uppercase font-sans font-semibold mb-5">Education</p>
              <div className="space-y-5">
                {[
                  {
                    degree: "MA, English Literature",
                    school: "Gargi College, University of Delhi",
                    year: "2018 — 2020",
                  },
                  {
                    degree: "BA (Hons.), English Literature",
                    school: "Bharati College, University of Delhi",
                    year: "2015 — 2018",
                  },
                ].map((edu) => (
                  <div key={edu.degree} className="border-l-2 border-gold/40 pl-4">
                    <p className="font-serif text-base font-semibold text-ink">{edu.degree}</p>
                    <p className="text-sm text-stone font-sans mt-0.5">{edu.school}</p>
                    <p className="text-sm text-stone font-sans">{edu.year}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
