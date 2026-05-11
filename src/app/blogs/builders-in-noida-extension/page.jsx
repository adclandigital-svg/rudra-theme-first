"use client";

import React, { useEffect, useState } from "react";
import "./luxuryBlogDetails.css";

const luxuryBlogSections = [
  {
    id: "luxury-intro",
    title: "Builders in Noida Extension",
  },
  {
    id: "luxury-hotspot",
    title: "Why Noida Extension is a Hotspot for Residential Projects",
  },
  {
    id: "luxury-builders",
    title: "Key Players Among Builders in Noida Extension",
  },
  {
    id: "luxury-quality",
    title: "What Distinguishes Top Builders in Noida Extension?",
  },
  {
    id: "luxury-framework",
    title: "Evaluating Builder Credentials: A Practical Framework",
  },
  {
    id: "luxury-landscape",
    title: "The Evolving Landscape of Noida Extension Projects",
  },
  {
    id: "luxury-process",
    title: "Navigating the Purchase Process",
  },
  {
    id: "luxury-areas",
    title: "Emerging Areas Within Noida Extension",
  },
  {
    id: "luxury-faq",
    title: "Frequently Asked Questions",
  },
  {
    id: "luxury-future",
    title: "The Future of Construction in Noida Extension",
  },
];

export default function Page() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      luxuryBlogSections.forEach((section) => {
        const el = document.getElementById(section.id);

        if (
          el &&
          scrollPosition >= el.offsetTop &&
          scrollPosition < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="luxury-blog-wrapper">
      {/* HERO */}
      <section className="luxury-blog-hero">
        <img
          src="/blogs/5-details.png"
          alt="Builders in Noida Extension"
          className="luxury-blog-hero-image"
        />
      </section>

      <div className="luxury-blog-layout">
        {/* TABLE OF CONTENT */}
        <aside className="luxury-blog-sidebar">
          <h3>Table of Contents</h3>

          <ul>
            {luxuryBlogSections.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={
                  activeSection === item.id
                    ? "luxury-blog-active"
                    : ""
                }
              >
                {item.title}
              </li>
            ))}
          </ul>
        </aside>

        {/* BLOG CONTENT */}
        <div className="luxury-blog-content">

          <section id="luxury-intro">
            <h2>Builders in Noida Extension</h2>

            <p>
              Builders in Noida Extension: A Guide to Trusted Real Estate Developers
            </p>

            <p>
              Noida Extension (now officially known as Greater Noida West) has emerged as one of the most sought-after residential hubs in the National Capital Region.
            </p>

            <p>
              Its strategic location, excellent connectivity via the Noida-Greater Noida Expressway, and comparatively affordable pricing have made it a magnet for homebuyers and investors alike.
            </p>
          </section>

          <section id="luxury-hotspot">
            <h2>Why Noida Extension is a Hotspot for Residential Projects</h2>

            <p>
              The area's development is largely driven by visionary builders who recognized its potential early.
            </p>

            <p>
              These developers have transformed what was once agricultural land into a thriving urban landscape with:
            </p>

            <ul>
              <li>Integrated townships</li>
              <li>High-rise apartments with modern amenities</li>
              <li>Commercial complexes supporting local economies</li>
              <li>Green spaces and sustainable design elements</li>
            </ul>
          </section>

          <section id="luxury-builders">
            <h2>Key Players Among Builders in Noida Extension</h2>

            <h3>1. Reputed National Developers</h3>

            <p>
              Several nationally recognized construction firms have established landmark projects in Noida Extension.
            </p>

            <h3>Gaurs Group</h3>

            <ul>
              <li>Quality construction and timely deliveries</li>
              <li>Earthquake-resistant RCC frame structures</li>
              <li>VASTU-compliant designs</li>
              <li>Smart home automation options</li>
            </ul>

            <h3>Amit Enterprises</h3>

            <ul>
              <li>Thoughtful space utilization</li>
              <li>Community-centric amenities</li>
              <li>Transparent payment plans</li>
            </ul>

            <h3>2. Local Specialists with Deep Market Knowledge</h3>

            <h3>Shri Group</h3>

            <ul>
              <li>Compact yet functional designs</li>
              <li>Neighborhood-specific infrastructure development</li>
              <li>Post-possession maintenance services</li>
            </ul>

            <h3>Gaur Sons</h3>

            <ul>
              <li>Mixed-use developments</li>
              <li>Emphasis on walkability</li>
              <li>Integration with public transport networks</li>
            </ul>
          </section>

          <section id="luxury-quality">
            <h2>What Distinguishes Top Builders in Noida Extension?</h2>

            <h3>Construction Quality Benchmarks</h3>

            <p>
              Leading developers adhere to strict quality protocols:
            </p>

            <ul>
              <li>Use of M25 grade concrete for foundations</li>
              <li>ISI-certified electrical fittings</li>
              <li>Double-layer waterproofing in bathrooms</li>
              <li>8-inch thick exterior walls for insulation</li>
            </ul>

            <h3>Amenities That Add Real Value</h3>

            <ul>
              <li>Climate-adaptive features: Solar panels, north-facing windows</li>
              <li>Community spaces: Co-working lounges, hobby rooms</li>
              <li>Security: Facial recognition systems, drone surveillance</li>
            </ul>
          </section>

          <section id="luxury-framework">
            <h2>Evaluating Builder Credentials: A Practical Framework</h2>

            <p>
              When assessing builders in Noida Extension, consider this four-point checklist:
            </p>

            <h3>Delivery Track Record</h3>

            <ul>
              <li>Percentage of projects delivered on time</li>
              <li>Handling of COVID-era delays</li>
              <li>RERA compliance history</li>
            </ul>

            <h3>Financial Stability</h3>

            <ul>
              <li>Debt-to-equity ratios</li>
              <li>Escrow account utilization</li>
              <li>Customer refund policies</li>
            </ul>

            <h3>Customer Service</h3>

            <ul>
              <li>Grievance redressal time</li>
              <li>Owner's association support</li>
              <li>Maintenance responsiveness</li>
            </ul>

            <h3>Innovation Index</h3>

            <ul>
              <li>Adoption of new construction technologies</li>
              <li>Sustainable practices</li>
              <li>Smart city integrations</li>
            </ul>
          </section>

          <section id="luxury-landscape">
            <h2>The Evolving Landscape of Noida Extension Projects</h2>

            <p>
              Recent trends show builders adapting to new market demands:
            </p>

            <h3>Hybrid Work Spaces</h3>

            <ul>
              <li>Soundproof study rooms</li>
              <li>High-speed internet infrastructure</li>
              <li>Package receipt systems for WFH professionals</li>
            </ul>

            <h3>Health-Conscious Design</h3>

            <ul>
              <li>Anti-pollution air filtration</li>
              <li>Jogging tracks with air quality monitors</li>
              <li>Organic waste composting systems</li>
            </ul>
          </section>

          <section id="luxury-process">
            <h2>Navigating the Purchase Process</h2>

            <h3>Step-by-Step Guide to Buying from Reputable Builders</h3>

            <h3>Shortlisting Phase</h3>

            <ul>
              <li>Compare multiple projects within your budget</li>
              <li>Verify RERA registration numbers</li>
              <li>Check land title clearances</li>
            </ul>

            <h3>Site Visit Essentials</h3>

            <ul>
              <li>Inspect sample flats with a contractor</li>
              <li>Assess actual sunlight exposure</li>
              <li>Test water pressure in upper floors</li>
            </ul>

            <h3>Financial Considerations</h3>

            <ul>
              <li>Understand the full payment schedule</li>
              <li>Compare home loan tie-ups</li>
              <li>Account for additional charges (parking, club memberships)</li>
            </ul>
          </section>

          <section id="luxury-areas">
            <h2>Emerging Areas Within Noida Extension</h2>

            <p>
              While the entire zone is developing rapidly, certain pockets show particular promise:
            </p>

            <h3>Tech Zone Corridor</h3>

            <ul>
              <li>Proximity to proposed metro extensions</li>
              <li>Tech-enabled apartment complexes</li>
              <li>Nearby retail and entertainment options</li>
            </ul>

            <h3>Green Belt Sector</h3>

            <ul>
              <li>Lower density developments</li>
              <li>Proximity to proposed schools</li>
              <li>Ample green spaces</li>
            </ul>
          </section>

          <section id="luxury-faq">
            <h2>Frequently Asked Questions</h2>

            <div className="luxury-blog-faq">
              <h4>Q: How do Noida Extension prices compare to Noida proper?</h4>

              <p>
                Typically 20-30% lower for comparable specifications, though the gap is narrowing as infrastructure improves.
              </p>
            </div>

            <div className="luxury-blog-faq">
              <h4>Q: What are the ongoing maintenance charges in most projects?</h4>

              <p>
                Ranging from ₹2-5 per sq ft monthly, depending on amenities offered.
              </p>
            </div>

            <div className="luxury-blog-faq">
              <h4>Q: Are there any hidden costs when buying from top builders?</h4>

              <p>
                Reputable developers provide all cost breakdowns upfront, including electricity and water connection charges, parking fees, and GST implications.
              </p>
            </div>

            <div className="luxury-blog-faq">
              <h4>Q: How does the resale market perform in Noida Extension?</h4>

              <p>
                Well-executed projects by trusted builders appreciate 7-10% annually, with liquidity improving as more occupations occur.
              </p>
            </div>

            <div className="luxury-blog-faq">
              <h4>Q: What legal checks are absolutely essential?</h4>

              <p>
                Ensure the builder has obtained all environmental clearances, there are no outstanding litigation issues, and the approved building plans match what's being constructed.
              </p>
            </div>
          </section>

          <section id="luxury-future">
            <h2>The Future of Construction in Noida Extension</h2>

            <p>
              As the area matures, builders are shifting focus from quantity to quality.
            </p>

            <p>
              The next generation of projects will likely emphasize:
            </p>

            <ul>
              <li>Net-zero energy buildings</li>
              <li>Community-shared facilities (car pools, tool libraries)</li>
              <li>Age-friendly designs for India's aging population</li>
            </ul>

            <p>
              Progressive builders are already experimenting with:
            </p>

            <ul>
              <li>3D-printed structural elements</li>
              <li>AI-powered maintenance systems</li>
              <li>Vertical farming integrations</li>
            </ul>

            <p>
              For discerning homebuyers, Noida Extension presents a unique opportunity to invest in thoughtfully designed spaces that will remain relevant for decades to come.
            </p>

            <p>
              The key lies in selecting builders who combine technical expertise with long-term vision.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}