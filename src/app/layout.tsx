import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Hendrik Metsallik — Full-Stack Developer",
  description:
    "Full-stack software developer with 4+ years experience in React, TypeScript, and .NET.",
  openGraph: {
    title: "Hendrik Metsallik — Full-Stack Developer",
    description: "React · TypeScript · .NET",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
