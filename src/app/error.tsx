"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-dark-900 flex flex-col items-center justify-center text-center px-6">
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="relative z-10">
        <p className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-6">
          Something Went Wrong
        </p>
        <h1 className="font-display font-800 text-4xl md:text-6xl text-white mb-4">
          An Error Occurred.
        </h1>
        <p className="font-body text-gray-muted text-base max-w-sm mx-auto mb-10">
          Something unexpected happened. We're on it.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="flex items-center gap-2 bg-gold hover:bg-gold-light text-black font-display font-700 text-sm px-8 py-3.5 rounded-sm tracking-wider transition-all duration-300 glow-gold"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="flex items-center gap-2 border border-white/15 hover:border-gold/40 text-white font-display font-600 text-sm px-8 py-3.5 rounded-sm tracking-wider transition-all duration-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
