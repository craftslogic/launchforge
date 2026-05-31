"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [focused, setFocused] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    idea: "",
    industry: "",
    challenge: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL!,
          from_name: formData.name,
          reply_to: formData.email,
          company: formData.industry,
          message: `Idea: ${formData.idea}\n\nChallenge: ${formData.challenge}`,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setFormData({ name: "", email: "", idea: "", industry: "", challenge: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = [
    { id: "name", label: "Your Name", type: "text" },
    { id: "email", label: "Email Address", type: "email" },
    { id: "idea", label: "Startup Idea (in 1 sentence)", type: "text" },
    { id: "industry", label: "Industry / Niche", type: "text" },
  ];

  return (
    <section id="contact" className="py-32 relative bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold mb-4">Let's build it.</h2>
          <p className="text-muted">Fill out the form below and we'll analyze your startup idea.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] p-8 md:p-12 border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-[2.5rem] pointer-events-none" />
          
          <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
            {fields.map((field) => (
              <div key={field.id} className={`relative ${field.id === 'idea' ? 'md:col-span-2' : ''}`}>
                <label 
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focused === field.id ? "-top-6 text-xs text-primary font-medium" : "top-4 text-sm text-muted"
                  }`}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.id}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  onFocus={() => setFocused(field.id)}
                  onBlur={(e) => {
                    if (!e.target.value) setFocused(null);
                  }}
                  className="w-full bg-black/20 border-b border-white/10 px-4 py-4 text-foreground focus:outline-none focus:border-primary transition-colors rounded-t-xl"
                  required
                />
              </div>
            ))}

            <div className="md:col-span-2 relative mt-4">
               <label 
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focused === 'challenge' ? "-top-6 text-xs text-primary font-medium" : "top-4 text-sm text-muted"
                  }`}
                >
                  Biggest Challenge Right Now
                </label>
              <textarea
                name="challenge"
                value={formData.challenge}
                onChange={handleChange}
                onFocus={() => setFocused('challenge')}
                onBlur={(e) => {
                  if (!e.target.value) setFocused(null);
                }}
                className="w-full bg-black/20 border-b border-white/10 px-4 py-4 text-foreground focus:outline-none focus:border-primary transition-colors rounded-t-xl h-32 resize-none"
                required
              ></textarea>
            </div>

            <div className="md:col-span-2 mt-8">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full flex items-center justify-center gap-2 rounded-xl bg-foreground px-8 py-5 text-background font-semibold transition-all hover:bg-white hover:scale-[1.01] disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    Processing...
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : status === "success" ? (
                  <>
                    Message Sent Successfully
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </>
                ) : status === "error" ? (
                  <>
                    Failed to Send (Try Again)
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  </>
                ) : (
                  <>
                    Analyze My Startup Idea
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
                <div className="absolute inset-0 rounded-xl ring-2 ring-foreground/20 ring-offset-2 ring-offset-background opacity-0 group-hover:opacity-100 transition-opacity disabled:hidden" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
