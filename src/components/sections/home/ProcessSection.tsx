"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    desc: "We deep-dive into your brand, goals, audience, and competitors. No assumptions — only real intelligence.",
    duration: "Day 1",
  },
  {
    number: "02",
    title: "Strategy Build",
    desc: "Custom content strategy, platform roadmap, and creative direction tailored for your specific niche.",
    duration: "Day 2–3",
  },
  {
    number: "03",
    title: "Production",
    desc: "Script, shoot, edit, and finalize — every asset created with premium quality and cinematic precision.",
    duration: "Week 1–2",
  },
  {
    number: "04",
    title: "Launch & Monitor",
    desc: "Strategic publishing, hashtag research, community engagement, and real-time performance tracking.",
    duration: "Ongoing",
  },
  {
    number: "05",
    title: "Optimize & Scale",
    desc: "Monthly performance reviews, A/B testing, and content pivots to maximize growth velocity.",
    duration: "Monthly",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-dark-800 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/5" />

      <div className="container-custom">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4"
          >
            Our Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-800 text-4xl md:text-5xl text-white"
          >
            How We{" "}
            <span className="text-gradient-gold">Execute.</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-white/5" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i + 0.2, duration: 0.7 }}
                className="group relative"
              >
                {/* Number node */}
                <div className="w-20 h-20 mx-auto lg:mx-0 rounded-sm border border-white/10 group-hover:border-gold/40 bg-dark-900 flex items-center justify-center mb-6 transition-all duration-300 group-hover:glow-gold relative z-10">
                  <span className="font-display font-800 text-2xl text-gradient-gold">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="text-center lg:text-left">
                  <div className="font-mono text-[10px] text-gold/70 tracking-widest uppercase mb-2">
                    {step.duration}
                  </div>
                  <h3 className="font-display font-700 text-white text-base mb-3 group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-muted text-sm leading-relaxed font-body">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
