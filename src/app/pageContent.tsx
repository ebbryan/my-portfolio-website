"use client";

import SiteFooter from "@/components/SiteFooter";
import { SiteHeroSection } from "@/components/SiteHeroSection";
import SiteAboutMeSection from "@/components/SiteAboutMeSection";
import SiteProjectsSection from "@/components/SiteProjectsSection";
import ScrollToTop from "react-scroll-to-top";

const PageContent = () => {
  return (
    <main>
      <div className="w-full px-4 md:px-16">
        <SiteHeroSection />
        <SiteAboutMeSection />
        <SiteProjectsSection />
      </div>
      <SiteFooter />
      <ScrollToTop
        smooth
        className="p-2 !bottom-[70px] z-50"
        width="100%"
      />
    </main>
  );
};

export default PageContent;
