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

export default function Footer() {
  return (
    <footer className="arch-footer">
      <div className="arch-footer-bg-text">RUDRA</div>

      <div className="arch-footer-container">
        
        {/* Left Large Section */}
        <div className="arch-footer-left">
          <h2>
            Building the Future<br />
            <span>of Luxury Living</span>
          </h2>

          <button className="arch-footer-btn">
            Get Brochure
            <span className="arch-arrow">↗</span>
          </button>
        </div>

        {/* Right Grid Section */}
        <div className="arch-footer-right">

          <div className="arch-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Careers</a>
          </div>

          <div className="arch-col">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>

          <div className="arch-col">
            <h4>Contact</h4>
            <p>Mumbai, India</p>
            <p>+91 98765 43210</p>
            <p>info@rudrabuild.com</p>
          </div>

        </div>
      </div>

      <div className="arch-footer-bottom">
        © {new Date().getFullYear()} Rudra Build — Crafted with Precision
      </div>
    </footer>
  );
}