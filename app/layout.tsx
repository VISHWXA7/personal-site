import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishwaa - Developer & Problem Solver",
  description: "Portfolio of Vishwaa - A passionate developer creating digital experiences that matter. Specializing in modern web technologies, full-stack development, and innovative solutions.",
  keywords: ["developer", "portfolio", "web development", "full-stack", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Vishwaa" }],
  creator: "Vishwaa",
  openGraph: {
    title: "Vishwaa - Developer & Problem Solver",
    description: "Portfolio of Vishwaa - A passionate developer creating digital experiences that matter.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishwaa - Developer & Problem Solver",
    description: "Portfolio of Vishwaa - A passionate developer creating digital experiences that matter.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
