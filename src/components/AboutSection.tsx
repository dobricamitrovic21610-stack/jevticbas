"use client";

import type { PortfolioProfile } from "@/types/instagram";
import { motion } from "framer-motion";
import { Hammer, MapPin, Shield, Truck } from "lucide-react";

type AboutSectionProps = {
  profile: PortfolioProfile;
};

const services = [
  {
    icon: Hammer,
    title: "Bravarski radovi",
    text: "Ograde, kapije, stepeništa, inox i CNC elementi — sve po meri.",
  },
  {
    icon: Shield,
    title: "Staklene ograde",
    text: "Kaljeno i laminirano staklo, aluminijumski profili, EU standardi.",
  },
  {
    icon: Truck,
    title: "Najam korpe do 22 m",
    text: "Siguran rad na visini za fasade, reklame i montažne poslove.",
  },
  {
    icon: MapPin,
    title: "Radimo širom Srbije",
    text: "Sediste u Loznici — izlazimo na terene širom zemlje.",
  },
];

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section
      id="o-nama"
      className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-center sm:mb-14"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-ink-soft">
          Upoznajte nas
        </p>
        <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
          O nama
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
          {profile.displayName} je zavarivačko-bravarska radnja osnovana 2019.
          godine. Bavimo se izradom i montažom metalnih konstrukcija, ograda i
          srodnih radova — sa fokusom na preciznost, bezbednost i dugotrajnost.
          {profile.address ? ` Adresa: ${profile.address}.` : ""}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
        {services.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.55 }}
            whileHover={{ y: -4 }}
            className="rounded-[1.5rem] bg-cream-50/90 p-6 shadow-clay sm:p-7"
          >
            <div className="mb-4 inline-flex rounded-full bg-cream-200/80 p-3 text-ink">
              <item.icon className="size-5" strokeWidth={1.75} />
            </div>
            <h3 className="font-display text-xl tracking-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
