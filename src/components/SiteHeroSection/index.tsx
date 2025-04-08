"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import useIsLgScreen from "@/hooks/useLGScreen";
import { TechStack } from "./components/TechStack";

export const SiteHeroSection = () => {
  const techStacks = [
    { stack: "NextJS", years: "3 Years" },
    { stack: "TailwindCSS", years: "2 Years" },
    { stack: "Directus CMS", years: "1 Year" },
  ] as {
    stack: string;
    years: string;
  }[];

  const isLG = useIsLgScreen();
  const [isLg, setIsLg] = useState(390);

  useEffect(() => {
    setIsLg(!isLG ? 170 : 390);
  }, [isLG]);
  return (
    <section className="flex justify-center items-center h-screen min-h-screen">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-5 w-full justify-center">
        <div className="flex flex-col items-center lg:items-end gap-4">
          <div className="flex flex-col items-center lg:items-end">
            <h1 className="hidden lg:block lg:-mb-4">Hi! I am</h1>
            <h1 className="text-7xl font-black">
              Earl <span className="text-orange-500">Bryan</span>
            </h1>
          </div>
          {/* <LogoTitle fontSize="text-4xl" /> */}
          <h1 className="text-2xl ">Junior Fullstack Developer</h1>
          {/* STACKS HERE */}
          <article className="flex items-center gap-3 flex-wrap">
            {techStacks.map((item) => (
              <TechStack
                stack={item.stack}
                years={item.years}
                key={item.stack}
              />
            ))}
          </article>
          {/* STACKS HERE */}
        </div>

        <Image
          alt="Hero"
          src={"/static/MyImage.png"}
          width={isLg}
          height={isLg}
          className="hover:scale-105 hover:cursor-pointer transition-all"
        />
      </div>
    </section>
  );
};
