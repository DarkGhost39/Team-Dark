import type { Metadata } from "next";
import { Syne, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TEAM DARK — Premium Social Media & Creative Agency",
    template: "%s | TEAM DARK",
  },
  description:
    "We don't manage pages. We build digital presence. Premium social media management, cinematic content creation, and brand domination.",
  keywords: [
    "social media agency",
    "content creation",
    "reel editing",
    "YouTube management",
    "Instagram management",
    "creative agency",
    "cinematic editing",
    "brand strategy",
    "Team Dark",
  ],
  authors: [{ name: "TEAM DARK" }],
  creator: "TEAM DARK",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://teamdark.agency",
    siteName: "TEAM DARK",
    title: "TEAM DARK — Premium Social Media & Creative Agency",
    description:
      "Silent professionals who dominate social media. Premium content creation, cinematic editing, and digital presence building.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TEAM DARK Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TEAM DARK — Premium Social Media & Creative Agency",
    description: "We don't manage pages. We build digital presence.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body>
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
