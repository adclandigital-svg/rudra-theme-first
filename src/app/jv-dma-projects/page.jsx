"use client";

import "./demo.css";
import {
  FaHome,
  FaHandshake,
  FaChartLine,
  FaFileContract,
  FaBuilding,
  FaMapMarkedAlt,
} from "react-icons/fa";

export default function JVPage() {
  return (
    <div className="jv">
      {/* HERO */}
      <section className="jv-hero">
        <div className="jv-hero-content">
          <h1>Transform Your Land Into a Landmark Project in NCR</h1>
          <p>
            Rudra Buildwell partners with landowners across Noida & Greater
            Noida to develop premium residential and commercial projects.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="jv-intro">
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e" />
        <div>
          <h2>What is Joint Venture Development?</h2>
          <p>
            Joint Venture (JV) Development is a strategic partnership between a
            landowner and a real estate developer, where the land is transformed
            into a high-value residential or commercial project. Instead of
            selling the land outright, the landowner collaborates with the
            developer to unlock its full potential.
          </p>

          <p>
            In this model, the developer manages the entire process — including
            design, approvals, construction, and sales — while the landowner
            benefits through a structured revenue or area-sharing agreement.
            This ensures higher returns, long-term asset growth, and zero
            execution burden for the landowner.
          </p>
        </div>
      </section>

      {/* SPLIT */}
      <section className="jv-split">
        {/* LEFT CONTENT */}
        <div className="jv-split-left">
          <h2>
            <FaHandshake /> Why Landowners Trust Rudra Buildwell
          </h2>

          <p>
            At Rudra Buildwell, we bring together deep market knowledge,
            structured execution, and transparent partnerships to transform land
            into high-value real estate assets across Noida, Greater Noida, and
            NCR.
          </p>

          <p>
            Our Joint Venture model is designed to maximize returns for
            landowners without the hassle of development. From feasibility
            analysis and legal approvals to construction and sales, we manage
            every stage with precision and accountability.
          </p>

          <p>
            With a strong focus on timely delivery, quality construction, and
            ethical practices, we ensure that every project creates long-term
            value — not just for today, but for the future.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="jv-split-cards">
          <div className="jv-split-card">
            <FaFileContract />
            <h3>Transparent Agreements</h3>
            <p>Clear JV structure with legally secure documentation.</p>
          </div>

          <div className="jv-split-card">
            <FaBuilding />
            <h3>End-to-End Execution</h3>
            <p>From planning to sales — everything managed by us.</p>
          </div>

          <div className="jv-split-card">
            <FaChartLine />
            <h3>High ROI Strategy</h3>
            <p>Optimized planning for maximum returns.</p>
          </div>

          <div className="jv-split-card">
            <FaHome />
            <h3>Quality Construction</h3>
            <p>Premium build standards with timely delivery.</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="jv-timeline">
        <h2>JV Development Process</h2>
        <p className="jv-timeline-sub">
          A structured and transparent journey from land evaluation to revenue
          generation.
        </p>

        <div className="jv-timeline-wrapper">
          <div className="jv-timeline-card">
            <div className="jv-icon">
              <FaMapMarkedAlt />
            </div>
            <span className="jv-step">01</span>
            <h3>Land Evaluation</h3>
            <p>
              Site visit, location analysis, and development potential
              assessment.
            </p>
          </div>

          <div className="jv-timeline-card">
            <div className="jv-icon">
              <FaFileContract />
            </div>
            <span className="jv-step">02</span>
            <h3>JV Agreement</h3>
            <p>
              Transparent legal structuring with clearly defined profit sharing.
            </p>
          </div>

          <div className="jv-timeline-card">
            <div className="jv-icon">
              <FaBuilding />
            </div>
            <span className="jv-step">03</span>
            <h3>Design & Approvals</h3>
            <p>Project planning, architecture, and government approvals.</p>
          </div>

          <div className="jv-timeline-card">
            <div className="jv-icon">
              <FaHome />
            </div>
            <span className="jv-step">04</span>
            <h3>Construction</h3>
            <p>Execution with quality control and timely delivery.</p>
          </div>

          <div className="jv-timeline-card">
            <div className="jv-icon">
              <FaChartLine />
            </div>
            <span className="jv-step">05</span>
            <h3>Sales & Revenue</h3>
            <p>Marketing, sales, and structured profit distribution.</p>
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="jv-banner">
        <div className="jv-banner-content">
          <h2>Your Land. Our Expertise. Maximum Value.</h2>
          <p>We transform land into premium real estate assets across NCR.</p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="jv-benefits">
        <div className="jv-benefits-header">
          <h2>Benefits for Landowners</h2>
          <p>
            Unlock the true potential of your land with a structured JV model
            that delivers higher returns, zero hassle, and long-term value
            creation.
          </p>
        </div>

        <div className="jv-benefits-grid">
          <div className="jv-benefit-card">
            <div className="jv-icon">
              <FaChartLine />
            </div>
            <h3>Higher ROI</h3>
            <p>
              Earn significantly more compared to outright land sale through
              structured profit sharing.
            </p>
          </div>

          <div className="jv-benefit-card">
            <div className="jv-icon">
              <FaHome />
            </div>
            <h3>Zero Hassle</h3>
            <p>
              No involvement in construction, approvals, or execution — we
              handle everything.
            </p>
          </div>

          <div className="jv-benefit-card">
            <div className="jv-icon">
              <FaBuilding />
            </div>
            <h3>Asset Appreciation</h3>
            <p>
              Your land transforms into a premium real estate asset with
              long-term value growth.
            </p>
          </div>

          <div className="jv-benefit-card">
            <div className="jv-icon">
              <FaFileContract />
            </div>
            <h3>Legal Security</h3>
            <p>
              Transparent agreements with full legal compliance ensure complete
              peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="jv-projects">
        <div className="jv-projects-header">
          <h2>Our NCR Developments</h2>
          <p>
            Explore our landmark residential projects across Noida, Greater
            Noida, and NCR — crafted with quality, design, and long-term value.
          </p>
        </div>

        <div className="jv-project-grid">
          {/* CARD 1 */}
          <div className="jv-project-card">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt=""
            />
            <div className="jv-project-overlay">
              <h3>Rudra Aquacasa</h3>
              <p>Greater Noida West</p>
              <span>Premium Residences</span>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="jv-project-card">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
              alt=""
            />
            <div className="jv-project-overlay">
              <h3>Palace Heights</h3>
              <p>Noida Extension</p>
              <span>Modern Living</span>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="jv-project-card">
            <img
              src="https://images.unsplash.com/photo-1599423300746-b62533397364"
              alt=""
            />
            <div className="jv-project-overlay">
              <h3>Pavo Real</h3>
              <p>Indirapuram</p>
              <span>Luxury Apartments</span>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="jv-partners jv-tabs-modern">
        <div className="jv-partners-header">
          <h2>Our Trusted Partners</h2>
          <p>
            We collaborate with leading professionals across architecture,
            construction, consulting, and legal domains.
          </p>
        </div>

        <div className="jv-partner-tabs">
          {/* ARCHITECTS */}
          <div className="jv-tab">
            <h3>Architects</h3>
            <div className="jv-logos">
              <img
                src="http://rudrabuildwell.com/images/left-hdil-logo.jpg"
                alt="Hafeez Contractor"
              />
              <img
                src="http://rudrabuildwell.com/images/left-hdil-logo.jpg"
                alt="ARCOP"
              />
              <img
                src="http://rudrabuildwell.com/images/left-hdil-logo.jpg"
                alt="CP Kukreja"
              />
            </div>
          </div>

          {/* CONTRACTORS */}
          <div className="jv-tab">
            <h3>Contractors</h3>
            <div className="jv-logos">
              <img
                src="http://rudrabuildwell.com/images/left-hdil-logo.jpg"
                alt="Hafeez Contractor"
              />
              <img
                src="http://rudrabuildwell.com/images/left-hdil-logo.jpg"
                alt="ARCOP"
              />
              <img
                src="http://rudrabuildwell.com/images/left-hdil-logo.jpg"
                alt="CP Kukreja"
              />
            </div>
          </div>

          {/* CONSULTANTS */}
          <div className="jv-tab">
            <h3>Consultants</h3>
            <div className="jv-logos">
              <img
                src="http://rudrabuildwell.com/images/left-hdil-logo.jpg"
                alt="Hafeez Contractor"
              />
              <img
                src="http://rudrabuildwell.com/images/left-hdil-logo.jpg"
                alt="ARCOP"
              />
              <img
                src="http://rudrabuildwell.com/images/left-hdil-logo.jpg"
                alt="CP Kukreja"
              />
            </div>
          </div>

          {/* LEGAL & FINANCE */}
          <div className="jv-tab">
            <h3>Legal & Finance</h3>
            <div className="jv-logos">
              <img
                src="http://rudrabuildwell.com/images/left-hdil-logo.jpg"
                alt="Hafeez Contractor"
              />
              <img
                src="http://rudrabuildwell.com/images/left-hdil-logo.jpg"
                alt="ARCOP"
              />
              <img
                src="http://rudrabuildwell.com/images/left-hdil-logo.jpg"
                alt="CP Kukreja"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
