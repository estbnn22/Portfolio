// app/support/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | Esteban Machuca",
  description:
    "TrackForge support. Contact, FAQs, troubleshooting, and subscription help.",
};

const APP_NAME = "TrackForge";
const SUPPORT_EMAIL = "estebanmcodes@gmail.com";
const RESPONSE_TIME = "24–48 hours";

function Card({
  title,
  children,
  icon,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/4 p-5 sm:p-6 shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
      <div className="flex items-start gap-3">
        {icon ? (
          <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/6 text-white">
            {icon}
          </div>
        ) : null}
        <div className="min-w-0">
          <h2 className="text-base sm:text-lg font-semibold tracking-tight text-white">
            {title}
          </h2>
          <div className="mt-2 text-sm sm:text-[15px] leading-6 text-white/75 space-y-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-2.5 py-1 text-xs font-semibold text-white/80">
      {children}
    </span>
  );
}

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#070710]">
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(closest-side,rgba(225,29,72,0.22),transparent)]" />

      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-8 py-14 sm:py-16">
        {/* Header */}
        <div className="rounded-3xl border border-white/10 bg-white/4 shadow-[0_30px_120px_rgba(0,0,0,0.55)] overflow-hidden">
          <div className="px-6 sm:px-10 py-8 sm:py-10 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold text-white/80">
                <span className="h-2 w-2 rounded-full bg-[#E11D48]" />
                Support
              </div>
              <Badge>Typical response: {RESPONSE_TIME}</Badge>
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {APP_NAME} Support
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/70 leading-6 max-w-2xl">
              Need help with workouts, progress, streaks, cards, or
              subscriptions? We’ve got you.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-[#E11D48] px-5 py-3 text-sm font-bold text-white shadow-[0_18px_60px_rgba(225,29,72,0.28)] hover:opacity-95 transition"
                href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
                  `${APP_NAME} Support Request`,
                )}`}
              >
                <span>Contact Support</span>
                <span className="text-white/90" aria-hidden>
                  →
                </span>
              </a>

              <a
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-white/85 hover:bg-white/8 transition"
                href="#faq"
              >
                View FAQs
              </a>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-white/55">
              Email:{" "}
              <a
                className="text-white underline decoration-white/25 underline-offset-4 hover:decoration-white/60"
                href={`mailto:${SUPPORT_EMAIL}`}
              >
                {SUPPORT_EMAIL}
              </a>
            </p>
          </div>

          {/* Content */}
          <div className="px-6 sm:px-10 py-10 sm:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <Card
                title="Before you email"
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 17h.01M10.3 8.6a2.3 2.3 0 1 1 3.7 1.9c-.9.6-1.7 1.1-1.7 2.5v.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              >
                <p>
                  Include the device model, iOS version, and what screen you
                  were on. If possible, attach a screenshot.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>App version (TestFlight build #)</li>
                  <li>Steps to reproduce</li>
                  <li>Any error text shown</li>
                </ul>
              </Card>

              <Card
                title="Troubleshooting"
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2a7 7 0 0 0-4 12.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26A7 7 0 0 0 12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 21h6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                }
              >
                <ul className="list-disc pl-5 space-y-1">
                  <li>Force close and reopen the app</li>
                  <li>Check your internet connection</li>
                  <li>Update to the latest TestFlight build</li>
                  <li>Try Sign Out → Sign In</li>
                </ul>
              </Card>

              <Card
                title="Subscriptions"
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 7h10M7 12h10M7 17h6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              >
                <p>
                  For billing issues, Apple manages payments. You can manage
                  your subscription in iOS Settings.
                </p>
                <p>
                  iOS:{" "}
                  <span className="text-white/85">
                    Settings → Apple ID → Subscriptions
                  </span>
                </p>
              </Card>
            </div>

            <div className="mt-10">
              <div className="rounded-2xl border border-white/10 bg-white/3 px-5 py-4">
                <p className="text-xs sm:text-sm text-white/60 leading-5">
                  Tip: For the fastest help, include a screenshot and the exact
                  steps that led to the problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
