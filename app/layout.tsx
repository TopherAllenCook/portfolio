import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chris Cook — Brand Manager & Storyteller",
  description:
    "Brand manager, storyteller, and senior marketing leader. Fifteen years of brand launches, narrative work, and growth programs for consumer and B2B companies.",
  metadataBase: new URL("https://chriscook.co"),
  openGraph: {
    title: "Chris Cook — Brand Manager & Storyteller",
    description:
      "Brand, story, and growth for consumer and B2B brands. Selected works and case studies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">{children}</body>
    </html>
  );
}
