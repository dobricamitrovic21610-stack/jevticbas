import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jevtić BAS — Metalne konstrukcije i ograde | Loznica",
  description:
    "Jevtić BAS: metalne konstrukcije, staklene i aluminijumske ograde, zavarivačko-bravarski radovi. Loznica — radimo širom Srbije.",
  openGraph: {
    title: "Jevtić BAS",
    description:
      "Metalne konstrukcije · Staklene i aluminijumske ograde · Bravarski radovi",
    url: "https://www.instagram.com/jevtic_bas/",
    type: "website",
    locale: "sr_RS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Latn" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
