import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Import Navbar

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
      </body>
    </html>
  );
}
