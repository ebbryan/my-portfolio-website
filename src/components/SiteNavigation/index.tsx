"use client";

import React, { MouseEventHandler } from "react";
import { LogoTitle } from "../ConstantComponents/Logo";
import { Mail, Menu } from "lucide-react";
import useIsLgScreen from "@/hooks/useLGScreen";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import useDisclosure from "@/hooks/useDisclosure";
import { useRouter } from "@bprogress/next";
import { usePathname } from "next/navigation";

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
  const router = useRouter();
  const isLG = useIsLgScreen();
  const { isOpen, onToggle } = useDisclosure();
  const pathname = usePathname();

  const navLinks = [
    { id: 1, navTitle: "About me", navPath: "/about-me" },
    { id: 2, navTitle: "Projects", navPath: "/projects" },
  ] as NavLinksType[];

  const onNavigate = (path: string) => {
    router.push(path);
    onToggle();
  };

  return (
    <nav
      className={`flex items-center justify-between py-4 px-6 bg-white fixed w-full`}
    >
      <LogoTitle
        onLogoClick={() => router.push("/")}
        fontSize="text-2xl"
        isClickable={true}
      />
      <Button size={"lg"}>
        <Mail />
        Message me!
      </Button>
    </nav>
  );
};
