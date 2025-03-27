"use client";

import { LogoTitle } from "@/components/ConstantComponents/Logo";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Header = ({
  linkItems,
}: {
  linkItems: { id: number; title: string; path: string }[];
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center justify-between p-8 ${
        !isScrolled
          ? "bg-transparent"
          : "fixed z-50 translate-y-0 bg-white shadow-md w-full"
      }`}
    >
      <div>
        <LogoTitle fontSize="text-2xl" isClickable={true} />
      </div>
      <div className="flex items-center gap-5">
        {linkItems.map((item) => {
          return (
            <a key={item.id} href={item.path}>
              {item.title}
            </a>
          );
        })}
      </div>
    </nav>
  );
};
