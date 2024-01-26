import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

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
          <title>Victor Assis - CompBio</title>
        </head>
        <body className={inter.className}>
          {children}
          <Analytics />
        </body>
      </html>
  );
}
