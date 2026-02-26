// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import gsap from "gsap";
// import "./navbar.css";

// export default function Navbar() {
//   const navRef = useRef(null);
//   const sidebarRef = useRef(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     gsap.from(navRef.current, {
//       y: -80,
//       opacity: 0,
//       duration: 1.2,
//       ease: "power4.out",
//     });
//   }, []);

//   // Animate sidebar on menu toggle
//   useEffect(() => {
//     if (menuOpen) {
//       gsap.to(sidebarRef.current, {
//         x: 0,
//         opacity: 1,
//         duration: 0.3,
//         ease: "power3.out",
//       });
//     } else {
//       gsap.to(sidebarRef.current, {
//         x: "100%",
//         opacity: 0,
//         duration: 0.3,
//         ease: "power3.out",
//       });
//     }
//   }, [menuOpen]);

//   const handleLinkClick = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <>
//       <header ref={navRef} className="navbar-wrapper">
//         <div className="navbar">
          
//           <Link href="/" className="logo">
//            <img src="/logo.png" alt="" width={100} />
//           </Link>

//           <nav className="nav-links">
//             <Link href="/">Home</Link>
//             <Link href="/about">About</Link>
//             <Link href="/projects">Projects</Link>
//             <Link href="/contact">Contact</Link>
//           </nav>

//           <button className="nav-btn">Enquiry &nbsp;→ </button>

//           <div 
//             className={`hamburger ${menuOpen ? "open" : ""}`}
//             onClick={() => setMenuOpen(!menuOpen)}
//             role="button"
//             tabIndex={0}
//             aria-label="Toggle menu"
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>

//         </div>
//       </header>

//       {/* Mobile Sidebar */}
//       <div 
//         ref={sidebarRef} 
//         className="mobile-sidebar"
//         style={{ transform: "translateX(100%)", opacity: 0 }}
//       >
//         <div className="sidebar-content">
//           <div className="sidebar-header">
//             <h2>Menu</h2>
//             <button 
//               className="close-btn"
//               onClick={() => setMenuOpen(false)}
//               aria-label="Close menu"
//             >
//               ✕
//             </button>
//           </div>

//           <nav className="sidebar-links">
//             <Link href="/" onClick={handleLinkClick}>Home</Link>
//             <Link href="/about" onClick={handleLinkClick}>About</Link>
//             <Link href="/projects" onClick={handleLinkClick}>Projects</Link>
//             <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
//           </nav>

//           <button className="sidebar-enquire-btn">Enquire Now</button>
//         </div>
//       </div>

//       {/* Overlay */}
//       {menuOpen && (
//         <div 
//           className="mobile-overlay" 
//           onClick={() => setMenuOpen(false)}
//           role="button"
//           tabIndex={-1}
//           aria-label="Close menu"
//         />
//       )}
//     </>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import "./navbar.css";

export default function Navbar() {
  const navRef = useRef(null);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Navbar animation + scroll detection
  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sidebar animation
  useEffect(() => {
    if (menuOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.5,
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
        duration: 0.5,
        ease: "power3.in",
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

          {/* Left Nav */}
          <nav className="nav-left">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            
            {/* <Link href="/projects">Projects</Link> */}
          </nav>

          {/* Center Logo */}
          <Link href="/" className="logo">
            <Image
              src="/logo.png"
              alt="Rudra Build Logo"
              width={170}
              height={60}
              priority
              className="logo-img"
            />
          </Link>

          {/* Right Nav */}
          <nav className="nav-right">
            <Link href="/projects">Projects</Link>
            <button className="nav-btn">
              <span>Enquiry</span>
            </button>
          </nav>

          {/* Hamburger */}
          <div
            className="hamburger"
            onClick={() => setMenuOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </header>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="mobile-overlay"
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar */}
      <div ref={sidebarRef} className="mobile-sidebar">
        <div className="sidebar-content">

          <button
            className="close-btn"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          <button className="sidebar-btn">Enquiry Now</button>

        </div>
      </div>
    </>
  );
}
