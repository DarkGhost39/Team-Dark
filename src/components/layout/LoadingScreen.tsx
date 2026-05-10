"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loading-screen flex-col gap-8"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="font-display text-3xl font-800 tracking-[0.3em] text-white uppercase">
              TEAM{" "}
              <span className="text-gradient-gold">DARK</span>
            </h1>
            <p className="font-mono text-xs tracking-[0.4em] text-gray-muted mt-2 uppercase">
              Creative Agency
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-px bg-dark-600 relative overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold to-gold-light absolute left-0 top-0"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          {/* Progress number */}
          <motion.span
            className="font-mono text-xs text-gray-muted tracking-widest"
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.span>

          {/* Corner decoration */}
          <div className="absolute bottom-8 left-8 text-[10px] font-mono text-dark-400 tracking-widest">
            © 2024 TEAM DARK
          </div>
          <div className="absolute bottom-8 right-8 text-[10px] font-mono text-dark-400 tracking-widest">
            LOADING...
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
