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
        <span className="subtitle">ABOUT PALACE HEIGHTS</span>

        <h2>
          Smart Living Spaces Designed <br /> For Comfort & Value
        </h2>

        <p>
          Palace Heights by Rudra Group offers thoughtfully designed 1, 2, 3 & 4
          BHK apartments in Greater Noida (West). These homes combine
          affordability with modern living, featuring well-ventilated layouts,
          spacious rooms, and a location that keeps you connected to everything
          important.
          Built for families who seek comfort without compromise, Palace Heights
          delivers a balanced lifestyle with practical design, peaceful
          surroundings, and long-term value.
        </p>

      </div>

      {/* RIGHT SIDE STATS */}
      <div className="stats-grid">
        <Counter end={4} label="BHK Options Available" />
        <Counter end={90} label="Apartments Garden Facing %" />
        <Counter end={2} label="Swimming Pools" />
        <Counter end={80} label="Open Green Area %" />
      </div>
    </section>
  );
}
