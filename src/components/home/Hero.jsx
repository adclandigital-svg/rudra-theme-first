"use client";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">

      {/* VIDEO BACKGROUND */}
      <div className="hero-bg">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src="https://d1di04ifehjy6m.cloudfront.net/media/filer_public/9e/25/9e257999-1c41-43d1-a33c-656a08606260/brigade_promo_15sec_without_sound_comp.mp4" type="video/mp4" />
        </video>
      </div>

      {/* OVERLAY */}
      <div className="hero-overlay" />

      {/* SOCIALS */}
      <div className="hero-socials">
        <a><FaFacebookF /></a>
        <a><FaInstagram /></a>
        <a><FaTwitter /></a>
        <a><FaLinkedinIn /></a>
      </div>

      {/* TEXT CONTENT */}
      {/* <div className="hero-text">
        <span className="hero-subtitle">Luxury Living</span>

        <h1>
          Ultra Luxury <br />
          4 BHK Residences
        </h1>

        <p>
          Experience world-class architecture, premium interiors,
          and skyline views designed for modern luxury living.
        </p>

        <button className="hero-btn">
          Book Site Visit
        </button>
      </div> */}

    </section>
  );
}