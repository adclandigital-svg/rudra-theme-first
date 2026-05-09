"use client";
import "./aquacasa.css";

import {
  FaLeaf,
} from "react-icons/fa";

import {
  FaBuilding,
  FaTree,
  FaBolt,
  FaTint,
  FaArrowUp,
  FaCar,
  FaWarehouse,
  FaGolfBall,
} from "react-icons/fa";

import { MdSecurity } from "react-icons/md";

export default function AquaCasaSection() {
  const features = [
    {
      icon: <FaBuilding />,
      title: "Modern Living",
      desc: "Premium residences designed for contemporary lifestyles.",
    },
    {
      icon: <MdSecurity />,
      title: "24x7 Security",
      desc: "Fully gated complex with advanced security systems.",
    },
    {
      icon: <FaTree />,
      title: "Picturesque Parks",
      desc: "Beautiful landscaped green parks within the community.",
    },
    {
      icon: <FaBolt />,
      title: "Power Backup",
      desc: "Reliable power backup for uninterrupted living.",
    },
    {
      icon: <FaTint />,
      title: "24 Hour Water Supply",
      desc: "Continuous water availability for residents.",
    },
    {
      icon: <FaArrowUp />,
      title: "High-Speed Elevators",
      desc: "Fast and modern elevators for seamless movement.",
    },
    {
      icon: <FaLeaf />,
      title: "Rain Water Harvesting",
      desc: "Eco-conscious systems promoting sustainable living.",
    },
    {
      icon: <FaCar />,
      title: "Ample Parking",
      desc: "Spacious parking facilities for residents and guests.",
    },
    {
      icon: <FaWarehouse />,
      title: "Basement Parking",
      desc: "Well-managed and secure basement parking area.",
    },
    {
      icon: <FaGolfBall />,
      title: "Golf Facing Towers",
      desc: "Luxury residences overlooking the lush golf course.",
    },
  ];

  return (
    <section className="aqua-section">
      <span className="aqua-subtitle">MODERN AND COMFORTABLE</span>
      <h2 className="aqua-title">Elevated Lifestyle Experiences</h2>

      <div className="aqua-grid">
        {features.map((item, index) => (
          <div className="aqua-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
