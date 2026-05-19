"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BarChart3, TrendingUp, PieChart, Activity } from "lucide-react";

export default function MarketResearch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-[#0A0D1E]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Cinematic Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 mb-6">
            <BarChart3 className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Data-Driven Validation</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
            See the market <br />
            <span className="text-muted font-normal italic">before you build.</span>
          </h2>
          <p className="text-xl text-muted mb-8 text-balance">
            We don't build on hope. We analyze audience demand, niche trends, and market heatmaps to ensure your idea has a hungry audience waiting for it.
          </p>
          
          <div className="space-y-4">
            {[
              "Audience demand analysis & search volume",
              "Competitor positioning gaps",
              "Monetization potential & pricing strategies"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                </div>
                <span className="text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cinematic Visuals instead of boring dashboards */}
        <div className="relative h-[600px] w-full perspective-[1000px]">
          {/* Main Chart Card */}
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-10 right-10 w-[400px] h-[300px] rounded-2xl glass border border-white/10 p-6 flex flex-col z-20 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span className="font-medium">Demand Trajectory</span>
              </div>
              <span className="text-blue-400 text-sm font-bold">+124%</span>
            </div>
            
            <div className="flex-grow flex items-end gap-3 px-2">
              {[40, 25, 45, 60, 40, 80, 100].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="flex-1 bg-gradient-to-t from-blue-500/50 to-blue-400 rounded-t-sm"
                />
              ))}
            </div>
          </motion.div>

          {/* Floating Insight Card */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-20 left-0 w-[320px] rounded-2xl bg-[#1A1D2E] border border-blue-500/30 p-5 z-30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                <Activity className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-foreground leading-relaxed">
                  "This market shows increasing demand with extremely low positioning quality from current competitors."
                </p>
                <p className="text-xs text-blue-400 mt-2 font-medium">AI Market Analysis • Real-time</p>
              </div>
            </div>
          </motion.div>

          {/* Background Element */}
          <motion.div 
            style={{ y: y3 }}
            className="absolute top-40 left-10 w-[250px] h-[250px] rounded-full border border-white/5 flex items-center justify-center z-10"
          >
            <div className="w-[200px] h-[200px] rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-[150px] h-[150px] rounded-full border border-white/5 flex items-center justify-center">
                <PieChart className="w-8 h-8 text-white/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
