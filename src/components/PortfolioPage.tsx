"use client";

import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroProfile } from "@/components/HeroProfile";
import type { PortfolioProfile } from "@/types/instagram";

type PortfolioPageProps = {
  profile: PortfolioProfile;
};

export function PortfolioPage({ profile }: PortfolioPageProps) {
  return (
    <div id="top" className="bg-atmosphere min-h-screen">
      <Header brand={profile.displayName} logoUrl={profile.avatarUrl} />
      <main>
        <HeroProfile profile={profile} />
        <AboutSection profile={profile} />
        <GalleryGrid works={profile.works} />
        <ContactSection profile={profile} />
      </main>
      <Footer
        brand={profile.displayName}
        email={profile.email}
        address={profile.address}
        socials={profile.socials}
      />
    </div>
  );
}
