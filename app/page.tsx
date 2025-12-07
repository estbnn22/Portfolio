"use client";

import { Suspense, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { SkillCard } from "./components/skillCard";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  {
    title: "4Dogs Grooming",
    subtitle: "Booking System for a Local Groomer",
    description:
      "Full-stack app with authentication, appointment booking, email notifications, and admin dashboard.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind", "Stack Auth"],
    links: {
      live: "https://www.4dogsgrooming.org/",
      github: "https://github.com/estbnn22/4Dogs",
    },
  },
  {
    title: "FlowNote",
    subtitle: "Interactive dashboard with live todo toggles",
    description:
      "Full-stack app with authentication, todo list, live updates, and planner.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind", "Stack Auth"],
    links: {
      live: "https://flow-note-eta.vercel.app/",
      github: "https://github.com/estbnn22/FlowNote",
    },
  },
  {
    title: "Inventory Manager",
    subtitle: "Simple Inventory CRUD",
    description:
      "Track products, quantities, and low-stock alerts with activity logs and clean UI.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind", "Stack Auth"],
    links: {
      live: "https://inventory-one-eosin.vercel.app/",
      github: "https://github.com/estbnn22/Inventory",
    },
  },

  {
    title: "JG Detailing — My First Ever Project",
    subtitle: "Car Detailing Website | Front-End",
    description:
      "A clean car-detailing landing page built from scratch before I learned full-stack development.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: {
      live: "https://jgdetailing.org/",
      github: "https://github.com/estbnn22/JGdetailing",
    },
  },
];

const skillItems = [
  {
    name: "HTML",
    logo: "/html.png",
    level: "Advanced",
  },
  {
    name: "CSS",
    logo: "/css.png",
    level: "Advanced",
  },
  {
    name: "JavaScript",
    logo: "/js.png",
    level: "Intermediate",
  },
  {
    name: "Next.js",
    logo: "/next.png",
    level: "Advanced",
  },
  {
    name: "React",
    logo: "/react.png",
    level: "Intermediate",
  },
  {
    name: "TypeScript",
    logo: "/ts.png",
    level: "Intermediate",
  },
  {
    name: "Prisma",
    logo: "/prisma.png",
    level: "Intermediate",
  },
  {
    name: "PostgreSQL",
    logo: "/postgresql.png",
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    logo: "/tailwind.png",
    level: "Advanced",
  },
  {
    name: "Vercel",
    logo: "/vercel.png",
    level: "Advanced",
  },
  {
    name: "Stack Auth",
    logo: "/stack.png",
    level: "Beginner",
  },
  {
    name: "Git & GitHub",
    logo: "/git.png",
    level: "Intermediate",
  },
];

function HomePageContent() {
  const controls = useAnimation();
  const searchParams = useSearchParams();
  const sent = searchParams.get("sent") === "1";

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      {/* Background gradient blobs  */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <button
            onClick={() => scrollToId("hero")}
            className="text-lg font-semibold tracking-tight text-slate-100 hover:cursor-pointer"
          >
            Esteban<span className="text-yellow-400">MCodes</span>
          </button>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            {["projects", "skills", "about", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollToId(id)}
                className="transition-colors hover:text-yellow-300 hover:cursor-pointer"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
          <button
            onClick={() =>
              window.open("/Esteban_Machuca_Resume_EstebanMCodes.pdf", "_blank")
            }
            className="md:block rounded-full border border-yellow-400/60 bg-white/5 px-4 py-1 text-sm text-yellow-300 hover:bg-yellow-400 hover:text-black transition"
          >
            Resume
          </button>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-10">
        {/* Success banner after contact form submit */}
        {sent && (
          <div className="mb-4 rounded-xl border border-green-500/40 bg-green-500/10 px-4 py-2 text-sm text-green-200">
            Thanks for reaching out! I&apos;ll get back to you soon.
          </div>
        )}

        {/* HERO */}
        <section
          id="hero"
          className="flex min-h-[80vh] flex-col items-center gap-10 py-10 md:flex-row md:justify-between"
        >
          {/* Left */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Open for junior roles & freelance
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              Hey, I&apos;m <br />
              <span className="text-yellow-400">Esteban Machuca</span>.
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              I build modern full-stack web apps with{" "}
              <span className="font-semibold text-slate-100">
                Next.js, Prisma, and PostgreSQL
              </span>
              , focused on real business logic, clean UI, and smooth user
              experience.
            </p>
            <p className="mt-3 text-sm text-slate-400">
              From booking systems to inventory tools, I love turning real small
              business needs into polished products.
            </p>
            <p className="mt-3 text-sm text-slate-400">
              I’m especially interested in{" "}
              <span className="font-semibold text-slate-100">
                junior full-stack or front-end roles working with Next.js and
                TypeScript
              </span>{" "}
              at product-focused teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => scrollToId("projects")}
                className="rounded-full bg-yellow-400 px-6 py-2 text-sm font-semibold text-black shadow-lg shadow-yellow-500/30 transition hover:scale-[1.02] hover:bg-yellow-300 hover:cursor-pointer"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToId("contact")}
                className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10 hover:cursor-pointer"
              >
                Contact Me
              </button>
              <a
                href="/Esteban_Machuca_Resume_EstebanMCodes.pdf"
                download
                className="rounded-full border border-yellow-400/60 bg-black/40 px-6 py-2 text-sm font-medium text-yellow-300 transition hover:bg-yellow-400 hover:text-black hover:cursor-pointer"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right / Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 flex w-full max-w-sm flex-col gap-4 md:mt-0"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg"
            >
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Tech Stack
              </p>
              <p className="mt-1 text-sm text-slate-100">
                Next.js · Prisma · PostgreSQL · Tailwind · Stack Auth
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="flex items-center justify-between rounded-2xl border border-purple-500/40 bg-purple-500/10 p-4 shadow-lg"
            >
              <Link href="https://4dogsgrooming.org">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-300">
                    Featured Project
                  </p>
                  <p className="text-sm font-semibold text-slate-50">
                    4Dogs Grooming
                  </p>
                  <p className="text-xs text-slate-300">
                    Booking system with email notifications
                  </p>
                </div>
              </Link>
              <div className="h-14 w-14 rounded-full overflow-hidden border border-purple-300/60 shadow-md">
                <Image
                  src="/my-app.png"
                  alt="App thumbnail"
                  width={56}
                  height={56}
                  className="object-cover h-full w-full"
                />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="flex items-center justify-between rounded-2xl border border-green-500/40 bg-green-500/10 p-4 shadow-lg"
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Status
                </p>
                <p className="text-sm font-semibold text-slate-50">
                  Open to opportunities
                </p>
              </div>
              <button
                onClick={() => scrollToId("contact")}
                className="rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-green-300 hover:cursor-pointer"
              >
                Let&apos;s talk
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          initial="hidden"
          animate={controls}
          variants={sectionVariant}
          transition={{ duration: 0.7 }}
          className="mt-10 scroll-mt-24"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50">Projects</h2>
              <p className="text-sm text-slate-400">
                Real full-stack apps with real features.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                }}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition"
              >
                <div>
                  <h3 className="text-lg font-semibold text-slate-50">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400">{project.subtitle}</p>
                  <p className="mt-3 text-sm text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-black/40 px-2 py-1 text-[11px] text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 flex gap-3 opacity-80 transition group-hover:opacity-100">
                  <a
                    href={project.links.live}
                    className="rounded-full bg-yellow-400/90 px-4 py-1.5 text-xs font-semibold text-black transition hover:bg-yellow-300"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-slate-100 transition hover:bg-white/10"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View Code
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          initial="hidden"
          animate={controls}
          variants={sectionVariant}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-16 scroll-mt-24"
        >
          <h2 className="text-2xl font-semibold text-slate-50">Skills</h2>
          <p className="text-sm text-slate-400">
            Tools and technologies I use to ship full-stack apps.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {skillItems.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </motion.section>

        {/* ABOUT */}
        <motion.section
          id="about"
          initial="hidden"
          animate={controls}
          variants={sectionVariant}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 scroll-mt-24"
        >
          <h2 className="text-2xl font-semibold text-slate-50">About Me</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="space-y-3 text-sm text-slate-300">
              <p>
                I&apos;m a full-stack developer who loves building real,
                practical applications — appointment systems, dashboards,
                inventory tools, and anything that improves how people work.
              </p>
              <p>
                I work mainly with Next.js, Prisma, PostgreSQL, and Tailwind,
                and I really enjoy both the{" "}
                <span className="font-semibold">backend logic</span> and the{" "}
                <span className="font-semibold">frontend experience</span>.
              </p>
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              <p>
                I’m still learning every day and always exploring new tools,
                patterns, and best practices. I like taking ideas from the first
                sketch all the way to production — planning the data model,
                designing the UI, building the features, and deploying on
                Vercel.
              </p>
              <p>
                My goal is to keep improving, keep learning, and keep building
                things that feel good to use.
              </p>
            </div>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          initial="hidden"
          animate={controls}
          variants={sectionVariant}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 scroll-mt-24"
        >
          <h2 className="text-2xl font-semibold text-slate-50">Contact</h2>
          <p className="mt-1 text-sm text-slate-400">
            Got a project or role in mind? Let&apos;s talk.
          </p>

          <div className="mt-6 grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
            {/* Form */}
            <form
              className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm"
              action="/api/contact"
              method="POST"
            >
              <div>
                <label className="mb-1 block text-slate-200">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-slate-100 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-slate-200">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-slate-100 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-slate-200">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-slate-100 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  placeholder="Tell me a bit about your project or role..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-yellow-500/30 transition hover:scale-[1.01] hover:bg-yellow-300"
              >
                Send Message
              </button>
            </form>

            {/* Info */}
            <div className="space-y-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-medium text-slate-100">Let&apos;s connect</p>
                <p className="mt-3 text-sm text-slate-400">
                  I’m open to junior full-stack roles, front-end positions, or
                  freelance work — anywhere I can keep learning and help build
                  real products.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Links
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a
                    href="https://github.com/estbnn22"
                    className="rounded-full bg-black/40 px-3 py-1 text-slate-100 hover:bg-white/10"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/esteban-machuca-74850639b/"
                    className="rounded-full bg-black/40 px-3 py-1 text-slate-100 hover:bg-white/10"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="mailto:estebanmcodes@gmail.com"
                    className="rounded-full bg-black/40 px-3 py-1 text-slate-100 hover:bg-white/10"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="mt-16 border-t border-white/5 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Esteban. Built with Next.js & Tailwind.
        </footer>
      </main>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050816]" />}>
      <HomePageContent />
    </Suspense>
  );
}
