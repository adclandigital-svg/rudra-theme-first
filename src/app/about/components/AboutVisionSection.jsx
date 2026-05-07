"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaBuilding,
  FaCity,
  FaLeaf,
} from "react-icons/fa";

import "./aboutVision.css";

export default function AboutVisionSection() {
  const { scrollY } = useScroll();

  // DIFFERENT FLOAT SPEEDS
  const largeImageY = useTransform(scrollY, [0, 2000], [0, -140]);
  const smallImageY = useTransform(scrollY, [0, 2000], [0, 100]);

  return (
    <section className="aboutvision-section">
      <div className="aboutvision-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="aboutvision-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="aboutvision-tag">
            <FaBuilding />
            ABOUT RUDRA BUILDWELL
          </span>

          <h2>
            Building <span>Modern Landmarks</span> That Define Urban Living
          </h2>

          <p>
            Rudra Buildwell has emerged as a trusted real estate brand focused
            on creating premium residential communities and future-ready urban
            developments across NCR. Every project reflects a strong commitment
            towards architecture, planning, quality construction and elevated
            lifestyle experiences.
          </p>

          <p>
            From luxury residences to integrated township concepts, Rudra
            combines innovation, sustainability and timeless design to shape
            spaces where families grow, communities thrive and lifestyles evolve
            beautifully.
          </p>

          <div className="aboutvision-points">
            <div>
              <FaCity />
              <span>Luxury Residential Developments</span>
            </div>

            <div>
              <FaLeaf />
              <span>Sustainable Urban Planning</span>
            </div>

            <div>
              <FaBuilding />
              <span>Modern Lifestyle Infrastructure</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGES */}
        <motion.div
          className="aboutvision-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="aboutvision-grid">
            {/* LARGE IMAGE */}
            <motion.div
              className="img-box large"
              style={{ y: largeImageY }}
            >
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop"
                alt=""
              />
            </motion.div>

            {/* SMALL IMAGE */}
            <motion.div
              className="img-box small"
              style={{ y: smallImageY }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
                alt=""
              />
            </motion.div>

            {/* EXPERIENCE CARD */}
            {/* <motion.div
              className="experience-card"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <h3>15+</h3>
              <p>Years of Real Estate Excellence</p>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}