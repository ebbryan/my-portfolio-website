import React from "react";
import { LogoTitle } from "../ConstantComponents/Logo";
import { Mail } from "lucide-react";

export const SiteNavigation = () => {
  return (
    <nav
      className={`flex items-center justify-between py-2 px-6 fixed w-full bg-white shadow-md`}
    >
      <LogoTitle fontSize="text-2xl" isClickable={true} />

      <button className="text-white hover:text-black hover:shadow-md bg-orange-500 hover:bg-white p-4 px-7 rounded-md transition-all flex items-center gap-3">
        <Mail />
        Message me!
      </button>
    </nav>
  );
};
