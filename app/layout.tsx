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
  title: "Chris Cook · AI Marketing Consultant",
  description:
    "AI-native marketing consultant and fractional brand + growth lead. Fifteen years of brand launches and growth systems, now wired with AI so lean teams ship like large ones.",
  metadataBase: new URL("https://chriscook.co"),
  openGraph: {
    title: "Chris Cook · AI Marketing Consultant",
    description:
      "Fractional AI marketing consultant. Brand, growth, and lifecycle systems built with AI inside the stack. Selected works and case studies.",
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
