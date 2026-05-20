"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Sparkles } from "lucide-react";

export default function AiInsights() {
  return (
    <section className="py-32 relative bg-background overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/10 mb-6">
          <Cpu className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">AI Founder Assistant</span>
        </div>
        
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-16">
          Intelligence That <br />
          <span className="text-muted">Accelerates Decisions.</span>
        </h2>

        <div className="relative mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#0c0e1a] shadow-2xl overflow-hidden text-left font-mono">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
            <Terminal className="w-4 h-4 text-muted" />
            <span className="text-xs text-muted">buildoc_ai_engine.exe</span>
          </div>
          
          <div className="p-6 md:p-8 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-4 text-sm text-foreground/90 leading-relaxed shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                <span className="text-accent font-semibold block mb-1">Analysis Complete:</span>
                Your niche has high growth potential. Competitors are weak in emotional branding. Recommended angle: Premium founder-focused positioning.
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="flex gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-4 text-sm text-foreground/90 leading-relaxed shadow-[0_0_15px_rgba(255,107,53,0.1)]">
                <span className="text-primary font-semibold block mb-1">Monetization Strategy:</span>
                Your startup concept has strong recurring revenue opportunities. Proceeding with Tiered SaaS pricing model architecture...
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2 }}
              className="flex items-center gap-2 text-muted text-sm pt-4"
            >
              <div className="w-2 h-4 bg-accent animate-pulse" />
              Generating Launch Strategy...
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
