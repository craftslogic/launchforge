"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Palette, Type, Layout } from "lucide-react";

export default function BrandCreation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section ref={containerRef} className="py-40 relative bg-background overflow-hidden">
      {/* Morphing Gradients Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-[600px] h-[600px] bg-secondary rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-heading text-5xl md:text-7xl font-bold mb-6">
            Identities That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-text">Command Attention</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            We don't do templates. We craft bespoke, premium visual systems that make your startup look like a billion-dollar company from day one.
          </p>
        </div>

        <motion.div 
          style={{ scale, rotate }}
          className="relative w-full aspect-auto md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden shadow-2xl flex items-center justify-center p-6 sm:p-8 md:p-16"
        >
          {/* Internal composition representing Brand Identity */}
          <div className="w-full h-full relative flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-8">
            {/* Logo area */}
            <div className="w-full md:col-span-1 md:row-span-2 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group min-h-[250px] md:min-h-0">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Palette className="w-8 h-8 text-muted mb-4 group-hover:text-primary transition-colors" />
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/20 flex items-center justify-center mb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-tr from-primary to-accent rounded-full" />
              </div>
              <span className="text-sm font-medium tracking-widest uppercase text-muted">Primary Mark</span>
            </div>

            {/* Typography */}
            <div className="w-full md:col-span-2 md:row-span-1 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8 relative overflow-hidden group min-h-[200px] md:min-h-0">
               <div className="absolute top-0 right-0 p-4 md:p-6">
                  <Type className="w-5 h-5 md:w-6 md:h-6 text-white/20 group-hover:text-accent transition-colors" />
               </div>
               <div className="h-full flex flex-col justify-end mt-8 md:mt-0">
                  <h1 className="font-heading text-4xl md:text-6xl font-bold mb-2">Clash Display</h1>
                  <p className="text-muted font-sans text-lg md:text-xl">General Sans / Inter</p>
               </div>
            </div>

            {/* Color Palette */}
            <div className="w-full md:col-span-1 md:row-span-1 rounded-2xl md:rounded-3xl flex gap-2 md:gap-4 min-h-[120px] md:min-h-0">
              <div className="flex-1 rounded-2xl bg-[#050816] border border-white/10" />
              <div className="flex-1 rounded-2xl bg-primary shadow-[0_0_30px_rgba(255,107,53,0.3)]" />
              <div className="flex-1 rounded-2xl bg-accent shadow-[0_0_30px_rgba(168,85,247,0.3)]" />
            </div>

            {/* UI Elements */}
            <div className="w-full md:col-span-1 md:row-span-1 rounded-2xl md:rounded-3xl bg-gradient-to-tl from-white/5 to-transparent border border-white/10 p-6 flex flex-col justify-between group min-h-[160px] md:min-h-0">
              <Layout className="w-5 h-5 md:w-6 md:h-6 text-white/20 group-hover:text-primary transition-colors mb-6 md:mb-4" />
              <div className="space-y-3">
                <div className="h-6 md:h-8 w-full rounded-lg bg-white/10" />
                <div className="h-6 md:h-8 w-2/3 rounded-lg bg-primary/80" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
