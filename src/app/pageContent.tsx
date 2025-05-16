"use client";

import SiteAboutMeSection from "@/components/SiteAboutMeSection";
import { SiteHeroSection } from "@/components/SiteHeroSection";
import SiteProjectsSection from "@/components/SiteProjectsSection";
import ScrollToTop from "react-scroll-to-top";

const PageContent = () => {
  return (
    <main className="px-4 md:px-16">
      <SiteHeroSection />
      <SiteAboutMeSection />
      <SiteProjectsSection />
      <ScrollToTop smooth width={"100%"} className="p-2" />
    </main>
  );
};

export default PageContent;
