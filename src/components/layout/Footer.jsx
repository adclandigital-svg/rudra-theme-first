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
            <Link href="/blogs">Blogs</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/awards">Awards</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Reach Us</Link>
          </div>

          {/* PROJECTS */}
          <div className="footer-col">
            <h4>Projects</h4>

            <Link href="/projects/aquacasa">Aquacasa</Link>
            <Link href="/projects/palaceheights">
              Palace Heights
            </Link>
            <Link href="/projects/pavoreal">Pavo Real</Link>
            <Link href="/projects/skytrack">Skytrack</Link>
            <Link href="/projects/uno">Uno</Link>
            <Link href="/jv-dma-projects">
              Projects in JV & DMA
            </Link>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4>Quick Links</h4>

            <Link href="/construction-updates">
              Construction Updates
            </Link>

            <Link href="/faqs">Real Estate FAQs</Link>

            <Link href="/csr">CSR Activities</Link>

            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/terms-and-conditions">
              Terms & Conditions
            </Link>
          </div>

          {/* CONTACT */}
          <div className="footer-col">
            <h4>Contact</h4>

            <p>D-53 Okhla Phase-I New Delhi-110020</p>

            <a
              href="tel:+919560895659"
              className="footer-contact"
            >
              <FaPhoneAlt />
              +91 9560895659
            </a>

            <a
              href="mailto:info@rudrabuildwell.com"
              className="footer-contact"
            >
              info@rudrabuildwell.com
            </a>

            <div className="footer-socials">
              <a
                href="https://www.facebook.com/"
                target="_blank"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
              >
                <FaYoutube />
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