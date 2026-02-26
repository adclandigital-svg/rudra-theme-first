"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./blog-section.css";

gsap.registerPlugin(ScrollTrigger);

export default function BlogSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
  const cards = gsap.utils.toArray(".blog-card", sectionRef.current);

  cards.forEach((card) => {
    gsap.from(card, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  ScrollTrigger.refresh();
}, { scope: sectionRef });

  return (
    <section className="blog-section" ref={sectionRef}>
      <div className="blog-header">
        <span>LATEST INSIGHTS</span>
        <h2>Blog & News Articles</h2>
      </div>

      <div className="blog-container">
        {/* Featured Article */}
        <div className="blog-featured blog-card">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200"
            alt="Luxury Development"
          />
          <div className="blog-content">
            <span className="category">Real Estate</span>
            <h3>Why Premium Living Spaces Are Redefining Urban Lifestyle</h3>
            <p>
              Explore how architectural excellence and smart investments are
              transforming modern cities.
            </p>
            <button>Read More</button>
          </div>
        </div>

        {/* Right Grid */}
        <div className="blog-grid">
          <div className="blog-card small">
            <img
              src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800"
              alt=""
            />
            <div className="blog-content">
              <span>Investment</span>
              <h4>Top 5 Investment Zones in Noida 2026</h4>
            </div>
          </div>

          <div className="blog-card small">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"
              alt=""
            />
            <div className="blog-content">
              <span>Architecture</span>
              <h4>Modern Luxury Design Trends</h4>
            </div>
          </div>

          <div className="blog-card small">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"
              alt=""
            />
            <div className="blog-content">
              <span>Market</span>
              <h4>Commercial Real Estate Growth Report</h4>
            </div>
          </div>

          {/* ✅ Fixed last image */}
          <div className="blog-card small">
            <img
              src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800"
              alt=""
            />
            <div className="blog-content">
              <span>Luxury</span>
              <h4>Sustainable Villas: Future of Green Living</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
