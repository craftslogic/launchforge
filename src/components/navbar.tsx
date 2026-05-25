"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features" },
  { name: "Process", href: "/#process" },
  { name: "Launch System", href: "/#launch-system" },
  { name: "Pricing", href: "/#pricing" },
  { name: "About", href: "/about-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname !== "/") {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 flex justify-center",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div className={cn(
        "flex items-center justify-between w-full max-w-6xl rounded-full transition-all duration-500",
        scrolled 
          ? "bg-background/40 backdrop-blur-md border border-white/10 px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
          : "bg-transparent px-2 py-2"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="Buildoc"
            width={120}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")} className="hidden md:block text-sm font-medium text-muted hover:text-foreground transition-colors">
            Contact
          </Link>
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="relative overflow-hidden rounded-full bg-white/5 border border-white/10 px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,107,53,0.3)] group"
          >
            <span className="relative z-10">Launch My Idea</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
