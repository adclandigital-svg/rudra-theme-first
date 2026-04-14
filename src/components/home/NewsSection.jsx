"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./news.css";

gsap.registerPlugin(ScrollTrigger);

const news = [
  {
    category: "Construction Update",
    title: "Rudra Project reaches new milestone in Noida Extension",
    date: "Jan 2026",
  },
  {
    category: "Real Estate",
    title: "Luxury housing demand increasing in Greater Noida",
    date: "Jan 2026",
  },
  {
    category: "Development",
    title: "New township planning announced near Yamuna Expressway",
    date: "Dec 2025",
  },
];

export default function NewsSection() {
  const ref = useRef(null);

  // useGSAP(() => {
  //   gsap.from(".news-card", {
  //     scrollTrigger: {
  //       trigger: ref.current,
  //       start: "top 80%",
  //     },
  //     opacity: 0,
  //     x: 60,
  //     stagger: 0.2,
  //     duration: 0.8,
  //     ease: "power3.out",
  //   });

  //   gsap.from(".news-left", {
  //     scrollTrigger: {
  //       trigger: ref.current,
  //       start: "top 80%",
  //     },
  //     opacity: 0,
  //     y: 40,
  //     duration: 1,
  //     ease: "power3.out",
  //   });
  // }, []);

  return (
    <div className="news-section-outer">
      <section className="news-section" ref={ref}>
        {/* LEFT SIDE */}
        <div className="news-left">
          <h2>
            Latest <span>News</span>
          </h2>

          <p>
            Stay updated with Rudra Buildcon’s latest project developments,
            construction milestones, and key achievements. Discover insights
            into our ongoing and completed projects, innovative building
            practices, and trends shaping the real estate industry.
          </p>

          <button>View All News</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="news-right">
          {news.map((item, i) => (
            <div className="news-card" key={i}>
              <div className="news-top">
                <span>{item.category}</span>
                <small>{item.date}</small>
              </div>

              <h3>{item.title}</h3>

              <div className="arrow">↗</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
