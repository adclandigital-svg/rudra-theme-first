// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import "./hero.css";

// const images = [
//   "https://arinteriornew.vercel.app/hero4.avif",
//   "https://arinteriornew.vercel.app/hero2.avif",
//   "https://arinteriornew.vercel.app/hero1.webp",
// ];

// export default function Hero() {
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const buttonRef = useRef(null);
//   const bgRefs = useRef([]);

//   useEffect(() => {
//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)",
//     ).matches;

//     if (prefersReducedMotion) return;

//     // Intro content animation
//     const tl = gsap.timeline();

//     tl.from(titleRef.current, {
//       y: 100,
//       opacity: 0,
//       duration: 1.2,
//       ease: "power4.out",
//     })
//       .from(subtitleRef.current, { y: 50, opacity: 0, duration: 1 }, "-=0.6")
//       .from(
//         buttonRef.current,
//         { scale: 0.9, opacity: 0, duration: 0.8, ease: "back.out(1.7)" },
//         "-=0.6",
//       );

//     // Background infinite animation
//     bgRefs.current.forEach((img, index) => {
//       gsap.set(img, { opacity: index === 0 ? 1 : 0, scale: 1.2 });
//     });

//     let current = 0;

//     const interval = setInterval(() => {
//       const next = (current + 1) % images.length;

//       gsap.to(bgRefs.current[current], {
//         opacity: 0,
//         scale: 1,
//         duration: 2,
//         ease: "power2.inOut",
//       });

//       gsap.to(bgRefs.current[next], {
//         opacity: 1,
//         scale: 1.2,
//         duration: 2,
//         ease: "power2.inOut",
//       });

//       current = next;
//     }, 6000);

//     return () => {
//       clearInterval(interval);
//       tl.kill();
//     };
//   }, []);

//   return (
//     <section className="hero">
//       <div className="hero-bg">
//         {images.map((src, i) => (
//           <img
//             key={i}
//             ref={(el) => (bgRefs.current[i] = el)}
//             src={src}
//             alt="Luxury Property"
//           />
//         ))}
//       </div>

//       <div className="hero-overlay"></div>

//       <div className="hero-content">
//         <h1 ref={titleRef}>
//            Rudra Group
//         </h1>

//         <p ref={subtitleRef}>
//           Rudra is a team of modern & dynamic builders who craft every home as a
//           fine piece of architecture. We create a seamless blend of aesthetics,
//         </p>

//         <div ref={buttonRef}>
//           <button className="hero-btn">Explore Projects</button>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import "./hero.css";

// const images = [
//   "https://arinteriornew.vercel.app/hero4.avif",
//   "https://arinteriornew.vercel.app/hero2.avif",
//   "https://arinteriornew.vercel.app/hero1.webp",
// ];

// export default function Hero() {
//   const bgRefs = useRef([]);
//   const titleRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline();

//     tl.from(titleRef.current, {
//       x: -100,
//       opacity: 0,
//       duration: 1.2,
//       ease: "power4.out",
//     }).from(
//       contentRef.current,
//       { y: 40, opacity: 0, duration: 1 },
//       "-=0.6"
//     );

//     bgRefs.current.forEach((img, index) => {
//       gsap.set(img, { opacity: index === 0 ? 1 : 0, scale: 1.1 });
//     });

//     let current = 0;

//     const interval = setInterval(() => {
//       const next = (current + 1) % images.length;

//       gsap.to(bgRefs.current[current], {
//         opacity: 0,
//         scale: 1,
//         duration: 2,
//       });

//       gsap.to(bgRefs.current[next], {
//         opacity: 1,
//         scale: 1.1,
//         duration: 2,
//       });

//       current = next;
//     }, 6000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="split-hero">
//       {/* Left Content */}
//       <div className="split-left">
//         <div className="split-inner">
//           <h1 ref={titleRef}>
//             Redefining <br />
//             <span>Urban Living</span>
//           </h1>

//           <div ref={contentRef} className="split-content">
//             <p>
//               We create architectural masterpieces designed
//               for those who demand excellence, elegance, and
//               timeless value.
//             </p>

//             <button className="split-btn">
//               View Projects
//               <span className="arrow">→</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Right Image Slider */}
//       <div className="split-right">
//         {images.map((src, i) => (
//           <img
//             key={i}
//             ref={(el) => (bgRefs.current[i] = el)}
//             src={src}
//             alt="Luxury Property"
//           />
//         ))}
//         <div className="split-overlay"></div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="scroll-indicator">
//         Scroll
//         <span></span>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./hero.css";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://arinteriornew.vercel.app/hero4.avif",
  "https://arinteriornew.vercel.app/hero2.avif",
  "https://arinteriornew.vercel.app/hero1.webp",
];

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRef = useRef(null);
  const bgRefs = useRef([]);
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      })
        .from(
          subtitleRef.current,
          { y: 60, opacity: 0, duration: 1 },
          "-=0.7"
        )
        .from(
          buttonRef.current,
          { scale: 0.8, opacity: 0, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.6"
        )
        .from(
          cardRef.current,
          { y: 50, opacity: 0, duration: 1 },
          "-=0.8"
        );

      // Background animation
      bgRefs.current.forEach((img, index) => {
        gsap.set(img, { opacity: index === 0 ? 1 : 0, scale: 1.2 });
      });

      let current = 0;

      const interval = setInterval(() => {
        const next = (current + 1) % images.length;

        gsap.to(bgRefs.current[current], {
          opacity: 0,
          scale: 1,
          duration: 2,
          ease: "power2.inOut",
        });

        gsap.to(bgRefs.current[next], {
          opacity: 1,
          scale: 1.2,
          duration: 2,
          ease: "power2.inOut",
        });

        current = next;
      }, 6000);

      return () => {
        clearInterval(interval);
        tl.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="hero creative-hero">
      <div className="hero-bg">
        {images.map((src, i) => (
          <img
            key={i}
            ref={(el) => (bgRefs.current[i] = el)}
            src={src}
            alt="Luxury Property"
          />
        ))}
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-side-text">
        LUXURY • ARCHITECTURE • DESIGN
      </div>

      <div className="hero-content creative-content">
        <h1 ref={titleRef}>
          Crafting <span>Timeless</span><br />
          Living Spaces
        </h1>

        <p ref={subtitleRef}>
          A modern real estate experience blending refined architecture,
          premium materials, and thoughtfully designed living.
        </p>

        <div ref={buttonRef} className="hero-actions">
          <button className="hero-btn creative-btn">
            Explore Projects
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>

      <div ref={cardRef} className="hero-card">
        <h4>Featured Project</h4>
        <p>Sea View Residences</p>
        <span>Starting ₹2.4 Cr</span>
      </div>
    </section>
  );
}