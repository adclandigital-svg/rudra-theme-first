import React from "react";
import Hero from "./components/Hero";
import AquaCasaSection from "./components/AquaCasaSection";
import ProjectAbout from "./components/ProjectAbout";
import LocationSection from "./components/Location";
import Specifications from "./components/Specifications";
import FloorPlans from "./components/FloorPlans";
import LayoutPlan from "./components/LayoutPlan";
import PaymentPlan from "./components/PaymentPlan";
import SampleFlatGallery from "./components/SampleFlatGallery";
import DownloadSection from "./components/DownloadSection";

export default function page() {
  return (
    <>
      <Hero />
      <ProjectAbout />
      <AquaCasaSection />
      <SampleFlatGallery/>
      <Specifications/>
      <FloorPlans />
      <LayoutPlan />
      <PaymentPlan />
      <LocationSection />
      <DownloadSection/>
    </>
  );
}
