// app/policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Esteban Machuca",
  description:
    "TrackForge privacy policy. Learn what data is collected, how it is used, and your choices.",
};

const APP_NAME = "TrackForge";
const EFFECTIVE_DATE = "February 13, 2026";
const SUPPORT_EMAIL = "estebanmcodes@gmail.com";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm sm:text-[15px] leading-6 text-white/80">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#070710]">
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(closest-side,rgba(225,29,72,0.22),transparent)]" />

      <div className="relative mx-auto w-full max-w-4xl px-5 sm:px-8 py-14 sm:py-16">
        <div className="rounded-3xl border border-white/10 bg-white/4 shadow-[0_30px_120px_rgba(0,0,0,0.55)] overflow-hidden">
          <div className="px-6 sm:px-10 py-8 sm:py-10 border-b border-white/10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold text-white/80">
              <span className="h-2 w-2 rounded-full bg-[#E11D48]" />
              Privacy Policy
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {APP_NAME} Privacy Policy
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/70 leading-6">
              Effective date:{" "}
              <span className="text-white/85">{EFFECTIVE_DATE}</span>
            </p>
            <p className="mt-5 text-sm sm:text-[15px] text-white/75 leading-6 max-w-2xl">
              This policy explains what information {APP_NAME} collects, how it
              is used, and the choices you have. If you have questions, contact
              us at{" "}
              <a
                className="text-white underline decoration-white/25 underline-offset-4 hover:decoration-white/60"
                href={`mailto:${SUPPORT_EMAIL}`}
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-0">
            {/* Sticky TOC */}
            <aside className="hidden lg:block border-r border-white/10 bg-white/2">
              <div className="sticky top-0 p-6">
                <p className="text-xs font-semibold text-white/60 tracking-wider uppercase">
                  On this page
                </p>
                <nav className="mt-4 space-y-2 text-sm">
                  {[
                    ["overview", "Overview"],
                    ["data", "Information We Collect"],
                    ["use", "How We Use Information"],
                    ["sharing", "Sharing"],
                    ["subscriptions", "Subscriptions"],
                    ["security", "Security"],
                    ["retention", "Data Retention"],
                    ["choices", "Your Choices"],
                    ["children", "Children"],
                    ["changes", "Changes"],
                    ["contact", "Contact"],
                  ].map(([id, label]) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="block rounded-lg px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 transition"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="px-6 sm:px-10 py-10 sm:py-12">
              <div className="space-y-10">
                <Section id="overview" title="Overview">
                  <p>
                    {APP_NAME} is a fitness tracking app. We collect only the
                    information needed to provide the app experience (for
                    example, workout logs and progress stats).
                  </p>
                  <p>
                    We do not sell your personal information and we do not share
                    your data with advertisers.
                  </p>
                </Section>

                <Section id="data" title="Information We Collect">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-semibold text-white">
                        Account & identifiers
                      </span>
                      : basic identifiers used to sign in and associate your
                      data with your account.
                    </li>
                    <li>
                      <span className="font-semibold text-white">
                        Fitness data you provide
                      </span>
                      : workouts, exercises, sets/reps/weight, notes, routines,
                      and similar training details.
                    </li>
                    <li>
                      <span className="font-semibold text-white">
                        Progress data
                      </span>
                      : computed stats like streaks, PR counts, and charts
                      derived from your logs.
                    </li>
                    <li>
                      <span className="font-semibold text-white">
                        Device/diagnostics
                      </span>
                      : basic app diagnostics (e.g., crash logs) to improve
                      reliability.
                    </li>
                  </ul>
                  <p className="text-white/70">
                    Optional: If you choose to track bodyweight, that
                    information is stored with your account.
                  </p>
                </Section>

                <Section id="use" title="How We Use Information">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Provide core features like logging, routines, and
                      analytics.
                    </li>
                    <li>
                      Personalize your experience (e.g., show recent sessions).
                    </li>
                    <li>
                      Maintain app security, prevent abuse, and debug issues.
                    </li>
                    <li>Communicate with you about support requests.</li>
                  </ul>
                </Section>

                <Section id="sharing" title="Sharing">
                  <p>
                    We do not sell your personal information. We share data only
                    in the limited cases below:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-semibold text-white">
                        Service providers
                      </span>{" "}
                      that help run the app (e.g., infrastructure, analytics,
                      customer support).
                    </li>
                    <li>
                      <span className="font-semibold text-white">Legal</span> if
                      required to comply with law or protect users and the
                      service.
                    </li>
                    <li>
                      <span className="font-semibold text-white">
                        With your consent
                      </span>
                      , when you explicitly choose to share something.
                    </li>
                  </ul>
                </Section>

                <Section id="subscriptions" title="Subscriptions">
                  <p>
                    {APP_NAME} may offer optional paid subscriptions. Purchases
                    are processed by Apple through the App Store.
                  </p>
                  <p>
                    We use RevenueCat to help manage subscriptions. RevenueCat
                    may process transaction-related information (such as product
                    identifiers and purchase status) to validate entitlements.
                  </p>
                  <p className="text-white/70">
                    Payment details are handled by Apple. We do not receive your
                    full payment card information.
                  </p>
                </Section>

                <Section id="security" title="Security">
                  <p>
                    We use reasonable administrative, technical, and physical
                    safeguards to protect your information. No method of
                    transmission or storage is 100% secure, but we work to
                    protect your data.
                  </p>
                </Section>

                <Section id="retention" title="Data Retention">
                  <p>
                    We retain your information for as long as your account is
                    active or as needed to provide the service. You may request
                    deletion of your account data (if the app provides this
                    feature), or contact us for help.
                  </p>
                </Section>

                <Section id="choices" title="Your Choices">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Access and update your workout data within the app.</li>
                    <li>
                      Request deletion of your account/data (where available).
                    </li>
                    <li>
                      Uninstall the app to stop data collection on your device.
                    </li>
                  </ul>
                </Section>

                <Section id="children" title="Children">
                  <p>
                    {APP_NAME} is not directed to children under 13. We do not
                    knowingly collect personal information from children.
                  </p>
                </Section>

                <Section id="changes" title="Changes">
                  <p>
                    We may update this policy from time to time. If we make
                    material changes, we will update the effective date above.
                  </p>
                </Section>

                <Section id="contact" title="Contact">
                  <p>
                    If you have questions about this policy, contact us at{" "}
                    <a
                      className="text-white underline decoration-white/25 underline-offset-4 hover:decoration-white/60"
                      href={`mailto:${SUPPORT_EMAIL}`}
                    >
                      {SUPPORT_EMAIL}
                    </a>
                    .
                  </p>
                </Section>

                <div className="pt-2">
                  <div className="rounded-2xl border border-white/10 bg-white/3 px-5 py-4">
                    <p className="text-xs sm:text-sm text-white/60 leading-5">
                      Note: This is a general privacy policy template for a
                      fitness tracking app. Update it to match your exact data
                      practices, contact email, and any third-party services you
                      use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
