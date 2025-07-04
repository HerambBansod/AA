import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // improves performance by reducing layout shifts
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ARPITA ARJUNWADKAR",
  description: `Arpita Arjunwadkar is a passionate Brand & Marketing Specialist helping businesses grow through strategic social media, compelling content, and aesthetic storytelling.
This portfolio showcases her work in Social Media Management (SMM), Content Writing, Script Writing, and Video Creation — blending creativity with clarity to elevate brands across digital platforms.

With a soft, feminine design language and user-first experience, this site is crafted to reflect Arpita’s approach: detail-oriented, visually driven, and audience-focused.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-pink-50 text-gray-900">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
