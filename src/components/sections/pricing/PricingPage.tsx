"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { CheckCircle2, X, ArrowUpRight, Zap, Crown, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tag: "For Emerging Creators",
    price: "₹24,999",
    period: "/month",
    icon: Star,
    desc: "Everything you need to establish a professional digital presence and start building real audience growth.",
    features: [
      { text: "Instagram management (12 posts/month)", included: true },
      { text: "4 professional Reels per month", included: true },
      { text: "Content calendar & strategy", included: true },
      { text: "Basic analytics reporting", included: true },
      { text: "Community management", included: true },
      { text: "Story creation (4/week)", included: true },
      { text: "YouTube management", included: false },
      { text: "Video shoots", included: false },
      { text: "Dedicated account manager", included: false },
      { text: "Priority support", included: false },
    ],
    cta: "Get Started",
    highlight: false,
    color: "border-white/10 hover:border-white/20",
    badge: null,
  },
  {
    name: "Professional",
    tag: "Most Popular",
    price: "₹59,999",
    period: "/month",
    icon: Zap,
    desc: "Full-spectrum social media domination for creators and brands ready to scale to the next level.",
    features: [
      { text: "Instagram + YouTube management", included: true },
      { text: "12 Reels + 4 YouTube videos/month", included: true },
      { text: "Advanced content strategy", included: true },
      { text: "Monthly analytics deep-dive", included: true },
      { text: "Full community management", included: true },
      { text: "Daily stories & engagement", included: true },
      { text: "1 professional video shoot/month", included: true },
      { text: "Thumbnail design system", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Priority support (< 4hr response)", included: true },
    ],
    cta: "Get Started",
    highlight: true,
    color: "border-gold/40 hover:border-gold/70",
    badge: "RECOMMENDED",
  },
  {
    name: "Dominance",
    tag: "For Brands & Top Creators",
    price: "Custom",
    period: "pricing",
    icon: Crown,
    desc: "Enterprise-level social media empire building. Unlimited resources, dedicated team, and relentless execution.",
    features: [
      { text: "All platforms covered", included: true },
      { text: "Unlimited content creation", included: true },
      { text: "Full brand strategy overhaul", included: true },
      { text: "Weekly performance reviews", included: true },
      { text: "24/7 community management", included: true },
      { text: "2+ shoots per month", included: true },
      { text: "Brand partnerships management", included: true },
      { text: "Creator management & PR", included: true },
      { text: "Dedicated 3-person team", included: true },
      { text: "Priority 1-hour support", included: true },
    ],
    cta: "Let's Talk",
    highlight: false,
    color: "border-white/10 hover:border-gold/30",
    badge: null,
  },
];

const comparison = [
  { feature: "Platforms Managed", starter: "Instagram", pro: "IG + YouTube", dom: "All Platforms" },
  { feature: "Posts per Month", starter: "12", pro: "24+", dom: "Unlimited" },
  { feature: "Reels per Month", starter: "4", pro: "12", dom: "Unlimited" },
  { feature: "Video Shoots", starter: "—", pro: "1/month", dom: "2+/month" },
  { feature: "Analytics Reports", starter: "Basic", pro: "Deep-dive", dom: "Real-time" },
  { feature: "Dedicated Manager", starter: "—", pro: "✓", dom: "Full Team" },
  { feature: "Support Response", starter: "48 hours", pro: "4 hours", dom: "1 hour" },
  { feature: "Brand Strategy", starter: "—", pro: "Included", dom: "Full Overhaul" },
];

export default function PricingPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const tableRef = useRef(null);
  const tableInView = useInView(tableRef, { once: true });

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
            Investment Plans
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-800 text-5xl md:text-7xl text-white mb-6 leading-tight"
          >
            Pricing That Matches{" "}
            <br />
            <span className="text-gradient-gold">Your Ambition.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-body text-gray-muted text-lg max-w-2xl mx-auto"
          >
            No hidden fees. No lock-in contracts. Just premium service
            with measurable results from day one.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className={`relative rounded-sm border p-8 flex flex-col transition-all duration-500 ${plan.color} ${
                  plan.highlight
                    ? "bg-gradient-to-b from-gold/5 to-dark-800 glow-gold"
                    : "bg-dark-800"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-black font-display font-700 text-[9px] tracking-[0.3em] px-4 py-1.5 rounded-full uppercase">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-8">
                  <div className={`w-12 h-12 rounded-sm border ${plan.highlight ? "border-gold/40 bg-gold/10" : "border-white/10 bg-dark-700"} flex items-center justify-center mb-4`}>
                    <plan.icon size={20} className={plan.highlight ? "text-gold" : "text-gray-muted"} />
                  </div>
                  <p className="font-mono text-[10px] tracking-widest text-gold/70 uppercase mb-2">{plan.tag}</p>
                  <h3 className={`font-display font-800 text-2xl mb-3 ${plan.highlight ? "text-white" : "text-white/80"}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-end gap-1 mb-4">
                    <span className={`font-display font-800 text-4xl ${plan.highlight ? "text-gradient-gold" : "text-white"}`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-muted text-sm mb-1">{plan.period}</span>
                  </div>
                  <p className="font-body text-gray-muted text-sm leading-relaxed">{plan.desc}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-3">
                      {f.included ? (
                        <CheckCircle2 size={14} className="text-gold mt-0.5 shrink-0" />
                      ) : (
                        <X size={14} className="text-dark-400 mt-0.5 shrink-0" />
                      )}
                      <span className={`font-body text-sm ${f.included ? "text-white/80" : "text-dark-400"}`}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`flex items-center justify-center gap-2 py-3.5 rounded-sm font-display font-700 text-sm tracking-wider transition-all duration-300 ${
                    plan.highlight
                      ? "bg-gold hover:bg-gold-light text-black glow-gold"
                      : "border border-white/15 hover:border-gold/40 text-white hover:text-gold"
                  }`}
                >
                  {plan.cta}
                  <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-dark-800 border-t border-b border-white/5">
        <div className="container-custom" ref={tableRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-800 text-4xl text-white">
              Full{" "}
              <span className="text-gradient-gold">Comparison.</span>
            </h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left py-4 px-4 font-mono text-xs text-gray-muted tracking-wider w-1/3">Feature</th>
                  {plans.map((p) => (
                    <th key={p.name} className={`text-center py-4 px-4 font-display font-700 text-sm ${p.highlight ? "text-gold" : "text-white"}`}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={tableInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    className="border-b border-white/5 hover:bg-white/2 transition-colors"
                  >
                    <td className="py-4 px-4 font-body text-sm text-gray-muted">{row.feature}</td>
                    <td className="py-4 px-4 text-center font-body text-sm text-white/50">{row.starter}</td>
                    <td className="py-4 px-4 text-center font-body text-sm text-gold">{row.pro}</td>
                    <td className="py-4 px-4 text-center font-body text-sm text-white/70">{row.dom}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ / Bottom note */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display font-800 text-3xl text-white text-center mb-10">
              Common <span className="text-gradient-gold">Questions.</span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Are there any lock-in contracts?",
                  a: "No. All plans are month-to-month. We prefer to earn your trust every month rather than trap you in a contract.",
                },
                {
                  q: "How soon do results start showing?",
                  a: "Most clients see meaningful growth within 30–60 days. Significant results typically come in months 3–6 as content compounds.",
                },
                {
                  q: "Do you work with all niches?",
                  a: "We specialize in gaming, lifestyle, business, luxury, and personal brands. Book a call and we'll tell you honestly if we're a fit.",
                },
                {
                  q: "Can I customize my plan?",
                  a: "Absolutely. Every plan can be tailored to your specific needs. Our Dominance tier is fully custom by design.",
                },
              ].map((item) => (
                <div key={item.q} className="glass rounded-sm p-6 border border-white/5 hover:border-gold/15 transition-colors">
                  <h4 className="font-display font-600 text-white text-sm mb-2">{item.q}</h4>
                  <p className="font-body text-gray-muted text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-black font-display font-700 px-10 py-4 rounded-sm tracking-wider transition-all duration-300 text-sm glow-gold"
              >
                Book a Free Call <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
