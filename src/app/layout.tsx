import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Import Navbar

export const metadata: Metadata = {
  title: "Your Website",
  description: "A great website",
};

// Load Google Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Navbar /> {/* Navbar appears on all pages */}
        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
