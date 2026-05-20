import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Buildoc | Idea-to-Business Launch Operating System",
  description: "Turn Your Startup Idea Into a Real Business. Buildoc transforms raw business ideas into launch-ready brands through research, branding, strategy, and execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased selection:bg-primary/30 selection:text-primary">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=general-sans@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --font-heading: 'Clash Display', sans-serif;
            --font-sans: 'General Sans', sans-serif;
          }
        `}</style>
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <LenisProvider>
          <Navbar />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
