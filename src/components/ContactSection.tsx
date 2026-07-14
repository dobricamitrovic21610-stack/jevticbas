"use client";

import type { PortfolioProfile } from "@/types/instagram";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

type ContactSectionProps = {
  profile: PortfolioProfile;
};

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const cardClass =
  "flex min-h-[7.5rem] flex-col items-center justify-center gap-2 rounded-2xl bg-cream-100/80 px-4 py-5 text-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)] transition-transform hover:-translate-y-0.5 active:scale-[0.99]";

export function ContactSection({ profile }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="section-anchor mx-auto w-full max-w-6xl px-4 pb-16 sm:px-8 sm:pb-28 lg:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="overflow-hidden rounded-[1.75rem] bg-cream-50/95 p-6 shadow-clay-lg sm:rounded-[2rem] sm:p-12"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-ink-soft">
            Javite nam se
          </p>
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Kontakt
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
            Pošaljite upit za ponudu, konsultacije ili najam opreme. Odgovaramo
            u najkraćem roku.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">
          {profile.phone ? (
            <a href={`tel:${profile.phone}`} className={cardClass}>
              <Phone className="size-5 text-ink" strokeWidth={1.75} />
              <span className="text-[0.65rem] uppercase tracking-[0.14em] text-ink-soft sm:text-xs">
                Telefon
              </span>
              <span className="text-xs text-ink sm:text-sm">064 45 85 033</span>
            </a>
          ) : null}

          <a href={`mailto:${profile.email}`} className={cardClass}>
            <Mail className="size-5 text-ink" strokeWidth={1.75} />
            <span className="text-[0.65rem] uppercase tracking-[0.14em] text-ink-soft sm:text-xs">
              Email
            </span>
            <span className="break-all text-[0.7rem] text-ink sm:text-sm">
              {profile.email}
            </span>
          </a>

          {profile.address ? (
            <a
              href={profile.mapsUrl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              <MapPin className="size-5 text-ink" strokeWidth={1.75} />
              <span className="text-[0.65rem] uppercase tracking-[0.14em] text-ink-soft sm:text-xs">
                Adresa
              </span>
              <span className="text-xs leading-snug text-ink sm:text-sm">
                {profile.address}
              </span>
            </a>
          ) : null}

          <a
            href={profile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClass}
          >
            <InstagramGlyph className="size-5 text-ink" />
            <span className="text-[0.65rem] uppercase tracking-[0.14em] text-ink-soft sm:text-xs">
              Instagram
            </span>
            <span className="text-xs text-ink sm:text-sm">
              @{profile.username}
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
