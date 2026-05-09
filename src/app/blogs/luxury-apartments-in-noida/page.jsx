"use client";

import React, { useEffect, useState } from "react";
import "./luxuryBlogDetails.css";

const luxuryBlogSections = [
  {
    id: "luxury-intro",
    title: "Luxury Apartments in Noida",
  },
  {
    id: "luxury-why-noida",
    title: "Why Noida Stands Out for Luxury Living",
  },
  {
    id: "luxury-architecture",
    title:
      "Architectural Marvels: Design Philosophy of Noida’s Premium Flats",
  },
  {
    id: "luxury-amenities",
    title: "Amenities That Rival Five-Star Resorts",
  },
  {
    id: "luxury-investment",
    title: "Investment Insights: Where to Buy",
  },
  {
    id: "luxury-costs",
    title: "The Hidden Costs of Luxury Living",
  },
  {
    id: "luxury-resident",
    title: "Living the High Life: A Resident’s Perspective",
  },
  {
    id: "luxury-future",
    title: "Future Trends Shaping Noida’s Luxury Market",
  },
  {
    id: "luxury-faq",
    title: "FAQs About Luxury Apartments in Noida",
  },
  {
    id: "luxury-final",
    title: "Final Thoughts",
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
          src="/blogs/1-details.png"
          alt="Luxury Apartments in Noida"
          fill
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

            <h2>Luxury Apartments in Noida</h2>

            <p>
              Luxury Apartments in Noida: Redefining Urban Living Noida has emerged as one of the most sought-after residential hubs in the National Capital Region (NCR), off
            </p>

            <h2>Luxury Apartments in Noida: Redefining Urban Living</h2>

            <p>
              Noida has emerged as one of the most sought-after residential hubs in the National Capital Region (NCR), offering a blend of modern infrastructure, connectivity, and premium lifestyle options. Luxury apartments in Noida cater to discerning homebuyers who seek elegance, comfort, and cutting-edge amenities.
            </p>

            <p>
              This guide explores the unique aspects of Noida’s luxury housing market, from architectural brilliance to community-centric living—helping you make an informed investment decision.
            </p>

          </section>

          <section id="luxury-why-noida">

            <h2>Why Noida Stands Out for Luxury Living</h2>

            <p>
              Unlike traditional urban landscapes, Noida’s planned development ensures wide roads, green belts, and uninterrupted power supply—factors rarely found in older cities. Here’s what sets it apart:
            </p>

            <ul>
              <li>
                Strategic Location: Proximity to Delhi (via the DND Flyway and Metro) and major tech hubs like Gurgaon.
              </li>

              <li>
                World-Class Infrastructure: Integrated townships, smart city initiatives, and futuristic civic amenities.
              </li>

              <li>
                High Appreciation Potential: Consistent demand from corporate professionals and investors fuels property value growth.
              </li>
            </ul>

            <p>
              A key differentiator is the emphasis on vertical luxury—high-rise apartments with panoramic views, private terraces, and intelligent space utilization.
            </p>

          </section>

          <section id="luxury-architecture">

            <h2>
              Architectural Marvels: Design Philosophy of Noida’s Premium Flats
            </h2>

            <p>
              Luxury apartments in Noida aren’t just about square footage; they’re engineered for experiential living.
            </p>

            <h3>Signature Features</h3>

            <ul>
              <li>
                Biophilic Design: Floor-to-ceiling windows merging indoor and outdoor spaces (e.g., Lodha’s "The Park" project).
              </li>

              <li>
                Smart Home Integration: Automated lighting, climate control, and security via IoT.
              </li>

              <li>
                Private Elevators: Exclusive access in ultra-luxury 4-5 BHK configurations.
              </li>
            </ul>

            <p>
              Developers like Prateek Edifice and MRBHK prioritize materials like Italian marble and modular kitchens from international brands (e.g., SieMatic).
            </p>

          </section>

          <section id="luxury-amenities">

            <h2>Amenities That Rival Five-Star Resorts</h2>

            <p>
              Beyond standard facilities like gyms and pools, Noida’s high-rise apartments introduce:
            </p>

            <ul>
              <li>
                Sky Decks: Rooftop infinity pools with cityscape views.
              </li>

              <li>
                Concierge Services: From grocery delivery to event planning.
              </li>

              <li>
                Co-Working Lounges: Hybrid workspaces within the residential complex.
              </li>
            </ul>

            <p>
              A notable example: Supernova Spira’s 360-degree observation deck offers unmatched vistas of the Yamuna Expressway.
            </p>

          </section>

          <section id="luxury-investment">

            <h2>Investment Insights: Where to Buy</h2>

            <h3>Top Sectors for Luxury Homes</h3>

            <div className="luxury-blog-table-wrap">

              <table>

                <thead>
                  <tr>
                    <th>Sector</th>
                    <th>Highlights</th>
                    <th>Avg. Price (₹/sq.ft)</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>Sector 74</td>
                    <td>Proximity to FNG Corridor</td>
                    <td>12,500–15,000</td>
                  </tr>

                  <tr>
                    <td>Sector 128</td>
                    <td>Golf course frontage</td>
                    <td>14,000–18,000</td>
                  </tr>

                  <tr>
                    <td>Sector 150</td>
                    <td>Yamuna Expressway connectivity</td>
                    <td>10,000–13,000</td>
                  </tr>

                </tbody>

              </table>

            </div>

            <p>
              Pro Tip: Look for RERA-approved projects with at least 70% completion to mitigate construction delays.
            </p>

          </section>

          <section id="luxury-costs">

            <h2>The Hidden Costs of Luxury Living</h2>

            <p>
              Many buyers overlook ancillary expenses:
            </p>

            <ul>
              <li>
                Maintenance Charges: ₹5–10/sq.ft monthly for premium services.
              </li>

              <li>
                Stamp Duty: 7% of property value in Uttar Pradesh.
              </li>

              <li>
                Interior Customization: High-end finishes can add 15–20% to the base cost.
              </li>
            </ul>

          </section>

          <section id="luxury-resident">

            <h2>Living the High Life: A Resident’s Perspective</h2>

            <p>
              Case Study: Rahul Sharma, a tech executive, shares his experience at Avantha Crest (Sector 90):
            </p>

            <blockquote>
              "The 24/7 power backup and in-house spa eliminated my weekend hassles. The concierge even arranges pet grooming—something I’d never find in standalone homes."
            </blockquote>

          </section>

          <section id="luxury-future">

            <h2>Future Trends Shaping Noida’s Luxury Market</h2>

            <ul>
              <li>
                AI-Driven Homes: Voice-controlled environments becoming standard.
              </li>

              <li>
                Wellness Communities: On-site physiotherapy and organic cafes.
              </li>

              <li>
                Micro-Forests: Developments like Godrej Origins integrating biodiversity zones.
              </li>
            </ul>

          </section>

          <section id="luxury-faq">

            <h2>FAQs About Luxury Apartments in Noida</h2>

            <div className="luxury-blog-faq">

              <h4>
                Q1. Are luxury flats in Noida a good investment for NRIs?
              </h4>

              <p>
                Yes, due to high rental yields (4–6%) and favorable currency exchange rates.
              </p>

            </div>

            <div className="luxury-blog-faq">

              <h4>
                Q2. What’s the average size of premium apartments?
              </h4>

              <p>
                3–4 BHKs typically span 2,000–3,500 sq.ft, while penthouses exceed 5,000 sq.ft.
              </p>

            </div>

            <div className="luxury-blog-faq">

              <h4>
                Q3. How does Noida compare to Gurgaon for luxury living?
              </h4>

              <p>
                Noida offers better affordability (15–20% lower prices) and newer infrastructure.
              </p>

            </div>

          </section>

          <section id="luxury-final">

            <h2>Final Thoughts</h2>

            <p>
              Luxury apartments in Noida represent more than a housing choice—they’re a lifestyle upgrade. With meticulous planning, future-ready amenities, and robust appreciation potential, they stand as a compelling proposition for investors and end-users alike.
            </p>

          </section>

        </div>

      </div>
    </div>
  );
}