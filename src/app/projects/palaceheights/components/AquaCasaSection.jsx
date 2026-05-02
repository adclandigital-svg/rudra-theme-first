"use client";

import {
  FaWifi,
  FaRunning,
  FaBook,
  FaBuilding,
  FaChild,
  FaTree,
} from "react-icons/fa";
import {
  MdSportsCricket,
  MdSecurity,
  MdOutlineSportsKabaddi,
} from "react-icons/md";
import { GiMeditation, GiGymBag, GiWaterDrop } from "react-icons/gi";
import "./aquacasa.css";

export default function AquaCasaSection() {
  const features = [
    {
      icon: <FaBook />,
      title: "Library",
      desc: "Peaceful reading space with curated books.",
    },
    {
      icon: <FaBuilding />,
      title: "Business Lounge",
      desc: "Work-friendly modern lounge setup.",
    },
    {
      icon: <FaTree />,
      title: "Roof Top Club",
      desc: "Relax with skyline views & greenery.",
    },
    {
      icon: <FaWifi />,
      title: "Wi-Fi Enabled Club",
      desc: "High-speed connectivity everywhere.",
    },
    {
      icon: <FaChild />,
      title: "Tot Lot Area",
      desc: "Safe and fun kids play zone.",
    },
    {
      icon: <FaRunning />,
      title: "Jogging Track",
      desc: "Track designed for daily fitness.",
    },
    {
      icon: <MdSportsCricket />,
      title: "Cricket Practice Pitch",
      desc: "Professional practice facility.",
    },
    {
      icon: <MdOutlineSportsKabaddi />,
      title: "Skating Rink",
      desc: "Smooth rink for all age groups.",
    },
    {
      icon: <GiGymBag />,
      title: "Modern Gymnasium",
      desc: "Equipped with advanced machines.",
    },
    {
      icon: <GiMeditation />,
      title: "Yoga & Meditation Hall",
      desc: "Calm and peaceful environment.",
    },
    {
      icon: <GiWaterDrop />,
      title: "Water Filtration System",
      desc: "Clean and safe water supply.",
    },
    {
      icon: <MdSecurity />,
      title: "CCTV & Intercom",
      desc: "24/7 security monitoring system.",
    },
  ];

  return (
    <section className="aqua-section">
      <span className="aqua-subtitle">MODERN AND COMFORTABLE</span>
      <h2 className="aqua-title">Facilities and Amenities</h2>

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