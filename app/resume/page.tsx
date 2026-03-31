import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume | Esteban Machuca",
  description:
    "Resume for Esteban Machuca, a junior full-stack developer building web and mobile products with Next.js and React Native.",
};

const projectItems = [
  {
    name: "TrackForge",
    stack: "React Native, Convex, RevenueCat",
    bullets: [
      "Built a mobile fitness app centered on workout logging, routines, streaks, PR tracking, and progress insights.",
      "Focused on creating a clean mobile experience and turning training data into simple, useful product features.",
    ],
  },
  {
    name: "4Dogs Grooming",
    stack: "Next.js, Prisma, PostgreSQL, Tailwind CSS, Stack Auth",
    bullets: [
      "Built a booking platform for a local grooming business with appointment flows, email notifications, and admin tools.",
      "Worked across the full stack, from data structure and backend logic to UI and overall product flow.",
    ],
  },
  {
    name: "JG Detailing",
    stack: "HTML, CSS, JavaScript",
    bullets: [
      "Designed and built a responsive marketing site for a small business.",
      "Used the project to strengthen front-end fundamentals, layout skills, and visual presentation.",
    ],
  },
];

const skillGroups = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "React Native", "TypeScript", "JavaScript"],
  },
  {
    label: "Backend & Data",
    items: ["Prisma", "PostgreSQL", "Convex"],
  },
  {
    label: "UI & Tools",
    items: ["Tailwind CSS", "Git", "GitHub", "Vercel"],
  },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-200 px-4 py-8 text-slate-900 print:bg-white print:px-0 print:py-0">
      <div className="mx-auto mb-4 flex max-w-4xl items-center justify-between text-sm text-slate-700 print:hidden">
        <Link
          href="/"
          className="rounded-full border border-slate-300 bg-white px-4 py-2 transition hover:border-slate-400 hover:bg-slate-50"
        >
          Back to portfolio
        </Link>
        <p className="text-right text-xs text-slate-500">
          Use your browser&apos;s print dialog to save this page as PDF.
        </p>
      </div>

      <section className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.18)] print:rounded-none print:p-0 print:shadow-none sm:p-10">
        <header className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Esteban Machuca
          </h1>
          <p className="mt-2 text-lg font-medium text-slate-700">
            Junior Full-Stack Developer
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
            Junior developer building web and mobile products with Next.js,
            React Native, and modern full-stack tools. I enjoy turning real
            user needs into clean, practical software and growing through
            hands-on project work.
          </p>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-700">
            <a
              href="mailto:estebanmcodes@gmail.com"
              className="hover:text-slate-950"
            >
              estebanmcodes@gmail.com
            </a>
            <a
              href="https://estebanmcodes.com"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-slate-950"
            >
              estebanmcodes.com
            </a>
            <a
              href="https://github.com/estbnn22"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-slate-950"
            >
              github.com/estbnn22
            </a>
            <a
              href="https://www.linkedin.com/in/esteban-machuca-74850639b/"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-slate-950"
            >
              linkedin.com/in/esteban-machuca-74850639b
            </a>
          </div>
        </header>

        <div className="grid gap-8 pt-8 md:grid-cols-[1.4fr,0.9fr]">
          <div className="space-y-8">
            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                Selected Projects
              </h2>
              <div className="mt-4 space-y-6">
                {projectItems.map((project) => (
                  <article key={project.name}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-base font-semibold text-slate-950">
                        {project.name}
                      </h3>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        {project.stack}
                      </p>
                    </div>
                    <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-700">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>• {bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                Strengths
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                <li>• Building clean, user-focused interfaces for web and mobile</li>
                <li>• Working across frontend, backend logic, and data modeling</li>
                <li>• Learning quickly through real project work and iteration</li>
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                Technical Skills
              </h2>
              <div className="mt-4 space-y-4 text-sm text-slate-700">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <h3 className="font-semibold text-slate-900">
                      {group.label}
                    </h3>
                    <p className="mt-1 leading-6">{group.items.join(", ")}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                Currently Focused On
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                <li>• Improving React Native and Next.js project quality</li>
                <li>• Writing cleaner backend logic and database structure</li>
                <li>• Growing into a strong junior full-stack contributor</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                Opportunity Goal
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-700">
                Looking for junior full-stack or front-end opportunities where
                I can contribute to production features, learn from experienced
                engineers, and keep growing through real product work.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
