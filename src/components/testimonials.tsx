"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Buildoc didn't just build our app, they architected a brand that made investors take us seriously from day one. We raised $2M within a month of launch.",
    author: "Sarah Jenkins",
    role: "Founder, Nova AI",
    avatar: "S"
  },
  {
    quote: "The strategic positioning they provided was a game-changer. We were struggling to differentiate, and they gave us an identity that completely stood out.",
    author: "David Chen",
    role: "CEO, NexaBlock",
    avatar: "D"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
           <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Founders Who <span className="text-gradient">Launched</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-8 right-8" />
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 relative z-10">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-heading font-bold text-lg text-white">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">{t.author}</h4>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
