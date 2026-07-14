import type { PortfolioProfile } from "@/types/instagram";

/**
 * Stvarni podaci i lokalne slike skinute sa @jevtic_bas.
 * Bez Instagram statistike.
 */
export const profile: PortfolioProfile = {
  username: "jevtic_bas",
  displayName: "Jevtić BAS",
  tagline: "Kvalitetna bravarija i čelične konstrukcije",
  bio: "Metalne konstrukcije, staklene i aluminijumske ograde, zavarivačko-bravarski radovi i najam kamiona sa korpom. Loznica — radimo širom Srbije.",
  email: "bogdanjevtic@gmail.com",
  phone: "+381644585033",
  address: "Брегалничка 5, Лозница",
  mapsUrl: "https://maps.app.goo.gl/Jaw5ChtahKeLYkry8",
  // lokalne slike u public/images (GitHub Pages koristi /jevticbas prefiks)
  avatarUrl: "/images/avatar.jpg",
  profileUrl: "https://www.instagram.com/jevtic_bas/",
  works: [
    {
      id: "w1",
      title: "Bravarija i čelične konstrukcije",
      category: "Konstrukcije",
      description:
        "Izrada, ugradnja i montaža ograda, čeličnih konstrukcija i bravarskih elemenata — preciznost, pouzdanost i dug vek trajanja.",
      imageUrl: "/images/works/01.jpg",
      alt: "Bravarski radovi i čelične konstrukcije — Jevtić BAS",
      span: "featured",
    },
    {
      id: "w2",
      title: "Pergola sa kaljenim staklom",
      category: "Nadstrešnice",
      description:
        "Pocinkovana, plastificirana i pokrivena kaljenim staklom — otporna na sve vremenske uslove dugi niz godina.",
      imageUrl: "/images/works/02.jpg",
      alt: "Metalna pergola sa kaljenim staklom",
      span: "tall",
    },
    {
      id: "w3",
      title: "Metalna stepeništa i ograde",
      category: "Stepeništa",
      description:
        "Estetički i funkcionalni elementi prilagođeni prostoru — metalne konstrukcije, stepeništa i ograde.",
      imageUrl: "/images/works/03.jpg",
      alt: "Metalne stepenice i ograde",
      span: "default",
    },
    {
      id: "w4",
      title: "Staklene ograde",
      category: "Staklo · Aluminijum",
      description:
        "Spoj moderne arhitekture i bezbednosti — kaljeno i laminirano staklo po EU normama, aluminijumski profili.",
      imageUrl: "/images/works/04.jpg",
      alt: "Staklene ograde od aluminijuma i kaljenog stakla",
      span: "default",
    },
    {
      id: "w5",
      title: "Crkvena ograda",
      category: "Specijalni projekat",
      description:
        "Ograda za Crkvu Svetih apostola Petra i Pavla — jedan od najdražih projekata koji spaja zanat i trajnost.",
      imageUrl: "/images/works/05.jpg",
      alt: "Metalna ograda za crkvu Svetih apostola Petra i Pavla",
      span: "wide",
    },
    {
      id: "w6",
      title: "Staklene ograde — moderni enterijer",
      category: "Staklo",
      description:
        "Svedene, bezbedne i lake za održavanje. Staklo može biti kaljeno, laminirano ili u boji.",
      imageUrl: "/images/works/06.jpg",
      alt: "Moderna staklena ograda u enterijeru",
      span: "tall",
    },
    {
      id: "w7",
      title: "Ograde po meri",
      category: "Ograde",
      description:
        "Metalne, staklene, aluminijumske, inox i CNC ograde — kao i kombinacije metal-staklo i metal-drvo.",
      imageUrl: "/images/works/07.jpg",
      alt: "Različite vrste ograda po meri",
      span: "default",
    },
    {
      id: "w8",
      title: "Kompletna montaža objekata",
      category: "Montaža",
      description:
        "Čelične konstrukcije, sendvič paneli, opšivke i stolarija — kompletno urađen objekat od ideje do montaže.",
      imageUrl: "/images/works/08.jpg",
      alt: "Montaža čelične konstrukcije i panela",
      span: "default",
    },
    {
      id: "w9",
      title: "Radovi širom Srbije",
      category: "Usluge",
      description:
        "Bravarski radovi, ograde, stepeništa i najam kamiona sa korpom do 22 m — Loznica i teritorija cele Srbije.",
      imageUrl: "/images/works/09.jpg",
      alt: "Bravarski radovi Jevtić BAS",
      span: "wide",
    },
  ],
  socials: [
    {
      id: "ig",
      label: "Instagram",
      href: "https://www.instagram.com/jevtic_bas/",
    },
    {
      id: "tel",
      label: "064 45 85 033",
      href: "tel:+381644585033",
    },
    {
      id: "mail",
      label: "Email",
      href: "mailto:bogdanjevtic@gmail.com",
    },
  ],
};
