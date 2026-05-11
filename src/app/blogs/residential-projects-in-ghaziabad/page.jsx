"use client";

import React, { useEffect, useState } from "react";
import "./luxuryBlogDetails.css";

const luxuryBlogSections = [
  {
    id: "luxury-intro",
    title: "Residential Projects in Ghaziabad",
  },
  {
    id: "luxury-why-ghaziabad",
    title: "Why Invest in Ghaziabad's Residential Projects?",
  },
  {
    id: "luxury-projects",
    title: "Top Residential Projects in Ghaziabad",
  },
  {
    id: "luxury-localities",
    title: "Key Localities for Residential Projects",
  },
  {
    id: "luxury-amenities",
    title: "Amenities to Look For",
  },
  {
    id: "luxury-steps",
    title: "Steps to Choose the Right Project",
  },
  {
    id: "luxury-example",
    title: "Real-World Example: A Homebuyer's Journey",
  },
  {
    id: "luxury-faq",
    title: "FAQs About Residential Projects in Ghaziabad",
  },
  {
    id: "luxury-future",
    title: "Future Trends in Ghaziabad's Real Estate",
  },
  {
    id: "luxury-final",
    title: "Conclusion",
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
          src="/blogs/3-details.png"
          alt="Residential Projects in Ghaziabad"
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
            <h2>Residential Projects in Ghaziabad</h2>

            <p>
              Residential Projects in Ghaziabad: A Guide to Modern Living
              Ghaziabad has emerged as one of the most sought-after residential
              hubs in the National Capital Region (NCR), offering a blend of
              affordability, connectivity, and modern amenities.
            </p>

            <h2>
              Residential Projects in Ghaziabad: A Guide to Modern Living
            </h2>

            <p>
              Ghaziabad has emerged as one of the most sought-after residential
              hubs in the National Capital Region (NCR), offering a blend of
              affordability, connectivity, and modern amenities. Whether you're
              looking for family apartments, luxury flats, or ready-to-move-in
              homes, Ghaziabad's real estate market has diverse options to suit
              various budgets and preferences.
            </p>

            <p>
              This guide explores the key aspects of residential projects in
              Ghaziabad, helping you make an informed decision.
            </p>
          </section>

          <section id="luxury-why-ghaziabad">
            <h2>Why Invest in Ghaziabad's Residential Projects?</h2>

            <p>
              Ghaziabad's strategic location near Delhi, coupled with its robust
              infrastructure, makes it an attractive destination for homebuyers
              and investors alike.
            </p>

            <p>
              The city boasts excellent connectivity via the Delhi-Meerut
              Expressway, Metro extensions, and proximity to major employment
              hubs like Noida and Delhi.
            </p>

            <ul>
              <li>
                Affordability: Compared to Delhi and Noida, property prices in
                Ghaziabad are relatively lower, offering better value for money.
              </li>

              <li>
                Infrastructure Growth: Ongoing developments like the Rapid Rail
                Transit System (RRTS) and road expansions enhance accessibility.
              </li>

              <li>
                Quality of Life: Green spaces, reputed schools, and healthcare
                facilities contribute to a balanced lifestyle.
              </li>
            </ul>
          </section>

          <section id="luxury-projects">
            <h2>Top Residential Projects in Ghaziabad</h2>

            <h3>1. Luxury High-Rise Apartments</h3>

            <p>
              Several developers have introduced high-rise residential projects
              featuring smart home technologies, concierge services, and premium
              finishes.
            </p>

            <p>
              For example, Skyline Residences in Indirapuram offers
              floor-to-ceiling windows, modular kitchens, and 24/7 security,
              catering to urban professionals.
            </p>

            <h3>2. Affordable Housing Schemes</h3>

            <p>
              Government-backed initiatives like Pradhan Mantri Awas Yojana
              (PMAY) have spurred the development of budget-friendly housing in
              areas like Raj Nagar Extension.
            </p>

            <p>
              Projects here provide compact 2BHK units with essential amenities
              like parks and community centers.
            </p>

            <h3>3. Gated Communities</h3>

            <p>
              Gated complexes such as Green Valley Estates emphasize security
              and exclusivity, with features like CCTV surveillance, landscaped
              gardens, and clubhouses.
            </p>

            <p>
              These are ideal for families seeking a tranquil environment.
            </p>
          </section>

          <section id="luxury-localities">
            <h2>Key Localities for Residential Projects</h2>

            <h3>Indirapuram</h3>

            <p>
              A well-established locality with malls, schools, and hospitals.
              Popular for its mix of luxury and mid-range apartments.
            </p>

            <h3>Raj Nagar Extension</h3>

            <p>
              An emerging hotspot for affordable housing, with easy access to
              NH-24 and the upcoming Ghaziabad Metro.
            </p>

            <h3>Vaishali</h3>

            <p>
              Known for its proximity to Delhi and upscale residential towers,
              Vaishali attracts buyers looking for premium amenities.
            </p>
          </section>

          <section id="luxury-amenities">
            <h2>Amenities to Look For</h2>

            <p>When evaluating residential projects, consider:</p>

            <ul>
              <li>
                Essentials: Reliable water supply, power backup, and waste
                management.
              </li>

              <li>
                Lifestyle Add-ons: Swimming pools, gyms, and jogging tracks.
              </li>

              <li>
                Future-Readiness: EV charging stations and rainwater harvesting
                systems.
              </li>
            </ul>
          </section>

          <section id="luxury-steps">
            <h2>Steps to Choose the Right Project</h2>

            <ul>
              <li>
                Define Your Budget: Factor in registration fees, GST, and
                maintenance costs.
              </li>

              <li>
                Verify Builder Credentials: Check RERA registration and past
                project deliveries.
              </li>

              <li>
                Visit the Site: Assess construction quality and neighborhood
                vibrancy.
              </li>

              <li>
                Legal Checks: Ensure clear titles and approved building plans.
              </li>
            </ul>
          </section>

          <section id="luxury-example">
            <h2>Real-World Example: A Homebuyer's Journey</h2>

            <p>
              Mr. Sharma, a Delhi-based IT professional, opted for a 3BHK in
              Gaur City 2.0 after comparing projects across Noida and
              Ghaziabad.
            </p>

            <p>He prioritized:</p>

            <ul>
              <li>
                Proximity to his workplace in Noida (20-minute commute).
              </li>

              <li>
                A child-friendly environment with schools nearby.
              </li>

              <li>
                Flexible payment plans under construction-linked payment (CLP).
              </li>
            </ul>
          </section>

          <section id="luxury-faq">
            <h2>FAQs About Residential Projects in Ghaziabad</h2>

            <div className="luxury-blog-faq">
              <h4>
                1. What is the average price range for flats in Ghaziabad?
              </h4>

              <p>
                Prices vary by locality:
                <br />
                Budget: ₹25–40 lakh (Raj Nagar Extension)
                <br />
                Mid-range: ₹50–80 lakh (Indirapuram)
                <br />
                Premium: ₹1 crore+ (Vaishali)
              </p>
            </div>

            <div className="luxury-blog-faq">
              <h4>2. Are there any ready-to-move-in options?</h4>

              <p>
                Yes, several completed projects like Ajnara LeGard offer
                immediate possession with minimal paperwork.
              </p>
            </div>

            <div className="luxury-blog-faq">
              <h4>3. How is the water supply in Ghaziabad?</h4>

              <p>
                Most new projects have dual pipelines (municipal supply +
                borewells) and water treatment plants.
              </p>
            </div>

            <div className="luxury-blog-faq">
              <h4>4. Which localities are best for families?</h4>

              <p>
                Indirapuram and Crossings Republik are family-friendly, with
                schools like DPS and hospitals within 5 km.
              </p>
            </div>

            <div className="luxury-blog-faq">
              <h4>5. Is Ghaziabad prone to flooding?</h4>

              <p>
                Low-lying areas near Hindon River may face waterlogging. Opt for
                elevated projects with proper drainage.
              </p>
            </div>
          </section>

          <section id="luxury-future">
            <h2>Future Trends in Ghaziabad's Real Estate</h2>

            <ul>
              <li>
                Smart Homes: Increasing adoption of IoT-enabled security and
                energy-efficient designs.
              </li>

              <li>
                Transit-Oriented Development: New projects near Metro stations
                will gain higher demand.
              </li>

              <li>
                Sustainable Living: Solar panels and waste recycling systems are
                becoming standard features.
              </li>
            </ul>
          </section>

          <section id="luxury-final">
            <h2>Conclusion</h2>

            <p>
              Ghaziabad's residential projects cater to a wide spectrum of
              needs, from affordable first homes to luxury retreats. By focusing
              on location, builder reputation, and future growth potential,
              buyers can secure a property that appreciates in value while
              enhancing their quality of life.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}