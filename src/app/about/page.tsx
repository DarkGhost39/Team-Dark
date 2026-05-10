import type { Metadata } from "next";
import AboutPage from "@/components/sections/about/AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind TEAM DARK — how a team of silent professionals became the most results-driven creative agency for modern creators.",
};

export default function About() {
  return <AboutPage />;
}
