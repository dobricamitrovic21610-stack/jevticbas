import { PortfolioPage } from "@/components/PortfolioPage";
import { profile } from "@/data/profile";

export default function Home() {
  return <PortfolioPage profile={profile} />;
}
