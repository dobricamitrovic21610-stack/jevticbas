"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type HeaderProps = {
  brand: string;
  logoUrl: string;
  contactHref: string;
};

const links = [
  { href: "#top", label: "Početna" },
  { href: "#o-nama", label: "O nama" },
  { href: "#radovi", label: "Radovi" },
  { href: "#contact", label: "Kontakt" },
];

export function Header({ brand, logoUrl, contactHref }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b border-cream-300/50 bg-cream-100/80 backdrop-blur-md"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="relative size-10 overflow-hidden rounded-full shadow-clay ring-2 ring-white sm:size-11">
            <Image
              src={logoUrl}
              alt={brand}
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="font-display text-lg tracking-tight text-ink sm:text-xl">
            {brand}
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <motion.a
          href={contactHref}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm text-cream-50 shadow-clay"
        >
          Kontakt
          <ArrowUpRight className="size-3.5" strokeWidth={2} />
        </motion.a>
      </div>

      <nav className="flex items-center justify-center gap-5 border-t border-cream-300/40 px-5 py-2.5 md:hidden">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs text-ink-muted transition-colors hover:text-ink"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
