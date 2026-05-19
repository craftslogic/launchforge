"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Search, Crosshair, PenTool, Globe, Rocket, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
  { id: "IDEA", icon: Lightbulb, title: "The Idea", desc: "Raw concept generation and initial brainstorming phase.", color: "from-yellow-500/20 to-transparent", borderColor: "group-hover:border-yellow-500/50" },
  { id: "RESEARCH", icon: Search, title: "Market Research", desc: "Deep dive into competitors, audience needs, and validation.", color: "from-blue-500/20 to-transparent", borderColor: "group-hover:border-blue-500/50" },
  { id: "POSITIONING", icon: Crosshair, title: "Strategic Positioning", desc: "Finding your unique angle in a crowded market.", color: "from-purple-500/20 to-transparent", borderColor: "group-hover:border-purple-500/50" },
  { id: "BRANDING", icon: PenTool, title: "Brand Creation", desc: "Designing visual identity, voice, and narrative.", color: "from-pink-500/20 to-transparent", borderColor: "group-hover:border-pink-500/50" },
  { id: "WEBSITE", icon: Globe, title: "Digital Presence", desc: "Building a high-converting, cinematic platform.", color: "from-cyan-500/20 to-transparent", borderColor: "group-hover:border-cyan-500/50" },
  { id: "LAUNCH", icon: Rocket, title: "The Launch", desc: "Strategic go-to-market execution and user acquisition.", color: "from-primary/20 to-transparent", borderColor: "group-hover:border-primary/50" },
  { id: "GROWTH", icon: TrendingUp, title: "Scale & Growth", desc: "Iterative improvements and scaling the user base.", color: "from-green-500/20 to-transparent", borderColor: "group-hover:border-green-500/50" },
];

export default function TransformationTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="process" className="py-32 relative bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            The <span className="text-gradient">Evolution</span> Process
          </h2>
          <p className="text-muted text-xl max-w-2xl mx-auto">
            Watch how a raw idea transforms into a launch-ready business through our systematic approach.
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-12 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-12 md:left-1/2 top-0 w-1 bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(255,107,53,0.5)] z-10" 
          />

          <div className="space-y-24">
            {stages.map((stage, index) => {
              const isEven = index % 2 === 0;
              return (
                <TimelineItem 
                  key={stage.id} 
                  stage={stage} 
                  isEven={isEven} 
                  index={index} 
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ stage, isEven, index }: { stage: any, isEven: boolean, index: number }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 80%", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [isEven ? 50 : -50, 0]);

  return (
    <motion.div 
      ref={itemRef}
      style={{ opacity }}
      className={cn(
        "relative flex flex-col md:flex-row items-center gap-8 md:gap-0 group",
        isEven ? "md:flex-row-reverse" : ""
      )}
    >
      {/* Connector Node */}
      <motion.div 
        style={{ scale }}
        className="absolute left-12 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-2 border-white/20 z-20 flex items-center justify-center transition-colors duration-500 group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-[0_0_30px_rgba(255,107,53,0.3)]"
      >
        <stage.icon className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
      </motion.div>

      {/* Content Card */}
      <motion.div 
        style={{ x: window.innerWidth > 768 ? x : 0 }}
        className={cn(
          "w-full md:w-1/2 pl-28 md:pl-0",
          isEven ? "md:pr-20 text-left md:text-right" : "md:pl-20 text-left"
        )}
      >
        <div className={cn(
          "p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500",
          stage.borderColor,
          "hover:bg-white/[0.04] hover:-translate-y-2 relative overflow-hidden"
        )}>
          <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700", stage.color)} />
          <div className="relative z-10">
            <span className="text-xs font-bold tracking-widest text-muted uppercase mb-2 block group-hover:text-primary transition-colors">
              Phase 0{index + 1}
            </span>
            <h3 className="font-heading text-2xl font-semibold mb-3 text-foreground">{stage.title}</h3>
            <p className="text-muted leading-relaxed group-hover:text-foreground/80 transition-colors">
              {stage.desc}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
