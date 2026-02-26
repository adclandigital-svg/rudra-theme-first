"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({ children }) {
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth <= 768) return; // Disable on mobile

    const lenis = new Lenis({
      duration: 1.5, // smoother scroll
      lerp: 0.07, // lower = smoother
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1.2,
    });

    let rafId = 0;

    function raf(time) {
      lenis.raf(time);
      // keep ScrollTrigger in sync with Lenis
      ScrollTrigger.update();
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Ensure ScrollTrigger measures correctly after Lenis is running
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}