"use client";

import { motion } from "framer-motion";
import "./CompanyTimeline.css";

const timelineData = [
  {
    year: "2008",
    title: "A Vision Of Luxury Begins",
    desc: "Rudra Buildwell was founded with a commitment to crafting timeless spaces that blend luxury living, architectural elegance, and modern urban experiences.",
  },
  {
    year: "2012",
    title: "Expanding Across Prime NCR",
    desc: "With a focus on premium developments, the brand expanded into high-growth locations across NCR, creating sophisticated residential destinations.",
  },
  {
    year: "2016",
    title: "Creating Landmark Communities",
    desc: "Introduced thoughtfully planned communities featuring world-class infrastructure, landscaped environments, and elevated lifestyle amenities.",
  },
  {
    year: "2020",
    title: "Redefining Modern Living",
    desc: "Delivered future-ready spaces designed around comfort, smart planning, sustainability, and refined contemporary architecture.",
  },
  {
    year: "2024",
    title: "A Trusted Name In Luxury Real Estate",
    desc: "Today, Rudra Buildwell continues to shape premium urban lifestyles through iconic developments built on trust, excellence, and innovation.",
  },
];

/* TOP */
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* LEFT CARD */
const leftAnimation = {
  hidden: {
    opacity: 0,
    x: -140,
    rotate: -6,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* RIGHT CARD */
const rightAnimation = {
  hidden: {
    opacity: 0,
    x: 140,
    rotate: 6,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CompanyTimeline() {
  return (
    <section className="timeline-section">
      <div className="timeline-container">
        {/* TOP CONTENT */}
        <motion.div
          className="timeline-top"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.3,
          }}
        >
          <p className="timeline-subtitle">OUR JOURNEY</p>

          <h2 className="timeline-title">
            Building Trust
            <span> Through Years</span>
            <br />
            Of Excellence
          </h2>

          <p className="timeline-description">
            From a small beginning to becoming a trusted real estate brand, our
            journey is driven by innovation, quality, and long-term
            relationships.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="timeline-wrapper">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={index % 2 === 0 ? leftAnimation : rightAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.25,
              }}
            >
              {/* DOT */}
              <motion.div
                className="timeline-dot"
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                viewport={{
                  once: false,
                }}
              />

              {/* CARD */}
              <motion.div
                className="timeline-card"
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 16,
                }}
              >
                <span className="timeline-year">{item.year}</span>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
