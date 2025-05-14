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
                className={`hover:text-orange-500 ${
                  pathname === item.navPath ? `text-orange-500` : ``
                }`}
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
        </>
      )}
      {!isLG && (
        <>
          <Sheet open={isOpen} onOpenChange={onToggle}>
            <SheetTrigger asChild>
              <Button variant={"ghost"} size={"lg"}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <LogoTitle
                    onLogoClick={() => onNavigate("/")}
                    fontSize="text-2xl"
                    isClickable={true}
                  />
                </SheetTitle>
                <SheetDescription>
                  <div className="mt-5 flex flex-col items-start justify-start gap-5">
                    {navLinks.map((item) => (
                      <button
                        className={`hover:text-orange-500 text-lg ${
                          pathname === item.navPath ? `text-orange-500` : ``
                        }`}
                        onClick={() => onNavigate(item.navPath)}
                        key={item.id}
                      >
                        {item.navTitle}
                      </button>
                    ))}
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </>
      )}
    </nav>
  );
};
