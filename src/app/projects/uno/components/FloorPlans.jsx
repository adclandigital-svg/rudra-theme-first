"use client";

import { useState } from "react";
import "./floorplans.css";

const floorPlans = [
  {
    title: "3BHK + Study - 1470 Sqft",
    image: "http://rudrabuildwell.com/images/skytrack-fp1-big.jpg",
    area: "1470 Sqft",
    bedrooms: "3",
    bathrooms: "2",
    tower: "T-5, T-6 & T-7",
    subtitle: "3 Bedroom + 2 Toilets + Study",
  },
  {
    title: "3BHK - 1350 Sqft",
    image: "http://rudrabuildwell.com/images/skytrack-fp2-big.jpg",
    area: "1350 Sqft",
    bedrooms: "3",
    bathrooms: "2",
    tower: "T-5, T-6 & T-7",
    subtitle: "3 Bedroom + 2 Toilets",
  },
  {
    title: "2BHK + Study - 1155 Sqft",
    image: "http://rudrabuildwell.com/images/skytrack-fp3-big.jpg",
    area: "1155 Sqft",
    bedrooms: "2",
    bathrooms: "2",
    tower: "T-4 & T-9",
    subtitle: "2 Bedroom + 2 Toilets + Study",
  },
  {
    title: "2BHK - 960 Sqft",
    image: "http://rudrabuildwell.com/images/skytrack-fp4-big.jpg",
    area: "960 Sqft",
    bedrooms: "2",
    bathrooms: "2",
    tower: "T-4 & T-9",
    subtitle: "2 Bedroom + 2 Toilets",
  },
  {
    title: "1BHK Type-1 - 685 Sqft",
    image: "http://rudrabuildwell.com/images/skytrack-fp5-big.jpg",
    area: "685 Sqft",
    bedrooms: "1",
    bathrooms: "1",
    tower: "T-1",
    subtitle: "1 Bedroom + 1 Toilets Type-1",
  },
  {
    title: "1BHK Type-2 - 685 Sqft",
    image: "http://rudrabuildwell.com/images/skytrack-fp6-big.jpg",
    area: "685 Sqft",
    bedrooms: "1",
    bathrooms: "1",
    tower: "T-1",
    subtitle: "1 Bedroom + 1 Toilets Type-2",
  },
  {
    title: "1BHK Type-2 - 685 Sqft",
    image: "http://rudrabuildwell.com/images/skytrack-fp7-big.jpg",
    area: "685 Sqft",
    bedrooms: "1",
    bathrooms: "1",
    tower: "T-1",
    subtitle: "1 Bedroom + 1 Toilets Type-2",
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
