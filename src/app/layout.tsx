import type { Metadata } from "next";
import { Montserrat, Lora } from "next/font/google";
import localFont from "next/font/local";
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

// Le Jour Serif — real local font (major headings, 122px / 95.1px / 24.4px)
const leJour = localFont({
  variable: "--font-le-jour",
  src: "../../public/fonts/le-jour-serif/Le Jour Serif Personal Use Only.otf",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

// Tan Nimbus — real local font (About heading 36.4px)
const tanNimbus = localFont({
  variable: "--font-tan-nimbus",
  src: "../../public/fonts/tan-nimbus/TAN-NIMBUS.woff2",
  display: "swap",
  fallback: ["Georgia", "serif"],
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
      className={`${montserrat.variable} ${lora.variable} ${leJour.variable} ${tanNimbus.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-lavender text-black font-montserrat">
        {children}
      </body>
    </html>
  );
}
