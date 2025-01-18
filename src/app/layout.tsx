import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FitTech - Your Ultimate Fitness Companion",
  description: "Transform your fitness journey with AI-powered insights, personalized workouts, and nutrition planning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-gray-900 text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
