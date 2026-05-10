import type { Metadata } from "next";
import PortfolioPage from "@/components/sections/portfolio/PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse our cinematic edits, viral reels, brand transformations, and creative work across gaming, business, luxury, and personal brand niches.",
};

export default function Portfolio() {
  return <PortfolioPage />;
}
