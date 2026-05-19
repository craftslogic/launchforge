import HeroSection from "@/components/hero-section";
import FounderProblem from "@/components/founder-problem";
import TransformationTimeline from "@/components/transformation-timeline";
import MarketResearch from "@/components/market-research";
import CompetitorIntelligence from "@/components/competitor-intelligence";
import BrandCreation from "@/components/brand-creation";
import WebsiteCreation from "@/components/website-creation";
import AiInsights from "@/components/ai-insights";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import FinalCta from "@/components/final-cta";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FounderProblem />
      <TransformationTimeline />
      <MarketResearch />
      <CompetitorIntelligence />
      <BrandCreation />
      <WebsiteCreation />
      <AiInsights />
      <Testimonials />
      <Pricing />
      <FinalCta />
      <ContactForm />
    </>
  );
}
