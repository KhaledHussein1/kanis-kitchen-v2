import AnimatedSection from "@/components/AnimatedSection";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center py-16 w-full">
      <AnimatedSection>
        <div className="relative bg-gradient-to-b from-[#f5e6ca] to-[#e0c3a0] rounded-2xl shadow-lg w-full max-w-4xl p-12 text-center">
          <h1 className="text-6xl font-extrabold text-[#5a3e2b] drop-shadow-lg">
            Welcome to Kani’s Kitchen
          </h1>
          <p className="mt-4 text-xl text-[#7a5d43]">
            Freshly baked, made with love & warmth.
          </p>
          <a
            href="#about"
            className="mt-6 inline-block bg-[#c59c6c] text-white px-8 py-3 rounded-full text-lg shadow-md transition duration-300 hover:bg-[#a87e4f] hover:scale-105"
          >
            Explore Our Bakes
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default HeroSection;
