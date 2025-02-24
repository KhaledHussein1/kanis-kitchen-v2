import HeroSection from "@/components/HeroSection"
import AboutUsTeaser from "@/components/AboutUsTeaser";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsTeaser />
      <FeaturedProducts />
      <Testimonials />
      <Footer />
    </div>
  );
}
