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
        <span className="subtitle">ABOUT PAVO REAL</span>

        <h2>
          Premium Living Crafted <br /> For Modern Lifestyles
        </h2>

        <p>
          Pavo Real is a thoughtfully designed residential development that
          blends modern architecture with a lifestyle-focused environment.
          Offering spacious and well-planned homes, the project is built to
          deliver comfort, convenience, and elegance in every detail. With
          contemporary amenities, open green spaces, and seamless connectivity,
          Pavo Real creates a perfect setting for families seeking a refined and
          future-ready living experience.
        </p>
      </div>

      {/* RIGHT SIDE STATS */}
      <div className="stats-grid">
        <Counter end={7.5} label="Acres Premium Living" />
        <Counter end={80} label="Green Open Space %" />
        <Counter end={80} label="Corner & Green Facing Units %" />
        <Counter end={100} label="Lifestyle Amenities %" />
      </div>
    </section>
  );
}
