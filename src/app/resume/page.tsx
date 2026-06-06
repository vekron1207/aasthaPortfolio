import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Resume — Aastha Sharma",
  description: "Full professional resume of Aastha Sharma — Editorial Assistant, Writer, and Communications Strategist based in New Delhi.",
};

const experience = [
  {
    org: "N.C.E.R.T",
    role: "Editorial Assistant",
    period: "January 2024 — Present",
    location: "New Delhi, India",
    points: [
      "Editing, publishing, and administering over 30 titles, including books and e-content, from concept to release.",
      "Conducted comprehensive proofreading and copyediting to ensure error-free, high-quality content.",
      "Coordinated with authors, illustrators, and designers to align on project timelines and requirements.",
      "Reviewed and validated manuscripts for factual accuracy, grammar, and consistency.",
    ],
  },
  {
    org: "N.C.E.R.T",
    role: "Project Fellow",
    period: "September 2022 — January 2024",
    location: "New Delhi, India",
    points: [
      "Communicating with State officials and constituents of the council for collection, framing, analysis, and reviewing of data for sustainable development goals.",
      "Conducting field visits, focus group discussions, and interviews for NCERT's project on SDG 4.",
      "Streamlined workflows for editorial and production teams, improving project efficiency.",
      "Ensured adherence to NCERT's publication guidelines and editorial standards.",
    ],
  },
  {
    org: "Trex Company, Inc",
    role: "Web Content Specialist",
    period: "October 2021 — September 2022",
    location: "Remote",
    points: [
      "Supervised content and digital media team focusing on editing, and reviewing material and strategies.",
      "Monitored and analysed audience preferences and utilised SEO techniques to produce SEO-friendly content.",
      "Streamlined industry-specific issues, thereby increasing traffic and engaging the audience.",
    ],
  },
  {
    org: "Planet Spark",
    role: "Business Development Associate",
    period: "February 2021 — August 2021",
    location: "New Delhi, India",
    points: [
      "Administered as a senior counselor in the international sector, focusing on the cognitive and creative development of learners.",
      "Conducted successful counseling sessions by nurturing leads, building rapport with clients, and generating revenue.",
      "Analysed data and contributed with performance-enhancing suggestions to the marketing and sales team.",
    ],
  },
];

const freelance = [
  {
    org: "U.N. SDSN Youth",
    role: "Project Officer, Communications",
    period: "September 2023 — Present",
    location: "New Delhi, India",
    points: [
      "Administered and fashioned content for SDSN's fellowship centred on global development and sustainable solutions as well as partnerships.",
      "Developed and executed strategic communication plans, achieving an increase in audience engagement across digital platforms.",
      "Collaborated with stakeholders and organisations for securing partnerships and strengthening brand visibility.",
    ],
  },
  {
    org: "Youth Civic Engagement Academy",
    role: "Mentor",
    period: "June 2023 — August 2023",
    location: "New Delhi, India",
    points: [
      "Supervised and led the team to success in fellowship's capstone projects that impact African society.",
      "Fostered growth and provided capacity-building to a new generation of change-makers.",
    ],
  },
  {
    org: "UNLEASH Global Innovation Lab",
    role: "Participant",
    period: "December 2022",
    location: "Mysore, Karnataka",
    points: [
      "Collaborated on solutions for UN's Sustainable Development Goals with a diverse cohort of over 1,000 people.",
      "Focused on SDG 3 (Good Health and Well-Being) and co-created a solution for youth mental health using human design thinking.",
    ],
  },
  {
    org: "Mysa Magazine",
    role: "Social Media Managing Intern",
    period: "July 2021 — November 2021",
    location: "New Delhi, India",
    points: [
      "Organised brand's daily digital landscape including production schedules and influencer collaboration.",
      "Designed audience engagement strategies that increased Instagram reach from +117% to +660%.",
      "Grew organic ranking on Instagram by +272% and content interaction by +161%.",
    ],
  },
];

const education = [
  {
    degree: "Master of Arts, English Literature",
    school: "Gargi College, University of Delhi",
    period: "August 2018 — November 2020",
    note: "CGPA: 6.53",
  },
  {
    degree: "Bachelor of Arts (Hons.), English Literature",
    school: "Bharati College, University of Delhi",
    period: "July 2015 — July 2018",
    note: "CGPA: 7.60",
  },
];

const research = [
  {
    title: "Parasite: A Synthesis of Cinematic Ideas and Metaphors",
    venue: "Oceanvale Workshop 2020, Kirori Mal College",
    note: "Research paper on film studies' interaction with literary theories",
  },
  {
    title: "Solidarities: Challenging Hegemonies",
    venue: "Wordcraft Conference 2019, Ramjas College",
    note: "Research paper about sisterhoods of resistance",
  },
];

const skills = [
  "Project Management", "Editorial & Copyediting", "Proofreading", "Content Development",
  "Strategic Communications", "Social Media Management", "SEO Writing", "Research & Analysis",
  "Graphic Design", "Stakeholder Management", "Microsoft Office", "Google Workspace", "Canva", "SCRUM",
];

const certifications = [
  "Age of Sustainable Development",
  "Digital Skills: Embracing Digital Technology",
  "Project Management Foundations (2019)",
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8 print:mb-6">
      <h2 className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-[#A08855] border-b border-[#E2DDD5] pb-1.5 mb-4 print:text-[10px]">
        {title}
      </h2>
      {children}
    </section>
  );
}

function RoleBlock({
  org, role, period, location, points,
}: {
  org: string; role: string; period: string; location: string; points: string[];
}) {
  return (
    <div className="mb-5 print:mb-4">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-0.5">
        <div>
          <span className="font-sans font-bold text-[#1C1917] text-sm print:text-[11px]">{org}</span>
          <span className="font-sans text-[#78716C] text-sm print:text-[11px]"> · {role}</span>
        </div>
        <span className="font-sans text-xs text-[#78716C] shrink-0 print:text-[10px]">
          {period} · {location}
        </span>
      </div>
      <ul className="mt-1.5 space-y-1">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2 text-sm text-[#44403C] font-sans leading-relaxed print:text-[11px]">
            <span className="text-[#C4A882] shrink-0 mt-0.5">•</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      {/* Top bar — hidden on print */}
      <div className="print:hidden bg-[#1C1917] py-3 px-6 flex items-center justify-between sticky top-0 z-10">
        <Link
          href="/"
          className="text-[#A8A29E] hover:text-[#C4A882] text-xs tracking-widest uppercase font-sans transition-colors"
        >
          ← Back to Portfolio
        </Link>
        <div className="flex items-center gap-4">
          <PrintButton />
          <a
            href="/Resume_Aastha_Sharma.pdf"
            download
            className="text-[#A8A29E] hover:text-[#C4A882] text-xs tracking-widest uppercase font-sans border border-white/10 hover:border-[#C4A882]/40 px-4 py-2 transition-colors"
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* Resume body */}
      <div className="max-w-4xl mx-auto px-8 py-12 print:py-6 print:px-8">
        {/* Header */}
        <header className="text-center mb-10 print:mb-6">
          <h1 className="font-serif text-4xl font-light tracking-wide text-[#1C1917] mb-2 print:text-3xl">
            Aastha Sharma
          </h1>
          <p className="font-sans text-sm text-[#78716C] mb-3 print:text-[11px]">
            New Delhi, Delhi
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm text-[#78716C] font-sans print:text-[10px]">
            <a href="tel:+919953877338" className="hover:text-[#C4A882] transition-colors print:no-underline">
              +91-9953877338
            </a>
            <span className="text-[#E2DDD5]">|</span>
            <a href="mailto:1128aastha@gmail.com" className="hover:text-[#C4A882] transition-colors print:no-underline">
              1128aastha@gmail.com
            </a>
            <span className="text-[#E2DDD5]">|</span>
            <a
              href="https://www.linkedin.com/in/aastha-sharma"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C4A882] transition-colors print:no-underline"
            >
              LinkedIn: Aastha Sharma
            </a>
          </div>
        </header>

        {/* Education */}
        <Section title="Education">
          {education.map((e) => (
            <div key={e.degree} className="flex flex-col sm:flex-row sm:justify-between mb-3 last:mb-0">
              <div>
                <p className="font-sans font-bold text-sm text-[#1C1917] print:text-[11px]">{e.school}</p>
                <p className="font-sans text-sm italic text-[#78716C] print:text-[11px]">{e.degree} — {e.note}</p>
              </div>
              <p className="font-sans text-xs text-[#78716C] shrink-0 sm:text-right mt-0.5 print:text-[10px]">
                {e.period}
              </p>
            </div>
          ))}
        </Section>

        {/* Professional Experience */}
        <Section title="Professional Experience">
          {experience.map((r) => (
            <RoleBlock key={`${r.org}-${r.role}`} {...r} />
          ))}
        </Section>

        {/* Freelance & Volunteer */}
        <Section title="Freelance & Volunteer Work">
          {freelance.map((r) => (
            <RoleBlock key={`${r.org}-${r.role}`} {...r} />
          ))}
        </Section>

        {/* Skills */}
        <Section title="Skills & Competencies">
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="text-xs font-sans border border-[#E2DDD5] text-[#44403C] px-3 py-1 print:text-[10px] print:border-[#ccc]"
              >
                {s}
              </span>
            ))}
          </div>
        </Section>

        {/* Research */}
        <Section title="Research & Editing Experience">
          {research.map((r) => (
            <div key={r.title} className="mb-3 last:mb-0">
              <p className="font-sans font-bold text-sm text-[#1C1917] print:text-[11px]">
                {r.title}
              </p>
              <p className="font-sans text-xs text-[#78716C] print:text-[10px]">
                {r.venue} — <span className="italic">{r.note}</span>
              </p>
            </div>
          ))}
        </Section>

        {/* Certifications */}
        <Section title="Certifications">
          <ul className="flex flex-col gap-1">
            {certifications.map((c) => (
              <li key={c} className="flex gap-2 text-sm text-[#44403C] font-sans print:text-[11px]">
                <span className="text-[#C4A882]">•</span> {c}
              </li>
            ))}
          </ul>
        </Section>

        {/* Print footer */}
        <div className="hidden print:block mt-8 pt-4 border-t border-[#E2DDD5] text-center">
          <p className="text-[9px] text-[#A8A29E] font-sans tracking-widest uppercase">
            aastha-sharma.vercel.app · 1128aastha@gmail.com · +91-9953877338
          </p>
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          body { background: white !important; }
          @page { margin: 1.5cm; size: A4; }
        }
      `}</style>
    </div>
  );
}
