"use client";

import { useState } from "react";
import "./floorplans.css";

const floorPlans = [
  {
    title: "2BHK - 1285 Sqft (Type 4)",
    image: "/projects/pavo/serra-ly1-big.jpg",
    area: "1285 Sq.ft",
    bedrooms: "2",
    bathrooms: "2",
    subtitle: "2 Bedroom + 2 Toilet, Type - 4, Tower T6",
  },
  {
    title: "2BHK - 1285 Sqft (Type 1)",
    image: "/projects/pavo/serra-ly2-big.jpg",
    area: "1285 Sq.ft",
    bedrooms: "2",
    bathrooms: "2",
    subtitle: "2 Bedroom + 2 Toilet, Type - 1, 3D Plan",
  },
  {
    title: "2BHK - 1315 Sqft (Type 3)",
    image: "/projects/pavo/serra-ly3-big.jpg",
    area: "1315 Sq.ft",
    bedrooms: "2",
    bathrooms: "2",
    subtitle: "2 Bedroom + 2 Toilet, Type - 3, Tower T6",
  },
  {
    title: "2BHK - 1315 Sqft (Type 2)",
    image: "/projects/pavo/serra-ly4-big.jpg",
    area: "1315 Sq.ft",
    bedrooms: "2",
    bathrooms: "2",
    subtitle: "2 Bedroom + 2 Toilet, Type - 2, Tower T5",
  },
  {
    title: "2BHK + Study - 1431 Sqft",
    image: "/projects/pavo/serra-ly5-big.jpg",
    area: "1431 Sq.ft",
    bedrooms: "2",
    bathrooms: "2",
    subtitle: "2 Bedroom + 2 Toilet + Study, Tower T1, T2, T3, T4",
  },
  {
    title: "3BHK - 1579 Sqft",
    image: "/projects/pavo/serra-ly6-big.jpg",
    area: "1579 Sq.ft",
    bedrooms: "3",
    bathrooms: "2",
    subtitle: "3 Bedroom + 2 Toilet, Tower T1, T2, T3, T4",
  },
  {
    title: "3BHK - 1695 Sqft",
    image: "/projects/pavo/serra-ly7-big.jpg",
    area: "1695 Sq.ft",
    bedrooms: "3",
    bathrooms: "3",
    subtitle: "3 Bedroom + 3 Toilet, Tower T1, T2, T4",
  },
  {
    title: "3BHK + Servant - 2161 Sqft",
    image: "/projects/pavo/serra-ly8-big.jpg",
    area: "2161 Sq.ft",
    bedrooms: "3",
    bathrooms: "3",
    subtitle: "3 Bedroom + 3 Toilet + Servant Room, Tower T3",
  },
  {
    title: "4BHK + Servant - 3602 Sqft",
    image: "/projects/pavo/serra-ly9-big.jpg",
    area: "3602 Sq.ft",
    bedrooms: "4",
    bathrooms: "4",
    subtitle: "4 Bedroom + 4 Toilet + Servant Room, Tower T7",
  },
  {
    title: "4BHK + Servant - 4323 Sqft (Type 1)",
    image: "/projects/pavo/serra-ly10-big.jpg",
    area: "4323 Sq.ft",
    bedrooms: "4",
    bathrooms: "4",
    subtitle: "4 Bedroom + 4 Toilet + Servant Room, Type 1, Tower T7",
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
