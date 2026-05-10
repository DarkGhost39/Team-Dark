"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, X } from "lucide-react";

const reasons = [
  {
    title: "Cinematic Quality",
    desc: "Every frame we produce is crafted with the precision of a film studio. No shortcuts, no templates.",
  },
  {
    title: "Data-Driven Growth",
    desc: "We combine creative instinct with algorithmic intelligence to build sustainable audience growth.",
  },
  {
    title: "Full-Service Execution",
    desc: "Strategy, production, editing, posting — we handle everything so you can focus on what you do best.",
  },
  {
    title: "Elite Network",
    desc: "Access to top-tier photographers, videographers, and editors who have worked with global brands.",
  },
  {
    title: "Fast Turnaround",
    desc: "Speed without sacrifice. We deliver premium work on timelines that keep your content calendar full.",
  },
  {
    title: "Transparent Reporting",
    desc: "Monthly analytics reports with real insights — not vanity metrics, but growth that matters.",
  },
];

const others = [
  "Generic templates",
  "Slow turnarounds",
  "No clear strategy",
  "Poor communication",
  "Low-res content",
  "Cookie-cutter edits",
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-radial-dark opacity-50" />
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-gold/3 blur-[100px]" />

      <div className="container-custom relative">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4"
            >
              Why Team Dark
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-800 text-4xl md:text-5xl text-white leading-tight mb-8"
            >
              The Difference{" "}
              <br />
              <span className="text-gradient-gold">Is Everything.</span>
            </motion.h2>

            <div className="space-y-6">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.6 }}
                  className="flex gap-4 group"
                >
                  <CheckCircle2 size={18} className="text-gold mt-1 shrink-0" />
                  <div>
                    <h4 className="font-display font-600 text-white text-sm mb-1 group-hover:text-gold transition-colors">
                      {r.title}
                    </h4>
                    <p className="text-gray-muted text-sm leading-relaxed font-body">
                      {r.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — comparison */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="glass rounded-sm p-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center py-3 bg-gold/10 rounded-sm border border-gold/20">
                  <span className="font-display font-700 text-gold text-sm tracking-wider">TEAM DARK</span>
                </div>
                <div className="text-center py-3 bg-dark-600 rounded-sm border border-white/5">
                  <span className="font-display font-600 text-gray-muted text-sm tracking-wider">OTHERS</span>
                </div>
              </div>

              {reasons.map((r, i) => (
                <div key={r.title} className="grid grid-cols-2 gap-4 py-3 border-b border-white/5 last:border-0">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-gold shrink-0" />
                    <span className="text-white/80 text-xs font-body">{r.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <X size={13} className="text-red-500/60 shrink-0" />
                    <span className="text-gray-muted text-xs font-body line-through">{others[i]}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
