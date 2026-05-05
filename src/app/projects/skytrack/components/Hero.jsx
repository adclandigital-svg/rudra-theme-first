"use client";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">

      {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src="/project-video.mp4" type="video/mp4" />
        </video>

    </section>
  );
}