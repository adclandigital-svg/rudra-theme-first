import React from "react";
import ImageShowcase from "./components/FloatingCards";
import AboutVisionSection from "./components/AboutVisionSection";
import StairTypesSection from "./components/StairTypesSection";
import TeamUnique from "./components/TeamSectionAlt";
import CompanyTimeline from "./components/CompanyTimeline";

export default function PAGE() {
  return (
    <>
      <ImageShowcase />
      <AboutVisionSection />
      <StairTypesSection />
      <TeamUnique />
      <CompanyTimeline />
    </>
  );
}
