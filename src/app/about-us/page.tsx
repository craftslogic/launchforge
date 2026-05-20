"use client";

import { motion, type Variants } from "framer-motion";
import {
  CheckCircle2,
  Lightbulb,
  Rocket,
  BarChart3,
  Globe,
  Users,
  Target,
  Zap,
  TrendingUp,
  Building2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const whatWeDo = [
  "Validate business ideas",
  "Analyze market demand",
  "Research competitors",
  "Identify profitable opportunities",
  "Create scalable business models",
  "Build modern brand identities",
  "Develop launch-ready websites",
  "Design digital business infrastructure",
  "Create growth strategies",
  "Build strong online presence",
];

const whoWeWorkWith = [
  { icon: Lightbulb, label: "Startup Founders" },
  { icon: Rocket, label: "Entrepreneurs" },
  { icon: Globe, label: "Ecommerce Brands" },
  { icon: BarChart3, label: "Digital Businesses" },
  { icon: Users, label: "Creators" },
  { icon: Building2, label: "Local Businesses" },
];

const principles = [
  {
    icon: Target,
    title: "Build With Clarity",
    description:
      "Every successful business starts with understanding the market, audience, and opportunity.",
  },
  {
    icon: Rocket,
    title: "Launch With Strategy",
    description:
      "Strong launches are built through planning, positioning, and execution.",
  },
  {
    icon: Zap,
    title: "Create Scalable Infrastructure",
    description:
      "Businesses need modern systems to grow effectively in competitive markets.",
  },
  {
    icon: TrendingUp,
    title: "Focus on Long-Term Growth",
    description:
      "Sustainable businesses are built through continuous optimization and strategic evolution.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 flex flex-col items-center text-center px-6 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(255,107,53,0.12),transparent_55%)] pointer-events-none" />
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 relative z-10"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <Building2 className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground/80">
            About Buildoc
          </span>
        </motion.div>

        <motion.h1
          className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] max-w-4xl relative z-10"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Build Ideas Into{" "}
          <span className="text-gradient">Real Businesses</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted max-w-2xl mb-12 text-balance relative z-10"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Buildoc is a modern business launch platform designed to help
          entrepreneurs transform ideas into scalable, launch-ready businesses
          through intelligent research, strategic branding, digital
          infrastructure, and growth-focused execution.
        </motion.p>

        <motion.div
          className="relative z-10"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all hover:scale-105"
          >
            Start Building
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
                Our Mission
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold leading-[1.15] mb-6">
                We bridge the gap between{" "}
                <span className="text-gradient">idea and execution</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                We believe that many great ideas fail not because they lack
                potential, but because founders lack the systems, structure,
                validation, and execution required to turn those ideas into
                successful businesses.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Buildoc was created to bridge that gap — combining market
                intelligence, competitor analysis, business validation, branding
                systems, launch infrastructure, and growth strategy into one
                streamlined ecosystem built for modern founders.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-10 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-[200px] h-[200px] bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-[200px] h-[200px] bg-accent/15 blur-[80px] rounded-full pointer-events-none" />
                <div className="relative z-10 space-y-6">
                  {[
                    { label: "Businesses Launched", value: "200+" },
                    { label: "Founders Supported", value: "500+" },
                    { label: "Markets Analyzed", value: "50+" },
                    { label: "Success Rate", value: "94%" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      className="flex items-center justify-between py-4 border-b border-white/5 last:border-0"
                    >
                      <span className="text-muted">{stat.label}</span>
                      <span className="font-heading text-3xl font-bold text-gradient">
                        {stat.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,53,0.05),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              What We Do
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Everything you need to{" "}
              <span className="text-gradient">launch {"&"} scale</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {whatWeDo.map((item, i) => (
              <motion.div
                key={item}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-300 p-4 group"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-foreground/80 font-medium">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
                  Our Approach
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                  A modern{" "}
                  <span className="text-gradient">launch operating system</span>
                </h2>
                <p className="text-muted text-lg leading-relaxed">
                  Buildoc operates as a modern business launch operating system
                  rather than a traditional marketing agency or development
                  studio. We aim to reduce uncertainty for founders by helping
                  them make smarter business decisions using research, strategy,
                  and modern launch systems.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {[
                  "Intelligent market validation",
                  "Strategic business planning",
                  "Scalable infrastructure",
                  "Modern branding",
                  "Launch optimization",
                  "Growth-focused execution",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.03] p-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-muted">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.05),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Who We Work With
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Built for <span className="text-gradient">modern builders</span>
            </h2>
            <p className="text-muted mt-4 max-w-xl mx-auto">
              From idea-stage founders to businesses preparing for launch,
              Buildoc provides the operational foundation needed to build with
              clarity and confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {whoWeWorkWith.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-300 p-6 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-muted text-center">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Core Principles
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              How we <span className="text-gradient">think {"&"} build</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 p-8 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {title}
                  </h3>
                  <p className="text-muted leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(255,107,53,0.1),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Our Vision
            </span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 leading-[1.1]">
              A future where building is{" "}
              <span className="text-gradient">more intelligent</span>
            </h2>
            <p className="text-muted text-lg md:text-xl leading-relaxed mb-12 text-balance">
              We envision a future where building a business becomes more
              intelligent, accessible, and structured. Buildoc aims to become a
              modern ecosystem where entrepreneurs can launch businesses faster
              through smarter systems, strategic intelligence, and scalable
              infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all hover:scale-105"
              >
                Build Ideas Into Businesses
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-foreground transition-all hover:bg-white/10"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}