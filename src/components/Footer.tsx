"use client";
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-navbarFooter py-20 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
        {/* Kani's Kitchen */}
        <div className="text-textColor font-youngSerif flex-1">
          <h2 className="text-[31px] lg:text-[41px] font-normal">
            Kani&apos;s Kitchen
          </h2>
        </div>

        {/* Explore + Follow Us */}
        <div className="flex flex-col sm:flex-row gap-12 flex-1">
          {/* Explore */}
          <div className="text-textColor">
            <h3 className="text-[20px] lg:text-[24px] font-bold font-bitter mb-6">
              Explore
            </h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="font-bitter font-normal text-[18px] lg:text-[20px] underline">About</Link></li>
              <li><Link href="/contact" className="font-bitter font-normal text-[18px] lg:text-[20px] underline">Contact</Link></li>
              <li>
                <a
                  href="https://www.hotplate.com/kaniskitchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bitter font-normal text-[18px] lg:text-[20px] underline"
                >
                  Order
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="text-textColor">
            <h3 className="text-[20px] lg:text-[24px] font-bold font-bitter mb-6">
              Socials
            </h3>
            <ul className="space-y-4">
            <li>
              <a
                href="https://www.instagram.com/kaniskitchenct/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bitter font-normal text-[18px] lg:text-[20px] underline"
              >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
