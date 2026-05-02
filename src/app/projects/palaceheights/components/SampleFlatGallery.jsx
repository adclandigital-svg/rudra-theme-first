"use client";

import { useState } from "react";
import "./gallery.css";

export default function SampleFlatGallery() {
  const [activeImg, setActiveImg] = useState(null);

  const images = [
    {
      thumb: "/projects/aquacase/aquacasa-sf-big1.jpg",
      full: "/projects/aquacase/aquacasa-sf-big1.jpg",
      title: "Drawing / Dining",
    },
    {
      thumb: "/projects/aquacase/aquacasa-sf-big2.jpg",
      full: "/projects/aquacase/aquacasa-sf-big2.jpg",
      title: "Master Bedroom",
    },
    {
      thumb: "/projects/aquacase/aquacasa-sf-big3.jpg",
      full: "/projects/aquacase/aquacasa-sf-big3.jpg",
      title: "Kitchen",
    },
    {
      thumb: "/projects/aquacase/aquacasa-sf-big4.jpg",
      full: "/projects/aquacase/aquacasa-sf-big4.jpg",
      title: "Toilets",
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
