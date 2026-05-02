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
    // COMFORT
    {
      icon: <FaBuilding />,
      title: "Spacious Apartments",
      desc: "Well-planned layouts with natural cross ventilation in every room.",
    },
    {
      icon: <FaTree />,
      title: "90% Garden Facing",
      desc: "Most apartments overlook lush green landscapes or pool.",
    },
    {
      icon: <FaBuilding />,
      title: "Modern Kitchen & Utility",
      desc: "Large kitchen spaces with wide utility areas.",
    },
    {
      icon: <FaBuilding />,
      title: "High-Speed Elevators",
      desc: "Smooth and fast lifts in every tower.",
    },

    // SECURITY & CONVENIENCE
    {
      icon: <MdSecurity />,
      title: "CCTV Surveillance",
      desc: "24/7 security monitoring across the complex.",
    },
    {
      icon: <MdSecurity />,
      title: "Intercom Facility",
      desc: "Star configuration intercom in all apartments.",
    },
    {
      icon: <FaBuilding />,
      title: "Visitor Parking",
      desc: "Dedicated parking for guests and visitors.",
    },
    {
      icon: <FaBuilding />,
      title: "Day Care Facility",
      desc: "Safe and convenient space for children.",
    },

    // HIGH-TECH
    {
      icon: <FaWifi />,
      title: "Wi-Fi Enabled Club",
      desc: "Seamless connectivity in clubhouse areas.",
    },
    {
      icon: <FaWifi />,
      title: "Smart Connectivity",
      desc: "IP-enabled apartments with modern tech support.",
    },
    {
      icon: <MdSecurity />,
      title: "Access Control System",
      desc: "Boom barriers and controlled entry points.",
    },

    // LEISURE & SPORTS
    {
      icon: <FaChild />,
      title: "Kids Play Area",
      desc: "Tot lots, swings & sand pits for children.",
    },
    {
      icon: <FaRunning />,
      title: "Jogging Track",
      desc: "Dedicated tracks for fitness and walking.",
    },
    {
      icon: <MdSportsCricket />,
      title: "Sports Facilities",
      desc: "Large playground & cricket practice space.",
    },
    {
      icon: <GiGymBag />,
      title: "Gymnasium",
      desc: "Fully equipped modern fitness center.",
    },

    // LUXURY / CLUB
    {
      icon: <FaTree />,
      title: "Private Clubhouse",
      desc: "Exclusive club with premium amenities.",
    },
    {
      icon: <GiWaterDrop />,
      title: "Swimming Pools",
      desc: "Two swimming pools for residents.",
    },
    {
      icon: <GiMeditation />,
      title: "Spa & Wellness",
      desc: "Steam, sauna & relaxation facilities.",
    },

    // ECO FRIENDLY
    {
      icon: <FaTree />,
      title: "80% Open Green Area",
      desc: "Large green spaces for all age groups.",
    },
    {
      icon: <GiWaterDrop />,
      title: "Water Recycling System",
      desc: "Efficient reuse of water across the project.",
    },
    {
      icon: <FaTree />,
      title: "Solar Heating",
      desc: "Energy-saving systems for common usage.",
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
