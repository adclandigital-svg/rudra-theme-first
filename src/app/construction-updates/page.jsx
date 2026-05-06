"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./GalleryPage.css";

gsap.registerPlugin(ScrollTrigger);
export const constructionProjects = [
  {
    project: "Skyline Residency",
    images: [
      {
        title: "Foundation Work",
        image:
          "https://img.magnific.com/premium-photo/luxury-penthouse-with-city-view_895118-37330.jpg?w=2000",
      },
      {
        title: "Structure Development",
        image:
          "https://img.magnific.com/premium-photo/luxury-penthouse-with-city-view_895118-37330.jpg?w=2000",
      },
    ],
  },
  {
    project: "Green Valley Homes",
    images: [
      {
        title: "Site Preparation",
        image:
          "https://img.magnific.com/premium-photo/luxury-penthouse-with-city-view_895118-37330.jpg?w=2000",
      },
      {
        title: "Ground Floor Slab",
        image:
          "https://img.magnific.com/premium-photo/luxury-penthouse-with-city-view_895118-37330.jpg?w=2000",
      },
    ],
  },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [modalImage, setModalImage] = useState(null);
  const imageRefs = useRef([]);

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  useEffect(() => {
    imageRefs.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        },
      );
    });
  }, [activeTab]);

  const activeProject = constructionProjects[activeTab];

  return (
    <section className="gallery-page">
      {/* HEADER */}
      <div className="gallery-header">
        <h1>
          <span>Project Construction Updates</span>
        </h1>
        <p>Track live progress of every project in real-time</p>
      </div>

      {/* TABS */}
      <div className="gallery-tabs">
        {constructionProjects.map((p, i) => (
          <button
            key={i}
            className={`tab-btn ${activeTab === i ? "active" : ""}`}
            onClick={() => setActiveTab(i)}
          >
            {p.project}
          </button>
        ))}
      </div>

      {/* ACTIVE PROJECT GRID */}
      <div className="gallery-grid">
        {activeProject.images.map((img, i) => (
          <div
            key={i}
            className="gallery-card"
            ref={(el) => (imageRefs.current[i] = el)}
            onClick={() => openModal(img)}
          >
            <img src={img.image} alt={img.title} />
            <div className="gallery-overlay">
              <h3>{img.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage.image} alt={modalImage.title} />
            <h3>{modalImage.title}</h3>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
