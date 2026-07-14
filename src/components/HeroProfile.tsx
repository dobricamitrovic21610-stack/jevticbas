"use client";

import { asset } from "@/lib/paths";
import type { PortfolioProfile } from "@/types/instagram";
import { motion } from "framer-motion";
import Image from "next/image";
import { TiltCard } from "./TiltCard";

type HeroProfileProps = {
  profile: PortfolioProfile;
};

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

export function HeroProfile({ profile }: HeroProfileProps) {
  return (
    <section className="section-anchor relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-12 pt-8 sm:px-8 sm:pb-20 sm:pt-14 lg:px-10">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mb-4 text-center text-[0.65rem] uppercase tracking-[0.2em] text-ink-soft sm:mb-6 sm:text-xs sm:tracking-[0.22em]"
      >
        Zavarivačko-bravarska radnja · Loznica
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="font-display mb-8 max-w-2xl text-center text-3xl leading-[1.15] tracking-tight text-ink sm:mb-12 sm:text-5xl md:text-6xl"
      >
        {profile.displayName}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-lg"
        style={{ perspective: 1200 }}
      >
        <TiltCard maxTilt={6} scaleOnHover={1.015} className="w-full">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-white/90 to-cream-200/80 p-1 shadow-clay-lg sm:rounded-[2rem]">
            <div className="rounded-[1.6rem] bg-cream-50/95 px-5 py-8 sm:rounded-[1.85rem] sm:px-10 sm:py-11">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6 sm:mb-7">
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-[#F5D76E]/35 via-white/50 to-[#2F6F73]/25 blur-md" />
                  <div className="relative size-28 overflow-hidden rounded-full bg-cream-200 shadow-clay ring-4 ring-white/90 sm:size-36">
                    <Image
                      src={asset(profile.avatarUrl)}
                      alt={`${profile.displayName} logo`}
                      fill
                      sizes="144px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                <p className="font-display text-xl tracking-tight text-ink sm:text-3xl">
                  @{profile.username}
                </p>
                <p className="mt-2 text-sm text-ink-muted sm:text-base">
                  {profile.tagline}
                </p>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted sm:mt-5">
                  {profile.bio}
                </p>

                <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row">
                  <motion.button
                    type="button"
                    onClick={() => scrollToId("radovi")}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-ink px-5 py-3.5 text-sm text-cream-50 shadow-clay sm:py-3"
                  >
                    Pogledaj radove
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => scrollToId("contact")}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-white/85 px-5 py-3.5 text-sm text-ink shadow-clay sm:py-3"
                  >
                    Kontakt
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </TiltCard>
      </motion.div>
    </section>
  );
}
