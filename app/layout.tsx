import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Esteban Machuca – Full-Stack Developer",
  description:
    "Full-stack Next.js developer specializing in modern web apps, clean UI, and real business logic.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Tailwind CSS",
    "Web Developer Portfolio",
    "Junior Developer",
  ],
  openGraph: {
    title: "Esteban Machuca – Full-Stack Developer",
    description:
      "Portfolio of Esteban Machuca, a full-stack developer building real-world Next.js applications.",
    url: "https://estebanmcodes.com",
    siteName: "EstebanMCodes",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Esteban Machuca Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esteban Machuca – Full-Stack Developer",
    description:
      "Full-stack developer building modern Next.js applications with real business logic.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
