import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ReduxProvider } from "@/Lib/ReduxProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "plyr/dist/plyr.css";

const spartan = localFont({
  src: [
    {
      path: "../../public/fonts/Spartan/LeagueSpartan-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Spartan/LeagueSpartan-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Spartan/LeagueSpartan-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Spartan/LeagueSpartan-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Spartan/LeagueSpartan-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Spartan/LeagueSpartan-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Spartan/LeagueSpartan-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Spartan/LeagueSpartan-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Spartan/LeagueSpartan-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-spartan", 
});

export const metadata: Metadata = {
  title: "IT-Legend | Course Progress & Learning Platform",
  description:
    "A responsive Next.js training project by Abdalla Yahia for IT-Legend. Includes interactive courses, lessons, videos, PDFs, weekly exams, motivational messages, and progress tracking using localStorage.",
  keywords: [
    "Next.js",
    "Frontend Developer Task",
    "IT-Legend",
    "Course Platform",
    "React",
    "Redux Toolkit",
    "Tailwind CSS",
    "TypeScript",
    "Learning System",
  ],
  authors: [{ name: "Abdalla Yahia", url: "https://github.com/abdalla-yahia" }],
  openGraph: {
    title: "IT-Legend | Course Progress & Learning Platform",
    description:
      "A Next.js task developed by Abdalla Yahia featuring course lessons, videos, PDFs, exams, and progress tracking.",
    url: "https://it-legend-task-ten.vercel.app/",
    siteName: "IT-Legend Task",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "IT-Legend Course Platform",
      },
    ],
    locale: "en_US",
    type: "website",
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
        className={`${spartan.variable} antialiased`}
      >
        <ReduxProvider >
          {children}
        </ReduxProvider>
        <ToastContainer limit={1}/>
      </body>
    </html>
  );
}
