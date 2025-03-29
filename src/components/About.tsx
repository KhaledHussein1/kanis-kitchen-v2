"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-heroBg p-8 flex flex-col lg:flex-row items-center">
      {/* Text Section */}
      <div className="lg:w-1/2 flex justify-center items-start p-8">
        <div className="max-w-xl text-left">
          <h1 className="font-normal text-[clamp(42px,_6vw,_64px)]">About Me</h1>
          <p className="text-xl font-normal mt-4">
            Hi, I’m Kani, the baker behind Kani’s Kitchen. Baking has always been a passion of mine, and after years of feeding little ones as a nanny, I was inspired to create delicious treats that both toddlers and adults can enjoy.
          </p>
          <p className="text-xl font-normal mt-4">
            At Kani’s Kitchen, I specialize in sourdough baking, other artisan breads, and classic treats, along with a special selection of toddler-friendly baked goods—including my signature bee-themed muffins! Every bake is made with care in my home kitchen, using simple, high-quality ingredients. Whether you’re looking for nostalgic flavors or something fun and nutritious for your little one, I’m here to bring joy to every bite.
          </p>
          <p className="text-xl font-normal mt-4">
            Thank you for supporting my home bakery! I can’t wait to share my creations with you.
          </p>
        </div>
      </div>
      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center items-center p-8">
        <Image
          src="/images/about_image.jpg"
          alt="About Me"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default About;
