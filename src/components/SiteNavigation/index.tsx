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
