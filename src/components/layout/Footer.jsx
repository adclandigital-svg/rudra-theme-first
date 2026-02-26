"use client";

import "./footer.css";
// export default function Footer() {
//   return (
//     <footer className="lux-footer">
//       <div className="lux-footer-inner">

//         {/* Big Brand Section */}
//         <div className="lux-footer-top">
//           <h2 className="lux-footer-title">
//             RUDRA <span>BUILD</span>
//           </h2>
//           <p className="lux-footer-tagline">
//             Designing Landmarks. Defining Luxury Living.
//           </p>
//         </div>

//         {/* Grid Content */}
//         <div className="lux-footer-grid">

//           <div className="lux-col">
//             <h4>Explore</h4>
//             <a href="#">Projects</a>
//             <a href="#">Residences</a>
//             <a href="#">Commercial</a>
//             <a href="#">About Us</a>
//           </div>

//           <div className="lux-col">
//             <h4>Connect</h4>
//             <a href="#">Instagram</a>
//             <a href="#">LinkedIn</a>
//             <a href="#">Facebook</a>
//           </div>

//           <div className="lux-col">
//             <h4>Contact</h4>
//             <p>Mumbai, India</p>
//             <p>+91 98765 43210</p>
//             <p>info@rudrabuild.com</p>

//             <button className="lux-footer-btn">
//               Schedule a Visit
//               <span className="lux-arrow">→</span>
//             </button>
//           </div>

//         </div>

//         {/* Bottom */}
//         <div className="lux-footer-bottom">
//           <p>© {new Date().getFullYear()} Rudra Build — All Rights Reserved</p>
//         </div>

//       </div>
//     </footer>
//   );
// }

// "use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import "./footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="arch-footer">
      <div className="arch-footer-bg-text">RUDRA</div>

      <div className="arch-footer-container">
        
        {/* LEFT SECTION */}
        <div className="arch-footer-left">
          <h2>
            Building the Future <br />
            <span>of Luxury Living</span>
          </h2>

          <button className="arch-footer-btn">
            Get Brochure
            <span className="arch-arrow">↗</span>
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="arch-footer-right">

          {/* Company */}
          <div className="arch-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Careers</a>
          </div>

          {/* Legal */}
          <div className="arch-col">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>

          {/* Contact */}
          <div className="arch-col">
            <h4>Contact</h4>
            <p>Noida, India</p>
            <p>+919560895659</p>
            <p>info@rudrabuildwell.com</p>
          </div>

          {/* Social */}
          <div className="arch-col">
            <h4>Follow Us</h4>
            <div className="arch-socials">
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebookF />
              </a>

              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram />
              </a>

              <a href="https://www.linkedin.com/" target="_blank">
                <FaLinkedinIn />
              </a>

              <Link href="https://www.youtube.com/" target="_blank">
                <FaYoutube />
              </Link>
            </div>
          </div>

        </div>
      </div>

      <div className="arch-footer-bottom">
        © {new Date().getFullYear()} Rudra Buildwell — Crafted with Precision
      </div>
    </footer>
  );
}