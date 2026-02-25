"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }) {
  useEffect(() => {
    if (window.innerWidth <= 768) return; // Disable on mobile

    const lenis = new Lenis({
      duration: 1.5,        // smoother scroll
      lerp: 0.07,           // lower = smoother
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}