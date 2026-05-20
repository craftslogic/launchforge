import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Buildoc",
  description:
    "Learn how Buildoc collects, uses, stores, and protects your personal information and data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 pt-40 pb-32">
        {/* Header */}
        <div className="mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Legal
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted">Effective Date: January 1, 2026</p>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-primary/50 via-white/10 to-transparent mb-12" />

        {/* Content */}
        <div className="prose-policy space-y-10 text-muted leading-relaxed">
          <section>
            <p className="text-foreground/80 text-lg">
              At Buildoc, protecting user privacy and maintaining trust is one
              of our highest priorities. This Privacy Policy explains how Buildoc
              collects, uses, stores, processes, and safeguards information when
              users access our platform, services, systems, and digital
              infrastructure.
            </p>
          </section>

          <section>
            <p>
              Buildoc operates as a business launch and startup development
              platform that helps founders transform ideas into launch-ready
              businesses through market validation, competitor research, branding
              systems, launch infrastructure, and growth-focused execution.
            </p>
          </section>

          <PolicySection title="Information We Collect">
            <p>
              To provide these services effectively, Buildoc may collect certain
              personal, business, and technical information from users
              interacting with the platform. Information collected may include:
            </p>
            <ul>
              <li>Names and email addresses</li>
              <li>Business concepts and company details</li>
              <li>Billing information</li>
              <li>Project-related information and website URLs</li>
              <li>Communication records</li>
              <li>Analytics data and technical device information</li>
              <li>
                Browser type, IP address, operating system, and referral sources
              </li>
              <li>
                Interaction behavior, session activity, and platform usage
                patterns
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="How We Use Your Information">
            <p>This information is used to:</p>
            <ul>
              <li>Improve user experience and provide services</li>
              <li>Process payments</li>
              <li>Improve platform functionality</li>
              <li>Enhance operational performance</li>
              <li>Maintain security</li>
              <li>Optimize strategic recommendations</li>
            </ul>
          </PolicySection>

          <PolicySection title="Third-Party Providers">
            <p>
              Buildoc may use third-party infrastructure and operational
              providers including payment processors, analytics systems, cloud
              hosting providers, communication systems, authentication systems,
              scheduling platforms, and email providers.
            </p>
          </PolicySection>

          <PolicySection title="Cookies & Tracking Technologies">
            <p>
              Our platform may utilize cookies, analytics tools, and tracking
              technologies to improve platform performance, monitor operational
              analytics, personalize experiences, and enhance security systems.
            </p>
          </PolicySection>

          <PolicySection title="Data Security">
            <p>
              Buildoc implements commercially reasonable security measures
              designed to protect user information and operational systems. These
              measures may include encrypted connections, authentication layers,
              infrastructure protections, restricted access systems, monitoring
              tools, and cloud security practices.
            </p>
          </PolicySection>

          <PolicySection title="Your Rights">
            <p>
              Users may request access, correction, or deletion of their
              information where applicable under operational and legal
              limitations.
            </p>
          </PolicySection>

          <PolicySection title="Data Sharing">
            <p>
              Buildoc does not sell personal information to third parties.
              Information may only be shared where necessary for operational
              functionality, legal compliance, infrastructure services, fraud
              prevention, or service delivery.
            </p>
          </PolicySection>

          <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <p className="text-foreground/80">
              By using the Buildoc platform, users acknowledge and agree to this
              Privacy Policy.
            </p>
          </section>

          <PolicySection title="Contact">
            <p>
              For privacy-related inquiries, contact us at:{" "}
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
