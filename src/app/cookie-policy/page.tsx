import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Buildoc",
  description:
    "Understand how Buildoc uses cookies and analytics technologies to improve your experience.",
};

export default function CookiePolicyPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 pt-40 pb-32">
        {/* Header */}
        <div className="mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Legal
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Cookie Policy
          </h1>
          <p className="text-muted">Effective Date: January 1, 2026</p>
        </div>

        <div className="h-[1px] bg-gradient-to-r from-primary/50 via-white/10 to-transparent mb-12" />

        <div className="space-y-10 text-muted leading-relaxed">
          <section>
            <p className="text-foreground/80 text-lg">
              Buildoc uses cookies and analytics technologies to improve user
              experience, optimize platform functionality, monitor operational
              performance, analyze traffic behavior, and enhance security
              systems.
            </p>
          </section>

          <PolicySection title="What Cookies Collect">
            <p>Cookies may collect information related to:</p>
            <ul>
              <li>Browser activity and user sessions</li>
              <li>Interaction patterns and device information</li>
              <li>General platform usage analytics</li>
              <li>Preferences and settings</li>
            </ul>
          </PolicySection>

          <PolicySection title="Types of Cookies We Use">
            <div className="space-y-4">
              <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
                <h3 className="font-medium text-foreground mb-1">Essential Cookies</h3>
                <p className="text-sm">
                  Required for the platform to function. These cannot be
                  disabled.
                </p>
              </div>
              <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
                <h3 className="font-medium text-foreground mb-1">Analytics Cookies</h3>
                <p className="text-sm">
                  Help us understand how users interact with the platform so we
                  can improve performance.
                </p>
              </div>
              <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
                <h3 className="font-medium text-foreground mb-1">Functional Cookies</h3>
                <p className="text-sm">
                  Remember your preferences and settings to personalize your
                  experience.
                </p>
              </div>
            </div>
          </PolicySection>

          <PolicySection title="Managing Cookies">
            <p>
              Users may disable cookies through browser settings; however,
              certain platform features may become limited or unavailable as a
              result.
            </p>
          </PolicySection>

          <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <p className="text-foreground/80">
              By continuing to use Buildoc, users consent to the use of cookies
              and related tracking technologies.
            </p>
          </section>

          <PolicySection title="Contact">
            <p>
              For cookie-related questions, contact:{" "}
              <a
                href="mailto:privacy@buildoc.io"
                className="text-primary hover:underline"
              >
                privacy@buildoc.io
              </a>
            </p>
          </PolicySection>
        </div>
      </div>
    </div>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
        {title}
      </h2>
      <div className="space-y-3 [&>p]:text-muted [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ul>li]:text-muted">
        {children}
      </div>
    </section>
  );
}
