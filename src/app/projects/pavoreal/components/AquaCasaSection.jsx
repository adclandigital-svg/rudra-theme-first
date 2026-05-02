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
      icon: <FaTree />,
      title: "7.5 Acres Development",
      desc: "Spread across approx. 7.5 acres with thoughtfully planned spaces.",
    },
    {
      icon: <FaTree />,
      title: "80% Open Area",
      desc: "Large open green spaces for a breathable lifestyle.",
    },
    {
      icon: <FaTree />,
      title: "Peacock Theme Garden",
      desc: "Beautiful themed landscaping with lush greenery.",
    },
    {
      icon: <FaBuilding />,
      title: "Iconic Tower Design",
      desc: "Architecturally distinctive tower with modern elevation.",
    },
    {
      icon: <FaBuilding />,
      title: "Prime Indirapuram Location",
      desc: "Located in the heart of Indirapuram with top connectivity.",
    },
    {
      icon: <FaBuilding />,
      title: "Corner & Green Facing Units",
      desc: "80% units are corner and green-facing for better light & views.",
    },

    // CLUB & LIFESTYLE
    {
      icon: <GiWaterDrop />,
      title: "Luxury Clubhouse",
      desc: "Club with swimming pool, gym, billiards & party hall.",
    },
    {
      icon: <GiGymBag />,
      title: "Gymnasium",
      desc: "Fully equipped fitness center for active lifestyle.",
    },
    {
      icon: <GiMeditation />,
      title: "Yoga & Meditation Area",
      desc: "Dedicated peaceful zones for wellness & relaxation.",
    },

    // LEISURE
    {
      icon: <FaChild />,
      title: "Kids Play Area",
      desc: "Safe and engaging play zones for children.",
    },
    {
      icon: <FaTree />,
      title: "Senior Citizen Area",
      desc: "Comfortable spaces designed for elderly residents.",
    },
    {
      icon: <FaRunning />,
      title: "Jogging Track",
      desc: "Dedicated track for fitness and morning walks.",
    },
    {
      icon: <FaTree />,
      title: "Amphitheatre",
      desc: "Open space for community events and gatherings.",
    },
    {
      icon: <FaBuilding />,
      title: "Hobby & Activity Center",
      desc: "Spaces designed for creativity and social activities.",
    },

    // UTILITIES & SECURITY
    {
      icon: <GiWaterDrop />,
      title: "RO Water Supply",
      desc: "Clean and safe drinking water system.",
    },
    {
      icon: <MdSecurity />,
      title: "24x7 CCTV Security",
      desc: "Round-the-clock surveillance and safety systems.",
    },
    {
      icon: <FaBuilding />,
      title: "High-Speed Lifts",
      desc: "Fast and efficient elevators in all towers.",
    },
    {
      icon: <FaBuilding />,
      title: "Commercial Complex",
      desc: "Convenient shopping and daily needs within premises.",
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
