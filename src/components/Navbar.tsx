"use client";
import { useState } from "react";
import Image from "next/image"; // Import the Image component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-[var(--navbar-bg)] shadow-md">
      <div className="w-full text-[var(--navbar-text)]">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          {/* Logo & Toggle Button */}
          <div className="flex flex-row items-center justify-between p-4">
            <a
              href="#"
              className="text-lg font-semibold tracking-widest text-[var(--navbar-text)] uppercase rounded-lg focus:outline-none"
            >
              Kani's Kitchen
            </a>
            {/* Floating Bread Icon */}
            <div className="relative ml-4 animate-floating-bread">
              <Image
                src="/images/bread-icon.png" // Path to the bread icon
                alt="Floating Bread"
                width={40}
                height={40}
              />
            </div>
            <button
              className="rounded-lg md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Menu */}
          <nav
            className={`flex-col flex-grow ${isOpen ? "flex" : "hidden"} pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}
          >
            <a
              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
              href="#"
            >
              Blog
            </a>
            <a
              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
              href="#"
            >
              Portfolio
            </a>
            <a
              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
              href="#"
            >
              About
            </a>
            <a
              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
              href="#"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
