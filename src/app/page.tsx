import { SiteAboutMeSection } from "@/components/SiteAboutMeSection";
import { SiteHeroSection } from "@/components/SiteHeroSection";
import { SiteNavigation } from "@/components/SiteNavigation";

export default function Home() {
  const linksData = [
    { id: 1, title: "Home", path: "#SiteHeroComponent" },
    { id: 2, title: "About", path: "#SiteAboutComponent" },
    { id: 3, title: "Portfolio", path: "#SitePortfolioComponent" },
  ] as { id: number; title: string; path: string }[];

  return (
    <>
      <SiteNavigation links={linksData} />
      <SiteHeroSection id="#SiteHeroComponent" />
      <SiteAboutMeSection id="#SiteAboutComponent" />
    </>
  );
}
