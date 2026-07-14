"use client";

import type { PortfolioProfile } from "@/types/instagram";
import { motion } from "framer-motion";
import Image from "next/image";
import { TiltCard } from "./TiltCard";

type HeroProfileProps = {
  profile: PortfolioProfile;
};

export function HeroProfile({ profile }: HeroProfileProps) {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-10">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mb-6 text-center text-xs uppercase tracking-[0.22em] text-ink-soft"
      >
        Zavarivačko-bravarska radnja · Loznica
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="font-display mb-10 max-w-2xl text-center text-4xl leading-[1.15] tracking-tight text-ink sm:mb-12 sm:text-5xl md:text-6xl"
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
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-white/90 to-cream-200/80 p-1 shadow-clay-lg">
            <div className="rounded-[1.85rem] bg-cream-50/95 px-7 py-9 sm:px-10 sm:py-11">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-7">
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-[#F5D76E]/35 via-white/50 to-[#2F6F73]/25 blur-md" />
                  <div className="relative size-32 overflow-hidden rounded-full bg-cream-200 shadow-clay ring-4 ring-white/90 sm:size-36">
                    <Image
                      src={profile.avatarUrl}
                      alt={`${profile.displayName} logo`}
                      fill
                      sizes="144px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                <p className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
                  @{profile.username}
                </p>
                <p className="mt-2 text-sm text-ink-muted sm:text-base">
                  {profile.tagline}
                </p>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
                  {profile.bio}
                </p>

                <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
                  <motion.a
                    href="#radovi"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-ink px-5 py-3 text-sm text-cream-50 shadow-clay"
                  >
                    Pogledaj radove
                  </motion.a>
                  <motion.a
                    href="#contact"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-white/85 px-5 py-3 text-sm text-ink shadow-clay"
                  >
                    Kontakt
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </TiltCard>
      </motion.div>
    </section>
  );
}
