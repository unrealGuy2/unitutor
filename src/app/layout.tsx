import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or whatever font creates by default
import "./globals.scss";
import Navbar from "@/components/layout/Navbar"; // <-- Import it

// ... metadata code ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />  {/* <-- Add it here */}
        {children}
      </body>
    </html>
  );
}