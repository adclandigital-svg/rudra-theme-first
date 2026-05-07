"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaBuilding, FaAward, FaCity } from "react-icons/fa";
import "./imageShowcase.css";

export default function AboutHero() {
  return (
    <section className="about-hero">
      {/* BACKGROUND IMAGE */}
      <div className="about-hero-bg">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
          alt=""
        />
      </div>

      {/* OVERLAY */}
      <div className="about-overlay"></div>

      {/* FLOATING GRADIENTS */}
      <div className="hero-gradient hero-gradient-1"></div>
      <div className="hero-gradient hero-gradient-2"></div>

      {/* CONTENT */}
      <div className="about-hero-container">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="about-badge">
            <FaBuilding />
            ABOUT RUDRA
          </span>

          <h1>
            Crafting <span>Luxury Landmarks</span> Across NCR
          </h1>

          <p>
            Rudra Buildwell creates iconic residential communities blending
            architecture, lifestyle, innovation and long-term value. From luxury
            residences to modern integrated townships, every project is designed
            to elevate urban living experiences.
          </p>

          <div className="hero-actions">
            <a href="#about-story" className="hero-btn primary">
              Explore Legacy
              <FaArrowRight />
            </a>

            <a href="/projects" className="hero-btn secondary">
              View Projects
            </a>
          </div>

          {/* STATS */}
          <div className="hero-stats">
            <div className="hero-stat">
              <h3>15+</h3>
              <span>Years Legacy</span>
            </div>

            <div className="hero-stat">
              <h3>20K+</h3>
              <span>Luxury Homes Vision</span>
            </div>

            <div className="hero-stat">
              <h3>5+</h3>
              <span>Iconic Projects</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="hero-bottom-strip">
        <div className="strip-track">
          <span>Luxury Residences</span>
          <span>Urban Innovation</span>
          <span>Premium Architecture</span>
          <span>Sustainable Living</span>
          <span>Integrated Townships</span>
          <span>Luxury Residences</span>
          <span>Urban Innovation</span>
          <span>Premium Architecture</span>
        </div>
      </div>
    </section>
  );
}
