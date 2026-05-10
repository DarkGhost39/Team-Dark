import type { Metadata } from "next";
import PricingPage from "@/components/sections/pricing/PricingPage";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for premium social media management. Choose the plan that matches your ambitions.",
};

export default function Pricing() {
  return <PricingPage />;
}
