import React from "react";
import { LogoTitle } from "../ConstantComponents/Logo";
import { Header } from "./components/Header";

export const SiteNavigation = ({
  links,
}: {
  links: { id: number; title: string; path: string }[];
}) => {
  return <Header linkItems={links} />;
};
