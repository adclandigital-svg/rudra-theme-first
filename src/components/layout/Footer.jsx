"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";

import Link from "next/link";
import "./footer.css";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="rudra-footer">
      <div className="rudra-footer-container">
        {/* LEFT */}
        <div className="footer-left">
          <h2 className="footer-title">
            Your Future <br />
            <span>Our Foundation</span>
          </h2>

          <p className="footer-text">
            Discover thoughtfully designed residential and commercial spaces by
            Rudra Buildwell crafted for modern lifestyles, comfort and long-term
            value.
          </p>

          {/* <Link href="/brochure" className="footer-btn">
            Download Brochure
          </Link> */}
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          {/* COMPANY */}
          <div className="footer-col">
            <h4>Company</h4>

            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/media-centre">Media Centre</Link>
            <Link href="/blogs">Articles & Insights</Link>
            <Link href="/testimonials">Experiences That Speak</Link>
            <Link href="/awards">Awards</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Begin Your Journey With Us</Link>
          </div>

          {/* PROJECTS */}
          <div className="footer-col">
            <h4>Projects</h4>

            <Link href="/projects/aquacasa">Aquacasa</Link>
            <Link href="/projects/palaceheights">Palace Heights</Link>
            <Link href="/projects/pavoreal">Pavo Real</Link>
            <Link href="/projects/skytrack">Skytrack</Link>
            <Link href="/projects/uno">Uno</Link>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4>Quick Links</h4>

            <Link href="/construction-updates">Construction Updates</Link>
            <Link href="/jv-dma-projects">Projects in JV & DMA</Link>

            <Link href="/faqs">Your Property Questions Answered</Link>

            <Link href="/csr">CSR Activities</Link>

            <Link href="/privacy-policy">Privacy Policy</Link>

            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </div>

          {/* CONTACT */}
          <div className="footer-col">
            <h4>Contact</h4>

            <p className="footer-contact">
              <FaMapMarkerAlt /> &nbsp; D-53 Okhla Phase-I New Delhi-110020
            </p>

            <a href="tel:+919560895659" className="footer-contact">
              <FaPhoneAlt /> &nbsp; +91 9560895659
            </a>

            <a href="mailto:info@rudrabuildwell.com" className="footer-contact">
              <FaEnvelope /> &nbsp; info@rudrabuildwell.com
            </a>

            <div className="footer-socials">
              <a
                href="https://www.facebook.com/people/Rudra-Buildwell-Group/61573305010736/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/rudragroupofficials/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/channel/UCORJTK0QPYB40-jDkY1hu9w"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Rudra Buildwell. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
