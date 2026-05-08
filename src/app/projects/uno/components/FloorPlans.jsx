"use client";

import { useState } from "react";
import "./floorplans.css";

const floorPlans = [
  {
    title: "3BHK - 1650 Sqft",
    image: "/projects/uno/uno-fp1-big.jpg",
    area: "1650 Sqft",
    bedrooms: "3",
    bathrooms: "2",
    tower: "T-2, T-3 & T-4",
    subtitle: "3 Bedroom + 2 Toilets",
  },
  {
    title: "3BHK + Study - 1750 Sqft",
    image: "/projects/uno/uno-fp2-big.jpg",
    area: "1750 Sqft",
    bedrooms: "3",
    bathrooms: "3",
    tower: "T-2, T-3 & T-4",
    subtitle: "3 Bedroom + 3 Toilets + Study",
  },
  {
    title: "4BHK + Study - 3950 Sqft",
    image: "/projects/uno/uno-fp3-big.jpg",
    area: "3950 Sqft",
    bedrooms: "4",
    bathrooms: "4",
    tower: "T-1",
    subtitle: "4 Bedroom + 4 Toilets + Study",
  },
];

export default function FloorPlans() {
  const [active, setActive] = useState(0);
  const plan = floorPlans[active];

  return (
    <section className="floor-wrapper">
      <h2 className="floor-heading">Designed Spaces for Elevated Living</h2>

      {/* Tabs */}
      <div className="floor-tabs">
        {floorPlans.map((item, index) => (
          <button
            key={index}
            className={active === index ? "active" : ""}
            onMouseEnter={() => setActive(index)}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div key={active} className="floor-card animate">
        {/* Left */}
        <div className="floor-image">
          <img src={plan.image} alt={plan.title} />
        </div>

        {/* Right */}
        <div className="floor-details">
          <h3>{plan.title}</h3>
          <p>{plan.subtitle}</p>

          <div className="detail-row">
            <span>Saleable Area</span>
            <strong>{plan?.area}</strong>
          </div>

          <div className="detail-row">
            <span>Bedrooms</span>
            <strong>{plan.bedrooms}</strong>
          </div>

          <div className="detail-row">
            <span>Bathrooms</span>
            <strong>{plan.bathrooms}</strong>
          </div>

          <div className="detail-row">
            <span>Tower</span>
            <strong>{plan.tower}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
