import type { Metadata } from "next";
import "./globals.css";

export const meta Metadata = {
  title: "Indigenous Fire & Landscape Resilience Intelligence Platform",
  description:
    "Australia-wide resilience operating system for fire history, stewardship, risk, carbon, and ecology."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
