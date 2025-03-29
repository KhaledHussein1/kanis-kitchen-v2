"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navbarFooter py-20 px-8"> {/* Increased top padding */}
      <div className="max-w-8xl flex flex-col md:flex-row justify-between items-start">
        {/* Left Column: Kani's Kitchen */}
        <div className="text-textColor font-youngSerif mb-12 md:mb-0 md:w-1/3 mt-4 ml-4"> {/* Moved text closer to the top and added margin-left */}
          <h2 className="text-[31px] md:text-[41px] font-normal">
            Kani's Kitchen
          </h2>
        </div>

        {/* Middle Columns: Explore and Follow Us */}
        <div className="flex flex-col md:flex-row gap-24 md:gap-32 w-full md:w-1/3 mb-12 md:mb-0 mt-8 ml-16"> {/* Increased margin-left to move sections more to the right */}
          {/* Explore Column */}
          <div className="text-textColor w-full md:w-auto">
            <h3 className="text-[20px] md:text-[24px] font-bold font-bitter mb-6"> {/* Increased font size */}
              Explore
            </h3>
            <ul className="space-y-4"> {/* Increased spacing between links */}
              <li><a href="/" className="font-bitter font-normal text-[18px] md:text-[20px] underline">About</a></li> {/* Increased font size */}
              <li><a href="/about" className="font-bitter font-normal text-[18px] md:text-[20px] underline">Contact</a></li> {/* Increased font size */}
              <li><a href="/contact" className="font-bitter font-normal text-[18px] md:text-[20px] underline">Order</a></li> {/* Increased font size */}
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="text-textColor w-full md:w-auto">
            <h3 className="text-[20px] md:text-[24px] font-bold font-bitter mb-6"> {/* Increased font size */}
              Follow Us
            </h3>
            <ul className="space-y-4"> {/* Increased spacing between links */}
              <li><a href="#" className="font-bitter font-normal text-[18px] md:text-[20px] underline">Email</a></li> {/* Increased font size */}
              <li><a href="#" className="font-bitter font-normal text-[18px] md:text-[20px] underline">Facebook</a></li> {/* Increased font size */}
              <li><a href="#" className="font-bitter font-normal text-[18px] md:text-[20px] underline">Instagram</a></li> {/* Increased font size */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
