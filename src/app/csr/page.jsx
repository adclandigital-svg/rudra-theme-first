"use client";

import "./csr.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

export default function CSRPage() {
  /* ===== REFS ONLY (NO LAYOUT CHANGE) ===== */
  const heroRef = useRef(null);
  const causesRef = useRef(null);
  const helpRef = useRef(null);
  const newsRef = useRef(null);
  const quoteRef = useRef(null);

  ScrollTrigger.refresh();

  /* ===== GSAP ANIMATIONS ONLY ===== */
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* HERO */
      gsap.from(heroRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 1.2,
        ease: "power3.out",
      });

      /* CAUSES */
      gsap.from(causesRef.current, {
        scrollTrigger: {
          trigger: causesRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power2.out",
      });

      /* HELP */
      gsap.from(helpRef.current, {
        scrollTrigger: {
          trigger: helpRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power2.out",
      });

      /* NEWS */
      gsap.from(newsRef.current, {
        scrollTrigger: {
          trigger: newsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      });

      /* QUOTE */
      gsap.from(quoteRef.current, {
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 85%",
        },
        opacity: 0,
        scale: 1.05,
        duration: 1.2,
        ease: "power2.out",
      });

      /* 🔥 IMPORTANT FIX */
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="csr-main-container">
      {/* HERO */}
      <section className="csr-hero" ref={heroRef}>
        <img
          src="https://images.unsplash.com/photo-1593113630400-ea4288922497"
          alt=""
        />
        <div className="csr-hero-overlay">
          <span className="tag">Rudra CSR Initiatives</span>
          <h1>Building Communities Beyond Real Estate</h1>
          <p>
            At Rudra Buildwell, we actively contribute towards education,
            sustainability, and social well-being to create a lasting impact.
          </p>
        </div>
      </section>

      {/* CAUSES / CONTRIBUTIONS */}
      <section className="csr-causes" ref={causesRef}>
        <h2>
          <span>Our Contributions</span>
          <br />
          Making a difference through responsible initiatives.
        </h2>

        <div className="csr-swiper-wrapper">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="csr-swiper"
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {[
              {
                img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
                title: "Education Support",
                text: "Providing learning resources, scholarships, and infrastructure for underprivileged students.",
              },
              {
                img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
                title: "Women Empowerment",
                text: "Supporting skill development programs and creating employment opportunities for women.",
              },
              {
                img: "https://images.unsplash.com/photo-1542838132-92c53300491e",
                title: "Community Welfare",
                text: "Organizing food drives, health camps, and essential support for local communities.",
              },
              {
                img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
                title: "Education Support",
                text: "Providing learning resources, scholarships, and infrastructure for underprivileged students.",
              },
              {
                img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
                title: "Women Empowerment",
                text: "Supporting skill development programs and creating employment opportunities for women.",
              },
              {
                img: "https://images.unsplash.com/photo-1542838132-92c53300491e",
                title: "Community Welfare",
                text: "Organizing food drives, health camps, and essential support for local communities.",
              },
            ].map((item, i) => (
              <SwiperSlide key={i}>
                <div className="csr-swiper-card">
                  <img src={item.img} alt="" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* APPROACH */}
      <section className="csr-help" ref={helpRef}>
        <div className="csr-help-left">
          <h2>
            Our Approach to CSR <span>Making Impact</span>
          </h2>

          <p className="csr-intro">
            At Rudra, CSR is not just an initiative — it’s a responsibility. We
            focus on sustainable, long-term impact through structured programs.
          </p>

          <div className="help-item">
            <h4>🏫 Education Initiatives</h4>
            <p>We invest in better education opportunities.</p>
          </div>

          <div className="help-item">
            <h4>🌱 Sustainable Development</h4>
            <p>Eco-friendly and green practices.</p>
          </div>

          <div className="help-item">
            <h4>🤝 Community Support</h4>
            <p>Health camps and welfare programs.</p>
          </div>

          <div className="help-item">
            <h4>💼 Skill Development</h4>
            <p>Empowering youth and women.</p>
          </div>
        </div>

        <div className="csr-help-video">
          <video
            src="https://videocdn.cdnpk.net/videos/b14e415a-5a17-46b9-8ec7-cf432fec81a0/horizontal/previews/magnific_watermarked/large.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>

      {/* NEWS */}
      <section className="csr-news" ref={newsRef}>
        <h2>
          Social Impact <span>Highlights</span>
        </h2>

        <p>
          CSR initiatives focused on education, healthcare, and sustainability.
        </p>

        <div className="news-grid">
          {[
            "https://images.unsplash.com/photo-1519681393784-d120267933ba",
            "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
          ].map((img, i) => (
            <div className="news-card" key={i}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="csr-quote" ref={quoteRef}>
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
          alt=""
        />
        <div className="overlay">
          {" "}
          <h3>
            {" "}
            “Arise, awake, and stop not till the goal is reached. Strength is
            life, weakness is death. Expansion is life, contraction is death.
            Love is life, hatred is death.”{" "}
          </h3>{" "}
          <p>– Swami Vivekananda</p>{" "}
        </div>
      </section>
    </div>
  );
}
