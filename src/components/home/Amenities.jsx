"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./amenities.css";

gsap.registerPlugin(ScrollTrigger);
const highlights = [
  {
    title: "Engineered for Strength & Longevity",
    desc: "Every structure is designed with advanced RCC standards, ensuring unmatched durability, safety, and long-term performance.",
  },
  {
    title: "Premium-Grade Construction Materials",
    desc: "We use only certified, high-quality materials sourced from trusted vendors to deliver superior finishing and lasting value.",
  },
  {
    title: "Transparent & Ethical Execution",
    desc: "From planning to possession, we maintain complete transparency in cost, process, and project updates for total client confidence.",
  },
  {
    title: "Modern Construction Technology",
    desc: "We integrate advanced engineering methods and smart construction practices for faster, efficient, and precise project delivery.",
  },
];

export default function TrustSection() {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.from(".stat", {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".highlight", {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 70%",
      },
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });
  });

  return (
    <section className="trust" ref={ref}>
      {/* HEADER */}
      <div className="trust-header">
        <h2>
          Building Trust Through <span>Quality & Engineering</span>
        </h2>
      </div>

      {/* QUALITY POINTS */}
      <div className="highlights">
        {highlights.map((item, i) => (
          <div className="highlight" key={i}>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
