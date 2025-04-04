import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Import Navbar
import Footer from "@/components/Footer"; // Import Footer

export const metadata: Metadata = {
  title: "Kani's Kitchen",
  description: "Delicious homemade baked goods made with love by Kani. Specializing in sourdough, artisan breads, and toddler-friendly treats.",
  openGraph: {
    title: "Kani's Kitchen",
    description: "Delicious homemade baked goods made with love by Kani. Specializing in sourdough, artisan breads, and toddler-friendly treats.",
    url: "https://www.kaniskitchen.com",  // Replace with your actual URL
    images: [
      {
        url: "https://www.kaniskitchen.com/images/logo.jpg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Kani's Kitchen Logo",
      },
    ],
    siteName: "Kani's Kitchen",
  },
  icons: {
    icon: "/favicon.ico", // Adding the favicon here too
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Link */}
        <link rel="icon" href="/favicon.ico" />

        {/* Meta Robots Tag */}
        <meta name="robots" content="index, follow" />
      </head>
      <body>
        <Navbar /> {/* Navbar appears on all pages */}
        <main className="container mx-auto max-w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
