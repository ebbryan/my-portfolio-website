"use client";

import React, { MouseEventHandler } from "react";
import { LogoTitle } from "../ConstantComponents/Logo";
import { Mail } from "lucide-react";
import useIsLgScreen from "@/hooks/useLGScreen";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type NavLinksType = {
  id: number;
  navTitle: string;
  navPath: string;
  onNavigate: () => void;
};

const NavButton: React.FC<NavLinksType> = (props) => {
  return (
    <button
      className="hover:text-orange-500"
      onClick={props?.onNavigate}
      key={props.id}
    >
      {props.navTitle}
    </button>
  );
};

export const SiteNavigation = () => {
  const navLinks = [
    { id: 1, navTitle: "About me", navPath: "/about-me" },
    { id: 2, navTitle: "Projects", navPath: "/projects" },
  ] as NavLinksType[];

  const router = useRouter();

  const isLG = useIsLgScreen();
  console.log("🚀 ~ SiteNavigation ~ isLG:", isLG);

  return (
    <nav
      className={`flex items-center justify-between py-4 px-6 fixed w-full bg-white shadow-sm`}
    >
      <LogoTitle
        onLogoClick={() => router.push("/")}
        fontSize="text-2xl"
        isClickable={true}
      />
      {!!isLG && (
        <>
          <div className="flex gap-5">
            {navLinks.map((item) => (
              <button
                className="hover:text-orange-500"
                onClick={() => router.push(item.navPath)}
                key={item.id}
              >
                {item.navTitle}
              </button>
            ))}
          </div>
          <Button size={"lg"}>
            <Mail />
            Message me!
          </Button>
          {/* <button className="text-white active:scale-95 hover:text-black bg-orange-500 hover:bg-white p-4 px-7 rounded-md transition-all flex items-center gap-3"></button> */}
        </>
      )}
    </nav>
  );
};
