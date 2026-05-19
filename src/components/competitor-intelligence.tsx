"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldAlert, ShieldCheck, Zap, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CompetitorIntelligence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [-100, 50]);
  const xRight = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 relative bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Stand Out in a <span className="text-muted">Sea of Sameness</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            We don't just build your product; we architect a positioning strategy that makes competitors irrelevant.
          </p>
        </div>

        <motion.div style={{ opacity }} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* VS Divider */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-background border border-white/10 items-center justify-center z-20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            <span className="font-heading font-bold text-xl text-muted">VS</span>
          </div>

          {/* Existing Competitors */}
          <motion.div style={{ x: xLeft }} className="relative">
            <div className="absolute inset-0 bg-red-500/5 blur-3xl rounded-[100px]" />
            <div className="relative p-8 rounded-3xl border border-red-500/10 bg-white/[0.01] backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <ShieldAlert className="w-6 h-6 text-red-400" />
                <h3 className="text-2xl font-heading text-foreground/80">Existing Market</h3>
              </div>

              <div className="space-y-6">
                {[
                  { label: "Branding", val: "Generic & Corporate", icon: XCircle },
                  { label: "Positioning", val: "Feature-based (Boring)", icon: XCircle },
                  { label: "Trust Factor", val: "Low (Looks like a template)", icon: XCircle },
                  { label: "User Experience", val: "Clunky & Outdated", icon: XCircle },
                ].map((item, i) => (
                  <div key={i} className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 transition-colors hover:border-red-500/20">
                    <span className="text-muted text-sm">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground/60 text-sm font-medium">{item.val}</span>
                      <item.icon className="w-4 h-4 text-red-400/50" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Your Future Startup */}
          <motion.div style={{ x: xRight }} className="relative">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-[100px]" />
            <div className="relative p-8 rounded-3xl border border-primary/20 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-sm shadow-[0_0_50px_rgba(255,107,53,0.1)]">
              <div className="absolute -top-3 -right-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent blur-md opacity-50 rounded-full animate-pulse" />
                  <div className="relative px-3 py-1 bg-accent rounded-full text-xs font-bold text-white tracking-wider flex items-center gap-1">
                    <Zap className="w-3 h-3" /> LAUNCHFORGE
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-heading font-bold text-foreground">Your Startup</h3>
              </div>

              <div className="space-y-6">
                {[
                  { label: "Branding", val: "Cinematic & Emotional", progress: 95 },
                  { label: "Positioning", val: "Category Defining", progress: 100 },
                  { label: "Trust Factor", val: "Premium (Apple-level)", progress: 90 },
                  { label: "User Experience", val: "Immersive & Smooth", progress: 98 },
                ].map((item, i) => (
                  <div key={i} className="relative overflow-hidden p-4 rounded-xl bg-white/[0.03] border border-primary/20">
                    <div className="flex items-center justify-between mb-3 relative z-10">
                      <span className="text-muted text-sm">{item.label}</span>
                      <span className="text-primary text-sm font-semibold">{item.val}</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden relative z-10">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
