"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$4,999",
    desc: "For solo founders needing a solid brand and landing page.",
    features: ["Market Validation Report", "Brand Identity System", "Cinematic Landing Page", "Basic Launch Strategy"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$9,999",
    desc: "The complete idea-to-business launch operating system.",
    features: ["Deep Competitor Intelligence", "Premium Brand Architecture", "Multi-page Web Experience", "Custom Animations & 3D", "Advanced Go-to-Market Strategy", "Post-Launch Growth Plan"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "Custom",
    desc: "For funded startups needing a bespoke digital ecosystem.",
    features: ["Everything in Pro", "Full Web App UI/UX", "Dedicated Design Team", "Priority Timeline", "Ongoing Growth Support"],
    highlight: false,
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 relative bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Invest in your <span className="text-gradient">Launch</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Transparent pricing for a complete digital transformation. Choose the tier that fits your startup's ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={cn(
                "relative p-8 rounded-3xl border transition-all duration-500",
                plan.highlight 
                  ? "bg-white/[0.03] border-primary/50 shadow-[0_0_50px_rgba(255,107,53,0.15)] md:scale-105 z-10" 
                  : "bg-white/[0.01] border-white/10 hover:border-white/20 hover:bg-white/[0.02]"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold tracking-wider uppercase px-4 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3" /> Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-muted text-sm min-h-[40px]">{plan.desc}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-bold font-heading">{plan.price}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={cn("w-5 h-5 shrink-0", plan.highlight ? "text-primary" : "text-white/40")} />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={cn(
                "w-full py-4 rounded-xl font-semibold text-sm transition-all duration-300",
                plan.highlight 
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02]" 
                  : "bg-white/5 text-foreground hover:bg-white/10"
              )}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
