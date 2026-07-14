export type PortfolioWork = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
  category: string;
  span?: "default" | "tall" | "wide" | "featured";
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
};

export type PortfolioProfile = {
  username: string;
  displayName: string;
  tagline: string;
  bio: string;
  email: string;
  phone?: string;
  address?: string;
  mapsUrl?: string;
  avatarUrl: string;
  profileUrl: string;
  works: PortfolioWork[];
  socials: SocialLink[];
};
