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
        <span className="subtitle">ABOUT RUDRA UNO</span>

        <h2>
          Luxury Living
          <br />
          In The Heart Of Noida
        </h2>

        <p>
          Rudra Uno is a premium residential destination in Sector 150, Noida,
          offering modern architecture, golf course views, lush green
          landscapes, and world-class lifestyle amenities.
        </p>

        <p>
          With iconic towers, infinity pools, luxury club facilities, and
          excellent connectivity to Noida Expressway and the upcoming Jewar
          Airport, Rudra Uno delivers an elevated urban living experience.
        </p>
      </div>

      {/* RIGHT SIDE STATS */}
      <div className="about-right">
        <div className="stats-grid">
          <Counter end={4} label="Luxury Towers" />

          <Counter end={208} label="Premium Residences" />

          <Counter end={33} label="Storey High Rise" />

          <Counter end={4} label="Acres Development" />
        </div>
      </div>
    </section>
  );
}
