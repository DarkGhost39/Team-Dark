"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-dark-800 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />

      {/* Background orbs */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gold/4 blur-[150px]" />
      </div>

      <div className="container-custom relative">
        <div ref={ref} className="text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-6"
          >
            The Next Step
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-800 text-5xl md:text-7xl text-white leading-[0.95] mb-8"
          >
            Your Brand{" "}
            <span className="text-gradient-gold">Deserves</span>{" "}
            to Dominate.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-body text-gray-muted text-lg mb-12 leading-relaxed"
          >
            Most creators leave millions on the table by not investing in elite content.
            One call with us will show you exactly what you're missing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gold hover:bg-gold-light text-black font-display font-700 px-10 py-4 rounded-sm tracking-wider transition-all duration-300 text-sm glow-gold w-full sm:w-auto justify-center"
            >
              Book a Free Call
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="https://wa.me/0000000000"
              className="group flex items-center gap-3 border border-white/15 hover:border-gold/40 text-white font-display font-600 px-8 py-4 rounded-sm tracking-wider transition-all duration-300 text-sm w-full sm:w-auto justify-center"
            >
              <MessageCircle size={16} className="text-gold" />
              WhatsApp Us
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="font-mono text-xs text-dark-400 tracking-widest mt-8 uppercase"
          >
            No commitment · Free strategy session · Results guaranteed
          </motion.p>
        </div>
      </div>
    </section>
  );
}
