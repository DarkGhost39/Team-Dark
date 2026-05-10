"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Team Dark didn't just grow our Instagram — they transformed our entire digital identity. In 6 months, we went from 12K to 890K followers with genuine engagement.",
    name: "Aryan Mehta",
    title: "Lifestyle Creator",
    followers: "890K+ followers",
    platform: "Instagram",
  },
  {
    quote:
      "The cinematic quality of their edits is unmatched. Our YouTube channel went from 0 to 1.2M subscribers in under a year. They understand the algorithm like nobody else.",
    name: "Zoya Kapoor",
    title: "Fitness Entrepreneur",
    followers: "1.2M subscribers",
    platform: "YouTube",
  },
  {
    quote:
      "Working with Team Dark was a turning point for our brand. Our reels consistently hit 5M+ views now. The ROI has been insane — our sales tripled in 4 months.",
    name: "Dev Studios",
    title: "E-commerce Brand",
    followers: "500K+ reach",
    platform: "Instagram Reels",
  },
  {
    quote:
      "I was skeptical of agencies until Team Dark. They actually care about results. My engagement rate jumped from 1.2% to 11.4%. These guys are the real deal.",
    name: "Priya Nair",
    title: "Travel Influencer",
    followers: "450K followers",
    platform: "Instagram",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const t = testimonials[active];

  return (
    <section className="section-padding bg-dark-900 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/3 blur-[120px]" />

      <div className="container-custom">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-800 text-4xl md:text-5xl text-white"
          >
            Results That{" "}
            <span className="text-gradient-gold">Speak.</span>
          </motion.h2>
        </div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-sm p-10 md:p-14 relative border border-white/5 hover:border-gold/10 transition-colors duration-500">
            {/* Quote mark */}
            <span className="absolute top-8 left-10 font-display text-8xl text-gold/10 leading-none select-none">
              "
            </span>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-gold fill-gold" />
              ))}
            </div>

            {/* Quote */}
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-body text-lg md:text-xl text-white/85 leading-relaxed mb-8 relative z-10"
            >
              "{t.quote}"
            </motion.p>

            {/* Author */}
            <motion.div
              key={`author-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-gold/20 border border-gold/30 flex items-center justify-center">
                  <span className="font-display font-800 text-gold text-lg">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <div className="font-display font-600 text-white text-sm">{t.name}</div>
                  <div className="font-body text-gray-muted text-xs">{t.title}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-display font-700 text-gold text-sm">{t.followers}</div>
                <div className="font-mono text-[10px] text-gray-muted tracking-widest uppercase">{t.platform}</div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/10 hover:border-gold/40 rounded-sm flex items-center justify-center text-gray-muted hover:text-gold transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-px transition-all duration-300 ${
                    i === active ? "w-8 bg-gold" : "w-4 bg-dark-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 border border-white/10 hover:border-gold/40 rounded-sm flex items-center justify-center text-gray-muted hover:text-gold transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
