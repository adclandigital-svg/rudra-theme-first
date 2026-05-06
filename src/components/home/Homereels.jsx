"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./homereels.css";

const projects = [
  {
    name: "Palace Heights",
    src: "https://videocdn.cdnpk.net/videos/794bad83-871e-5616-afcd-046bd7c0f217/vertical/previews/watermarked/large.mp4",
    location: "Greater Noida",
    type: "High Rise Apartment",
    area: "2/3/4 BHK",
    status: "Under Construction",
    desc: "A contemporary high-rise residential development offering smartly designed homes with efficient layouts, natural light, ventilation, and modern amenities for a comfortable urban lifestyle in Greater Noida.",
  },
  {
    name: "Aquacasa",
    src: "https://videocdn.cdnpk.net/videos/794bad83-871e-5616-afcd-046bd7c0f217/vertical/previews/watermarked/large.mp4",
    location: "Noida Extension",
    type: "Luxury Villa",
    area: "3200 Sq.Ft",
    status: "Ongoing",
    desc: "A thoughtfully planned villa community offering spacious layouts, modern architecture, and serene surroundings. Designed for families seeking privacy, comfort, and a premium low-density lifestyle in Noida Extension.",
  },

  {
    name: "Pavo Real",
    src: "https://videocdn.cdnpk.net/videos/25b9be54-b07b-50dd-8b22-ab8de0642358/vertical/previews/watermarked/large.mp4",
    location: "Delhi NCR",
    type: "Commercial + Residential",
    area: "15000 Sq.Ft",
    status: "Completed",
    desc: "A well-integrated mixed-use project combining residential comfort with commercial convenience, offering strong connectivity, practical design, and long-term investment value in a growing NCR corridor.",
  },

  {
    name: "Skytracks",
    src: "https://videocdn.cdnpk.net/videos/794bad83-871e-5616-afcd-046bd7c0f217/vertical/previews/watermarked/large.mp4",
    location: "Noida",
    type: "Sky Villas",
    area: "3500 Sq.Ft",
    status: "Ongoing",
    desc: "An exclusive sky-villa concept designed for elevated living, featuring panoramic views, premium specifications, and private luxury spaces for a refined urban lifestyle experience in Noida.",
  },

  {
    name: "Uno",
    src: "https://videocdn.cdnpk.net/videos/25b9be54-b07b-50dd-8b22-ab8de0642358/vertical/previews/watermarked/large.mp4",
    location: "Ghaziabad",
    type: "Residential Project",
    area: "2/3 BHK",
    status: "Planned",
    desc: "A thoughtfully planned residential community focused on affordability, functionality, and modern design, offering well-connected homes ideal for first-time buyers and growing families.",
  },
];

export default function Homereels() {
  const videoRefs = useRef([]);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);

    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === swiper.realIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  };

  return (
    <div className="reels-wrapper">
      <Swiper
        modules={[Pagination]}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          handleSlideChange(swiper);
        }}
        onSlideChange={handleSlideChange}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 1.5 },
          768: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {projects.map((item, index) => (
          <SwiperSlide key={index} className="reel-slide">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={item.src}
              muted
              loop={false} // ❗ IMPORTANT
              playsInline
              className="reel-video"
              onEnded={() => {
                // 👉 slide to next ONLY when video ends
                swiperRef.current?.slideNext();
              }}
              onMouseEnter={(e) => e.target.pause()}
              onMouseLeave={(e) => {
                const swiper = swiperRef.current;
                if (index === swiper.realIndex) {
                  e.target.play();
                }
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="reels-right">
        <div className="badge">🏗️ Featured Project</div>

        <h2 className="project-title">{projects[activeIndex].name}</h2>

        <div className="info-grid">
          <div>
            <span>📍</span> {projects[activeIndex].location}
          </div>
          <div>
            <span>🏢</span> {projects[activeIndex].type}
          </div>
          <div>
            <span>📐</span> {projects[activeIndex].area}
          </div>
          <div>
            <span>🚧</span> {projects[activeIndex].status}
          </div>
        </div>

        <p className="project-desc">{projects[activeIndex].desc}</p>

        <button className="project-btn">View Full Project →</button>
      </div>
    </div>
  );
}
