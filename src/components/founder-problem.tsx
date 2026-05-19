"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AlertCircle, Brain, Target, Compass, Code, LayoutDashboard } from "lucide-react";

const problems = [
  {
    icon: Target,
    title: "No Market Validation",
    description: "Building products nobody wants because of assumptions instead of data.",
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary/10 to-transparent",
  },
  {
    icon: LayoutDashboard,
    title: "Weak Branding",
    description: "Blending in with a sea of competitors without a unique identity.",
    className: "md:col-span-1 md:row-span-1 bg-white/[0.02]",
  },
  {
    icon: Compass,
    title: "No Launch Strategy",
    description: "Launching to crickets because there was no build-up or audience.",
    className: "md:col-span-1 md:row-span-2 bg-gradient-to-tr from-accent/10 to-transparent",
  },
  {
    icon: Brain,
    title: "Overwhelm & Confusion",
    description: "Stuck in analysis paralysis trying to figure out the next step.",
    className: "md:col-span-1 md:row-span-1 bg-white/[0.02]",
  },
  {
    icon: Code,
    title: "Technical Barriers",
    description: "Great ideas dying because the founder doesn't code.",
    className: "md:col-span-2 md:row-span-1 bg-gradient-to-l from-white/[0.05] to-transparent",
  },
];

export default function FounderProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 px-6 relative overflow-hidden bg-background">
      {/* Background blur */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div style={{ opacity }} className="text-left mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10 mb-6">
            <AlertCircle className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-red-500">The Harsh Reality</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Most Startup Ideas <br className="hidden md:block" />
            <span className="text-muted">Never Become Real Businesses.</span>
          </h2>
          <p className="text-xl text-muted">
            The journey from idea to business is filled with friction. Brilliant founders fail not because their idea is bad, but because execution is hard.
          </p>
        </motion.div>

        <motion.div 
          style={{ y }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]"
        >
          {problems.map((problem, idx) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 0.98 }}
              className={`group relative rounded-3xl border border-white/5 p-8 flex flex-col justify-between overflow-hidden transition-colors hover:border-white/20 ${problem.className}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-auto group-hover:scale-110 transition-transform duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-primary">
                  <problem.icon className="w-6 h-6 text-muted group-hover:text-primary transition-colors" />
                </div>
                
                <div className="mt-8">
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">{problem.title}</h3>
                  <p className="text-muted text-sm md:text-base leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
