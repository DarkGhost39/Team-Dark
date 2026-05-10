"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Instagram, Youtube, Film, Camera, Palette, TrendingUp,
  Zap, Video, ArrowUpRight, CheckCircle2,
} from "lucide-react";

interface ServiceDef {
  icon: React.ElementType;
  title: string;
  desc: string;
  benefits: string[];
  color: string;
  tag: string;
  index: number;
}

function ServiceCard({ service }: { service: ServiceDef }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (service.index % 2) * 0.1 + 0.1, duration: 0.7 }}
      className={`group relative p-8 rounded-sm border border-white/5 hover:border-gold/20 transition-all duration-500 bg-gradient-to-br ${service.color} bg-dark-800 overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gold/2" />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-sm border border-white/10 group-hover:border-gold/40 flex items-center justify-center transition-colors bg-dark-900">
            <service.icon size={20} className="text-gold" />
          </div>
          <span className="font-mono text-[9px] tracking-widest text-gold/70 uppercase border border-gold/20 px-2 py-1 rounded-full">
            {service.tag}
          </span>
        </div>
        <h3 className="font-display font-700 text-white text-xl mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
        <p className="font-body text-gray-muted text-sm leading-relaxed mb-6">{service.desc}</p>
        <ul className="space-y-2 mb-6">
          {service.benefits.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm text-white/60">
              <CheckCircle2 size={12} className="text-gold shrink-0" />{b}
            </li>
          ))}
        </ul>
        <Link href="/contact" className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-display font-600 text-xs tracking-wider transition-colors group/btn">
          Get Started
          <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

const servicesData = [
  { icon: Instagram, title: "Instagram Management", desc: "Complete Instagram presence management from content creation to community growth. Strategy, posting, hashtag research, stories, and engagement to build a loyal audience.", benefits: ["Content calendar", "Story & Reel creation", "Community management", "Monthly analytics", "Hashtag strategy"], color: "from-pink-500/10 to-purple-600/10", tag: "Social Media" },
  { icon: Youtube, title: "YouTube Management", desc: "Full YouTube channel management including content strategy, video production, SEO optimisation, and thumbnail design to grow your channel sustainably.", benefits: ["Channel audit & strategy", "SEO optimisation", "Thumbnail design", "End card & descriptions", "Analytics review"], color: "from-red-600/10 to-red-900/10", tag: "Video Platform" },
  { icon: Film, title: "Reel & Short Editing", desc: "Viral-engineered short-form content built for maximum reach. Reels, YouTube Shorts, and TikToks that stop the scroll and drive real engagement.", benefits: ["Hook engineering", "Dynamic cuts & transitions", "Sound design", "Text overlays & captions", "Trend adaptation"], color: "from-blue-500/10 to-indigo-600/10", tag: "Editing" },
  { icon: Video, title: "Cinematic Video Editing", desc: "High-end long-form video editing that elevates your brand storytelling with colour grading, motion graphics, and cinematic techniques.", benefits: ["Professional colour grade", "Motion graphics", "Sound design", "Multi-camera editing", "Export in all formats"], color: "from-amber-600/10 to-orange-700/10", tag: "Production" },
  { icon: Camera, title: "Photo & Video Shoots", desc: "Fully directed shoots with professional equipment. From concept to final delivery, we produce premium visual content that defines your brand.", benefits: ["Creative direction", "Professional lighting", "Location scouting", "Wardrobe consultation", "Same-day highlights"], color: "from-emerald-600/10 to-teal-700/10", tag: "Production" },
  { icon: Palette, title: "Branding & Thumbnail Design", desc: "Visually cohesive brand identity for digital platforms — custom thumbnails, banners, highlight covers, and visual systems for instant recognition.", benefits: ["Thumbnail A/B testing", "Channel art", "Profile optimisation", "Brand kit", "Template systems"], color: "from-violet-600/10 to-purple-800/10", tag: "Design" },
  { icon: TrendingUp, title: "Content Strategy", desc: "Data-driven content frameworks built for algorithmic growth. We analyse your niche, competition, and audience to build a strategy that compounds.", benefits: ["Competitor analysis", "Content pillars", "Posting schedules", "Platform roadmap", "Growth tracking"], color: "from-green-600/10 to-emerald-800/10", tag: "Strategy" },
  { icon: Zap, title: "Creator Management", desc: "End-to-end representation for creators — brand deals, content oversight, growth strategy, monetisation, and personal brand development.", benefits: ["Brand partnership deals", "Content oversight", "Revenue optimisation", "Personal PR", "Growth consulting"], color: "from-yellow-600/10 to-amber-800/10", tag: "Management" },
];

const workflow = [
  { step: "01", title: "Audit", desc: "We analyse your current presence, competitors, and opportunities." },
  { step: "02", title: "Strategy", desc: "Custom content framework built around your goals and audience." },
  { step: "03", title: "Create", desc: "Shoots, editing, design — executed with premium quality." },
  { step: "04", title: "Publish", desc: "Optimised posting times, captions, and engagement-driven rollout." },
  { step: "05", title: "Analyse", desc: "Weekly and monthly reporting with actionable insights." },
  { step: "06", title: "Scale", desc: "Proven content gets amplified. We double down on what works." },
];

export default function ServicesPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const servicesWithIndex = servicesData.map((s, i) => ({ ...s, index: i }));

  return (
    <div className="bg-dark-900 min-h-screen">
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="container-custom relative text-center" ref={heroRef}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4">What We Offer</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} className="font-display font-800 text-5xl md:text-7xl text-white mb-6 leading-tight">Services Built to <span className="text-gradient-gold">Dominate.</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.25 }} className="font-body text-gray-muted text-lg max-w-2xl mx-auto">Every service engineered with one goal — make your brand the most powerful presence in your space.</motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesWithIndex.map((s) => <ServiceCard key={s.title} service={s} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-800 border-t border-b border-white/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4">Execution Pipeline</p>
            <h2 className="font-display font-800 text-4xl md:text-5xl text-white">How Every Service <span className="text-gradient-gold">Gets Done.</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {workflow.map((w, i) => (
              <motion.div key={w.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }} className="text-center group p-6 glass rounded-sm hover:border-gold/20 transition-all duration-300">
                <div className="font-display font-800 text-2xl text-gradient-gold mb-3">{w.step}</div>
                <h4 className="font-display font-600 text-white text-sm mb-2 group-hover:text-gold transition-colors">{w.title}</h4>
                <p className="font-body text-gray-muted text-xs leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="font-display font-800 text-4xl md:text-5xl text-white mb-6">Ready to Get <span className="text-gradient-gold">Started?</span></h2>
          <p className="font-body text-gray-muted mb-10 max-w-xl mx-auto">Book a free strategy call and let's map out exactly which services will accelerate your growth the most.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-black font-display font-700 px-10 py-4 rounded-sm tracking-wider transition-all duration-300 text-sm glow-gold">
            Book Free Strategy Call <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
