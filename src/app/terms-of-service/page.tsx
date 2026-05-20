import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Buildoc",
  description:
    "Read Buildoc's Terms of Service governing access to and use of our platform, website, and services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 pt-40 pb-32">
        {/* Header */}
        <div className="mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Legal
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-muted">Effective Date: January 1, 2026</p>
        </div>

        <div className="h-[1px] bg-gradient-to-r from-primary/50 via-white/10 to-transparent mb-12" />

        <div className="space-y-10 text-muted leading-relaxed">
          <section>
            <p className="text-foreground/80 text-lg">
              These Terms of Service govern access to and use of the Buildoc
              platform, website, services, systems, reports, recommendations,
              business launch infrastructure, and all associated operational
              services.
            </p>
          </section>

          <section className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
            <p>
              By accessing Buildoc, users agree to comply with these terms,
              conditions, and applicable laws.
            </p>
          </section>

          <PolicySection title="Our Services">
            <p>
              Buildoc provides strategic business launch services including:
            </p>
            <ul>
              <li>Market research and startup validation</li>
              <li>Competitor analysis and branding consultation</li>
              <li>Website planning and launch infrastructure</li>
              <li>Optimization systems and growth-focused business development support</li>
            </ul>
          </PolicySection>

          <PolicySection title="Acceptable Use">
            <p>Users agree not to:</p>
            <ul>
              <li>Misuse the platform or attempt unauthorized access</li>
              <li>Distribute malicious content or exploit operational systems</li>
              <li>Impersonate individuals or engage in unlawful activities</li>
            </ul>
          </PolicySection>

          <PolicySection title="Payments & Billing">
            <p>
              Certain Buildoc services may require subscription payments,
              retainers, or project-based billing agreements. Users agree to
              complete payments according to agreed billing terms.
            </p>
          </PolicySection>

          <PolicySection title="Intellectual Property">
            <p>
              All platform materials including branding systems, frameworks,
              reports, recommendations, designs, launch systems, intellectual
              property, strategic methodologies, graphics, and operational assets
              remain property of Buildoc unless otherwise agreed in writing.
            </p>
          </PolicySection>

          <PolicySection title="Disclaimer of Guarantees">
            <p>
              Buildoc provides strategic guidance and launch support but does not
              guarantee business success, profitability, investment outcomes,
              revenue growth, customer acquisition, or operational performance.
            </p>
            <p>
              Users remain solely responsible for all business decisions,
              implementation actions, investments, and operational activities
              resulting from Buildoc recommendations or services.
            </p>
          </PolicySection>

          <PolicySection title="Service Modifications">
            <p>
              Buildoc reserves the right to modify, suspend, reject, or
              discontinue services where necessary for operational, legal,
              security, or business reasons.
            </p>
          </PolicySection>

          <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <p className="text-foreground/80">
              Continued use of the platform constitutes acceptance of these
              Terms of Service.
            </p>
          </section>

          <PolicySection title="Contact">
            <p>
              For questions about these Terms, contact:{" "}
              <a
                href="mailto:hello@buildoc.io"
                className="text-primary hover:underline"
              >
                hello@buildoc.io
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
