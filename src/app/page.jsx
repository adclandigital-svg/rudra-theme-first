import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/About";
import FeatureSection from "@/components/home/Strip";
import Homereels from "@/components/home/Homereels";
import Amenities from "@/components/home/Amenities";
import NewsSection from "@/components/home/NewsSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import TeamSectionAlt from "@/components/home/TeamSectionAlt";
export default function Home() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <AboutSection />
      <Homereels />
      <Amenities/>
      <NewsSection/>
      <TestimonialSection/>
      <TeamSectionAlt/>
    </>
  );
}
