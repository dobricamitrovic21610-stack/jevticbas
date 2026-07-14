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

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const iconUrl = `${basePath}/images/avatar.jpg`;

export const metadata: Metadata = {
  title: "Jevtić BAS — Metalne konstrukcije i ograde | Loznica",
  description:
    "Jevtić BAS: metalne konstrukcije, staklene i aluminijumske ograde, zavarivačko-bravarski radovi. Loznica — radimo širom Srbije.",
  icons: {
    icon: [{ url: iconUrl, type: "image/jpeg" }],
    shortcut: [iconUrl],
    apple: [{ url: iconUrl }],
  },
  openGraph: {
    title: "Jevtić BAS",
    description:
      "Metalne konstrukcije · Staklene i aluminijumske ograde · Bravarski radovi",
    url: "https://www.instagram.com/jevtic_bas/",
    type: "website",
    locale: "sr_RS",
    images: [{ url: iconUrl }],
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
