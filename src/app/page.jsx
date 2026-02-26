import AboutSection from "@/components/home/About";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedHorizontal from "@/components/home/FeaturedProperties";
import BlogSection from "@/components/home/BlogSection";
import VideoTestimonials from "@/components/home/VideoTestimonials";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection/>
      <ServicesSection/>
      <FeaturedHorizontal/>
      <BlogSection/>
      <VideoTestimonials/>
    </>
  );
}
