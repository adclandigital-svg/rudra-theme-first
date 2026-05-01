"use client";

import { useState } from "react";
import "./gallery.css";

export default function SampleFlatGallery() {
  const [activeImg, setActiveImg] = useState(null);

  const images = [
    {
      thumb: "http://rudrabuildwell.com/images/aquacasa-sf-big1.jpg",
      full: "http://rudrabuildwell.com/images/aquacasa-sf-big1.jpg",
      title: "Drawing / Dining",
    },
    {
      thumb: "http://rudrabuildwell.com/images/aquacasa-sf-big2.jpg",
      full: "http://rudrabuildwell.com/images/aquacasa-sf-big2.jpg",
      title: "Master Bedroom",
    },
    {
      thumb: "http://rudrabuildwell.com/images/aquacasa-sf-big3.jpg",
      full: "http://rudrabuildwell.com/images/aquacasa-sf-big3.jpg",
      title: "Kitchen",
    },
    {
      thumb: "http://rudrabuildwell.com/images/aquacasa-sf-big4.jpg",
      full: "http://rudrabuildwell.com/images/aquacasa-sf-big4.jpg",
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
