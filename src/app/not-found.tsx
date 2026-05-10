import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-900 flex flex-col items-center justify-center text-center px-6">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

      <div className="relative z-10">
        <p className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-6">404 Error</p>

        <h1 className="font-display font-800 text-[120px] md:text-[180px] leading-none text-gradient-gold mb-4 select-none">
          404
        </h1>

        <h2 className="font-display font-700 text-2xl md:text-3xl text-white mb-4">
          This Page Is in the Dark.
        </h2>
        <p className="font-body text-gray-muted text-base max-w-md mx-auto mb-10">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 bg-gold hover:bg-gold-light text-black font-display font-700 text-sm px-8 py-3.5 rounded-sm tracking-wider transition-all duration-300 glow-gold"
          >
            Back to Home <ArrowUpRight size={14} />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 border border-white/15 hover:border-gold/40 text-white font-display font-600 text-sm px-8 py-3.5 rounded-sm tracking-wider transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
