"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./about.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://img.freepik.com/premium-photo/bright-apartment-complex-model-with-angled-view_1288520-5651.jpg?w=1060",
  "https://img.freepik.com/premium-photo/high-angle-view-illuminated-city-street-buildings-night_1599837-110.jpg?w=740",
  "https://img.freepik.com/premium-photo/altufievo-district-moscow-night-reflections-background-hd_199726-10516.jpg?w=740",
  "https://img.freepik.com/premium-photo/sanya-hainan-china-january-25-2020-night-view-sanya-city-with-bright-multi-colored-illumination-buildings-structures-roads-sidewalks-poles-bridges_524378-1699.jpg",
];

export default function RudraAbout() {
  const sectionRef = useRef(null);

  const [index, setIndex] = useState(0); // ✅ MISSING (IMPORTANT)
  const [animate, setAnimate] = useState(false);

  // 🔁 Smooth Fade Loop
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // timing

    return () => clearInterval(interval);
  }, []);

  // 🎬 GSAP TEXT ANIMATION
  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el.querySelectorAll(".animate"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // when section enters viewport
          toggleActions: "play none none none", // play only once
        },
      },
    );
  }, []);

  return (
    <>
      <section className="rudra-about" ref={sectionRef}>
        {/* LEFT */}
        <div className="rudra-left">
          {" "}
          <h2 className="animate">
            {" "}
            Building Trust. <br /> Creating Landmarks.{" "}
          </h2>{" "}
          <p className="animate">
            {" "}
            <strong>Rudra Buildcon</strong> is a trusted name in real estate and
            construction, delivering high-quality residential and commercial
            projects with precision and innovation. With a commitment to
            excellence, we focus on creating spaces that combine functionality,
            aesthetics, and long-term value.{" "}
          </p>{" "}
          <p className="animate">
            {" "}
            From concept to completion, our expert team ensures every project
            meets global standards in design, safety, and sustainability. We
            believe in transparency, timely delivery, and building long-lasting
            relationships with our clients.{" "}
          </p>{" "}
          <button className="rudra-btn animate">
            Explore Our Projects
          </button>{" "}
        </div>

        {/* RIGHT IMAGE ANIMATION */}
        <div className="rudra-right">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`slide-img ${i === index ? "active" : ""}`}
              alt="project"
            />
          ))}
        </div>
      </section>
    </>
  );
}
