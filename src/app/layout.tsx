import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Import Navbar
import Footer from "@/components/Footer"; // Import Footer

export const metadata: Metadata = {
  title: "Your Website",
  description: "A great website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Navbar appears on all pages */}
        <main className="container mx-auto max-w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
