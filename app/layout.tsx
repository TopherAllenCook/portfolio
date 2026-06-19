import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Archivo is a variable font with a width (wdth) axis. We pull both axes so the
// display type can run heavy and slightly expanded for the cinematic VidGraph feel.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chris Cook · Brand Manager & Storyteller",
  description:
    "Brand manager, storyteller, and senior marketing leader. Fifteen years of brand launches, narrative work, and growth programs for consumer and B2B companies.",
  metadataBase: new URL("https://chriscook.co"),
  openGraph: {
    title: "Chris Cook · Brand Manager & Storyteller",
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
      className={`${inter.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">{children}</body>
    </html>
  );
}
