import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor Assis - CompBio",
  description: "My personal website. I write, code and do research on computational biology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <title>Victor Assis - CompBio</title>
        <body className={inter.className}>{children}</body>
      </html>
  );
}
