"use client";

import { motion } from "framer-motion";
import "./StairTypesSection.css";

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function FeaturesSection() {
  return (
    <section className="features-section">
      {/* BACKGROUND IMAGE */}
      <div className="features-bg">
        <img
          src="https://picsum.photos/id/1015/1600/900"
          alt="Luxury Villa"
          className="bg-image"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="features-overlay"></div>

      {/* CONTENT */}
      <div className="features-container">

        {/* LEFT TEXT */}
        <motion.div
          className="features-left"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="features-subtitle">WHY CHOOSE US</p>

          <h2 className="features-title">
            Spaces Crafted
            <span> For Modern</span>
            <br />
            Luxury Living
          </h2>

          <p className="features-description">
            We create premium residential experiences with modern
            architecture, world-class amenities, and thoughtfully
            planned spaces designed for comfort and elegance.
          </p>
        </motion.div>

        {/* RIGHT FLOATING CARDS */}
        <motion.div
          className="features-right"
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          <motion.div
            className="feature-card"
            variants={cardAnimation}
          >
            <div className="feature-icon">🏠</div>

            <div>
              <h3>Luxury Residences</h3>

              <p>
                Elegant homes with premium design and smart layouts.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="feature-card active-card"
            variants={cardAnimation}
          >
            <div className="feature-icon">🌿</div>

            <div>
              <h3>Green Environment</h3>

              <p>
                Landscaped gardens and eco-friendly surroundings.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="feature-card active-card"
            variants={cardAnimation}
          >
            <div className="feature-icon">🏛️</div>

            <div>
              <h3>Modern Infrastructure</h3>

              <p>
                Future-ready developments with top-class amenities.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="feature-card"
            variants={cardAnimation}
          >
            <div className="feature-icon">💼</div>

            <div>
              <h3>Trusted Expertise</h3>

              <p>
                Delivering reliable real estate solutions with
                transparency.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}