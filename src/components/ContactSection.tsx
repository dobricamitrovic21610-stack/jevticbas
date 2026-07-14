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
  "flex flex-col items-center gap-2 rounded-2xl bg-cream-100/80 px-4 py-5 text-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)] transition-transform hover:-translate-y-0.5";

export function ContactSection({ profile }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="overflow-hidden rounded-[2rem] bg-cream-50/95 p-8 shadow-clay-lg sm:p-12"
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

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profile.phone ? (
            <a href={`tel:${profile.phone}`} className={cardClass}>
              <Phone className="size-5 text-ink" strokeWidth={1.75} />
              <span className="text-xs uppercase tracking-[0.14em] text-ink-soft">
                Telefon
              </span>
              <span className="text-sm text-ink">064 45 85 033</span>
            </a>
          ) : null}

          <a href={`mailto:${profile.email}`} className={cardClass}>
            <Mail className="size-5 text-ink" strokeWidth={1.75} />
            <span className="text-xs uppercase tracking-[0.14em] text-ink-soft">
              Email
            </span>
            <span className="break-all text-sm text-ink">{profile.email}</span>
          </a>

          {profile.address ? (
            <div className={cardClass}>
              <MapPin className="size-5 text-ink" strokeWidth={1.75} />
              <span className="text-xs uppercase tracking-[0.14em] text-ink-soft">
                Adresa
              </span>
              <span className="text-sm text-ink">{profile.address}</span>
            </div>
          ) : null}

          <a
            href={profile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClass}
          >
            <InstagramGlyph className="size-5 text-ink" />
            <span className="text-xs uppercase tracking-[0.14em] text-ink-soft">
              Instagram
            </span>
            <span className="text-sm text-ink">@{profile.username}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
