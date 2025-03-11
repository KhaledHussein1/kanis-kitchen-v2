import React from 'react';

const AboutUsTeaser = () => {
  return (
    <section className="my-16 px-6 text-center max-w-3xl mx-auto animate-fade-in">
      <h1 className="text-5xl font-bold text-accent mb-4">Kani's Kitchen</h1>
      <h2 className="text-3xl font-bold text-accent mb-4">Baked with Love, Served with Joy</h2>
      <p className="mt-4 text-lg text-foreground leading-relaxed">
        Welcome to Kani’s Kitchen, where every bite tells a story. My passion for baking is infused in every loaf, cookie, and pastry. Using only the finest ingredients, I bring you the warmth of tradition and the joy of homemade goodness. Experience the magic of my kitchen, one delightful bite at a time.
      </p>
      <a
        href="/about"
        className="mt-8 button-accent transform transition-transform hover:scale-105"
      >
        Discover Our Story
      </a>
    </section>
  );
};

export default AboutUsTeaser;
