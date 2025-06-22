import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/colors.css";
import { NavbarComponent } from "@/components/common/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Workflo - Agile Task & Project Management Tool for Teams",
  description:
    "Streamline your team's workflow with Workflo, a modern project management platform built for agile teams. Plan sprints, track issues, manage tasks, and collaborate in real time.",
  icons: {
    icon: "/icons/favicon.ico",
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
        suppressHydrationWarning
      >
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
}
