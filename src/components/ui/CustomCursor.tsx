"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorRing = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorDot.current) {
        cursorDot.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (cursorRing.current) {
        cursorRing.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      requestAnimationFrame(animate);
    };

    const handleMouseEnterLink = () => {
      if (cursorRing.current) {
        cursorRing.current.style.width = "50px";
        cursorRing.current.style.height = "50px";
        cursorRing.current.style.borderColor = "rgba(201,168,76,0.8)";
        cursorRing.current.style.backgroundColor = "rgba(201,168,76,0.05)";
      }
      if (cursorDot.current) {
        cursorDot.current.style.opacity = "0";
      }
    };

    const handleMouseLeaveLink = () => {
      if (cursorRing.current) {
        cursorRing.current.style.width = "32px";
        cursorRing.current.style.height = "32px";
        cursorRing.current.style.borderColor = "rgba(201,168,76,0.4)";
        cursorRing.current.style.backgroundColor = "transparent";
      }
      if (cursorDot.current) {
        cursorDot.current.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    const links = document.querySelectorAll("a, button, [data-cursor-hover]");
    links.forEach((l) => {
      l.addEventListener("mouseenter", handleMouseEnterLink);
      l.addEventListener("mouseleave", handleMouseLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      links.forEach((l) => {
        l.removeEventListener("mouseenter", handleMouseEnterLink);
        l.removeEventListener("mouseleave", handleMouseLeaveLink);
      });
    };
  }, []);

  return (
    <div className="hidden md:block">
      {/* Dot */}
      <div
        ref={cursorDot}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-gold rounded-full pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: "transform" }}
      />
      {/* Ring */}
      <div
        ref={cursorRing}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-gold/40 pointer-events-none z-[99997] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color,background-color] duration-200"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
