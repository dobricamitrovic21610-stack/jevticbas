"use client";

import type { PortfolioWork } from "@/types/instagram";
import { motion } from "framer-motion";
import { PostCard } from "./PostCard";

type GalleryGridProps = {
  works: PortfolioWork[];
};

export function GalleryGrid({ works }: GalleryGridProps) {
  return (
    <section
      id="radovi"
      className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mb-10 flex flex-col items-center text-center sm:mb-14"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-ink-soft">
          Portfolio
        </p>
        <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
          Radovi
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink-muted">
          Stvarni radovi sa Instagram profila — pređite mišem za opis projekta.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:auto-rows-[minmax(14rem,auto)] lg:gap-7">
        {works.map((work, index) => (
          <PostCard key={work.id} work={work} index={index} />
        ))}
      </div>
    </section>
  );
}
