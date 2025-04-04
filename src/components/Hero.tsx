"use client";
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-heroBg p-8 flex flex-col lg:flex-row">
      <div className="lg:w-1/2 flex justify-center items-center p-8 mt-10">
        <div className="max-w-xl text-left font-youngSerif">
          <h1 className="font-normal text-[clamp(42px,_6vw,_64px)]">
            Welcome to Your Neighborhood Bakery
          </h1>
        </div>
      </div>
      <div className="lg:w-1/2 mt-4 lg:mt-0 flex justify-center items-center p-8">
        <div className="max-w-xl text-left">
          <p className="text-xl font-normal">
            Wholesome, homemade bakes for you & your little ones, lovingly made in my home cottage bakery in Shelton, CT.
          </p>
          <p className="text-xl mt-4 font-normal">
            Place your order and reserve a Sunday pickup time below to enjoy fresh-baked goods all week long!
          </p>
          <Link 
            href="https://www.hotplate.com/kaniskitchen" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="mt-8 px-10 py-5 bg-black text-heroBg font-normal text-xl rounded-tl-[50px] rounded-br-[50px] hover:bg-black/90 transition-all">
              Order
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
