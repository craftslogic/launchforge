"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="py-40 relative bg-background overflow-hidden flex items-center justify-center text-center">
      {/* Immersive Lighting Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(255,107,53,0.15),transparent_70%)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 blur-[120px] rounded-[100%] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-8xl font-bold tracking-tight mb-8"
        >
          Your Startup Idea <br className="hidden md:block" />
          <span className="text-gradient italic">Deserves To Exist.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-12"
        >
          LaunchForge helps founders transform ideas into launch-ready startups. Stop doubting. Start building.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-10 py-5 text-lg font-semibold text-white transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,107,53,0.4)]"
          >
            Launch My Idea
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#process"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-10 py-5 text-lg font-medium text-foreground transition-all hover:bg-white/10"
          >
            Start Building
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
