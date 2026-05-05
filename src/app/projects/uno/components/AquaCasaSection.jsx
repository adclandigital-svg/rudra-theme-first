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

import {
  FaFilm,
  FaVideo,
  FaHotel,
  FaUsers,
  FaBed,
  FaTshirt,
  FaStore,
  FaLeaf,
  FaEnvelope,
  FaMountain,
  FaUmbrellaBeach,
} from "react-icons/fa";

import { MdTheaterComedy } from "react-icons/md";
import { GiWaterfall } from "react-icons/gi";

export default function AquaCasaSection() {
  const features = [
    {
      icon: <FaBuilding />,
      title: "City Viewpoints",
      desc: "Elevated spaces offering scenic city views.",
    },
    {
      icon: <MdSecurity />,
      title: "Electronic Security Systems",
      desc: "Advanced security and surveillance systems.",
    },
    {
      icon: <FaFilm />,
      title: "Mini Cinema",
      desc: "Private movie experience within the community.",
    },
    {
      icon: <FaVideo />,
      title: "Media Centre",
      desc: "Dedicated entertainment and media space.",
    },
    {
      icon: <FaBook />,
      title: "Library",
      desc: "Peaceful reading environment for residents.",
    },
    {
      icon: <FaBuilding />,
      title: "Business Centre",
      desc: "Professional workspace within the premises.",
    },
    {
      icon: <FaHotel />,
      title: "Plaza & Luxurious Lobbies",
      desc: "Grand entry spaces with premium design.",
    },
    {
      icon: <FaUsers />,
      title: "Multipurpose Hall",
      desc: "Space for events, functions, and gatherings.",
    },
    {
      icon: <GiMeditation />,
      title: "Separate Spa (Men & Women)",
      desc: "Wellness facilities designed for relaxation.",
    },
    {
      icon: <MdTheaterComedy />,
      title: "Amphitheater",
      desc: "Open-air venue for events and performances.",
    },
    {
      icon: <FaChild />,
      title: "Children Play Area",
      desc: "Safe and fun play zones for kids.",
    },
    {
      icon: <FaTree />,
      title: "Garden & Party Area",
      desc: "Landscaped gardens with barbeque pits.",
    },
    {
      icon: <FaBed />,
      title: "Guest Suites",
      desc: "Comfortable stay options for visitors.",
    },
    {
      icon: <FaTshirt />,
      title: "Common Laundry",
      desc: "Shared laundry facility for residents.",
    },
    {
      icon: <FaStore />,
      title: "Commercial Spaces",
      desc: "Retail and convenience stores within the complex.",
    },
    {
      icon: <FaLeaf />,
      title: "Bliss Unadulterated Greens",
      desc: "Lush surroundings with gardens, fountains, and play areas.",
    },
    {
      icon: <GiMeditation />,
      title: "Meditation & Yoga",
      desc: "Dedicated calm spaces for relaxation and wellness.",
    },
    {
      icon: <FaEnvelope />,
      title: "Courier Desk",
      desc: "Convenient parcel handling within the premises.",
    },
    {
      icon: <FaMountain />,
      title: "Rock Garden",
      desc: "Aesthetic landscaped stone garden.",
    },
    {
      icon: <GiWaterfall />,
      title: "Streams",
      desc: "Natural water features enhancing tranquility.",
    },
    {
      icon: <FaUmbrellaBeach />,
      title: "Pavilion",
      desc: "Relaxation spots within landscaped greens.",
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
