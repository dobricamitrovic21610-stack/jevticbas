"use client";

import { asset } from "@/lib/paths";
import { motion } from "framer-motion";
import Image from "next/image";

type HeaderProps = {
  brand: string;
  logoUrl: string;
};

const links = [
  { href: "#top", label: "Početna" },
  { href: "#o-nama", label: "O nama" },
  { href: "#radovi", label: "Radovi" },
  { href: "#contact", label: "Kontakt" },
];

export function Header({ brand, logoUrl }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b border-cream-300/50 bg-cream-100/90 backdrop-blur-md"
    >
      <div className="relative mx-auto flex min-h-[3.75rem] w-full max-w-6xl items-center justify-center px-2 py-2.5 sm:min-h-[4.25rem] sm:px-8 sm:py-3">
        <a
          href="#top"
          className="absolute left-2 top-1/2 z-10 flex -translate-y-1/2 items-center gap-2 sm:left-8 lg:left-10"
        >
          <span className="relative size-9 shrink-0 overflow-hidden rounded-full shadow-clay ring-2 ring-white sm:size-11">
            <Image
              src={asset(logoUrl)}
              alt={brand}
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="font-display hidden max-w-[7rem] truncate text-base tracking-tight text-ink sm:inline sm:max-w-none sm:text-xl">
            {brand}
          </span>
        </a>

        <nav
          aria-label="Glavna navigacija"
          className="flex items-center justify-center gap-0.5 rounded-full bg-white/70 p-1 shadow-clay sm:gap-1 sm:px-1.5 sm:py-1.5"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-2 py-1.5 text-[0.65rem] font-medium text-ink-muted transition-colors hover:bg-cream-100 hover:text-ink active:bg-cream-200 sm:px-4 sm:py-2 sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
