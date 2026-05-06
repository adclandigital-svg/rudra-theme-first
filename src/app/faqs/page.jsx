"use client";

import React, { useState } from "react";
import "./faq.css";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      {/* HERO */}
      <section className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p>
          Clear answers to help you understand our services, projects, and CSR
          initiatives.
        </p>
      </section>

      {/* FAQ GRID */}
      <section className="faq-grid">
        {[
          {
            q: "What does Rudra Buildwell specialize in?",
            a: "We create premium residential and commercial spaces with modern architecture and sustainable development practices.",
          },
          {
            q: "Do you conduct CSR activities?",
            a: "Yes, we actively support education, environment, healthcare, and community development programs.",
          },
          {
            q: "Are your projects RERA approved?",
            a: "Yes, all our projects are fully RERA compliant and legally verified.",
          },
          {
            q: "Can I visit project sites?",
            a: "Yes, we offer scheduled site visits for all active projects.",
          },

          /* ================= NEW QUESTIONS ================= */

          {
            q: "Where is Rudra Buildwell based?",
            a: "Rudra Buildwell operates across major NCR locations, focusing on rapidly growing urban developments.",
          },
          {
            q: "What makes Rudra Buildwell different from other developers?",
            a: "We focus on quality construction, transparent dealings, timely delivery, and customer satisfaction above all.",
          },
          {
            q: "Do you offer home loan assistance?",
            a: "Yes, we assist customers in connecting with leading banks and financial institutions for easy home loan approvals.",
          },
          {
            q: "What types of properties do you develop?",
            a: "We develop luxury apartments, affordable housing, commercial complexes, and mixed-use developments.",
          },
          {
            q: "How do you ensure construction quality?",
            a: "We use high-grade materials, strict quality checks, and experienced engineers to maintain top construction standards.",
          },
          {
            q: "Do you provide after-sales support?",
            a: "Yes, we offer dedicated customer support even after possession for maintenance and assistance.",
          },
          {
            q: "Are your projects eco-friendly?",
            a: "Yes, we integrate sustainable practices like rainwater harvesting, energy efficiency, and green landscaping.",
          },
          {
            q: "How can I book a property with Rudra Buildwell?",
            a: "You can contact our sales team, visit the site office, or submit an inquiry through our official website.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`faq-card ${activeIndex === i ? "active" : ""}`}
            onClick={() => toggleFAQ(i)}
          >
            <div className="faq-question">
              <h3>{item.q}</h3>
              <span>{activeIndex === i ? "−" : "+"}</span>
            </div>

            <div className={`faq-answer ${activeIndex === i ? "show" : ""}`}>
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
