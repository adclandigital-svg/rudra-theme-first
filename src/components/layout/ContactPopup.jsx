"use client";

import { useEffect, useState } from "react";
import "./contact-popup.css";

export default function ContactPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div
        className="popup-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="popup-close" onClick={closePopup}>
          ✕
        </button>

        <h2>Let’s Build Something Amazing</h2>
        <p>Get in touch with our team today.</p>

        <form className="popup-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Your Message"></textarea>

          <button type="submit" className="popup-submit">
            Send Message →
          </button>
        </form>
      </div>
    </div>
  );
}