"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaNewspaper,
  FaTv,
  FaBuilding,
  FaPlay,
  FaArrowRight,
  FaChartLine,
  FaGlobeAsia,
  FaUsers,
  FaCamera,
  FaAward,
} from "react-icons/fa";

import "./media.css";

/* ========================= */
/* MOTION VARIANTS */
/* ========================= */

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const zoomIn = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* ========================= */
/* DATA */
/* ========================= */

const mediaData = {
  "News & Updates": [
    {
      title: "Rudra Aquacasa Recognized As Lake City Landmark",
      desc: "Rudra Aquacasa gained industry attention for its luxury lifestyle planning, water-inspired architecture and premium residential ecosystem in Greater Noida West.",
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop",
    },

    {
      title: "Expansion Across NCR Real Estate Market",
      desc: "Rudra Buildwell continued strengthening its presence across Delhi NCR with large-scale residential and township developments focused on modern urban living.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    },
  ],

  "Press Coverage": [
    {
      title: "Featured In Leading Realty Publications",
      desc: "Rudra Group was highlighted for innovative housing concepts, themed developments and customer-focused infrastructure planning.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop",
    },

    {
      title: "Industry Leadership Interviews",
      desc: "Company leadership shared insights on affordable luxury housing, future-ready communities and sustainable urban growth.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    },
  ],

  "TV Coverage": [
    {
      title: "Real Estate Business Coverage",
      desc: "Rudra projects and infrastructure developments were showcased across regional and business media platforms.",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
    },

    {
      title: "Luxury Housing Discussion Panel",
      desc: "Experts discussed evolving trends in premium housing and integrated township developments featuring Rudra projects.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    },
  ],

  "E-Magazine": [
    {
      title: "Rudra Lifestyle Edition",
      desc: "Digital magazine featuring premium project highlights, architecture philosophy and customer lifestyle experiences.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
    },

    {
      title: "Smart Urban Living Insights",
      desc: "A curated showcase of modern amenities, green planning and future-ready residential communities.",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    },
  ],

  "Outdoor Media": [
    {
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop",
    },

    {
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    },

    {
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    },

    {
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop",
    },
  ],
};

const stats = [
  {
    icon: <FaNewspaper />,
    number: "150+",
    label: "Media Mentions",
  },

  {
    icon: <FaTv />,
    number: "40+",
    label: "TV & Digital Features",
  },

  {
    icon: <FaUsers />,
    number: "20K+",
    label: "Lifestyle Homes Vision",
  },

  {
    icon: <FaGlobeAsia />,
    number: "15+",
    label: "Industry Recognitions",
  },
];

const timeline = [
  {
    year: "2013",
    title: "Majestic Landmark Recognition",
    desc: "Rudra Palace Heights received recognition as a major architectural landmark project.",
  },

  {
    year: "2014",
    title: "Affordable Housing Excellence",
    desc: "Rudra Group received awards for affordable housing and themed residential developments.",
  },

  {
    year: "2015",
    title: "Aquacasa Industry Recognition",
    desc: "Rudra Aquacasa earned awards for green planning, lifestyle design and urban innovation.",
  },

  {
    year: "2025",
    title: "Continued NCR Presence",
    desc: "Rudra Buildwell strengthened its identity with ongoing residential and commercial developments across NCR.",
  },
];

/* ========================= */
/* COMPONENT */
/* ========================= */

export default function MediaCenterPage() {
  const tabs = Object.keys(mediaData);

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="media-wrapper">
      {/* HERO */}

      <motion.section
        className="media-hero"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4 }}
      >
        <motion.div
          className="media-hero-content"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <span className="hero-badge">MEDIA CENTER</span>

          <h1>
            Building Stories That
            <span> Shape Skylines</span>
          </h1>

          <p>
            Explore our latest news, television coverage, digital magazines,
            press features, outdoor campaigns and media achievements.
          </p>

          <div className="hero-btns">
            <a href="#media-tabs" className="hero-btn primary">
              Explore Coverage
            </a>

            <a href="/contact" className="hero-btn secondary">
              Media Inquiry
            </a>
          </div>

          {/* FLOATING SHAPE */}

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hero-floating-shape"
          />
        </motion.div>
      </motion.section>

      {/* STATS */}

      <motion.section
        className="media-stats"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((item, i) => (
          <motion.div
            key={i}
            className="stat-card"
            variants={zoomIn}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >
            <div className="stat-icon">{item.icon}</div>

            <h2>{item.number}</h2>

            <p>{item.label}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* FEATURED STORY */}

      <section className="featured-story">
        <motion.div
          className="featured-image"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop"
            alt=""
          />
        </motion.div>

        <motion.div
          className="featured-content"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="featured-tag">FEATURED STORY</span>

          <h2>Luxury Residential Landmark Gains National Attention</h2>

          <p>
            Our flagship project has been recognized by multiple leading media
            houses for redefining luxury living, sustainable architecture and
            urban innovation.
          </p>

          <div className="featured-points">
            <div>
              <FaAward />
              <span>National Recognition</span>
            </div>

            <div>
              <FaChartLine />
              <span>High Media Reach</span>
            </div>

            <div>
              <FaBuilding />
              <span>Urban Innovation</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* MAIN SECTION */}

      <section className="media-page">
        {/* HEADER */}

        <motion.div
          className="media-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1>
            Media <span>Coverage</span>
          </h1>

          <p>Latest highlights, interviews, publications & outdoor branding</p>
        </motion.div>

        {/* TABS */}

        <div className="media-tabs" id="media-tabs">
          {tabs.map((tab, i) => (
            <motion.button
              key={i}
              layout
              whileHover={{
                y: -3,
                scale: 1.04,
              }}
              whileTap={{ scale: 0.96 }}
              className={`media-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* GRID */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="media-grid"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {mediaData[activeTab].map((item, i) => {
              /* OUTDOOR MEDIA */

              if (activeTab === "Outdoor Media") {
                return (
                  <motion.div
                    key={i}
                    className="media-image-card"
                    variants={zoomIn}
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedItem(item)}
                  >
                    <img src={item.image} alt="" />

                    <div className="image-overlay">
                      <FaCamera />
                    </div>
                  </motion.div>
                );
              }

              /* NORMAL CARDS */

              return (
                <motion.div
                  key={i}
                  className="media-card"
                  variants={fadeUp}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="media-image-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="media-img"
                    />
                  </div>

                  <div className="media-content">
                    <div className="media-badge">{activeTab}</div>

                    <h3>{item.title}</h3>

                    <p>{item.desc}</p>

                    <span className="read-more">
                      View Details <FaArrowRight />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* VIDEO SECTION */}

      <section className="video-section">
        <div className="section-heading">
          <h2>Video Highlights</h2>

          <p>Featured interviews & TV coverage</p>
        </div>

        <div className="video-grid">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="video-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop"
                alt=""
              />

              <div className="video-overlay">
                <FaPlay />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}

      <section className="media-timeline">
        <div className="section-heading">
          <h2>Media Journey</h2>

          <p>Our growth & recognition over the years</p>
        </div>

        <div className="timeline-wrap">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              className="timeline-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
            >
              <span>{item.year}</span>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GALLERY */}

      <section className="media-gallery">
        <div className="section-heading">
          <h2>Media Gallery</h2>

          <p>Captured moments from launches & campaigns</p>
        </div>

        <div className="gallery-grid">
          {[
            "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
          ].map((img, i) => (
            <motion.div
              key={i}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{
                scale: 1.05,
                y: -6,
              }}
            >
              <img src={img} alt="" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL */}

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="media-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="media-modal-content"
              initial={{
                scale: 0.7,
                opacity: 0,
                rotateX: -10,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                rotateX: 0,
              }}
              exit={{
                scale: 0.7,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 180,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedItem.image} alt="" />

              {selectedItem.title && (
                <div className="modal-text">
                  <h2>{selectedItem.title}</h2>

                  <p>{selectedItem.desc}</p>
                </div>
              )}

              <button onClick={() => setSelectedItem(null)}>×</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}