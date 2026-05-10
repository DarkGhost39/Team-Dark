"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Instagram,
  Youtube,
  Film,
  Camera,
  Palette,
  TrendingUp,
  Zap,
  Star,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Instagram,
    title: "Instagram Management",
    desc: "Full-spectrum Instagram strategy — from content planning to community growth and analytics.",
    tag: "Social",
  },
  {
    icon: Youtube,
    title: "YouTube Management",
    desc: "Channel optimization, content strategy, thumbnails, and long-form video production.",
    tag: "Video",
  },
  {
    icon: Film,
    title: "Reel & Short Editing",
    desc: "Viral-first short-form content engineered for maximum reach and engagement.",
    tag: "Editing",
  },
  {
    icon: Camera,
    title: "Photo & Video Shoots",
    desc: "Professional cinematic shoots with elite-level direction, lighting, and post-production.",
    tag: "Production",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    desc: "Visual identity systems, thumbnails, and brand language that commands attention.",
    tag: "Brand",
  },
  {
    icon: TrendingUp,
    title: "Content Strategy",
    desc: "Data-driven content frameworks that build authority and accelerate algorithmic growth.",
    tag: "Strategy",
  },
  {
    icon: Zap,
    title: "Creator Management",
    desc: "End-to-end creator representation — deals, content, growth, and monetization.",
    tag: "Management",
  },
  {
    icon: Star,
    title: "Cinematic Editing",
    desc: "High-end video production that elevates your brand to premium tier visual storytelling.",
    tag: "Premium",
  },
];

export default function ServicesOverview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-dark-800 relative overflow-hidden">
      {/* Subtle top fade */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />

      <div className="container-custom">
        {/* Header */}
        <div ref={ref} className="max-w-xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-800 text-4xl md:text-5xl text-white leading-tight"
          >
            Every Service,{" "}
            <span className="text-gradient-gold">Executed</span> to Perfection.
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 * i + 0.2, duration: 0.6 }}
              className="group bg-dark-800 hover:bg-dark-700 p-8 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Gold hover line */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-500" />

              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 rounded-sm border border-white/10 group-hover:border-gold/40 flex items-center justify-center transition-colors">
                  <s.icon size={18} className="text-gold" />
                </div>
                <span className="font-mono text-[9px] tracking-widest text-dark-400 uppercase border border-dark-400/40 px-2 py-1 rounded-full">
                  {s.tag}
                </span>
              </div>

              <h3 className="font-display font-600 text-white text-base mb-3 group-hover:text-gold transition-colors">
                {s.title}
              </h3>
              <p className="font-body text-gray-muted text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-display font-600 text-sm tracking-wider transition-colors group"
          >
            Explore All Services
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
