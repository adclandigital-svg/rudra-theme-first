"use client";

import "./contact.css";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import {
  Truck,
  ShieldCheck,
  Headphones,
  CreditCard,
  CheckCircle,
} from "lucide-react";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ContactPage() {
  const heroRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // HERO
    tl.from(heroRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
    });

    // LEFT CONTENT (stagger)
    tl.from(
      leftRef.current.children,
      {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // FORM (slide from right)
    tl.from(
      formRef.current,
      {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.6"
    );

    // FEATURES (stagger bottom)
    tl.from(
      featuresRef.current.children,
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.4"
    );
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="contact-hero" ref={heroRef}>
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>Home / Contact</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-container">
          
          {/* LEFT */}
          <div className="contact-left" ref={leftRef}>
            <h3>Speak With Us</h3>
            <p>
              Have questions about our projects or need assistance? Our team is
              here to help you.
            </p>

            <div className="contact-info">
              <div className="info-item">
                <MapPin size={18} />
                <div>
                  <strong>Office Address</strong>
                  <p>
                    Rudra Buildwell Pvt. Ltd., Sector 63, Noida, Uttar Pradesh – 201301
                  </p>
                </div>
              </div>

              <div className="info-item">
                <Phone size={18} />
                <div>
                  <strong>Call Us</strong>
                  <p>+91 95608 95659</p>
                </div>
              </div>

              <div className="info-item">
                <Mail size={18} />
                <div>
                  <strong>Email</strong>
                  <p>sales@rudrabuildwell.com</p>
                </div>
              </div>

              <div className="info-item">
                <Globe size={18} />
                <div>
                  <strong>Website</strong>
                  <p>https://www.rudrabuildwell.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-right" ref={formRef}>
            <h3>Enquire Now</h3>
            <p>Fill the form and our team will get back to you shortly.</p>

            <form>
              <div className="row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>

              <div className="row">
                <input type="email" placeholder="Email Address" />
                <input type="text" placeholder="Phone Number" />
              </div>

              <textarea placeholder="Write your message..." />

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" ref={featuresRef}>
        <div className="feature-item">
          <Truck size={28} />
          <h4>Timely Delivery</h4>
          <p>Ensuring your home is delivered right on time.</p>
        </div>

        <div className="feature-item">
          <CheckCircle size={28} />
          <h4>Premium Construction</h4>
          <p>High-quality materials and expert craftsmanship.</p>
        </div>

        <div className="feature-item">
          <Headphones size={28} />
          <h4>24/7 Support</h4>
          <p>Always available to assist you at every step.</p>
        </div>

        <div className="feature-item">
          <ShieldCheck size={28} />
          <h4>Secure Investment</h4>
          <p>Safe and reliable real estate opportunities.</p>
        </div>

        <div className="feature-item">
          <CreditCard size={28} />
          <h4>Easy Payments</h4>
          <p>Flexible payment plans for your convenience.</p>
        </div>
      </section>

      {/* MAP */}
      <section className="map">
        <iframe
          src="https://maps.google.com/maps?q=noida&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
        ></iframe>
      </section>
    </>
  );
}