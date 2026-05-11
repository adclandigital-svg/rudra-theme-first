"use client";

import React, { useEffect, useState } from "react";
import "./luxuryBlogDetails.css";

const luxuryBlogSections = [
  {
    id: "luxury-intro",
    title: "Affordable Flats in NCR",
  },
  {
    id: "luxury-why-ncr",
    title: "Why Affordable Housing in NCR Is More Attractive Than Ever",
  },
  {
    id: "luxury-identify",
    title: "How to Identify Genuine Affordable Housing Projects",
  },
  {
    id: "luxury-case-study",
    title: "Case Study: The Success of Noida Extension",
  },
  {
    id: "luxury-steps",
    title: "Step-by-Step: Securing Your Affordable Apartment",
  },
  {
    id: "luxury-strategies",
    title: "Unique Strategies Most Buyers Overlook",
  },
  {
    id: "luxury-faq",
    title: "FAQs: Affordable Flats in NCR",
  },
  {
    id: "luxury-future",
    title: "The Future of Affordable Housing in NCR",
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
          src="/blogs/4-details.png"
          alt="Affordable Flats in NCR"
          className="luxury-blog-hero-image"
        />
      </section>

      <div className="luxury-blog-layout">
        {/* SIDEBAR */}
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

        {/* CONTENT */}
        <div className="luxury-blog-content">
          <section id="luxury-intro">
            <h2>Affordable Flats in NCR</h2>

            <p>
              Affordable Flats in NCR: Your Guide to Budget-Friendly Living
            </p>

            <p>
              The National Capital Region (NCR) is a sprawling urban
              agglomeration that includes Delhi and its satellite
              cities—Ghaziabad, Noida, Faridabad, and Gurugram.
            </p>

            <p>
              With skyrocketing real estate prices in Delhi, affordable flats
              in NCR have become a lifeline for middle-class families, young
              professionals, and first-time homebuyers.
            </p>

            <p>
              This guide dives deep into the nuances of budget homes in NCR,
              offering actionable insights, lesser-known strategies, and
              real-world examples to help you make an informed decision.
            </p>
          </section>

          <section id="luxury-why-ncr">
            <h2>
              Why Affordable Housing in NCR Is More Attractive Than Ever
            </h2>

            <p>
              The NCR’s affordability isn’t just about lower prices—it’s about
              strategic urban planning.
            </p>

            <p>Here’s why budget homes in NCR are gaining traction:</p>

            <ul>
              <li>
                Infrastructure Boom: Projects like the Delhi-Meerut Expressway
                and the Rapid Rail Transit System (RRTS) have slashed commute
                times, making peripheral areas viable for daily commuters.
              </li>

              <li>
                Developer Incentives: Builders like Gaursons and Starestate
                offer flexible payment plans (e.g., 10% down payment, balance
                on possession) to attract buyers.
              </li>

              <li>
                Government Schemes: Pradhan Mantri Awas Yojana (PMAY)
                subsidies of up to ₹2.67 lakh for eligible buyers significantly
                reduce effective costs.
              </li>
            </ul>

            <p>
              A hidden advantage? Tier-2 NCR cities like Greater Noida West and
              Bhiwadi offer lower property taxes—often 30–40% cheaper than
              Delhi.
            </p>
          </section>

          <section id="luxury-identify">
            <h2>How to Identify Genuine Affordable Housing Projects</h2>

            <p>
              Not all "low budget flats in NCR" deliver value. Watch for these
              red flags:
            </p>

            <ul>
              <li>
                Delayed Possession Histories: Check RERA portals for project
                timelines. For example, a Ghaziabad project advertised as
                "ready-to-move" in 2026 might have a history of 3+ year delays.
              </li>

              <li>
                Hidden Costs: Maintenance charges (₹5–15/sq ft/month) can add
                ₹3,000–8,000 to monthly expenses. Always factor these into
                affordability calculations.
              </li>

              <li>
                Location Traps: A project 500m from a proposed metro station
                sounds ideal—unless the metro’s completion is uncertain.
                Verify infrastructure plans via the NCR Transport
                Corporation’s master plans.
              </li>
            </ul>
          </section>

          <section id="luxury-case-study">
            <h2>Case Study: The Success of Noida Extension</h2>

            <p>
              Noida Extension (now rebranded as Greater Noida West)
              exemplifies smart affordable housing.
            </p>

            <p>
              In 2018, flats here sold for ₹2,800/sq ft; today, prices hover
              around ₹5,500/sq ft—a 96% appreciation in 6 years.
            </p>

            <h3>Key Drivers:</h3>

            <ul>
              <li>
                Connectivity: The Noida-Greater Noida Metro extension (Aqua
                Line) reduced travel time to Delhi to 45 minutes.
              </li>

              <li>
                Amenities: Projects like Gaur City offer schools, hospitals,
                and shopping complexes within the township, eliminating
                dependency on Delhi.
              </li>
            </ul>
          </section>

          <section id="luxury-steps">
            <h2>Step-by-Step: Securing Your Affordable Apartment</h2>

            <h3>1. Budgeting Beyond the Sticker Price</h3>

            <ul>
              <li>
                Loan Eligibility: Use the 30/40 rule—your EMI shouldn’t exceed
                30% of income, and total home cost (including registration,
                GST) shouldn’t surpass 40% of savings.
              </li>

              <li>
                PMAY Benefits: First-time buyers earning under ₹18 lakh/year
                can save ₹2,000–4,000/month via credit-linked subsidies.
              </li>
            </ul>

            <h3>2. Location Selection Matrix</h3>

            <p>Prioritize areas based on:</p>

            <div className="luxury-blog-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>Weightage</th>
                    <th>Example: Greater Noida West</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Job Accessibility</td>
                    <td>40%</td>
                    <td>30 mins to Noida SEZ</td>
                  </tr>

                  <tr>
                    <td>Social Infrastructure</td>
                    <td>30%</td>
                    <td>5 schools within 3km</td>
                  </tr>

                  <tr>
                    <td>Future Appreciation</td>
                    <td>30%</td>
                    <td>Proposed International Airport</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>3. Builder Due Diligence</h3>

            <ul>
              <li>
                RERA Registration: Verify project approval on UP RERA.
              </li>

              <li>
                Past Projects: Visit completed developments to assess
                construction quality. A builder with a history of waterlogging
                issues (e.g., some Faridabad projects) is risky.
              </li>
            </ul>
          </section>

          <section id="luxury-strategies">
            <h2>Unique Strategies Most Buyers Overlook</h2>

            <ul>
              <li>
                Resale Discounts: Nearly-new resale flats (2–3 years old)
                often sell 10–15% below market rates as owners face liquidity
                crunches. Check listings on NoBroker and MagicBricks.
              </li>

              <li>
                Group Buying: Form a 10+ buyer group to negotiate bulk
                discounts—builders may offer free parking or waived
                registration fees.
              </li>

              <li>
                Lease-to-Own: Some developers (like those in Bhiwadi) let you
                rent for 2–3 years with 50% of rent credited toward purchase—
                ideal for testing a neighborhood before buying.
              </li>
            </ul>
          </section>

          <section id="luxury-faq">
            <h2>FAQs: Affordable Flats in NCR</h2>

            <div className="luxury-blog-faq">
              <h4>Q1: What’s the cheapest area in NCR for flats?</h4>

              <p>
                Bhiwadi (Rajasthan) offers the lowest prices
                (₹3,200–4,500/sq ft), but lacks metro connectivity. For
                balance, consider Greater Noida West (₹5,500–6,800/sq ft).
              </p>
            </div>

            <div className="luxury-blog-faq">
              <h4>Q2: Are there any hidden costs in affordable projects?</h4>

              <p>
                Yes—often electricity meters (₹15,000–25,000), clubhouse
                charges (one-time ₹50,000), and elevated water tank
                maintenance (₹2,000/month).
              </p>
            </div>

            <div className="luxury-blog-faq">
              <h4>Q3: How do I verify a builder’s delivery record?</h4>

              <p>
                Search the project name + "delay" on local forums like
                Ghaziabad Property Group on Facebook. Also check RERA penalty
                histories.
              </p>
            </div>

            <div className="luxury-blog-faq">
              <h4>
                Q4: Can I get a home loan for under-construction projects?
              </h4>

              <p>
                Yes, but banks disburse in stages (e.g., 20% on completion of
                each floor). Opt for a builder with a tie-up with banks like
                SBI or HDFC for faster approvals.
              </p>
            </div>

            <div className="luxury-blog-faq">
              <h4>Q5: What’s the minimum down payment required?</h4>

              <p>
                Typically 10–20%. Some PMAY-approved projects accept 5%
                (e.g., Ashiana Housing in Bhiwadi).
              </p>
            </div>
          </section>

          <section id="luxury-future">
            <h2>The Future of Affordable Housing in NCR</h2>

            <p>
              With the NCR Planning Board’s 2041 blueprint targeting 1.2
              million new affordable units, prices in emerging corridors like
              Dankaur and Sohna could stabilize.
            </p>

            <p>
              Pro tip: Track land acquisition notices—areas near upcoming
              highways (e.g., Delhi-Alwar Expressway) often see early price
              surges.
            </p>

            <p>
              By combining due diligence with strategic timing, securing an
              affordable apartment in NCR isn’t just possible—it’s a savvy
              long-term investment.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}