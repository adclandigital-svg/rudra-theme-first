"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./testimonial.css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Amit Sharma",
    message:
      "Rudra Buildcon delivered exactly what they promised. The quality of construction and attention to detail is truly impressive.",
  },
  {
    name: "Neha Verma",
    message:
      "From planning to execution, everything was smooth and transparent. Highly professional team and timely delivery.",
  },
  {
    name: "Rahul Singh",
    message:
      "The project exceeded our expectations. Modern design, great quality, and excellent support throughout.",
  },
  {
    name: "Priya Mehta",
    message:
      "A trustworthy builder with a strong commitment to quality and customer satisfaction. Highly recommended.",
  },
];

export default function TestimonialSection() {
  const testimonial = useRef(null);
  const testimonial_outer = useRef(null);

    useGSAP(() => {
      gsap.from(testimonial_outer.current, {
        scrollTrigger: {
          trigger: testimonial.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });
    });

  return (
    <div className="testimonial-section-outler" ref={testimonial_outer}>
      <section className="testimonial-section" ref={testimonial}>
        <div className="testimonial-header">
          <h2>
            What Our <span>Clients Say</span>
          </h2>
          <p>
            Real experiences from our valued clients who trusted Rudra Buildcon.
          </p>
        </div>

        <div className="testimonial-container">
          {testimonials.map((item, i) => (
            <div className="testimonial" key={i}>
              <p className="message">“{item.message}”</p>
              <h4 className="name">— {item.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
