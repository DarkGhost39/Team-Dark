"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { Play, ArrowUpRight, Eye, Heart } from "lucide-react";

const categories = ["All", "Gaming", "Cinematic", "Business", "Luxury", "Personal Brand", "Reels", "YouTube"];

const projects = [
  { id: 1, title: "Dark Horizon", client: "FPS Gaming Creator", category: "Gaming", views: "12M", likes: "890K", size: "large", type: "Reel" },
  { id: 2, title: "Brand Identity Film", client: "Luxury Watch Brand", category: "Luxury", views: "4.2M", likes: "320K", size: "small", type: "Cinematic" },
  { id: 3, title: "Creator Rebrand", client: "Tech Influencer", category: "Personal Brand", views: "8.7M", likes: "640K", size: "small", type: "Reels" },
  { id: 4, title: "Corporate Vision", client: "SaaS Startup", category: "Business", views: "2.1M", likes: "180K", size: "medium", type: "Cinematic" },
  { id: 5, title: "Esports Highlights", client: "Pro Gaming Team", category: "Gaming", views: "25M", likes: "2.1M", size: "medium", type: "YouTube" },
  { id: 6, title: "Cinematic Travel Vlog", client: "Lifestyle Brand", category: "Cinematic", views: "6.8M", likes: "510K", size: "large", type: "YouTube" },
  { id: 7, title: "Product Launch Film", client: "Fashion Label", category: "Luxury", views: "3.4M", likes: "290K", size: "small", type: "Cinematic" },
  { id: 8, title: "Growth Story", client: "Personal Finance Creator", category: "Personal Brand", views: "9.2M", likes: "740K", size: "small", type: "Reels" },
  { id: 9, title: "Event Coverage", client: "Music Festival Brand", category: "Business", views: "5.5M", likes: "430K", size: "medium", type: "Cinematic" },
  { id: 10, title: "Viral Shorts Series", client: "Comedy Creator", category: "Reels", views: "45M", likes: "4.2M", size: "large", type: "Reels" },
  { id: 11, title: "Brand Documentary", client: "Luxury Car Brand", category: "Luxury", views: "7.1M", likes: "560K", size: "medium", type: "Cinematic" },
  { id: 12, title: "Tutorial Series", client: "EdTech Platform", category: "YouTube", views: "3.9M", likes: "310K", size: "small", type: "YouTube" },
];

// Visual gradients for cards (simulating thumbnails)
const gradients = [
  "from-slate-900 to-blue-950",
  "from-zinc-900 to-amber-950",
  "from-stone-900 to-red-950",
  "from-gray-900 to-emerald-950",
  "from-neutral-900 to-purple-950",
  "from-slate-900 to-teal-950",
  "from-zinc-900 to-pink-950",
  "from-stone-900 to-indigo-950",
  "from-gray-900 to-orange-950",
  "from-neutral-900 to-cyan-950",
  "from-slate-900 to-violet-950",
  "from-zinc-900 to-lime-950",
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container-custom relative text-center" ref={heroRef}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4"
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-800 text-5xl md:text-7xl text-white mb-6 leading-tight"
          >
            Work That{" "}
            <span className="text-gradient-gold">Moves People.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-body text-gray-muted text-lg max-w-2xl mx-auto"
          >
            Over 120 projects across creators, brands, and studios. Every frame
            crafted with intent. Every edit engineered for impact.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 mt-12"
          >
            {[
              { v: "3B+", l: "Total Views" },
              { v: "120+", l: "Projects" },
              { v: "50+", l: "Clients" },
              { v: "98%", l: "Satisfaction" },
            ].map(({ v, l }) => (
              <div key={l} className="text-center">
                <div className="font-display font-800 text-2xl text-gradient-gold">{v}</div>
                <div className="font-mono text-[10px] text-gray-muted tracking-widest uppercase">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 border-y border-white/5 bg-dark-800 sticky top-[57px] z-40 backdrop-blur-xl bg-dark-800/80">
        <div className="container-custom">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none fade-edges">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 font-mono text-xs tracking-wider px-4 py-2 rounded-sm transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gold text-black"
                    : "border border-white/10 text-gray-muted hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.5 }}
                  className={`group relative rounded-sm overflow-hidden cursor-pointer ${
                    project.size === "large" ? "col-span-2 row-span-2" :
                    project.size === "medium" ? "col-span-1 row-span-2" :
                    "col-span-1 row-span-1"
                  }`}
                >
                  {/* Background gradient (simulates thumbnail) */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[project.id - 1]}`} />

                  {/* Grid pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                      backgroundSize: "30px 30px",
                    }}
                  />

                  {/* Play circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                      <Play size={16} className="text-white ml-1" fill="white" />
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Info */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-between translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {/* Top */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] tracking-widest text-white/40 group-hover:text-gold uppercase border border-white/10 group-hover:border-gold/30 px-2 py-0.5 rounded-full transition-all">
                        {project.type}
                      </span>
                    </div>

                    {/* Bottom */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-display font-700 text-white text-sm mb-1">{project.title}</h3>
                      <p className="font-body text-white/60 text-xs mb-3">{project.client}</p>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 text-white/60 text-xs">
                          <Eye size={10} /> {project.views}
                        </span>
                        <span className="flex items-center gap-1.5 text-white/60 text-xs">
                          <Heart size={10} /> {project.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Before/After */}
      <section className="section-padding bg-dark-800 border-t border-white/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4">Before & After</p>
            <h2 className="font-display font-800 text-4xl md:text-5xl text-white">
              The{" "}
              <span className="text-gradient-gold">Transformation</span> is Real.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { client: "Gaming Creator", before: "8K followers\n0.8% engagement\n500 avg views", after: "890K followers\n11% engagement\n2.4M avg views", time: "8 months" },
              { client: "Fashion Brand", before: "12K followers\n1.2% engagement\n2K avg reach", after: "340K followers\n8.7% engagement\n890K avg reach", time: "6 months" },
              { client: "Business Coach", before: "2K subscribers\n200 avg views\n0 revenue", after: "180K subscribers\n85K avg views\n₹8L/month", time: "12 months" },
            ].map((item) => (
              <div key={item.client} className="glass rounded-sm p-6 border border-white/5 hover:border-gold/15 transition-colors">
                <h4 className="font-display font-600 text-white text-sm mb-4">{item.client}</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-red-950/20 rounded-sm p-3 border border-red-900/20">
                    <div className="font-mono text-[9px] text-red-400 tracking-widest uppercase mb-2">Before</div>
                    <pre className="font-body text-white/60 text-xs whitespace-pre-wrap">{item.before}</pre>
                  </div>
                  <div className="bg-emerald-950/20 rounded-sm p-3 border border-emerald-900/20">
                    <div className="font-mono text-[9px] text-emerald-400 tracking-widest uppercase mb-2">After</div>
                    <pre className="font-body text-white/80 text-xs whitespace-pre-wrap">{item.after}</pre>
                  </div>
                </div>
                <div className="font-mono text-[10px] text-gold/70 tracking-widest uppercase">
                  Timeline: {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="font-display font-800 text-4xl md:text-5xl text-white mb-6">
            Your Story Belongs{" "}
            <span className="text-gradient-gold">Here.</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-black font-display font-700 px-10 py-4 rounded-sm tracking-wider transition-all duration-300 text-sm glow-gold"
          >
            Start Your Project <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
