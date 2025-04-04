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
          Hi, I&apos;m Kani, the baker behind Kani&apos;s Kitchen. Baking has always been a passion of mine, and I love creating delicious treats that bring people together. At Kani&apos;s Kitchen, I specialize in sourdough baking and classic treats — all made with care in my home kitchen using simple, high-quality ingredients. Whether you&apos;re craving the comforting taste of fresh-baked bread or a sweet treat to brighten your day, I&apos;m here to bring joy to every bite.
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
