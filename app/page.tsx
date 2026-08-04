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
  Cpu,
  Database,
  Layers3,
  Mail,
  ShieldCheck,
  Sparkles,
  Terminal,
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
  { name: "Tauri", discipline: "Desktop systems", icon: Layers3 },
  { name: "React / Native", discipline: "Interface systems", icon: Braces },
  { name: "Next.js", discipline: "Web platforms", icon: Code2 },
  { name: "Supabase", discipline: "Data & realtime", icon: Database },
  { name: "TypeScript", discipline: "Type-safe products", icon: ShieldCheck },
  { name: "Expo", discipline: "Mobile delivery", icon: Sparkles },
  { name: "C++", discipline: "Systems programming", icon: Cpu },
];

const projects: Project[] = [
  {
    name: "ReelNotes",
    type: "Desktop note app",
    description:
      "A distraction-free workspace for capturing, structuring, and syncing insights from long-form video.",
    technologies: ["Tauri", "React", "Supabase"],
    icon: Braces,
    status: "Active build",
    specs: [
      { label: "Runtime", value: "Tauri native shell" },
      { label: "Data", value: "Supabase realtime" },
      { label: "Interface", value: "React + TypeScript" },
    ],
    highlights: ["Cross-platform desktop", "Local-first interactions", "Typed end-to-end"],
  },
  {
    name: "Pusoy Terminal",
    type: "Networked card game",
    description:
      "A multiplayer terminal application that models Pusoy gameplay over resilient client-server sockets.",
    technologies: ["C++", "TCP sockets", "CLI"],
    icon: Terminal,
    status: "Systems study",
    specs: [
      { label: "Transport", value: "TCP socket protocol" },
      { label: "Model", value: "Authoritative server" },
      { label: "Client", value: "Interactive terminal" },
    ],
    highlights: ["Concurrent clients", "Deterministic rules", "Clear state boundaries"],
  },
  {
    name: "Mobile Field Kit",
    type: "Offline mobile prototype",
    description:
      "A resilient mobile workflow for capturing structured field data when connectivity is unreliable.",
    technologies: ["Expo", "React Native", "TypeScript"],
    icon: Layers3,
    status: "Prototype",
    specs: [
      { label: "Platform", value: "Expo application" },
      { label: "Storage", value: "Offline-first queue" },
      { label: "Delivery", value: "Cross-platform build" },
    ],
    highlights: ["Offline capture", "Background sync", "Shared components"],
  },
  {
    name: "Systems Dashboard",
    type: "Operations interface",
    description:
      "A compact control surface that turns service health and realtime events into clear operational signals.",
    technologies: ["Next.js", "Supabase", "TypeScript"],
    icon: Database,
    status: "Web system",
    specs: [
      { label: "Framework", value: "Next.js App Router" },
      { label: "Updates", value: "Realtime channels" },
      { label: "Model", value: "Typed event data" },
    ],
    highlights: ["Live status", "Dense information design", "Responsive layouts"],
  },
  {
    name: "Portfolio System",
    type: "Interactive web platform",
    description:
      "A motion-conscious portfolio built as a focused sequence of full-screen product narratives.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    icon: Code2,
    status: "Live system",
    specs: [
      { label: "Rendering", value: "Static Next.js output" },
      { label: "Layout", value: "Viewport snap system" },
      { label: "Motion", value: "Reduced-motion aware" },
    ],
    highlights: ["Fast static delivery", "Accessible controls", "Scalable content data"],
  },
];

// Add future credentials here; the section remains viewport-safe with 10+ items.
const credentials: Credential[] = [
  {
    title: "PMI Project Management Ready™",
    issuer: "Project Management Institute",
    year: "2026",
    url: "https://www.credly.com/badges/83835de3-46a0-40ba-a261-dcc2cc5ac31d/public_url",
    category: "Project Management",
  },

  {
    title: "IT Specialist - Python",
    issuer: "Certiport, a Pearson VUE business",
    year: "2025",
    url: "https://www.credly.com/badges/f809d140-a086-4103-8b92-42a9ac0d4537/public_url",
    category: "Software Development",
  },


];

const academicHighlights = [
  { title: "Software engineering", detail: "Application architecture and collaborative product delivery" },
  { title: "Networked systems", detail: "Socket programming and client-server design" },
  { title: "Interface engineering", detail: "Cross-platform interaction and component systems" },
];

const engineeringExperience: Experience[] = [
  {
    role: "Software Developer",
    organization: "Independent product work",
    years: "2025 — Present",
    description: "Building cross-platform applications with resilient data flows and deliberate interfaces.",
  },
  {
    role: "Product Engineering Projects",
    organization: "Academic & collaborative systems",
    years: "2024 — 2025",
    description: "Delivered networked, desktop, and web systems from architecture through implementation.",
  },
];

const leadershipExperience: Experience[] = [
  {
    role: "Student Leader",
    organization: "FIT ACM",
    years: "2025 — Present",
    description: "Supporting technical programs, peer learning, and an active student developer community.",
  },
  {
    role: "Technical Programs Contributor",
    organization: "FIT ACM",
    years: "2024 — 2025",
    description: "Helped coordinate student-led initiatives and collaborative technical activities.",
  },
];

const sectionClass =
  "relative z-10 flex h-screen w-full snap-start snap-always items-center overflow-hidden px-6 py-20 sm:px-10 lg:px-16";

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.35, ease: "easeOut" as const },
};

export default function Home() {
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
            <span className="h-px w-8 bg-[#D4AF37]" /> Software engineer · Product builder
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="max-w-6xl text-[clamp(3.1rem,7.7vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.065em]"
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
          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-3">
            {stack.map(({ name, discipline, icon: Icon }, index) => (
              <article key={name} className={`group rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#D4AF37]/35 hover:bg-white/[0.06] sm:p-5 ${index === 0 ? "lg:col-span-2" : ""}`}>
                <Icon size={19} className="mb-5 text-[#D4AF37] transition-transform duration-200 group-hover:scale-110" />
                <h3 className="text-sm font-medium sm:text-base">{name}</h3>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">{discipline}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="projects" className={sectionClass}>
        <motion.div {...reveal} className="mx-auto w-full max-w-7xl">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading eyebrow="02 / Selected systems" title="Built beyond the brief." compact />
            <div className="mb-1 flex items-center gap-2">
              <button type="button" onClick={showPreviousProject} aria-label="Previous project" className="project-control"><ArrowLeft size={17} /></button>
              <span className="min-w-12 text-center font-mono text-[10px] tracking-widest text-white/40">{String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
              <button type="button" onClick={showNextProject} aria-label="Next project" className="project-control"><ArrowRight size={17} /></button>
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
              className="mt-7 grid overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/15 backdrop-blur-md lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="border-b border-white/10 p-5 sm:p-7 lg:border-b-0 lg:border-r">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37]"><ProjectIcon size={20} /></div>
                  <span className="rounded-full border border-[#8AE2C5]/20 bg-[#8AE2C5]/5 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-[#8AE2C5]">{project.status}</span>
                </div>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">{project.type}</p>
                <h3 className="mt-1 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{project.name}</h3>
                <p className="mt-3 max-w-lg text-xs leading-5 text-white/45 sm:text-sm sm:leading-6">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => <span key={technology} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/55">{technology}</span>)}
                </div>
              </div>
              <div className="p-5 sm:p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">System specification</p>
                <dl className="mt-4 divide-y divide-white/10 border-y border-white/10">
                  {project.specs.map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between gap-4 py-3 text-xs"><dt className="text-white/35">{spec.label}</dt><dd className="text-right text-white/75">{spec.value}</dd></div>
                  ))}
                </dl>
                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  {project.highlights.map((highlight) => <div key={highlight} className="flex items-center gap-2 text-[10px] leading-4 text-white/50"><Check size={12} className="shrink-0 text-[#8AE2C5]" />{highlight}</div>)}
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

          <div
            className="no-scrollbar max-h-[420px] overflow-y-auto pr-2"
            aria-label="Certifications list"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {credentials.map((credential, index) => (
                <article key={`${credential.title}-${credential.year}`} className="group flex min-h-44 flex-col rounded-2xl border border-white/10 bg-black/10 p-5 transition-colors duration-200 hover:bg-white/[0.055]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37]"><Award size={19} /></div>
                    <span className="font-mono text-[9px] tracking-widest text-white/25">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#D4AF37]">{credential.category}</p>
                  <h3 className="mt-1.5 text-sm font-medium leading-5 text-white/90">{credential.title}</h3>
                  <p className="mt-1 text-[10px] text-white/40">{credential.issuer} • {credential.year}</p>
                  <a href={credential.url} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-1.5 pt-5 font-mono text-[9px] uppercase tracking-[0.14em] text-[#8AE2C5] outline-none transition-colors duration-200 hover:text-white focus-visible:text-white">
                    View credential <ArrowUpRight size={12} />
                  </a>
                </article>
              ))}
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
            <p className="max-w-lg text-sm leading-6 text-white/45 sm:text-base">Have an ambitious product, a stubborn system, or an interface that deserves more care? Let&apos;s make it real.</p>
            <a href="mailto:hello@lorenzo.dev?subject=Let%27s%20build%20something" className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-[#1A1D23] outline-none transition-colors duration-200 hover:bg-[#E2C45F] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1D23]">
              Start a conversation <Mail size={17} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
        <div className="absolute bottom-7 left-6 right-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-white/25 sm:left-10 sm:right-10 lg:left-16 lg:right-16">
          <span>Manila · Philippines</span><span>© {new Date().getFullYear()} Lorenzo</span>
        </div>
      </section>
    </main>
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
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-sm">
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
