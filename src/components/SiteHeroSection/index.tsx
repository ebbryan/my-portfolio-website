"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import useIsLgScreen from "@/hooks/useLGScreen";
import { TechStack } from "./components/TechStack";

export const SiteHeroSection = () => {
  const techStacks = [
    { stack: "NextJS", years: "3 Years" },
    { stack: "TailwindCSS", years: "2 Years" },
  ] as {
    stack: string;
    years: string;
  }[];

  const isLG = useIsLgScreen();
  const [isLg, setIsLg] = useState(390);

  useEffect(() => {
    setIsLg(!isLG ? 220 : 390);
  }, [isLG]);
  return (
    <section className="flex flex-col justify-center items-center h-screen ">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-5 w-full h-screen justify-center mt-12 md:mt-0">
        <div className="flex flex-col items-center lg:items-end gap-4">
          <div className="flex flex-col items-center lg:items-end">
            <h1 className="hidden lg:block lg:-mb-4">Hi! I am</h1>
            <h1 className="text-5xl md:text-7xl font-black">
              Earl <span className="text-orange-500">Bryan</span>
            </h1>
          </div>
          <h1 className="text-lg text-center md:text-2xl lg:text-right">Junior Frontend Developer<br/>IT Support Level 1</h1>
          {/* STACKS HERE */}
          <div className="w-full flex flex-col lg:items-end">
            <article className="flex flex-col items-center gap-3 w-full lg:flex-row">
              {techStacks.map((item) => (
                <TechStack
                  stack={item.stack}
                  years={item.years}
                  key={item.stack}
                />
              ))}
            </article>
          </div>
          {/* STACKS HERE */}
        </div>

        <Image
          alt="Hero"
          src={"/static/MyImage.png"}
          width={isLg}
          height={isLg}
          className="transition-all"
        />
      </div>
    </section>
  );
};
