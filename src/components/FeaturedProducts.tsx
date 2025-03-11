"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Fresh Sourdough Bread",
      image: "/images/sourdough.jpg",
      description: "Crispy on the outside, soft on the inside. Baked fresh daily.",
    },
    {
      name: "Chocolate Chip Cookies",
      image: "/images/cookies.jpg",
      description: "Golden brown, gooey chocolate, and a sprinkle of love.",
    },
    {
      name: "Blueberry Muffins",
      image: "/images/muffins.jpg",
      description: "Bursting with juicy blueberries and a buttery crumb topping.",
    },
  ];

  return (
    <section className="my-16 px-6 text-center">
      <h2 className="text-4xl text-accent">Our Featured Bakes</h2>
      <p className="mt-2 text-lg text-foreground">Handcrafted treats made fresh every day.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <FlipCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

interface Product {
  name: string;
  image: string;
  description: string;
}

const FlipCard = ({ product }: { product: Product }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full h-64 perspective cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-transform"
        animate={{ rotateX: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center backface-hidden" style={{ backfaceVisibility: "hidden" }}>
          <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
        </div>
        {/* Back Side */}
        <div className="absolute w-full h-full bg-white rounded-lg shadow-lg flex flex-col items-center justify-center transform backface-hidden p-4" style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}>
          <h3 className="text-2xl text-accent">{product.name}</h3>
          <p className="text-lg text-foreground mt-2 text-center">{product.description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedProducts;