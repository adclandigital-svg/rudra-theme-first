import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/About";
import FeatureSection from "@/components/home/Strip";
import Homereels from "@/components/home/Homereels";
import Amenities from "@/components/home/Amenities";
export default function Home() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <AboutSection />
      <Homereels />
      <Amenities/>
    </>
  );
}
