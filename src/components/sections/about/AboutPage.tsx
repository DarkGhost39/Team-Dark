"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Target, Eye, Heart } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const timeline = [
  { year: "2021", title: "The Beginning", desc: "Team Dark was born from frustration — seeing talented creators fail not because of lack of talent, but lack of strategy and execution." },
  { year: "2022", title: "First 10 Clients", desc: "We took on our first 10 clients and generated over 500M combined views. Word spread fast. The results were undeniable." },
  { year: "2023", title: "Scaling Up", desc: "Expanded into YouTube management, cinematic production, and brand strategy. Revenue for our clients crossed ₹10 Crore collectively." },
  { year: "2024", title: "Going Premium", desc: "Launched our Dominance tier for enterprise clients. Became the go-to agency for gaming brands, luxury labels, and top-tier creators." },
];

const stats = [
  { value: 120, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Active Clients" },
  { value: 3, suffix: "B+", label: "Views Generated" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

const values = [
  { icon: Target, title: "Results Only", desc: "We don't celebrate effort. We celebrate results. Every decision, every piece of content is tied to a measurable outcome." },
  { icon: Eye, title: "Cinematic Vision", desc: "We see content through a filmmaker's lens. Every Reel, every post, every thumbnail is crafted with visual precision." },
  { icon: Heart, title: "Creator-First", desc: "Your growth is our growth. We treat every client's brand as if it were our own — because our reputation is tied to yours." },
];

const team = [
  { name: "Rohan Verma", role: "Founder & Creative Director", specialty: "Content Strategy & Direction" },
  { name: "Aisha Khan", role: "Head of Editing", specialty: "Cinematic Post-Production" },
  { name: "Dev Sharma", role: "Social Media Lead", specialty: "Growth & Platform Algorithms" },
  { name: "Priya Nair", role: "Brand Strategist", specialty: "Identity & Visual Systems" },
  { name: "Arjun Mehta", role: "Video Production Head", specialty: "Cinematography & Shoots" },
  { name: "Zara Ahmed", role: "Client Success Manager", specialty: "Relationships & Reporting" },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="container-custom relative" ref={heroRef}>
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4"
            >
              Our Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-800 text-5xl md:text-7xl text-white mb-6 leading-tight"
            >
              Built in the{" "}
              <span className="text-gradient-gold">Dark.</span>
              <br />
              Made for the{" "}
              <span className="italic font-500 text-gray-muted">Spotlight.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-gray-muted text-lg leading-relaxed"
            >
              TEAM DARK was built by creators who were tired of watching talented people
              fail on social media — not because they lacked skill, but because they
              lacked the right systems, strategy, and execution partners.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-dark-800 border-y border-white/5">
        <div className="container-custom" ref={statsRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {stats.map((s) => (
              <div key={s.label} className="bg-dark-800 py-10 text-center hover:bg-dark-700 transition-colors">
                <div className="font-display font-800 text-4xl text-gradient-gold mb-2">
                  <AnimatedCounter to={s.value} suffix={s.suffix} />
                </div>
                <div className="font-mono text-[10px] text-gray-muted tracking-widest uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              {
                label: "Mission",
                content: "To give every creator and brand the infrastructure, strategy, and execution power to build a dominant, sustainable digital presence — regardless of where they're starting from.",
                highlight: false,
              },
              {
                label: "Vision",
                content: "A world where creative talent is never wasted due to a lack of the right support system. We want to be the team behind every creator who matters.",
                highlight: true,
              },
              {
                label: "Philosophy",
                content: "We operate in the dark — behind the scenes, quietly executing while our clients shine in the spotlight. Ego-free. Results-obsessed. Always.",
                highlight: false,
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`p-8 rounded-sm border ${item.highlight ? "border-gold/30 bg-gold/5" : "border-white/5"} glass`}
              >
                <p className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4">{item.label}</p>
                <p className="font-body text-white/80 text-base leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Why creators fail */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4">The Problem We Solve</p>
            <h2 className="font-display font-800 text-4xl md:text-5xl text-white mb-6">
              Why Most Creators{" "}
              <span className="text-gradient-gold">Fail Online.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              "No clear content strategy — just posting and hoping",
              "Low production quality that fails to stop the scroll",
              "Inconsistent posting destroying algorithmic reach",
              "No understanding of platform-specific optimization",
              "Chasing trends instead of building brand authority",
              "Zero community management — just broadcasting, never engaging",
            ].map((fail, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-start gap-3 p-5 glass rounded-sm border border-red-900/20"
              >
                <span className="text-red-400 font-mono text-xs mt-0.5">✗</span>
                <p className="font-body text-white/70 text-sm">{fail}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <p className="font-body text-gray-muted text-base">
              Team Dark{" "}
              <span className="text-gold font-600">solves all of these.</span>{" "}
              Systematically.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-dark-800 border-y border-white/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4">Our Journey</p>
            <h2 className="font-display font-800 text-4xl md:text-5xl text-white">
              The{" "}
              <span className="text-gradient-gold">Timeline.</span>
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-white/5" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className={`relative flex items-start gap-6 mb-12 md:w-1/2 ${i % 2 === 0 ? "md:ml-auto md:pr-12 md:pl-0" : "md:pl-12 md:pr-0"}`}
              >
                {/* Node */}
                <div className="absolute left-[11px] md:left-auto md:-left-[9px] w-4 h-4 rounded-full border-2 border-gold bg-dark-800 z-10 shrink-0" style={{
                  ...(i % 2 === 0 ? { right: '-8px', left: 'auto' } : { left: '-8px' })
                }} />

                <div className="ml-10 md:ml-0 glass rounded-sm p-6 border border-white/5 hover:border-gold/15 transition-colors w-full">
                  <span className="font-mono text-xs text-gold tracking-widest">{item.year}</span>
                  <h4 className="font-display font-700 text-white text-base mt-1 mb-2">{item.title}</h4>
                  <p className="font-body text-gray-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4">What Drives Us</p>
            <h2 className="font-display font-800 text-4xl md:text-5xl text-white">
              Our Core{" "}
              <span className="text-gradient-gold">Values.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="group p-8 glass rounded-sm border border-white/5 hover:border-gold/20 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center mb-6 group-hover:border-gold/50 transition-colors">
                  <v.icon size={22} className="text-gold" />
                </div>
                <h3 className="font-display font-700 text-white text-lg mb-3 group-hover:text-gold transition-colors">{v.title}</h3>
                <p className="font-body text-gray-muted text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-dark-800 border-t border-b border-white/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4">The People</p>
            <h2 className="font-display font-800 text-4xl md:text-5xl text-white">
              The Team{" "}
              <span className="text-gradient-gold">Behind the Dark.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                className="group text-center"
              >
                <div className="w-full aspect-square bg-gradient-to-br from-dark-600 to-dark-800 rounded-sm mb-4 flex items-center justify-center border border-white/5 group-hover:border-gold/20 transition-colors relative overflow-hidden">
                  <span className="font-display font-800 text-3xl text-gradient-gold">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                  <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
                <h4 className="font-display font-600 text-white text-xs mb-0.5 group-hover:text-gold transition-colors">{member.name}</h4>
                <p className="font-mono text-[9px] text-gold/70 tracking-wider uppercase mb-1">{member.role}</p>
                <p className="font-body text-gray-muted text-[10px]">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="font-display font-800 text-4xl md:text-5xl text-white mb-6">
            Ready to Work{" "}
            <span className="text-gradient-gold">With Us?</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-black font-display font-700 px-10 py-4 rounded-sm tracking-wider transition-all duration-300 text-sm glow-gold"
          >
            Start the Conversation <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
