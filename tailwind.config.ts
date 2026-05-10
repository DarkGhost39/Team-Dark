import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        "dark-900": "#050505",
        "dark-800": "#0a0a0a",
        "dark-700": "#111111",
        "dark-600": "#1a1a1a",
        "dark-500": "#252525",
        "dark-400": "#333333",
        "gray-muted": "#888888",
        "gray-light": "#aaaaaa",
        gold: "#c9a84c",
        "gold-light": "#e4c87a",
        "blue-glow": "#3b82f6",
        "blue-dim": "#1d4ed8",
      },
      fontFamily: {
        display: ["var(--font-syne)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      backgroundImage: {
        "radial-dark":
          "radial-gradient(ellipse at center, #1a1a1a 0%, #000000 70%)",
        "gold-shimmer":
          "linear-gradient(135deg, #c9a84c 0%, #e4c87a 50%, #c9a84c 100%)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(201,168,76,0.12) 0%, transparent 60%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        float: "float 6s ease-in-out infinite",
        "grain-shift": "grain 8s steps(10) infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "30%": { transform: "translate(3%, -15%)" },
          "50%": { transform: "translate(12%, 9%)" },
          "70%": { transform: "translate(9%, 4%)" },
          "90%": { transform: "translate(-1%, 7%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201,168,76,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(201,168,76,0.5)" },
        },
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

export default config;
