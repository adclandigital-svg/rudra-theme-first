"use client";

import { useState } from "react";
import "./floorplans.css";

const floorPlans = [
  {
    title: "2BHK + 2T - 1055 Sqft",
    image: "http://rudrabuildwell.com/images/aquacasa-fp-big1.jpg",
    area: "1055 Sqft",
    bedrooms: "2",
    bathrooms: "2",
    tower: "T4 To T9",
    subtitle: "2 Bedroom + 2 Toilet",
  },
  {
    title: "2BHK + 2T - 1065 Sqft",
    image: "http://rudrabuildwell.com/images/aquacasa-fp-big2.jpg",
    area: "1065 Sqft",
    bedrooms: "2",
    bathrooms: "2",
    tower: "T6",
    subtitle: "2 Bedroom + 2 Toilet",
  },
  {
    title: "2BHK + Study - 1227 Sqft",
    image: "http://rudrabuildwell.com/images/aquacasa-fp-big3.jpg",
    area: "1227 Sqft",
    bedrooms: "2",
    bathrooms: "2",
    tower: "T4 To T9",
    subtitle: "2 Bedroom + 2 Toilet + Study",
  },
  {
    title: "2BHK + Study - 1320 Sqft",
    image: "http://rudrabuildwell.com/images/aquacasa-fp-big4.jpg",
    area: "1320 Sqft",
    bedrooms: "2",
    bathrooms: "2",
    tower: "T3, T10, T11 & T18",
    subtitle: "2 Bedroom + 2 Toilet",
  },
  {
    title: "3BHK + 2T - 1450 Sqft",
    image: "http://rudrabuildwell.com/images/aquacasa-fp-big11.jpg",
    area: "1450 Sqft",
    bedrooms: "3",
    bathrooms: "2",
    tower: "T4 To T9",
    subtitle: "3 Bedroom + 2 Toilet",
  },
  {
    title: "3BHK + Store - 1655 Sqft",
    image: "http://rudrabuildwell.com/images/aquacasa-fp-big5.jpg",
    area: "1655 Sqft",
    bedrooms: "3",
    bathrooms: "3",
    tower: "T1 To T14",
    subtitle: "3 Bedroom + 3 Toilet + Store",
  },
  {
    title: "3BHK + Store - 1681 Sqft",
    image: "http://rudrabuildwell.com/images/aquacasa-fp-big6.jpg",
    area: "1681 Sqft",
    bedrooms: "3",
    bathrooms: "3",
    tower: "T2 & T12",
    subtitle: "3 Bedroom + 3 Toilet + Store",
  },
  {
    title: "3BHK + Servant - 1825 Sqft",
    image: "http://rudrabuildwell.com/images/aquacasa-fp-big7.jpg",
    area: "1825 Sqft",
    bedrooms: "3",
    bathrooms: "3",
    tower: "Multiple Towers",
    subtitle: "3 Bedroom + 3 Toilet + Servant",
  },
  {
    title: "3BHK + Servant - 1832 Sqft",
    image: "http://rudrabuildwell.com/images/aquacasa-fp-big8.jpg",
    area: "1832 Sqft",
    bedrooms: "3",
    bathrooms: "3",
    tower: "Multiple Towers",
    subtitle: "3 Bedroom + 3 Toilet + Servant",
  },
  {
    title: "3BHK + Servant - 1840 Sqft",
    image: "http://rudrabuildwell.com/images/aquacasa-fp-big9.jpg",
    area: "1840 Sqft",
    bedrooms: "3",
    bathrooms: "3",
    tower: "T16 & T17",
    subtitle: "3 Bedroom + 3 Toilet + Servant",
  },
  {
    title: "4BHK + Servant - 2225 Sqft",
    image: "http://rudrabuildwell.com/images/aquacasa-fp-big10.jpg",
    area: "2225 Sqft",
    bedrooms: "4",
    bathrooms: "3",
    tower: "T16 & T17",
    subtitle: "4 Bedroom + 3 Toilet + Servant",
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
