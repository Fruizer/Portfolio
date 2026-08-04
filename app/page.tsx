"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Braces,
  Briefcase,
  Check,
  Code2,
  Terminal,
  Cpu,
  Database,
  FileText,
  Layers3,
  Mail,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

type Project = {
  name: string;
  type: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  status: string;
  specs: { label: string; value: string }[];
  highlights: string[];
};

type Credential = {
  title: string;
  issuer: string;
  year: string;
  url: string;
  category: string;
  placeholder?: boolean;
};

type Experience = {
  role: string;
  organization: string;
  years: string;
  description: string;
};

const sections = [
  { id: "hero", label: "About" },
  { id: "stack", label: "Systems" },
  { id: "projects", label: "Projects" },
  { id: "credentials", label: "Credentials" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const stack: { name: string; discipline: string; icon: LucideIcon }[] = [
 { name: "React / Next.js", discipline: "Web Architecture", icon: Code2 },
  { name: "TypeScript / JS", discipline: "Type-Safe Systems", icon: ShieldCheck },
  { name: "HTML5 / CSS3", discipline: "Layout & Rendering", icon: Braces },
  { name: "Python / WASM", discipline: "Execution & Telemetry", icon: Cpu },
  { name: "C++", discipline: "Networked Systems", icon: Terminal },
  { name: "Java", discipline: "Core Engineering", icon: Code2 },
  { name: "Electron", discipline: "Desktop Applications", icon: Layers3 },
  { name: "Supabase", discipline: "Cloud & Data", icon: Database },
  { name: "Gemini API", discipline: "AI Vision & Workflows", icon: Sparkles },
  { name: "Tailwind CSS", discipline: "Styling Framework", icon: Braces },
];

const projects: Project[] = [
  {
    name: "ReelNotes",
    type: "AI Study & Reel Platform",
    description:
      "A modern, cloud-synced web app that transforms study notes and image captures into fast-paced, TikTok-style AI reels with kinetic typography and text-to-speech.",
    technologies: ["JavaScript", "Gemini API", "Supabase"],
    icon: Braces,
    status: "Active build",
    specs: [
      { label: "AI Engine", value: "Gemini Vision & Flash Models" },
      { label: "Data & Auth", value: "Supabase PostgreSQL" },
      { label: "Interface", value: "Kinetic TTS & Vanilla JS" },
    ],
    highlights: ["AI Vision Extraction", "Realtime Cloud Sync", "Kinetic Text Overlay"],
  },

 {
    name: "GreenCode Analyzer",
    type: "Algorithmic Energy Profiler",
    description:
      "An isolated WebAssembly execution engine that injects operation counters into Python scripts to measure time/space complexity and estimate real-world energy cost (Joules/kWh).",
    technologies: ["Pyodide (WASM)", "Web Workers", "Supabase"],
    icon: Code2,
    status: "Academic Thesis",
    specs: [
      { label: "Execution", value: "Pyodide WASM in Web Workers" },
      { label: "VFS Support", value: "Multi-file import resolution" },
      { label: "Telemetry", value: "ILEM energy heuristic formula" },
    ],
    highlights: ["Thread-isolated execution", "Real-time Chart.js telemetry", "AST/Regex code instrumentation"],
  },

  {
    name: "ARROWKOPO",
    type: "Arcade Survival Engine",
    description:
      "A high-velocity, adrenaline-fueled arcade survival prototype engineered on a decoupled HTML5 Canvas architecture with inertia physics and cybernetic ability cores.",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS3"],
    icon: Cpu,
    status: "v1.3.0 Live",
    specs: [
      { label: "Architecture", value: "Decoupled Canvas Engine" },
      { label: "Physics", value: "2D Inertia Glide & Hitboxes" },
      { label: "Rendering", value: "Collision Trees & Particles" },
    ],
    highlights: ["Inertia physics & dashes", "Cybernetic ability state", "Decoupled rendering loop"],
  },
  {
    name: "SaveState",
    type: "Desktop Utility App",
    description:
      "An active desktop utility prototype built with Electron to explore fast local state management, session persistence, and native OS windowing.",
    technologies: ["Electron", "Node.js", "JavaScript"],
    icon: Layers3,
    status: "In Development",
    specs: [
      { label: "Runtime", value: "Electron Shell" },
      { label: "Environment", value: "Node.js Process Bridge" },
      { label: "Status", value: "Active Prototype" },
    ],
    highlights: ["Native OS windowing", "Local state persistence", "IPC architecture study"],
  },

];

const FEATURED_CREDENTIALS: Credential[] = [
  {
    title: "PMI Project Management Ready™",
    issuer: "Project Management Institute",
    year: "2026",
    url: "https://www.credly.com/badges/83835de3-46a0-40ba-a261-dcc2cc5ac31d/public_url",
    category: "Project Management",
  },

  {
    title: "IT Specialist - Python",
    issuer: "Certiport",
    year: "2025",
    url: "https://www.credly.com/badges/f809d140-a086-4103-8b92-42a9ac0d4537/public_url",
    category: "Software Development",
  },
];

// Empty entries are intentional reserved slots for future credentials.
const OTHER_CREDENTIALS: Credential[] = [
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    year: "2026",
    url: "https://anthropic.skilljar.com/",
    category: "Artificial Intelligence",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    year: "2025",
    url: "https://www.linkedin.com/learning/paths/career-essentials-in-generative-ai-by-microsoft-and-linkedin",
    category: "Generative AI",
  },
  {
    title: "Ethics in the Age of Generative AI",
    issuer: "LinkedIn Learning",
    year: "2025",
    url: "https://www.linkedin.com/learning/ethics-in-the-age-of-generative-ai",
    category: "AI Ethics",
  },
  {
    title: "Introduction to ChatGPT",
    issuer: "DataCamp",
    year: "2025",
    url: "https://www.datacamp.com/courses/introduction-to-chatgpt",
    category: "Generative AI",
  },
  {
    title: "Learning Git and GitHub",
    issuer: "LinkedIn Learning",
    year: "2025",
    url: "https://www.linkedin.com/learning/topics/git",
    category: "Developer Tools",
  },
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    year: "2025",
    url: "https://matlabacademy.mathworks.com/details/matlab-onramp/gettingstarted",
    category: "Technical Computing",
  },
  { title: "", issuer: "", year: "", url: "", category: "", placeholder: true },
  { title: "", issuer: "", year: "", url: "", category: "", placeholder: true },
  { title: "", issuer: "", year: "", url: "", category: "", placeholder: true },
];

const academicHighlights = [
  { title: "Software engineering", detail: "Application architecture and collaborative product delivery" },
  { title: "Networked systems", detail: "Socket programming and client-server design" },
  { title: "Interface engineering", detail: "Cross-platform interaction and component systems" },

];


const engineeringExperience: Experience[] = [
  {
    role: "Front-End AI Engineer",
    organization: "FlyRank AI",
    years: "2026 — Present",
    description: "Designing and shipping AI-driven web interfaces, integrating real-time model streaming, dynamic state flows, and reactive UI architecture.",
  },
{
    role: "PLACEHOLDER",
    organization: "PLACEHOLDER",
    years: "2024 — 2025",
    description: "PLACEHOLDER",
  },
];

const leadershipExperience: Experience[] = [
  {
    role: "Director for Media",
    organization: "FEU TECH ACM",
    years: "2025 — 2026",
    description: "Leading visual identity, digital content strategy, and media production to scale engagement across technical programs and student developer initiatives.",
  },
  {
    role: "Junior Officer for Media Committee",
    organization: "FEU TECH ACM",
    years: "2023 — 2025",
    description: "Supported creative workflows and asset generation for organization-wide technical programs, hackathons, and media campaigns.",
  },
];

const sectionClass =
  "relative z-10 flex h-screen w-full snap-start snap-always items-center overflow-hidden px-6 py-20 sm:px-10 lg:px-16";

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.35, ease: "easeOut" as const },
};

export default function Home() {
  return (
    <main className="no-scrollbar portfolio-scroll h-screen w-full snap-y snap-mandatory overflow-y-scroll bg-[#1A1D23] text-[#F5F3EC] selection:bg-[#D4AF37]/30">
      <header className="pointer-events-none fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <a
          href="#hero"
          className="pointer-events-auto font-mono text-sm font-semibold tracking-[0.22em] text-white transition-colors duration-200 hover:text-[#D4AF37]"
          aria-label="Back to introduction"
        >
          LORENZO<span className="text-[#D4AF37]">.</span>
        </a>
        <nav
          aria-label="Primary navigation"
          className="pointer-events-auto absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 rounded-full border border-white/10 bg-[#1A1D23]/80 px-5 py-2.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/45 backdrop-blur-md lg:flex"
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="transition-colors duration-200 hover:text-[#D4AF37] focus-visible:text-[#D4AF37] focus-visible:outline-none"
            >
              {section.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 rounded-full border border-[#8AE2C5]/20 bg-[#8AE2C5]/5 px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] text-[#8AE2C5] sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-[#8AE2C5]" />
          SYSTEM: ONLINE
        </div>
      </header>

      <nav aria-label="Section indicator" className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex lg:right-8">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`} aria-label={`Go to ${section.label}`} className="group flex items-center justify-end gap-2">
            <span className="translate-x-1 text-[9px] uppercase tracking-widest text-transparent transition-all duration-200 group-hover:translate-x-0 group-hover:text-white/45">{section.label}</span>
            <span className="h-1.5 w-1.5 rounded-full border border-white/35 transition-all duration-200 group-hover:scale-150 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]" />
          </a>
        ))}
      </nav>

      <section id="hero" className={sectionClass}>
        <div className="grid-overlay pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto w-full max-w-7xl pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-[#D4AF37] sm:text-sm"
          >
            <span className="h-px w-8 bg-[#D4AF37]" /> LORENZO GILBERT FLORES · SOFTWARE ENGINEER & SYSTEMS DEVELOPER
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="max-w-6xl text-[clamp(3.1rem,7.7vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.02em]"
          >
            Systems that scale.
            <br />
            <span className="text-white/45">Interfaces that endure.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.12 }}
            className="mt-8 max-w-2xl border-l border-[#D4AF37]/50 pl-5 text-sm leading-6 text-white/55 sm:text-base"
          >
            I design dependable digital products at the intersection of robust engineering and considered interaction.
          </motion.p>
        </div>
        <a href="#stack" aria-label="Explore core systems" className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/35 transition-colors duration-200 hover:text-[#D4AF37]">
          Explore <ArrowDown size={16} strokeWidth={1.5} />
        </a>
      </section>

      <section id="stack" className={sectionClass}>
        <motion.div {...reveal} className="mx-auto w-full max-w-7xl">
          <SectionHeading eyebrow="01 / Core systems" title="Tools shaped by the work." />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {stack.map(({ name, discipline, icon: Icon }) => (
              <article key={name} className="group col-span-1 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#D4AF37]/35 hover:bg-white/[0.06] sm:p-5">
                <Icon size={19} className="mb-5 text-[#D4AF37] transition-transform duration-200 group-hover:scale-110" />
                <h3 className="text-sm font-medium sm:text-base">{name}</h3>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">{discipline}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <ProjectsSection projects={projects} />

      <section id="credentials" className={sectionClass}>
        <motion.div {...reveal} className="mx-auto grid w-full max-w-7xl items-center gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <div>
            <SectionHeading eyebrow="03 / Credentials" title="Evidence of the work." />
            <p className="mt-5 max-w-md text-sm leading-6 text-white/45">A scalable record of verified certifications, paired with the academic systems work behind them.</p>
            <div className="mt-6 space-y-3">
              {academicHighlights.map((item) => (
                <div key={item.title} className="border-l border-[#8AE2C5]/35 pl-4">
                  <p className="text-xs font-medium text-white/75">{item.title}</p>
                  <p className="mt-1 text-[10px] leading-4 text-white/35">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0 space-y-5" aria-label="Credentials and continuous learning">
            <div className="grid grid-cols-2 gap-4">
              {FEATURED_CREDENTIALS.map((credential, index) => (
                <article
                  key={credential.title}
                  className="group flex min-h-48 flex-col rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition-colors duration-200 hover:bg-white/[0.07]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37]">
                      <Award size={19} />
                    </div>
                    <span className="font-mono text-[9px] tracking-widest text-white/25">
                      FEATURED / 0{index + 1}
                    </span>
                  </div>
                  <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#D4AF37]">
                    {credential.category}
                  </p>
                  <h3 className="mt-1.5 text-sm font-medium leading-5 text-white/90 sm:text-base">
                    {credential.title}
                  </h3>
                  <p className="mt-1 text-[10px] text-white/40">
                    {credential.issuer} • {credential.year}
                  </p>
                  <a
                    href={credential.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 font-mono text-[9px] uppercase tracking-[0.14em] text-[#8AE2C5] outline-none transition-colors duration-200 hover:text-white focus-visible:text-white"
                  >
                    View credential <ArrowUpRight size={12} />
                  </a>
                </article>
              ))}
            </div>

            <div>
              <div className="mb-3 flex items-center gap-3">
                <p className="shrink-0 font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">
                  Continuous learning & workshops
                </p>
                <span className="h-px w-full bg-white/10" />
              </div>
              <div className="no-scrollbar max-h-[220px] space-y-2 overflow-y-auto pr-2" aria-label="Additional certifications and workshops">
                {OTHER_CREDENTIALS.map((credential, index) =>
                  credential.placeholder ? (
                    <div
                      key={`credential-placeholder-${index}`}
                      aria-label="Reserved for a future credential"
                      className="flex min-h-14 items-center rounded-xl border border-dashed border-white/10 px-4 text-[10px] text-white/20"
                    >
                      Reserved credential slot
                    </div>
                  ) : (
                    <article
                      key={`${credential.title}-${credential.year}`}
                      className="grid min-h-14 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-white/10 bg-black/10 px-4 py-2.5 transition-colors duration-200 hover:bg-white/[0.045]"
                    >
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                          <h3 className="truncate text-xs font-medium text-white/80">{credential.title}</h3>
                          <span className="rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/5 px-2 py-0.5 font-mono text-[7px] uppercase tracking-[0.14em] text-[#D4AF37]">
                            {credential.category}
                          </span>
                        </div>
                        <p className="mt-1 text-[9px] text-white/35">
                          {credential.issuer} • {credential.year}
                        </p>
                      </div>
                      <a
                        href={credential.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${credential.title}`}
                        className="inline-flex items-center gap-1 font-mono text-[8px] uppercase tracking-[0.12em] text-[#8AE2C5]/70 outline-none transition-colors duration-200 hover:text-[#8AE2C5] focus-visible:text-white"
                      >
                        View <ArrowUpRight size={10} />
                      </a>
                    </article>
                  ),
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="experience" className={sectionClass}>
        <motion.div {...reveal} className="mx-auto w-full max-w-7xl">
          <SectionHeading eyebrow="04 / Experience" title="Two tracks. One practice." compact />
          <div className="mt-7 grid gap-3 lg:grid-cols-2">
            <ExperienceTrack icon={Briefcase} label="Track A" title="Software Development / Engineering" entries={engineeringExperience} />
            <ExperienceTrack icon={Users} label="Track B" title="Student Leadership & Community" entries={leadershipExperience} mint />
          </div>
        </motion.div>
      </section>

      <section id="contact" className={sectionClass}>
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <motion.div {...reveal} className="relative mx-auto flex w-full max-w-7xl flex-col items-start">
          <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-[#8AE2C5]"><Sparkles size={14} /> Comm channel open</div>
          <h2 className="text-[clamp(4.2rem,11vw,11rem)] font-semibold leading-[0.82] tracking-[-0.075em]">Ready to build<span className="text-[#D4AF37]">?</span></h2>
          <div className="mt-10 flex w-full flex-col items-start justify-between gap-8 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
            <p className="max-w-lg text-sm leading-6 text-white/45 sm:text-base">I’m always open to new opportunities, technical discussions, and collaborations. Let’s connect and see how we can build something great together.</p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="mailto:enzo715@gmail.com?subject=Let%27s%20build%20something" className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-[#1A1D23] outline-none transition-colors duration-200 hover:bg-[#E2C45F] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1D23]">
                Start a conversation <Mail size={17} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="/Lorenzo_Flores_Resume.pdf"
                download="Lorenzo_Flores_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-medium text-white outline-none transition-all duration-200 hover:border-[#D4AF37] hover:bg-white/10 hover:text-[#D4AF37] focus-visible:border-[#D4AF37] focus-visible:text-[#D4AF37]"
              >
                Resume <FileText size={16} />
              </a>
              <a
                href="https://github.com/Fruizer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 outline-none transition-all duration-200 hover:border-[#D4AF37] hover:bg-white/10 hover:text-[#D4AF37] focus-visible:border-[#D4AF37] focus-visible:text-[#D4AF37]"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/lorenzogilbertflores/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 outline-none transition-all duration-200 hover:border-[#D4AF37] hover:bg-white/10 hover:text-[#D4AF37] focus-visible:border-[#D4AF37] focus-visible:text-[#D4AF37]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6c0 .88.72 1.6 1.6 1.6a1.6 1.6 0 0 0 1.6-1.6c0-.88-.72-1.6-1.6-1.6z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
        <div className="absolute bottom-7 left-6 right-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-white/25 sm:left-10 sm:right-10 lg:left-16 lg:right-16">
          <span>Manila · Philippines</span><span>© {new Date().getFullYear()} Lorenzo</span>
        </div>
      </section>
    </main>
  );
}

function ProjectsSection({ projects }: { projects: Project[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projects[currentIndex];
  const ProjectIcon = project.icon;

  const showPreviousProject = () => {
    setCurrentIndex((current) => (current - 1 + projects.length) % projects.length);
  };

  const showNextProject = () => {
    setCurrentIndex((current) => (current + 1) % projects.length);
  };

  const showProject = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className={sectionClass}>
      <motion.div {...reveal} className="mx-auto w-full max-w-7xl">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="02 / Selected systems" title="Built beyond the brief." compact />
          <div className="mb-1 flex items-center gap-2">
            <button type="button" onClick={showPreviousProject} aria-label="Previous project" className="project-control">
              <ArrowLeft size={17} />
            </button>
            <span className="min-w-12 text-center font-mono text-[10px] tracking-widest text-white/40">
              {String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
            <button type="button" onClick={showNextProject} aria-label="Next project" className="project-control">
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={currentIndex}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            transformTemplate={(_, generatedTransform) =>
              generatedTransform === "none"
                ? "translate3d(0, 0, 0)"
                : `${generatedTransform} translate3d(0, 0, 0)`
            }
            className="mt-7 grid overflow-hidden rounded-3xl border border-white/10 bg-white/5 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="border-b border-white/10 p-5 sm:p-7 lg:border-b-0 lg:border-r">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37]">
                  <ProjectIcon size={20} />
                </div>
                <span className="rounded-full border border-[#8AE2C5]/20 bg-[#8AE2C5]/5 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-[#8AE2C5]">
                  {project.status}
                </span>
              </div>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">{project.type}</p>
              <h3 className="mt-1 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{project.name}</h3>
              <p className="mt-3 max-w-lg text-xs leading-5 text-white/45 sm:text-sm sm:leading-6">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/55">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5 sm:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">System specification</p>
              <dl className="mt-4 divide-y divide-white/10 border-y border-white/10">
                {project.specs.map((spec) => (
                  <div key={spec.label} className="flex items-center justify-between gap-4 py-3 text-xs">
                    <dt className="text-white/35">{spec.label}</dt>
                    <dd className="text-right text-white/75">{spec.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2 text-[10px] leading-4 text-white/50">
                    <Check size={12} className="shrink-0 text-[#8AE2C5]" />
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </AnimatePresence>

        <div className="mt-4 flex justify-center gap-2" aria-label="Choose project">
          {projects.map((item, index) => (
            <motion.button
              key={item.name}
              type="button"
              onClick={() => showProject(index)}
              aria-label={`Show ${item.name}`}
              aria-current={index === currentIndex ? "true" : undefined}
              animate={{ width: index === currentIndex ? 28 : 6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className={`h-1.5 cursor-pointer rounded-full transition-colors duration-200 ${index === currentIndex ? "bg-[#D4AF37]" : "bg-white/20 hover:bg-white/45"}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, compact = false }: { eyebrow: string; title: string; compact?: boolean }) {
  return (
    <div>
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] sm:text-xs">{eyebrow}</p>
      <h2 className={`${compact ? "text-4xl sm:text-5xl lg:text-6xl" : "text-4xl sm:text-5xl lg:text-7xl"} max-w-3xl font-semibold leading-[0.95] tracking-[-0.055em]`}>{title}</h2>
    </div>
  );
}

function ExperienceTrack({ icon: Icon, label, title, entries, mint = false }: { icon: LucideIcon; label: string; title: string; entries: Experience[]; mint?: boolean }) {
  const accent = mint ? "text-[#8AE2C5]" : "text-[#D4AF37]";
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
      <header className="flex items-center gap-4 border-b border-white/10 bg-white/[0.025] p-5 sm:p-6">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/10 ${accent}`}><Icon size={19} /></div>
        <div><p className={`font-mono text-[9px] uppercase tracking-[0.2em] ${accent}`}>{label}</p><h3 className="mt-1 text-sm font-medium sm:text-base">{title}</h3></div>
      </header>
      <div className="divide-y divide-white/10 px-5 sm:px-6">
        {entries.map((entry) => (
          <div key={`${entry.role}-${entry.years}`} className="py-4 sm:py-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div><h4 className="text-sm font-medium text-white/85">{entry.role}</h4><p className="mt-0.5 text-[10px] text-white/35">{entry.organization}</p></div>
              <span className="rounded-full border border-white/10 bg-black/10 px-3 py-1 font-mono text-[9px] tracking-wider text-white/55">{entry.years}</span>
            </div>
            <p className="mt-2 text-xs leading-5 text-white/40">{entry.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
