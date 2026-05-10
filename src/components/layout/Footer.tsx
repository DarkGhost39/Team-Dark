"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Youtube, MessageCircle, Mail, ArrowUpRight, ArrowUp } from "lucide-react";

const services = [
  "Instagram Management",
  "YouTube Management",
  "Reel Editing",
  "Cinematic Editing",
  "Photo Shoots",
  "Content Strategy",
  "Branding",
  "Creator Management",
];

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-dark-900 border-t border-white/5">
      {/* Main CTA Band */}
      <div className="border-b border-white/5 py-20">
        <div className="container-custom text-center">
          <p className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4">
            Ready to Dominate?
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-800 text-white mb-8 leading-tight">
            Let's Build Your{" "}
            <span className="text-gradient-gold">Empire.</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-black font-display font-700 px-10 py-4 rounded-sm tracking-wider transition-all duration-300 text-sm glow-gold"
          >
            Start Your Project <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-sm bg-gold flex items-center justify-center">
                <span className="font-display font-800 text-black text-xs">TD</span>
              </div>
              <span className="font-display font-700 text-white text-lg tracking-[0.15em] uppercase">
                Team Dark
              </span>
            </Link>
            <p className="text-gray-muted text-sm leading-relaxed mb-6 font-body">
              Silent professionals who dominate social media. We transform brands into digital empires.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: MessageCircle, href: "#", label: "WhatsApp" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-gray-muted hover:text-gold hover:border-gold/40 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-600 text-white text-sm tracking-wider uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-gray-muted text-sm hover:text-gold transition-colors font-body"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-600 text-white text-sm tracking-wider uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-muted text-sm hover:text-gold transition-colors font-body"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-600 text-white text-sm tracking-wider uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@teamdark.agency"
                  className="flex items-center gap-3 text-gray-muted text-sm hover:text-gold transition-colors group"
                >
                  <Mail size={14} className="text-gold" />
                  hello@teamdark.agency
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/0000000000"
                  className="flex items-center gap-3 text-gray-muted text-sm hover:text-gold transition-colors"
                >
                  <MessageCircle size={14} className="text-gold" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/teamdark"
                  className="flex items-center gap-3 text-gray-muted text-sm hover:text-gold transition-colors"
                >
                  <Instagram size={14} className="text-gold" />
                  @teamdark
                </a>
              </li>
            </ul>

            {/* Response time */}
            <div className="mt-8 p-4 glass rounded-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-green-400 tracking-wider">
                  AVAILABLE
                </span>
              </div>
              <p className="text-gray-muted text-xs">
                Avg. response time:{" "}
                <span className="text-white font-600">under 2 hours</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-dark-400 tracking-wider">
            © 2024 TEAM DARK. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="font-mono text-xs text-dark-400 hover:text-gold transition-colors tracking-wider">
              Privacy Policy
            </Link>
            <Link href="#" className="font-mono text-xs text-dark-400 hover:text-gold transition-colors tracking-wider">
              Terms
            </Link>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 border border-white/10 hover:border-gold/40 rounded-sm flex items-center justify-center text-gray-muted hover:text-gold transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
