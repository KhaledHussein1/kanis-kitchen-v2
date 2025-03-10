import AnimatedSection from "@/components/AnimatedSection";

const HeroSection = () => {
  return (
    // On small screens, pt-0 removes the top padding. On md and above, pt-16 is applied.
    <section className="flex items-center justify-center pt-0 md:pt-16 pb-16 w-full">
      <AnimatedSection>
        <div className="relative bg-gradient-to-b from-[#f5e6ca] to-[#e0c3a0] rounded-2xl shadow-lg w-full max-w-4xl p-12 text-center">
          <h1 className="text-6xl drop-shadow-lg">
            Welcome to Kani’s Kitchen
          </h1>
          <p className="mt-4 text-xl">
            Freshly baked, made with love & warmth.
          </p>
          <a
            href="#about"
            className="mt-6 button-accent"
          >
            Explore Our Bakes
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default HeroSection;
