"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./services.css";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".service-card");

      gsap.from(cards, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="services-section">
      <div className="services-header">
        <span className="services-label">OUR EXPERTISE</span>
        <h2>
          What We Offer <br /> At Rudra Build <span>Noida</span>
        </h2>
        <div className="services-line"></div>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-number">01</div>
          <h3>Luxury Residential Projects</h3>
          <p>
            Premium apartments and villas designed with modern architecture and
            world-class amenities.
          </p>
        </div>

        <div className="service-card">
          <div className="service-number">02</div>
          <h3>Commercial Developments</h3>
          <p>
            Smart commercial spaces crafted for productivity, accessibility, and
            long-term value.
          </p>
        </div>

        <div className="service-card">
          <div className="service-number">03</div>
          <h3>Architectural Planning</h3>
          <p>
            Innovative designs blending functionality, aesthetics, and
            sustainability.
          </p>
        </div>

        <div className="service-card">
          <div className="service-number">04</div>
          <h3>Project Management</h3>
          <p>
            End-to-end execution ensuring quality, precision, and timely
            delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
