import React from "react";
import { LogoTitle } from "../ConstantComponents/Logo";

export const SiteHeroSection = ({ id }: { id: string }) => {
  return (
    <section
      id={id}
      className="flex justify-center items-center h-screen min-h-screen"
    >
      <div className="flex flex-row items-center gap-3">
        <div className="">
          <LogoTitle fontSize="text-4xl" />
        </div>
        <div>Right</div>
      </div>
    </section>
  );
};
