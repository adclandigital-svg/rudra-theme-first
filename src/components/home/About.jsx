// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import "./about.css";

// export default function AboutSection() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     gsap.from(".about-heading", {
//       y: 60,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.out",
//     });

//     gsap.from(".about-text", {
//       y: 60,
//       opacity: 0,
//       duration: 1,
//       delay: 0.2,
//       ease: "power3.out",
//     });

//     gsap.from(".about-image-wrapper", {
//       scale: 0.9,
//       opacity: 0,
//       duration: 1.2,
//       delay: 0.3,
//       ease: "power4.out",
//     });
//   }, []);

//   return (
//     <section ref={sectionRef} className="about-section">
      
//       {/* Background Watermark */}
//       <div className="about-watermark">RUDRA</div>

//       <div className="about-container">

//         {/* Left Content */}
//         <div className="about-content">
//           <span className="about-subtitle">About Us</span>

//           <h2 className="about-heading">
//             Crafting Timeless Spaces <br /> That Define Lifestyle
//           </h2>

//           <div className="gold-line"></div>

//           <p className="about-text">
//             At <strong>Rudra Build</strong>, we don’t just construct buildings —
//             we create architectural experiences that stand as symbols of
//             excellence. With precision engineering, premium materials, and a
//             passion for design, every project reflects trust, innovation, and
//             lasting value.
//           </p>

//           <p className="about-text">
//             Our vision is simple: deliver landmark developments that elevate
//             communities and redefine modern living.
//           </p>

//           <button className="about-btn">
//             Discover Our Vision →
//           </button>
//         </div>

//         {/* Right Image */}
//         <div className="about-image-wrapper">
//           <img
//             src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//             alt="Luxury Building"
//             className="about-image"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".about-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".about-para", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".about-img-box", {
        x: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="about-section">

      <div className="about-wrapper">

        {/* Image Side */}
        <div className="about-img-box">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Luxury Real Estate"
          />

          <div className="about-floating-card">
            <h3>15+</h3>
            <p>Years of Excellence</p>
          </div>
        </div>

        {/* Content Side */}
        <div className="about-content">
          <span className="about-label">ABOUT RUDRA BUILD</span>

          <h2 className="about-title">
            Designing Landmarks <br /> That Inspire Generations
          </h2>

          <div className="about-line"></div>

          <p className="about-para">
            At <strong>Rudra Build</strong>, we shape the future of living
            through visionary architecture and uncompromising quality.
            Every project reflects precision craftsmanship and refined
            aesthetics.
          </p>

          <p className="about-para">
            Our developments stand as lasting symbols of trust, elegance,
            and innovation in modern real estate.
          </p>

          <button className="about-btn">
            Explore Our Story →
          </button>
        </div>

      </div>
    </section>
  );
}