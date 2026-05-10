"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  },
  item: {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-dark-900">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Grid lines decoration */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gold orb top right */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      {/* Blue orb bottom left */}
      <div className="absolute bottom-1/3 left-1/6 w-80 h-80 rounded-full bg-blue-glow/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative pt-32 pb-20">
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={stagger.item} className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-12 bg-gold/60" />
            <span className="font-mono text-xs tracking-[0.4em] text-gold uppercase">
              Premium Creative Agency
            </span>
            <span className="h-px w-12 bg-gold/60" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={stagger.item}
            className="font-display font-800 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-6"
          >
            We Don't{" "}
            <span className="relative inline-block">
              <span className="text-gradient-gold">Manage</span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-gold to-gold-light"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>{" "}
            Pages.
            <br />
            We Build{" "}
            <span className="text-gradient-white">Digital</span>
            <br />
            <span className="italic font-500 text-gray-muted">Presence.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={stagger.item}
            className="font-body text-lg md:text-xl text-gray-muted max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Silent professionals who transform brands into dominating digital forces.
            Cinematic content. Strategic growth. Relentless execution.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={stagger.item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gold hover:bg-gold-light text-black font-display font-700 px-8 py-4 rounded-sm tracking-wider transition-all duration-300 text-sm glow-gold w-full sm:w-auto justify-center"
            >
              Start Your Project
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group flex items-center gap-3 border border-white/15 hover:border-gold/40 text-white font-display font-600 px-8 py-4 rounded-sm tracking-wider transition-all duration-300 text-sm w-full sm:w-auto justify-center"
            >
              <span className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center group-hover:border-gold transition-colors">
                <Play size={10} className="ml-0.5 text-gold" fill="currentColor" />
              </span>
              View Our Work
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-sm overflow-hidden max-w-3xl mx-auto"
        >
          {[
            { number: "120+", label: "Projects Done" },
            { number: "50+", label: "Active Clients" },
            { number: "3B+", label: "Views Generated" },
            { number: "98%", label: "Client Retention" },
          ].map(({ number, label }) => (
            <div key={label} className="bg-dark-900 px-6 py-6 text-center group hover:bg-dark-700 transition-colors duration-300">
              <div className="font-display font-800 text-2xl md:text-3xl text-gradient-gold mb-1">
                {number}
              </div>
              <div className="font-mono text-[10px] text-gray-muted tracking-widest uppercase">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-dark-400 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
