"use client";

import { useState } from "react";
import "./floorplans.css";

const floorPlans = [
  {
    title: "1BHK - 700 Sqft",
    image: "/projects/palace-heights/palaceheight-fp-big1.jpg",
    area: "700 Sqft",
    bedrooms: "1",
    bathrooms: "1",
    subtitle:
      "1 Bedroom + 1 Toilet + Drawing/Dining + Kitchen + 2 Balconies",
  },
  {
    title: "2BHK - 1015 Sqft",
    image: "/projects/palace-heights/palaceheight-fp-big2.jpg",
    area: "1015 Sqft",
    bedrooms: "2",
    bathrooms: "2",
    subtitle:
      "2 Bedroom + 2 Toilets + Drawing/Dining + Kitchen + 4 Balconies",
  },
  {
    title: "2BHK - 1088 Sqft",
    image: "/projects/palace-heights/palaceheight-fp-big3.jpg",
    area: "1088 Sqft",
    bedrooms: "2",
    bathrooms: "2",
    subtitle:
      "2 Bedroom + 2 Toilets + Drawing/Dining + Kitchen + 4 Balconies",
  },
  {
    title: "3BHK - 1341 Sqft",
    image: "/projects/palace-heights/palaceheight-fp-big4.jpg",
    area: "1341 Sqft",
    bedrooms: "3",
    bathrooms: "3",
    subtitle:
      "3 Bedroom + 3 Toilets + Drawing/Dining + Kitchen + 4 Balconies",
  },
  {
    title: "3BHK - 1405 Sqft",
    image: "/projects/palace-heights/palaceheight-fp-big5.jpg",
    area: "1405 Sqft",
    bedrooms: "3",
    bathrooms: "2",
    subtitle:
      "3 Bedroom + 2 Toilets + Drawing/Dining + Kitchen + 4 Balconies",
  },
  {
    title: "3BHK - 1540 Sqft",
    image: "/projects/palace-heights/palaceheight-fp-big6.jpg",
    area: "1540 Sqft",
    bedrooms: "3",
    bathrooms: "3",
    subtitle:
      "3 Bedroom + 3 Toilets + Drawing/Dining + Kitchen + 5 Balconies",
  },
  {
    title: "3BHK - 1568 Sqft",
    image: "/projects/palace-heights/palaceheight-fp-big7.jpg",
    area: "1568 Sqft",
    bedrooms: "3",
    bathrooms: "3",
    subtitle:
      "3 Bedroom + 3 Toilets + Drawing/Dining + Kitchen + 5 Balconies",
  },
  {
    title: "4BHK - 1841 Sqft",
    image: "/projects/palace-heights/palaceheight-fp-big8.jpg",
    area: "1841 Sqft",
    bedrooms: "4",
    bathrooms: "4",
    subtitle:
      "4 Bedroom + 4 Toilets + Drawing/Dining + Kitchen + 5 Balconies",
  },
  {
    title: "4BHK + Study - 2285 Sqft",
    image: "/projects/palace-heights/palaceheight-fp-big9.jpg",
    area: "2285 Sqft",
    bedrooms: "4",
    bathrooms: "5",
    subtitle:
      "4 Bedroom + Study + 5 Toilets + Drawing/Dining + Kitchen + 4 Balconies",
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
