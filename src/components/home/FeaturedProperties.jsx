"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./featured.css";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedHorizontal() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const projects = [
    {
      title: "Rudra Elite Residences",
      location: "Sector 150, Noida",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      title: "Rudra Business Hub",
      location: "Noida Expressway",
      img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
    },
    {
      title: "Rudra Heights",
      location: "Sector 78, Noida",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    },
    {
      title: "Rudra Green Villas",
      location: "Greater Noida",
      img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    },
    {
      title: "Rudra Signature Towers",
      location: "Sector 62, Noida",
      img: "https://img.freepik.com/premium-photo/building-with-large-sign-that-says-restaurant-top_1103290-66624.jpg",
    },
  ];

  // Desktop Horizontal Scroll
  useGSAP(() => {
    if (window.innerWidth <= 768) return;

    const slider = sliderRef.current;
    const totalWidth = slider.scrollWidth;
    const viewportWidth = window.innerWidth;

    gsap.to(slider, {
      x: -(totalWidth - viewportWidth + 100),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section className="horizontal-section" ref={sectionRef}>
      <div className="horizontal-header">
        <span>OUR PORTFOLIO</span>
        <h2>Featured Projects</h2>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="desktop-wrapper">
        <div className="horizontal-slider" ref={sliderRef}>
          {projects.map((project, index) => (
            <div className="horizontal-card" key={index}>
              <img src={project.img} alt={project.title} />
              <div className="card-overlay">
                <h3>{project.title}</h3>
                <p>{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="mobile-wrapper">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1.1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="horizontal-card">
                <img src={project.img} alt={project.title} />
                <div className="card-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}