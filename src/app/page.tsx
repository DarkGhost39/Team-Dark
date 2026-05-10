import type { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import ServicesOverview from "@/components/sections/home/ServicesOverview";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import ProcessSection from "@/components/sections/home/ProcessSection";
import Testimonials from "@/components/sections/home/Testimonials";
import FinalCTA from "@/components/sections/home/FinalCTA";

export const metadata: Metadata = {
  title: "TEAM DARK — Premium Social Media & Creative Agency",
  description:
    "We don't manage pages. We build digital presence. Premium social media management, cinematic content creation, and brand domination for creators and brands.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
