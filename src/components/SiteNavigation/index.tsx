"use client";

import React from "react";
import { LogoTitle } from "../ConstantComponents/Logo";
import { Mail } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "@bprogress/next";

export const SiteNavigation = () => {
  const router = useRouter();

  return (
    <nav
  className={`flex items-center justify-between py-4 px-6 md:px-16 fixed w-full 
              bg-white/30 backdrop-blur-lg border-b border-white/20`}
>
      <LogoTitle
        onLogoClick={() => router.push("/")}
        fontSize="text-2xl"
        isClickable={true}
      />
      <Button size={"sm"}>
        <Mail />
        Message me!
      </Button>
    </nav>
  );
};
