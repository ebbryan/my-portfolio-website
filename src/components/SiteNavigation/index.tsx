"use client";

import React, { MouseEventHandler } from "react";
import { LogoTitle } from "../ConstantComponents/Logo";
import { Mail } from "lucide-react";

type NavLinksType = {
  id: number;
  navPath?: string;
  navTitle: string;
  onNavigate: () => void;
};

const NavButton: React.FC<NavLinksType> = (props) => {
  return (
    <button onClick={props?.onNavigate} key={props.id}>
      {props.navTitle}
    </button>
  );
};

export const SiteNavigation = () => {
  const navLinks = [
    { id: 1, navTitle: "About me", navPath: "/about-me" },
    { id: 2, navTitle: "Projects", navPath: "/projects" },
  ] as NavLinksType[];

  return (
    <nav
      className={`flex items-center justify-between py-4 px-6 fixed w-full bg-white shadow-md`}
    >
      <LogoTitle fontSize="text-2xl" isClickable={true} />

      <div>
        {navLinks.map((item) => (
          <NavButton
            id={item.id}
            navTitle={item.navTitle}
            onNavigate={() => console.log("TRIGGER")}
          />
        ))}
      </div>
      <button className="text-white active:scale-95 hover:text-black bg-orange-500 hover:bg-white p-4 px-7 rounded-md transition-all flex items-center gap-3">
        <Mail />
        Message me!
      </button>
    </nav>
  );
};
