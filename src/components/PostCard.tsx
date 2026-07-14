"use client";

import type { PortfolioWork } from "@/types/instagram";
import { motion } from "framer-motion";
import Image from "next/image";
import { TiltCard } from "./TiltCard";

type PostCardProps = {
  work: PortfolioWork;
  index: number;
};

const spanClass: Record<NonNullable<PortfolioWork["span"]>, string> = {
  default: "md:col-span-1 md:row-span-1 aspect-square",
  tall: "md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto md:min-h-[28rem]",
  wide: "md:col-span-2 md:row-span-1 aspect-[16/10] md:aspect-[2/1]",
  featured:
    "md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto md:min-h-[32rem]",
};

export function PostCard({ work, index }: PostCardProps) {
  const layout = spanClass[work.span ?? "default"];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: Math.min(index * 0.05, 0.35), duration: 0.65 }}
      className={`group relative ${layout}`}
    >
      <TiltCard maxTilt={5} scaleOnHover={1.02} className="h-full w-full">
        <div className="relative h-full min-h-[16rem] overflow-hidden rounded-[1.5rem] bg-cream-200 shadow-clay transition-shadow duration-500 group-hover:shadow-clay-hover">
          <Image
            src={work.imageUrl}
            alt={work.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="glass-panel rounded-2xl p-4 shadow-clay">
              <p className="text-[0.65rem] uppercase tracking-[0.16em] text-ink-soft">
                {work.category}
              </p>
              <h3 className="font-display mt-1.5 text-lg tracking-tight text-ink">
                {work.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-snug text-ink-muted">
                {work.description}
              </p>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.article>
  );
}
