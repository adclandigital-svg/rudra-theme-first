"use client";

import "./location.css";

export default function LocationSection() {
  return (
    <section className="location-full">
      <iframe
        src="https://www.google.com/maps?q=28.6137714,77.4612338&z=15&output=embed"
        loading="lazy"
        allowFullScreen
      />
    </section>
  );
}