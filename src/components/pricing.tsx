"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
  Rocket,
  BarChart3,
  Palette,
  Globe,
  TrendingUp,
  ArrowRight,
  ChevronDown,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

/* ─────────────────────────── DATA ─────────────────────────── */

const secondaryPlans = [
  {
    icon: Sparkles,
    name: "Idea Scan",
    label: "Free",
    price: "Free",
    bestFor: "Lead Generation",
    cta: "Scan My Idea",
    features: [
      "Basic idea analysis",
      "Niche overview",
      "Simple scalability score",
      "Limited market insights",
    ],
  },
  {
    icon: Globe,
    name: "Venture Scale",
    label: "Custom",
    price: "Custom Pricing",
    bestFor: "High-End Brands & Enterprises",
    cta: "Talk to Our Team",
    features: [
      "Dedicated strategy team",
      "Full launch ecosystem",
      "Scaling systems",
      "Analytics dashboards",
      "Ongoing support",
    ],
  },
];

const primaryPlans = [
  {
    icon: BarChart3,
    name: "Market Research",
    priceRange: "$149 – $399",
    startingAt: "$149",
    bestFor: "Freelancers & Early Startups",
    cta: "Start Research",
    highlight: false,
    glowColor: "rgba(249,115,22,0.25)",
    features: [
      "Detailed market research",
      "Competitor analysis",
      "Startup feasibility report",
      "Revenue potential overview",
    ],
  },
  {
    icon: Rocket,
    name: "Launch Package",
    priceRange: "$2,000 – $5,000",
    startingAt: "$2,000",
    bestFor: "Serious Startup Founders",
    cta: "Launch My Startup",
    highlight: true,
    badge: "Most Popular",
    glowColor: "rgba(255,107,53,0.35)",
    features: [
      "Complete website development",
      "Branding system",
      "Launch strategy",
      "Competitor intelligence",
      "Growth roadmap",
    ],
  },
  {
    icon: TrendingUp,
    name: "Business Builder",
    priceRange: "$5,000 – $15,000+",
    startingAt: "$5,000",
    bestFor: "Premium & Scaling Businesses",
    cta: "Start Scaling",
    highlight: false,
    glowColor: "rgba(168,85,247,0.25)",
    features: [
      "Done-for-you business setup",
      "Full branding system",
      "Website & marketing assets",
      "Growth consulting",
      "Launch execution",
    ],
  },
];

const brandPlan = {
  icon: Palette,
  name: "Brand Starter",
  priceRange: "$499 – $1,500",
  startingAt: "$499",
  bestFor: "New Business Launches",
  cta: "Build My Brand",
  features: [
    "Business naming",
    "Logo design",
    "Brand identity",
    "Social media branding",
    "Launch recommendations",
  ],
};

/* ─────────────────────────── SPOTLIGHT CARD ─────────────────────────── */

function SpotlightCard({
  children,
  className,
  glowColor = "rgba(255,107,53,0.3)",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn("relative group overflow-hidden", className)}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]"
        style={{
          background: useTransform(
            [springX, springY],
            ([x, y]) =>
              `radial-gradient(350px circle at ${x}px ${y}px, ${glowColor}, transparent 70%)`
          ),
        }}
      />
      {children}
    </div>
  );
}

/* ─────────────────────────── ANIMATED GRADIENT BORDER ─────────────────────────── */

function GlowBorder({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative p-[1px] rounded-3xl overflow-hidden">
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          background:
            "conic-gradient(from 0deg, #FF6B35, #F97316, #A855F7, #FDBA74, #FF6B35)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative rounded-3xl bg-[#050816]">{children}</div>
    </div>
  );
}

/* ─────────────────────────── SECONDARY PLAN CARD ─────────────────────────── */

function SecondaryPlanCard({
  plan,
  index,
}: {
  plan: (typeof secondaryPlans)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const Icon = plan.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl border border-white/8 bg-white/[0.015] hover:border-white/15 hover:bg-white/[0.03] transition-all duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0">
            <Icon className="w-4 h-4 text-muted" />
          </div>
          <div>
            <p className="font-heading font-semibold text-foreground/80 text-sm">
              {plan.name}
            </p>
            <p className="text-xs text-muted">{plan.bestFor}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-heading font-bold text-foreground/60 text-sm">
            {plan.price}
          </span>
          <ChevronDown
            className={cn(
              "w-4 h-4 text-muted transition-transform duration-300",
              open && "rotate-180"
            )}
          />
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 pt-1 space-y-4 border-t border-white/5">
          <ul className="space-y-2 pt-3">
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs text-muted">
                <div className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            {plan.cta} <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────── BRAND BRIDGE CARD ─────────────────────────── */

function BrandBridgeCard() {
  const Icon = brandPlan.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="col-span-1 md:col-span-1"
    >
      <SpotlightCard
        glowColor="rgba(253,186,116,0.2)"
        className="rounded-2xl border border-highlight/20 bg-highlight/[0.04] hover:border-highlight/35 transition-all duration-500 h-full"
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-start justify-between mb-5">
            <div className="w-10 h-10 rounded-xl bg-highlight/10 border border-highlight/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-highlight" />
            </div>
            <div className="text-right">
              <p className="font-heading font-bold text-highlight text-lg">
                {brandPlan.startingAt}
              </p>
              <p className="text-xs text-muted">{brandPlan.priceRange}</p>
            </div>
          </div>

          <h3 className="font-heading text-lg font-semibold mb-1">
            {brandPlan.name}
          </h3>
          <p className="text-xs text-muted mb-5">{brandPlan.bestFor}</p>

          <ul className="space-y-2 mb-6 flex-grow">
            {brandPlan.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs text-muted">
                <div className="w-1.5 h-1.5 rounded-full bg-highlight/60 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className="w-full py-3 rounded-xl bg-highlight/10 border border-highlight/20 text-highlight text-sm font-semibold text-center hover:bg-highlight/20 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            {brandPlan.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

/* ─────────────────────────── PRIMARY PLAN CARD ─────────────────────────── */

function PrimaryPlanCard({
  plan,
  index,
}: {
  plan: (typeof primaryPlans)[0];
  index: number;
}) {
  const Icon = plan.icon;

  const cardContent = (
    <SpotlightCard
      glowColor={plan.glowColor}
      className={cn(
        "rounded-3xl h-full",
        plan.highlight
          ? "bg-[#0A0D1E]"
          : "border border-white/8 bg-white/[0.015] hover:border-white/20 hover:bg-white/[0.03]"
      )}
    >
      <div className="relative p-8 flex flex-col h-full">
        {/* Ambient glow */}
        {plan.highlight && (
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full blur-[80px] pointer-events-none"
            style={{ background: plan.glowColor }}
          />
        )}


        {/* Icon + Header */}
        <div className="flex items-start justify-between mb-6 relative z-10">
          <div
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center",
              plan.highlight
                ? "bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30"
                : "bg-white/5 border border-white/10"
            )}
          >
            <Icon
              className={cn(
                "w-6 h-6",
                plan.highlight ? "text-white" : "text-muted"
              )}
            />
          </div>
          <div className="text-right">
            <p
              className={cn(
                "font-heading font-bold text-2xl",
                plan.highlight ? "text-gradient" : "text-foreground"
              )}
            >
              {plan.startingAt}
            </p>
            <p className="text-xs text-muted">{plan.priceRange}</p>
          </div>
        </div>

        {/* Plan name */}
        <h3 className="font-heading text-2xl font-bold mb-1 relative z-10">
          {plan.name}
        </h3>
        <p className="text-xs text-muted mb-6 relative z-10">
          Best for: {plan.bestFor}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-grow relative z-10">
          {plan.features.map((f) => (
            <li key={f} className="flex items-center gap-3">
              <CheckCircle2
                className={cn(
                  "w-4 h-4 flex-shrink-0",
                  plan.highlight ? "text-primary" : "text-white/30"
                )}
              />
              <span className="text-sm text-foreground/75">{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#contact"
          className={cn(
            "relative w-full py-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 group transition-all duration-300 overflow-hidden z-10",
            plan.highlight
              ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02]"
              : "bg-white/5 border border-white/10 text-foreground hover:bg-white/10 hover:border-white/20"
          )}
        >
          <span className="relative z-10">{plan.cta}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
          {plan.highlight && (
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          )}
        </Link>
      </div>
    </SpotlightCard>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: plan.highlight ? -8 : -6 }}
      className={cn(
        "h-full relative",
        plan.highlight && "md:-mt-8 md:-mb-8 z-10"
      )}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-50">
          <motion.div
            animate={{ boxShadow: ["0 0 15px rgba(255,107,53,0.4)", "0 0 30px rgba(255,107,53,0.7)", "0 0 15px rgba(255,107,53,0.4)"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-gradient-to-r from-primary to-accent text-white text-xs font-bold tracking-wider uppercase px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg"
          >
            <Zap className="w-3 h-3" />
            {plan.badge}
          </motion.div>
        </div>
      )}

      {plan.highlight ? (
        <GlowBorder>{cardContent}</GlowBorder>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}

/* ─────────────────────────── MAIN EXPORT ─────────────────────────── */

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 relative bg-background overflow-hidden">
      {/* ── Background atmosphere ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,107,53,0.07),transparent)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-foreground/70 uppercase tracking-widest">
              Startup Launch Packages
            </span>
          </motion.div>

          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">
            Your <span className="text-gradient">Startup Journey</span>
            <br className="hidden md:block" /> Starts Here
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto text-balance">
            From first idea to full-scale launch — choose the package that matches
            your stage and ambition.
          </p>
        </motion.div>

        {/* ── THREE PRIMARY PLANS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mb-10">
          {primaryPlans.map((plan, i) => (
            <PrimaryPlanCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* ── BRAND STARTER BRIDGE + SECONDARY COLLAPSED ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Brand Starter — spans 1 column */}
          <BrandBridgeCard />

          {/* Secondary plans — collapsed accordions spanning 2 columns */}
          <div className="md:col-span-2 flex flex-col gap-4 justify-center">
            <motion.p
              className="text-xs text-muted uppercase tracking-widest mb-1 pl-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              More Options
            </motion.p>
            {secondaryPlans.map((plan, i) => (
              <SecondaryPlanCard key={plan.name} plan={plan} index={i} />
            ))}
          </div>
        </div>

        {/* ── BOTTOM CTA STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl border border-white/8 bg-white/[0.02] overflow-hidden p-8 md:p-12 text-center"
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
              Not sure which package fits?
            </h3>
            <p className="text-muted mb-8 max-w-md mx-auto">
              Book a free 30-minute strategy call. We'll map the right launch
              path for your idea.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all hover:scale-105 group"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
