"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./team-alt.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Mr. Amit Verma",
    role: "Chief Executive Officer",
    img: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg",
  },
  {
    main: true,
    name: "Mr. Rajeev Sharma",
    role: "Chairman & Managing Director",
    img: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg",
  },
  {
    name: "Ms. Neha Singh",
    role: "Director - Sales & Marketing",
    img: "https://img.freepik.com/premium-vector/business-woman-character-vector-illustration_1133257-2432.jpg",
  },
];

export default function TeamUnique() {
  const container = useRef(null);

  useGSAP(
    () => {
      // Set initial hidden state for cards
      gsap.set(".team-card-unique", { y: 120, opacity: 0 });

      // Create ScrollTrigger animation
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 80%", // when top of section hits 80% of viewport height
        onEnter: () => {
          gsap.to(".team-card-unique", {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            clearProps: "all",
          });
        },
        once: true, // run only once
      });
    },
    { scope: container }
  );

  return (
    <section className="team-unique" ref={container}>
      <h2>
        Visionary <span>Leadership</span>
      </h2>

      <p className="team-desc">
        Meet the visionary leaders driving innovation, excellence, and growth at
        Rudra Group. Our leadership team brings decades of expertise in
        delivering landmark real estate developments with trust and quality.
      </p>

      <div className="team-row">
        {team.map((member, i) => (
          <div
            key={i}
            className={`team-card-unique ${member.main ? "active" : ""}`}
          >
            <div className="img-wrap">
              <img src={member.img} alt="" />
            </div>
            <div className="content">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}