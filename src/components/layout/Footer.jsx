"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
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
            Explore our latest projects and discover homes crafted with
            precision and luxury.
          </p>

          <Link href="/brochure" className="footer-btn">
            Get Brochure 
          </Link>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/blogs">Blog</Link>
          </div>

          {/* Projects (match navbar) */}
          <div className="footer-col">
            <h4>Projects</h4>
            <Link href="/projects/aquacasa">Aquacasa</Link>
            <Link href="/projects/palace-heights">Palace Heights</Link>
            <Link href="/projects/pavo-real">Pavo Real</Link>
            <Link href="/projects/skytracks">Skytracks</Link>
            <Link href="/projects/uno">Uno</Link>
          </div>

          {/* Legal */}
          <div className="footer-col">
            <h4>Legal</h4>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <p>D-53 Okhla Phase-I New Delhi-110020</p>

            {/* Click to call */}
            {/* <a
              href="tel:+919560895659"
              className="footer-contact"
              style={{ fontFamily: "none" }}
            >
              +91 9560895659
            </a> */}

            {/* Email */}
            <a href="mailto:info@rudrabuildwell.com" className="footer-contact">
              info@rudrabuildwell.com
            </a>

            <div className="footer-socials">
              <a href="#" target="_blank">
                <FaFacebookF />
              </a>
              <a href="#" target="_blank">
                <FaInstagram />
              </a>
              <a href="#" target="_blank">
                <FaLinkedinIn />
              </a>
              <a href="#" target="_blank">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Rudra Buildwell — Crafted with Precision
      </div>
    </footer>
  );
}
