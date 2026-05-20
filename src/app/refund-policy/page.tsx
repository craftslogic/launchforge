import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Buildoc",
  description:
    "Understand Buildoc's refund policy for digital services, strategic assets, and subscription plans.",
};

export default function RefundPolicyPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 pt-40 pb-32">
        {/* Header */}
        <div className="mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Legal
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Refund Policy
          </h1>
          <p className="text-muted">Effective Date: January 1, 2026</p>
        </div>

        <div className="h-[1px] bg-gradient-to-r from-primary/50 via-white/10 to-transparent mb-12" />

        <div className="space-y-10 text-muted leading-relaxed">
          <section>
            <p className="text-foreground/80 text-lg">
              Due to the customized and strategic nature of Buildoc services,
              completed digital work and delivered strategic assets are generally
              non-refundable.
            </p>
          </section>

          <PolicySection title="Non-Refundable Deliverables">
            <p>
              The following are generally non-refundable once delivered or
              substantially completed:
            </p>
            <ul>
              <li>Completed market research and business validation reports</li>
              <li>Branding systems and digital assets</li>
              <li>Launch strategies and consultation sessions</li>
              <li>Infrastructure deliverables</li>
            </ul>
          </PolicySection>

          <PolicySection title="Eligible Refund Circumstances">
            <p>
              Refund requests may be reviewed under limited circumstances
              including:
            </p>
            <ul>
              <li>Duplicate payments</li>
              <li>Billing errors</li>
              <li>Failure to initiate agreed services</li>
            </ul>
          </PolicySection>

          <PolicySection title="Subscription Cancellations">
            <p>
              Users subscribed to recurring plans may cancel future billing
              cycles before the next scheduled renewal date. Cancellations take
              effect at the end of the current billing period.
            </p>
          </PolicySection>

          <PolicySection title="Chargebacks">
            <p>
              Unauthorized chargebacks may result in account suspension or
              termination. We encourage users to contact our support team before
              initiating a chargeback.
            </p>
          </PolicySection>

          <PolicySection title="Refund Determination">
            <p>
              Buildoc reserves the right to determine refund eligibility based
              on operational progress, delivered work, allocated resources, and
              contractual obligations.
            </p>
          </PolicySection>

          <PolicySection title="Contact">
            <p>
              To request a refund or discuss billing concerns, contact:{" "}
              <a
                href="mailto:support@buildoc.io"
                className="text-primary hover:underline"
              >
                support@buildoc.io
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
