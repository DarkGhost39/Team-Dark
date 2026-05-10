"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
} from "lucide-react";

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 99999 00000",
    desc: "Fastest response — under 30 minutes",
    href: "https://wa.me/919999900000",
    cta: "Chat Now",
    color: "hover:border-green-500/30",
    iconColor: "text-green-400",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@teamdark.agency",
    desc: "DM us for quick queries",
    href: "https://instagram.com/teamdark.agency",
    cta: "DM Us",
    color: "hover:border-pink-500/30",
    iconColor: "text-pink-400",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@teamdark.agency",
    desc: "Detailed inquiries & proposals",
    href: "mailto:hello@teamdark.agency",
    cta: "Send Email",
    color: "hover:border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    icon: Calendar,
    label: "Book a Call",
    value: "Free Strategy Session",
    desc: "30-minute discovery call — no commitment",
    href: "#booking",
    cta: "Book Now",
    color: "hover:border-gold/30",
    iconColor: "text-gold",
  },
];

const services = [
  "Instagram Management",
  "YouTube Management",
  "Reel / Short Editing",
  "Cinematic Video Editing",
  "Photo & Video Shoot",
  "Content Strategy",
  "Branding & Design",
  "Creator Management",
  "Full Package",
  "Custom / Other",
];

const budgets = [
  "Under ₹15,000/mo",
  "₹15,000 – ₹30,000/mo",
  "₹30,000 – ₹60,000/mo",
  "₹60,000 – ₹1L/mo",
  "Above ₹1L/mo",
];

export default function ContactPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", budget: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission (replace with real endpoint)
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="container-custom relative" ref={heroRef}>
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4"
            >
              Get in Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-800 text-5xl md:text-7xl text-white mb-6 leading-tight"
            >
              Let's Build{" "}
              <span className="text-gradient-gold">Something</span>{" "}
              Real.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-gray-muted text-lg leading-relaxed"
            >
              Whether you're a solo creator or an established brand — start
              with a conversation. We'll tell you exactly what we can do for
              you, with zero pressure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Response time bar */}
      <div className="border-y border-white/5 bg-dark-800 py-4">
        <div className="container-custom flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            {[
              { icon: Clock, text: "WhatsApp: ~30 min response" },
              { icon: Mail, text: "Email: under 2 hours" },
              { icon: Phone, text: "Calls: by appointment" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={13} className="text-gold" />
                <span className="font-mono text-[10px] text-gray-muted tracking-wider">{text}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-[10px] text-green-400 tracking-widest uppercase">Team Online</span>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`group p-6 glass rounded-sm border border-white/5 ${method.color} transition-all duration-300 block`}
              >
                <div className="w-10 h-10 rounded-sm border border-white/10 group-hover:border-white/20 flex items-center justify-center mb-4 transition-colors">
                  <method.icon size={18} className={method.iconColor} />
                </div>
                <p className="font-mono text-[10px] tracking-widest text-gray-muted uppercase mb-1">
                  {method.label}
                </p>
                <h3 className="font-display font-600 text-white text-sm mb-2 group-hover:text-gold transition-colors">
                  {method.value}
                </h3>
                <p className="font-body text-gray-muted text-xs mb-4">{method.desc}</p>
                <div className="flex items-center gap-1.5 text-gold text-xs font-display font-600 tracking-wider">
                  {method.cta}
                  <ArrowUpRight
                    size={12}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Main grid: Form + Info */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* ── Contact Form ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="glass rounded-sm border border-white/5 p-8 md:p-10">
                <h2 className="font-display font-800 text-2xl text-white mb-2">
                  Send Us a Message
                </h2>
                <p className="font-body text-gray-muted text-sm mb-8">
                  Fill this out and we'll get back to you within 2 hours with a
                  tailored plan.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={28} className="text-gold" />
                    </div>
                    <h3 className="font-display font-700 text-white text-xl mb-3">
                      Message Sent!
                    </h3>
                    <p className="font-body text-gray-muted text-sm max-w-xs mx-auto">
                      We've received your message and will reply within 2 hours.
                      Check your WhatsApp or email.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-mono text-[10px] tracking-widest text-gray-muted uppercase mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full bg-dark-700 border border-white/8 hover:border-white/15 focus:border-gold/50 text-white placeholder-dark-400 font-body text-sm px-4 py-3 rounded-sm outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] tracking-widest text-gray-muted uppercase mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full bg-dark-700 border border-white/8 hover:border-white/15 focus:border-gold/50 text-white placeholder-dark-400 font-body text-sm px-4 py-3 rounded-sm outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest text-gray-muted uppercase mb-2">
                        WhatsApp / Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="w-full bg-dark-700 border border-white/8 hover:border-white/15 focus:border-gold/50 text-white placeholder-dark-400 font-body text-sm px-4 py-3 rounded-sm outline-none transition-colors"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest text-gray-muted uppercase mb-2">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-dark-700 border border-white/8 hover:border-white/15 focus:border-gold/50 text-white font-body text-sm px-4 py-3 rounded-sm outline-none transition-colors appearance-none"
                      >
                        <option value="" disabled>
                          Select a service...
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest text-gray-muted uppercase mb-2">
                        Monthly Budget
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {budgets.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setForm((p) => ({ ...p, budget: b }))}
                            className={`font-mono text-[10px] tracking-wider px-3 py-2.5 rounded-sm border transition-all duration-200 text-left ${
                              form.budget === b
                                ? "border-gold/60 bg-gold/10 text-gold"
                                : "border-white/8 text-gray-muted hover:border-white/20 hover:text-white"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest text-gray-muted uppercase mb-2">
                        Tell Us About Your Project *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your brand, your goals, current follower count, and what you'd like to achieve..."
                        className="w-full bg-dark-700 border border-white/8 hover:border-white/15 focus:border-gold/50 text-white placeholder-dark-400 font-body text-sm px-4 py-3 rounded-sm outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-3 bg-gold hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed text-black font-display font-700 text-sm py-4 rounded-sm tracking-wider transition-all duration-300 glow-gold"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={15} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* ── Sidebar ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Quick booking */}
              <div
                id="booking"
                className="glass rounded-sm border border-gold/20 p-6 bg-gold/3"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar size={18} className="text-gold" />
                  <h3 className="font-display font-700 text-white text-sm">
                    Book a Free Strategy Call
                  </h3>
                </div>
                <p className="font-body text-gray-muted text-xs leading-relaxed mb-5">
                  30-minute session. Zero pitch. Just pure strategy tailored to
                  your brand. We'll tell you exactly what to do — whether you
                  hire us or not.
                </p>
                <a
                  href="https://cal.com/teamdark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-black font-display font-700 text-xs py-3 rounded-sm tracking-wider transition-all w-full"
                >
                  Schedule on Cal.com <ArrowUpRight size={12} />
                </a>
              </div>

              {/* Address / Location */}
              <div className="glass rounded-sm border border-white/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={18} className="text-gold" />
                  <h3 className="font-display font-700 text-white text-sm">
                    Location
                  </h3>
                </div>
                {/* Map placeholder */}
                <div className="w-full h-36 rounded-sm bg-dark-600 border border-white/5 flex items-center justify-center mb-4 relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="relative z-10 text-center">
                    <div className="w-8 h-8 rounded-full border-2 border-gold bg-gold/20 flex items-center justify-center mx-auto mb-2 animate-pulse">
                      <MapPin size={14} className="text-gold" />
                    </div>
                    <span className="font-mono text-[10px] text-gold tracking-widest">
                      MUMBAI, INDIA
                    </span>
                  </div>
                </div>
                <p className="font-body text-gray-muted text-xs leading-relaxed">
                  We work remotely with clients across India and internationally.
                  In-person shoots available in Mumbai & Delhi.
                </p>
              </div>

              {/* Working hours */}
              <div className="glass rounded-sm border border-white/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={18} className="text-gold" />
                  <h3 className="font-display font-700 text-white text-sm">
                    Working Hours
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {[
                    { day: "Monday – Friday", hours: "10:00 AM – 8:00 PM", active: true },
                    { day: "Saturday", hours: "11:00 AM – 5:00 PM", active: true },
                    { day: "Sunday", hours: "Closed", active: false },
                  ].map(({ day, hours, active }) => (
                    <div
                      key={day}
                      className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                    >
                      <span className="font-body text-xs text-gray-muted">{day}</span>
                      <span
                        className={`font-mono text-[10px] tracking-wider ${
                          active ? "text-white" : "text-dark-400"
                        }`}
                      >
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono text-[10px] text-green-400 tracking-widest uppercase">
                    Currently Online
                  </span>
                </div>
              </div>

              {/* Social links */}
              <div className="glass rounded-sm border border-white/5 p-6">
                <h3 className="font-display font-700 text-white text-sm mb-4">
                  Follow Our Work
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: Instagram, label: "@teamdark.agency", sub: "Latest reels & edits", href: "https://instagram.com/teamdark.agency", color: "text-pink-400" },
                    { icon: MessageCircle, label: "WhatsApp Channel", sub: "Updates & announcements", href: "https://wa.me/919999900000", color: "text-green-400" },
                  ].map(({ icon: Icon, label, sub, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 hover:bg-white/3 p-2 rounded-sm transition-colors -mx-2"
                    >
                      <Icon size={16} className={color} />
                      <div>
                        <div className="font-display font-600 text-white text-xs group-hover:text-gold transition-colors">
                          {label}
                        </div>
                        <div className="font-body text-gray-muted text-[10px]">{sub}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
