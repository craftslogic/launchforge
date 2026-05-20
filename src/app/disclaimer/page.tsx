import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Buildoc",
  description:
    "Read Buildoc's disclaimer regarding strategic recommendations, business outcomes, and inherent business risks.",
};

export default function DisclaimerPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 pt-40 pb-32">
        {/* Header */}
        <div className="mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Legal
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Disclaimer
          </h1>
          <p className="text-muted">Effective Date: January 1, 2026</p>
        </div>

        <div className="h-[1px] bg-gradient-to-r from-primary/50 via-white/10 to-transparent mb-12" />

        <div className="space-y-10 text-muted leading-relaxed">
          <section>
            <p className="text-foreground/80 text-lg">
              Buildoc provides strategic recommendations, business launch
              intelligence, market insights, branding guidance, and startup
              development support intended for informational and operational
              purposes only.
            </p>
          </section>

          <PolicySection title="No Guarantees">
            <p>Buildoc does not guarantee:</p>
            <ul>
              <li>Revenue increases or business profitability</li>
              <li>Investment outcomes or successful launches</li>
              <li>Customer acquisition or operational performance</li>
              <li>Market success or competitive advantages</li>
            </ul>
          </PolicySection>

          <PolicySection title="Inherent Business Risk">
            <p>
              Business results depend on multiple external factors including
              execution quality, market conditions, competition, economic
              environments, operational management, and user decisions.
            </p>
            <p>
              Users acknowledge that all business activities involve inherent
              risk and that Buildoc recommendations do not guarantee future
              outcomes.
            </p>
          </PolicySection>

          <PolicySection title="Informational Purpose">
            <p>
              All content, reports, strategies, and recommendations provided by
              Buildoc are intended to inform and guide decision-making. They
              should not be construed as legal, financial, or investment advice.
              Users should consult qualified professionals for such matters.
            </p>
          </PolicySection>

          <PolicySection title="User Responsibility">
            <p>
              Users remain solely responsible for all business decisions,
              implementation actions, investments, and operational activities
              resulting from Buildoc recommendations or services. Buildoc shall
              not be held liable for any direct, indirect, incidental, or
              consequential losses arising from use of our services.
            </p>
          </PolicySection>

          <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <p className="text-foreground/80">
              By using Buildoc services, you acknowledge and accept the
              limitations described in this disclaimer.
            </p>
          </section>

          <PolicySection title="Contact">
            <p>
              For questions about this Disclaimer, contact:{" "}
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
