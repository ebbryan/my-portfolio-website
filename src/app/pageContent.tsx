"use client";

import SiteAboutMeSection from "@/components/SiteAboutMeSection";
import { SiteHeroSection } from "@/components/SiteHeroSection";
import ScrollToTop from "react-scroll-to-top";

const PageContent = () => {
  return (
    <>
      <SiteHeroSection />
      <SiteAboutMeSection />
      {/* <SiteProjectsSection /> */}
      <ScrollToTop smooth width={"100%"} className="p-2" />
    </>
  );
};

export default PageContent;
