"use client";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
}

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedSection = ({ children }: AnimatedSectionProps) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // While determining screen size, render without animation.
  if (isMobile === null) {
    return <div>{children}</div>;
  }

  // If on mobile, just return a static div.
  if (isMobile) {
    return <div>{children}</div>;
  }

  // Otherwise, use motion.div for desktop animation.
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
