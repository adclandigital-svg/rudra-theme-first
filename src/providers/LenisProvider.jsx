// "use client";

// import { useEffect } from "react";
// import Lenis from "lenis";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function LenisProvider({ children }) {

//   useEffect(() => {

//     if (typeof window === "undefined") return;

//     // disable on mobile
//     if (window.innerWidth <= 768) return;

//     const lenis = new Lenis({
//       duration: 2.2,        // smoother easing
//       lerp: 0.06,           // lower = smoother
//       smoothWheel: true,
//       smoothTouch: false,
//       wheelMultiplier: 0.9, // softer wheel motion
//       infinite: false
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     // sync ScrollTrigger
//     lenis.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.refresh();

//     return () => {
//       lenis.destroy();
//     };

//   }, []);

//   return children;
// }



"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // disable on mobile
    if (window.innerWidth <= 768) return;

    // INIT LENIS
    const lenis = new Lenis({
      duration: 2.2,
      lerp: 0.06,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.9,
      infinite: false,
    });

    lenisRef.current = lenis;

    // RAF LOOP
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // SYNC WITH GSAP
    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.refresh();

    // ✅ SCROLL TO TOP ON FIRST LOAD
    lenis.scrollTo(0, { immediate: true });

    return () => {
      lenis.destroy();
    };
  }, []);

  // ✅ SCROLL TO TOP ON ROUTE CHANGE
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, {
        duration: 0,
        immediate: true,
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return children;
}