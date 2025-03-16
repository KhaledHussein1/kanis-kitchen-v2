"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup when unmounted
    };
  }, [menuOpen]);

  const linkClasses = (path: string) =>
    `text-textColor font-bitter ${
      pathname === path ? "underline decoration-1 underline-offset-4" : ""
    }`;

  return (
    <nav className="bg-navbarFooter relative flex flex-col">
      {/* Navbar Top */}
      <div className="flex justify-between items-center py-16 px-8 h-55 max-w-6xl mx-auto w-full">
        {/* Left Menu for large screens */}
        <div className="hidden md:flex gap-5 -ml-2">
          <Link href="/" className={linkClasses("/")} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className={linkClasses("/about")} onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" className={linkClasses("/contact")} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image src="/images/logo.jpg" alt="Logo" width={190} height={150} />
        </div>
        {/* Hamburger Icon for small screens */}
        <div className="ml-auto flex flex-col gap-1.5 cursor-pointer md:hidden" onClick={toggleMenu}>
          <div
            className={`w-6 h-0.5 bg-textColor transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-textColor transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-0.5" : ""
            }`}
          ></div>
        </div>
      </div>
      {/* Menu Overlay for small screens */}
      <div
        className={`fixed inset-0 top-[135px] bg-navbarFooter flex flex-col items-center justify-center gap-16 z-10 
          transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"} 
          h-[calc(100vh-135px)] overflow-hidden`}
      >
        <Link href="/" className={`${linkClasses("/")} text-5xl md:text-7xl font-bold`} onClick={toggleMenu}>
          Home
        </Link>
        <Link href="/about" className={`${linkClasses("/")} text-5xl md:text-7xl font-bold`} onClick={toggleMenu}>
          About
        </Link>
        <Link href="/contact" className={`${linkClasses("/")} text-5xl md:text-7xl font-bold`} onClick={toggleMenu}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
