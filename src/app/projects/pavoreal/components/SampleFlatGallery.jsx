"use client";

import { useState } from "react";
import "./gallery.css";

export default function SampleFlatGallery() {
  const [activeImg, setActiveImg] = useState(null);

  const images = [
  {
    thumb: "/projects/palace-heights/palaceheight-sf-big1.jpg",
    full: "/projects/palace-heights/palaceheight-sf-big1.jpg",
    title: "Kitchen",
  },
  {
    thumb: "/projects/palace-heights/palaceheight-sf-big2.jpg",
    full: "/projects/palace-heights/palaceheight-sf-big2.jpg",
    title: "Drawing / Dining",
  },
  {
    thumb: "/projects/palace-heights/palaceheight-sf-big3.jpg",
    full: "/projects/palace-heights/palaceheight-sf-big3.jpg",
    title: "Toilets",
  },
  {
    thumb: "/projects/palace-heights/palaceheight-sf-big4.jpg",
    full: "/projects/palace-heights/palaceheight-sf-big4.jpg",
    title: "Master Bedroom",
  },
];

  return (
    <section className="gallery-section">

      <div className="gallery-grid">
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-card"
            onClick={() => setActiveImg(img)}
          >
            <img src={img.thumb} alt={img.title} />
            <div className="overlay">
              <span>{img.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* POPUP */}
      {activeImg && (
        <div className="popup" onClick={() => setActiveImg(null)}>
          <span className="close">&times;</span>
          <img src={activeImg.full} alt="preview" />
        </div>
      )}
    </section>
  );
}
