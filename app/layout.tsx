import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor Assis - CompBio",
  description: "My personal website. I write, code and do research on computational biology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <head>
          <title>Victor Assis - Data & Software Engineering</title>
        </head>
        <body className={inter.className}>
          {children}
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
  );
}
