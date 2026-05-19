"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Monitor, Smartphone, LayoutTemplate } from "lucide-react";

export default function WebsiteCreation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yCenter = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yLeft = useTransform(scrollYProgress, [0, 1], [200, -50]);
  const yRight = useTransform(scrollYProgress, [0, 1], [250, -20]);

  return (
    <section ref={containerRef} className="py-32 relative bg-[#0A0D1E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center relative z-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
          <LayoutTemplate className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground/80">Cinematic Web Experiences</span>
        </div>
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
          Websites That Sell <br className="hidden md:block" />
          <span className="text-muted">The Vision.</span>
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          We engineer high-performance, immersive landing pages that capture attention and convert visitors into early adopters.
        </p>
      </div>

      <div className="relative h-[60vh] md:h-[80vh] w-full max-w-[1400px] mx-auto perspective-[2000px] flex justify-center items-center">
        
        {/* Left Mobile Device */}
        <motion.div 
          style={{ y: yLeft }}
          className="absolute left-[5%] md:left-[15%] z-10 w-[200px] md:w-[280px] h-[400px] md:h-[580px] rounded-[2rem] md:rounded-[3rem] border-[8px] border-[#1a1a1a] bg-background shadow-2xl overflow-hidden rotate-[-10deg] md:rotate-[-15deg] translate-y-20"
        >
          <div className="absolute top-0 inset-x-0 h-6 bg-[#1a1a1a] rounded-b-xl w-1/2 mx-auto z-20" /> {/* Notch */}
          <div className="w-full h-full bg-gradient-to-b from-background to-[#111] p-4 flex flex-col">
            <div className="flex justify-between items-center mb-6 pt-6">
              <div className="w-6 h-6 rounded-full bg-primary/20" />
              <div className="w-8 h-2 rounded-full bg-white/10" />
            </div>
            <div className="w-3/4 h-12 rounded-lg bg-white/5 mb-4" />
            <div className="w-full h-32 rounded-xl bg-gradient-to-br from-accent/20 to-transparent border border-white/5 mb-4" />
            <div className="w-full flex-grow rounded-xl bg-white/5" />
          </div>
        </motion.div>

        {/* Center Desktop Device */}
        <motion.div 
          style={{ y: yCenter }}
          className="absolute z-20 w-[90%] md:w-[800px] aspect-[16/10] rounded-xl border-[4px] md:border-[12px] border-[#1a1a1a] bg-[#0A0D1E] shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Top Bar */}
          <div className="h-4 md:h-8 bg-[#1a1a1a] w-full flex items-center px-2 gap-1.5 border-b border-white/5">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/80" />
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/80" />
          </div>
          {/* Screen Content */}
          <div className="relative w-full h-full bg-background p-4 md:p-12 overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-primary/20 blur-[80px] rounded-full" />
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10">
               <Monitor className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <div className="w-3/4 h-8 md:h-12 bg-white/10 rounded-full mb-4 relative z-10" />
            <div className="w-1/2 h-4 md:h-6 bg-white/5 rounded-full mb-10 relative z-10" />
            <div className="flex gap-4 relative z-10">
              <div className="w-24 md:w-32 h-10 md:h-12 bg-primary rounded-full" />
              <div className="w-24 md:w-32 h-10 md:h-12 bg-white/10 rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* Right Mobile Device */}
        <motion.div 
          style={{ y: yRight }}
          className="hidden md:block absolute right-[15%] z-30 w-[280px] h-[580px] rounded-[3rem] border-[8px] border-[#1a1a1a] bg-background shadow-2xl overflow-hidden rotate-[12deg] translate-y-32"
        >
          <div className="absolute top-0 inset-x-0 h-6 bg-[#1a1a1a] rounded-b-xl w-1/2 mx-auto z-20" />
          <div className="w-full h-full bg-gradient-to-t from-[#0A0D1E] to-background p-4 flex flex-col justify-end pb-12">
            <div className="w-full h-48 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent border border-white/5 mb-6" />
            <div className="w-full h-16 rounded-xl bg-white/5 mb-4" />
            <div className="flex gap-2 mb-4">
              <div className="w-1/2 h-20 rounded-xl bg-white/5" />
              <div className="w-1/2 h-20 rounded-xl bg-white/5" />
            </div>
            <div className="w-full h-12 rounded-full bg-primary flex items-center justify-center">
              <div className="w-1/3 h-1.5 bg-white/30 rounded-full" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
