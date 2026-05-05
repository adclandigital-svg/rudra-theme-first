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
      { threshold: 0.5 }
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
        <span className="subtitle">ABOUT SKYTRACK</span>

        <h2>
          Presenting SKYLIFE – A Lifestyle <br /> High on Ambition & Adrenaline
        </h2>

        <p>
          Presenting SKYLIFE. A life that will be peaceful yet exciting,
          comfortable yet adventurous. A lifestyle high on ambition, high on
          adrenaline, SKYLIFE will be your safe haven from the ever so congested
          cities and its suffocating lanes.
        </p>

        <p>
          Be its proximity to the Yamuna Expressway or adjacent to an emerging
          educational hub, the site also neighbors the upcoming world’s 4th
          largest Night Safari, offering you all the more fun, entertainment and
          thrill that a city life craves for.
        </p>
      </div>

      {/* RIGHT SIDE STATS */}
      <div className="about-right">
        <div className="stats-grid">
          <Counter end={14} label="Residential Towers" />
          <Counter end={9} label="Acres Development" />
          <Counter end={1700} label="Residential Units" />
          <Counter end={100} label="Connectivity Advantage" />
        </div>
      </div>
    </section>
  );
}