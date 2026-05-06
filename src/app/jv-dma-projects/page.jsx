"use client";

import "./demo.css";

export default function JVPage() {
  return (
    <div className="jv">
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="badge">Joint Venture Development</div>
          <h1>
            Turn Your Land Into <span className="highlight">High-Value Real Estate</span>
          </h1>
          <p className="hero-subtitle">
            Rudra Buildwell partners with landowners in Noida & Greater Noida 
            through transparent Joint Venture models to develop premium residential & commercial projects.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore JV Opportunity</button>
            <button className="btn-secondary">Watch 2-Min Video</button>
          </div>
          <div className="trust-bar">
            <span>✓ RERA Registered</span>
            <span>✓ 100% Transparent JV</span>
            <span>✓ 8+ Successful Projects</span>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS JV ================= */}
      <section className="intro-section">
        <div className="container">
          <h2 className="section-title">What is Joint Venture Development?</h2>
          <div className="content-grid">
            <div className="text-content">
              <p>
                A <strong>Joint Venture (JV)</strong> is a strategic partnership between a landowner and a professional developer. 
                You contribute the land, we handle everything else — approvals, design, construction, marketing & sales.
              </p>
              <p>
                Profits are shared as per a mutually agreed ratio, giving you significantly higher returns than selling the land outright.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= JV APPROACH ================= */}
      <section className="split-section">
        <div className="container">
          <div className="split-grid">
            <div className="left">
              <h2>Our JV Development Approach</h2>
              <p className="lead">
                In the fast-growing NCR market, we unlock the maximum potential of your land without you losing ownership control.
              </p>
            </div>
            <div className="right">
              <ul className="feature-list">
                <li>✔ Legally robust JV agreements</li>
                <li>✔ Clear revenue & profit sharing</li>
                <li>✔ End-to-end project execution</li>
                <li>✔ Market-leading design & planning</li>
                <li>✔ Regular updates & full transparency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS TIMELINE ================= */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">Our 6-Step JV Process</h2>
          
          <div className="timeline">
            {[
              "Land Identification & Feasibility Study",
              "Legal Due Diligence & Title Verification",
              "JV Agreement & Documentation",
              "Design, Approvals & Permissions",
              "Construction & Quality Execution",
              "Sales, Handover & Profit Distribution"
            ].map((step, index) => (
              <div className="timeline-step" key={index}>
                <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUE BANNER ================= */}
      <section className="value-banner">
        <div className="container">
          <h2>Unlock 2–3x Higher Returns Than Selling Your Land</h2>
          <p className="banner-sub">
            Let your land work harder for you through professional development in Noida & Greater Noida.
          </p>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">Key Benefits for Landowners</h2>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="icon">📈</div>
              <h3>Higher Returns</h3>
              <p>Substantially better ROI compared to outright land sale</p>
            </div>
            <div className="benefit-card">
              <div className="icon">🛠️</div>
              <h3>No Execution Hassle</h3>
              <p>We handle approvals, construction, and sales completely</p>
            </div>
            <div className="benefit-card">
              <div className="icon">📍</div>
              <h3>Asset Appreciation</h3>
              <p>Your land gains massive value in prime developing areas</p>
            </div>
            <div className="benefit-card">
              <div className="icon">🔐</div>
              <h3>Full Legal Security</h3>
              <p>Transparent agreements with complete legal protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY NCR ================= */}
      <section className="why-ncr">
        <div className="container">
          <h2>Why Joint Venture in Noida & Greater Noida?</h2>
          <p className="lead-text">
            One of India’s fastest-growing real estate corridors with excellent infrastructure, metro connectivity, 
            corporate presence, and consistent demand for quality housing.
          </p>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="projects-section">
        <div className="container">
          <h2 className="section-title">Our Successful Projects in NCR</h2>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">Rudra Aquacasa</div>
              <h3>Rudra Aquacasa</h3>
              <p>Greater Noida West</p>
            </div>
            
            <div className="project-card">
              <div className="project-image">Palace Heights</div>
              <h3>Palace Heights</h3>
              <p>Noida Extension</p>
            </div>
            
            <div className="project-card">
              <div className="project-image">Pavo Real</div>
              <h3>Pavo Real</h3>
              <p>Indirapuram</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to Transform Your Land into a Landmark Project?</h2>
          <p>Partner with Rudra Buildwell – Your trusted JV developer in NCR</p>
          <button className="btn-primary large">Contact Our JV Team Now</button>
          <p className="small">Or call us at <strong>+91 XXXXXXXXXX</strong></p>
        </div>
      </section>
    </div>
  );
}