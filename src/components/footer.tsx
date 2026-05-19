import Link from "next/link";
import { Sparkles, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-background overflow-hidden pt-24 pb-12">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center relative overflow-hidden">
                <Sparkles className="w-4 h-4 text-white z-10" />
              </div>
              <span className="font-heading font-semibold text-xl tracking-wide text-foreground">
                LaunchForge
              </span>
            </Link>
            <p className="text-muted max-w-sm text-balance">
              Transforming raw business ideas into launch-ready brands through research, strategy, and cinematic execution.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-medium text-foreground mb-6">Platform</h4>
            <ul className="space-y-4">
              {["Features", "Process", "Launch System", "Pricing"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-muted hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-medium text-foreground mb-6">Connect</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} LaunchForge. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-muted hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
