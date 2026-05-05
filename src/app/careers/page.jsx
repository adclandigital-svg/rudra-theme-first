"use client";

import "./careers.css";
import { Mail, Phone, Smartphone, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CareersPage() {
  const heroRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // HERO ANIMATION
    tl.from(heroRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
    });

    // LEFT CONTENT STAGGER
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

    // FORM SLIDE IN
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
  }, []);

  return (
    <>
      <div className="carrers-main-conatiner">

        {/* HERO */}
        <section className="careers-cta-new" ref={heroRef}>
          <div className="careers-cta-inner">
            <p className="careers-tag">Careers</p>

            <h2>
              Shape Your Future <br />
              <span>With Excellence</span>
            </h2>
          </div>
        </section>

        {/* CAREERS SECTION */}
        <section className="careers-contact-wrapper">

          {/* LEFT */}
          <div className="careers-contact-left" ref={leftRef}>
            <h1>Work With Us</h1>
            <p>
              At Rudra Buildwell, we create more than spaces — we build careers.
              Join a team driven by innovation, integrity, and excellence in
              real estate.
            </p>

            <div className="careers-contact-grid">
              <div className="careers-info-item">
                <Mail size={20} />
                <div>
                  <h4>HR Email</h4>
                  <p>Send your resume anytime</p>
                  <span>careers@rudrabuildwell.com</span>
                </div>
              </div>

              <div className="careers-info-item">
                <Phone size={20} />
                <div>
                  <h4>HR Contact</h4>
                  <p>Mon - Sat (10 AM - 6 PM)</p>
                  <span>+91 9560895659</span>
                </div>
              </div>

              <div className="careers-info-item">
                <Smartphone size={20} />
                <div>
                  <h4>Quick Response</h4>
                  <p>WhatsApp for faster communication</p>
                  <span>+91 9560895659</span>
                </div>
              </div>

              <div className="careers-info-item">
                <MapPin size={20} />
                <div>
                  <h4>Office Location</h4>
                  <p>Noida, Uttar Pradesh</p>
                  <span>India</span>
                </div>
              </div>
            </div>

            <div className="careers-extra">
              <h3>Why Join Rudra?</h3>
              <ul>
                <li>Growth-oriented work environment</li>
                <li>Premium real estate projects</li>
                <li>Collaborative culture</li>
                <li>Learning & growth opportunities</li>
              </ul>
            </div>

            <div className="careers-note">
              <p>
                We are always looking for passionate professionals in Sales,
                Marketing, Architecture, and Construction.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="careers-contact-form" ref={formRef}>
            <h3>Apply for Opportunities</h3>
            <p className="careers-form-sub">
              Fill in your details and upload your resume.
            </p>

            <form>
              <div className="careers-row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>

              <div className="careers-row">
                <input type="email" placeholder="Email Address" />
                <input type="text" placeholder="Phone Number" />
              </div>

              <input type="text" placeholder="Position Applying For" />
              <input type="file" className="careers-file" />
              <textarea placeholder="Tell us about yourself..." />

              <div className="careers-checkbox">
                <input type="checkbox" />
                <label>I agree to the Privacy Policy</label>
              </div>

              <button type="submit">Submit Application</button>
            </form>
          </div>

        </section>
      </div>
    </>
  );
}