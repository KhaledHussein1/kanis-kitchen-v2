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
        <div className="flex flex-col md:flex-row gap-16 md:gap-20 w-full md:w-1/3 mb-12 md:mb-0 mt-8 ml-16"> {/* Increased margin-left to move sections more to the right */}
          {/* Explore Column */}
          <div className="text-textColor w-full md:w-auto">
            <h3 className="text-[16px] font-bold font-bitter mb-4">Explore</h3>
            <ul>
              <li className="mb-2"><a href="/" className="font-bitter font-normal text-[16px] underline">About</a></li>
              <li className="mb-2"><a href="/about" className="font-bitter font-normal text-[16px] underline">Contact</a></li>
              <li className="mb-2"><a href="/contact" className="font-bitter font-normal text-[16px] underline">Order</a></li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="text-textColor w-full md:w-auto">
            <h3 className="text-[16px] font-bold font-bitter mb-4">Follow Us</h3>
            <ul>
              <li className="mb-2"><a href="#" className="font-bitter font-normal text-[16px] underline">Email</a></li>
              <li className="mb-2"><a href="#" className="font-bitter font-normal text-[16px] underline">Facebook</a></li>
              <li className="mb-2"><a href="#" className="font-bitter font-normal text-[16px] underline">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Right Column: Sign Up */}
        <div className="text-textColor max-w-[500px] w-full md:w-1/3 mt-8 ml-10 mr-6"> {/* Increased margin-left to move sections more to the right */}
          <p className="mb-4">Sign up with your email address to receive news and updates</p>
          <div className="flex flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 border border-gray-300 rounded-md focus:outline-none w-full"
            />
            <button className="w-[200px] py-3 bg-black text-[#EBEAEB] font-normal text-lg rounded-tl-[50px] rounded-br-[50px] hover:bg-black/90 transition-all">
                Sign Up
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
