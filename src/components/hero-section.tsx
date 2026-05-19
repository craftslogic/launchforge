"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const yCards = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[120vh] flex flex-col items-center justify-start pt-40 md:pt-52 overflow-hidden"
    >
      {/* Background Gradients & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(255,107,53,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-primary/20 blur-[120px] rounded-[100%] pointer-events-none" />
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] bg-accent/20 blur-[120px] rounded-[100%] pointer-events-none" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Content */}
      <motion.div 
        style={{ y: yText, opacity, scale }}
        className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground/80">The Ultimate Idea-to-Business OS</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-balance"
        >
          Turn Your <span className="text-gradient">Startup Idea</span> <br className="hidden md:block" /> Into a Real Business.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-muted max-w-2xl mb-12 text-balance"
        >
          LaunchForge transforms raw business ideas into launch-ready brands through research, branding, strategy, and cinematic execution.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all hover:scale-105"
          >
            Launch My Idea
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 rounded-full ring-2 ring-foreground ring-offset-2 ring-offset-background opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link
            href="#process"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-foreground transition-all hover:bg-white/10 hover:border-white/20"
          >
            Explore The Process
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating Background Cards */}
      <motion.div 
        style={{ y: yCards }}
        className="absolute top-[60vh] md:top-[50vh] left-0 right-0 w-full h-full pointer-events-none perspective-[1000px]"
      >
        {/* Mockup Card 1 */}
        <motion.div 
          initial={{ opacity: 0, rotateY: 20, rotateX: 40, y: 100, x: -100 }}
          animate={{ opacity: 1, rotateY: 15, rotateX: 30, y: 0, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="absolute left-[10%] top-[10%] w-[300px] h-[400px] rounded-2xl glass border border-white/10 p-6 flex flex-col gap-4 shadow-2xl shadow-primary/20"
        >
          <div className="w-full h-32 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-white/5" />
          <div className="w-3/4 h-4 rounded-full bg-white/10" />
          <div className="w-1/2 h-4 rounded-full bg-white/10" />
          <div className="w-full h-24 rounded-xl bg-white/5 border border-white/5 mt-auto" />
        </motion.div>

        {/* Mockup Card 2 */}
        <motion.div 
          initial={{ opacity: 0, rotateY: -20, rotateX: 40, y: 150, x: 100 }}
          animate={{ opacity: 1, rotateY: -15, rotateX: 30, y: 50, x: 0 }}
          transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
          className="absolute right-[10%] top-[5%] w-[320px] h-[380px] rounded-2xl glass border border-white/10 p-6 flex flex-col gap-4 shadow-2xl shadow-accent/20"
        >
          <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-accent" />
          </div>
          <div className="w-full h-4 rounded-full bg-white/10 mt-4" />
          <div className="w-5/6 h-4 rounded-full bg-white/10" />
          <div className="w-full flex-grow rounded-xl bg-gradient-to-t from-accent/10 to-transparent border border-white/5 mt-4" />
        </motion.div>

        {/* Center Mockup - Main Interface */}
        <motion.div 
          initial={{ opacity: 0, y: 200, scale: 0.9 }}
          animate={{ opacity: 1, y: 100, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }}
          className="absolute left-1/2 -translate-x-1/2 top-[15%] w-[800px] h-[500px] rounded-t-3xl border border-white/10 bg-[#0A0D1E] shadow-[0_-20px_80px_rgba(255,107,53,0.15)] overflow-hidden flex flex-col"
        >
          <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-grow p-8 grid grid-cols-3 gap-6">
            <div className="col-span-2 space-y-4">
              <div className="w-full h-40 rounded-xl bg-gradient-to-br from-primary/10 via-background to-background border border-white/5" />
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 rounded-xl bg-white/5 border border-white/5" />
                <div className="h-32 rounded-xl bg-white/5 border border-white/5" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-24 rounded-xl bg-accent/10 border border-accent/20" />
              <div className="h-[200px] rounded-xl bg-white/5 border border-white/5" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
