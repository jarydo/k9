import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div>
      <div className="max-w-[1000px] mx-auto px-4 mt-6">
        <Header />
      </div>
      <HeroSection />
      <div className="max-w-[1000px] mx-auto px-4 mb-6">
        <AboutSection />
      </div>
      <TestimonialsSection />
      <div className="max-w-[1000px] mx-auto px-4 my-6">
        <NewsSection />
      </div>
    </div>
  );
}
