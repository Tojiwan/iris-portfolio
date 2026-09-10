import type { Metadata } from "next";
import { Montserrat, Lora, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Primary sans — spec Montserrat for body/labels/metadata
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

// Intro serif — spec Lora 21px
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

// FALLBACK for Le Jour Serif (major headings, 122px / 95.1px / 24.4px)
// TODO when you download fonts: replace with next/font/local from
// public/fonts/le-jour-serif/*.woff2 and keep variable --font-le-jour
const leJourFallback = Cormorant_Garamond({
  variable: "--font-le-jour",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// FALLBACK for Tan Nimbus (About heading 36.4px)
// TODO when you download fonts: replace with next/font/local from
// public/fonts/tan-nimbus/*.woff2 and keep variable --font-tan-nimbus
const tanNimbusFallback = Cormorant_Garamond({
  variable: "--font-tan-nimbus",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iris Quiambao — Designer",
  description:
    "Portfolio of Iris Quiambao, showcasing UI design, branding, posters, patterns, and creative digital work.",
  keywords: [
    "Iris Quiambao",
    "UI design",
    "brand identity",
    "graphic design",
    "portfolio",
  ],
  authors: [{ name: "Iris Quiambao" }],
  openGraph: {
    title: "Iris Quiambao — Designer",
    description:
      "UI design, branding, posters, patterns, and creative digital work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iris Quiambao — Designer",
    description:
      "UI design, branding, posters, patterns, and creative digital work.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lora.variable} ${leJourFallback.variable} ${tanNimbusFallback.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-lavender text-black font-montserrat">
        {children}
      </body>
    </html>
  );
}
