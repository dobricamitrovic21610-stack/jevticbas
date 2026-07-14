"use client";

import type { SocialLink } from "@/types/instagram";

type FooterProps = {
  brand: string;
  email: string;
  address?: string;
  socials: SocialLink[];
};

export function Footer({ brand, socials }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream-300/70 bg-cream-50/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-center sm:flex-row sm:text-left sm:px-8 lg:px-10">
        <p className="text-xs text-ink-soft">
          © {year} {brand}. Sva prava zadržana.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {socials.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
