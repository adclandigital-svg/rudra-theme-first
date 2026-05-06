"use client";

import React, { useState } from "react";
import "./awards.css";
import { FaTrophy, FaAward, FaMedal, FaStar } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default function AwardsPage() {
  const [selectedAward, setSelectedAward] = useState(null);

  const awards = [
    {
      icon: <FaTrophy />,
      title: "Best Emerging Developer",
      org: "Real Estate Excellence Awards",
      year: "2023",
      location: "Delhi NCR",
      desc: "Recognized for outstanding contribution in residential development and innovative planning across NCR.",
      img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad", // trophy stage
    },
    {
      icon: <FaAward />,
      title: "Excellence in Construction",
      org: "Infra Realty Summit",
      year: "2022",
      location: "India",
      desc: "Awarded for high-quality construction standards, timely delivery, and sustainable development practices.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c", // award ceremony
    },
    {
      icon: <FaMedal />,
      title: "Top Residential Project",
      org: "NCR Property Awards",
      year: "2023",
      location: "Greater Noida",
      desc: "Our flagship project was honored for premium design, luxury amenities, and customer satisfaction.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d", // stage lights award
    },
    {
      icon: <FaStar />,
      title: "Trusted Developer",
      org: "Homebuyers Choice",
      year: "2021",
      location: "North India",
      desc: "Awarded for transparency, trust, and strong client relationships in real estate development.",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    },
    {
      icon: <FaMedal />,
      title: "Top Residential Project",
      org: "NCR Property Awards",
      year: "2023",
      location: "Greater Noida",
      desc: "Our flagship project was honored for premium design, luxury amenities, and customer satisfaction.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d", // stage lights award
    },
    {
      icon: <FaStar />,
      title: "Trusted Developer",
      org: "Homebuyers Choice",
      year: "2021",
      location: "North India",
      desc: "Awarded for transparency, trust, and strong client relationships in real estate development.",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    },
  ];

  return (
    <div className="awards-page">
      {/* HERO */}

      <section className="awards-hero">
        <div className="container">
          <h1>Awards & Recognition</h1>

          <p className="hero-desc">
            Our journey is defined by innovation, trust, and a commitment to
            delivering high-quality residential and commercial spaces.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="awards-section">
        <div className="container">
          <h2>Our Achievements</h2>

          <div className="awards-grid">
            {awards.map((item, i) => (
              <div
                className="award-card"
                key={i}
                onClick={() => setSelectedAward(item)}
              >
                <div className="award-img">
                  <img src={item.img} alt={item.title} />
                  <span>{item.year}</span>
                </div>

                <div className="award-content">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPUP MODAL */}
      {selectedAward && (
        <div className="award-modal" onClick={() => setSelectedAward(null)}>
          <div className="award-modal-box" onClick={(e) => e.stopPropagation()}>
            {/* CLOSE ICON */}
            <div className="modal-close" onClick={() => setSelectedAward(null)}>
              <FaTimes />
            </div>

            <img src={selectedAward.img} alt="" />

            <div className="modal-content">
              <h2>{selectedAward.title}</h2>
              <p>
                <b>Organization:</b> {selectedAward.org}
              </p>
              <p>
                <b>Year:</b> {selectedAward.year}
              </p>
              <p>
                <b>Location:</b> {selectedAward.location}
              </p>
              <p className="desc">{selectedAward.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
