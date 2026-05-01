"use client";

import { useEffect, useRef, useState } from "react";
import "./project-about.css";

/* COUNTER */
function Counter({ end, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const duration = 1200;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(timer);
            }
            setCount(Math.floor(start));
          }, 16);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div className="stat-card" ref={ref}>
      <h2>{count}+</h2>
      <p>{label}</p>
    </div>
  );
}

export default function ProjectAbout() {
  return (
    <section className="project-about">
      {/* LEFT SIDE */}
      <div className="about-left">
        <span className="subtitle">ABOUT AQUACASA</span>

        <h2>
          A Sanctuary Where Nature, Luxury <br /> & Modern Living Coexist
        </h2>

        <p>
          Imagine waking up to fresh breezes, natural light, and peaceful
          surroundings. Aquacasa blends lakes, greenery, and modern living to
          offer a refined lifestyle with world-class amenities.
        </p>
      </div>

      {/* RIGHT SIDE STATS */}
      <div className="about-right">
        <div className="stats-grid">
          <Counter end={12} label="Residential Towers" />
          <Counter end={25} label="Acres Development" />
          <Counter end={500} label="Luxury Residences" />
          <Counter end={70} label="Open Green Space %" />
        </div>
      </div>
    </section>
  );
}
