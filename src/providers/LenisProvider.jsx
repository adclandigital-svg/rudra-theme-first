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

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({ children }) {

  useEffect(() => {
    if (typeof window === "undefined") return;

    // disable on mobile
    if (window.innerWidth <= 768) return;

    // ✅ 1. Scroll instantly to top (overrides browser's scroll restoration)
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 2.2,
      lerp: 0.06,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.9,
      infinite: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // ✅ 2. Refresh ScrollTrigger after Lenis is ready and scroll is at top
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100); // small delay ensures Lenis has initialised

    // ✅ 3. Refresh on window resize (important for responsive layouts)
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      lenis.destroy();
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // optional cleanup
    };
  }, []);

  return children;
}