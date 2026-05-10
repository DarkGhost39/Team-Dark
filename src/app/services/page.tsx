import type { Metadata } from "next";
import ServicesPage from "@/components/sections/services/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From Instagram management to cinematic video production — every service you need to dominate social media.",
};

export default function Services() {
  return <ServicesPage />;
}
