"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import {
  Home,
  Palette,
  ClipboardList,
  BadgeDollarSign,
  UserCheck,
  Clock,
} from "lucide-react";

import "./strip.css";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureSection() {
  const sectionRef = useRef(null);

  const features = [
    { icon: Home, title: "Modern Architectural Design" },
    { icon: Palette, title: "Customized Construction Solutions" },
    { icon: ClipboardList, title: "Free Site Consultation & Planning" },
    { icon: BadgeDollarSign, title: "Transparent Costing System" },
    { icon: UserCheck, title: "Expert Project Execution" },
    { icon: Clock, title: "On-Time Project Delivery" },
  ];

  return (
    <div className="feature-section" ref={sectionRef}>
      <div className="feature-container">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="feature-item" key={index}>
              <Icon size={42} strokeWidth={1.5} />
              <h3>{item.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}