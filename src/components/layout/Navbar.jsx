"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import "./navbar.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navRef = useRef(null);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);
  const menuRef = useRef(null);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    // gsap.from(navRef.current, {
    //   y: -80,
    //   opacity: 0,
    //   duration: 1,
    // });

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.4,
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.6,
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.4,
      });
    }
  }, [menuOpen]);

  return (
    <>
      <header
        ref={navRef}
        className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}
      >
        <div className="navbar">
          <Link href="/" className="logo">
            <Image src="/logo.png" alt="logo" width={150} height={60} />
          </Link>
          <div className="nav-righ">
            {/* <Link href="#">Aquacasa</Link>
            <Link href="#">Palace Heights</Link>
            <Link href="#">Pavo Real</Link>
            <Link href="#">Skytracks</Link>
            <Link href="#">Uno</Link> */}
            <div
              className={`hamburger ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>

      <div
        ref={overlayRef}
        className="mobile-overlay"
        onClick={() => setMenuOpen(false)}
      />

      <div ref={sidebarRef} className="mobile-sidebar">
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </button>

        <nav ref={menuRef} className="sidebar-menu">
          {/* PROJECTS */}
          <div className="sidebar-project">
            <div className="menu-link ">
              <span>01</span> Projects
            </div>

            <div className="project-submenu">
              <Link href="/projects/aquacasa" className="menu-link">
                <span>01</span> Aquacasa
              </Link>
              <Link href="/projects/palaceheights" className="menu-link">
                <span>02</span> Palace Heights
              </Link>
              <Link href="/projects/pavoreal" className="menu-link">
                <span>03</span> Pavo Real
              </Link>
              <Link href="/projects/skytrack" className="menu-link">
                <span>04</span> Skytrack
              </Link>
              <Link href="/projects/uno" className="menu-link">
                <span>05</span> Uno
              </Link>
            </div>
          </div>

          <Link href="/about" className="menu-link">
            <span>02</span> About Rudra
          </Link>

          <Link href="/construction-updates" className="menu-link">
            <span>03</span> Construction Updates
          </Link>

          <Link href="/media-centre" className="menu-link">
            <span>04</span> Media Centre
          </Link>

          <Link href="/blogs" className="menu-link">
            <span>05</span> Blogs
          </Link>

          <Link href="/testimonials" className="menu-link">
            <span>06</span> Testimonials
          </Link>

          <Link href="/awards" className="menu-link">
            <span>07</span> Awards & Recognitions
          </Link>

          <Link href="/jv-dma-projects" className="menu-link">
            <span>08</span> Projects in JV & DMA
          </Link>

          <Link href="/faqs" className="menu-link">
            <span>09</span> Real Estate FAQs
          </Link>

          <Link href="/csr" className="menu-link">
            <span>10</span> CSR
          </Link>

          <Link href="/careers" className="menu-link">
            <span>11</span> Careers
          </Link>

          <Link href="/contact" className="menu-link">
            <span>12</span> Reach Us
          </Link>
        </nav>
        <div className="sidebar-bottom-section">
          <div>
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
            <a href="">
              <FaPhoneAlt />
            </a>
          </div>
          {/* <p className="phone">
            <a><FaPhoneAlt /></a>
            +91 9560895659
          </p> */}
        </div>
      </div>
    </>
  );
}
