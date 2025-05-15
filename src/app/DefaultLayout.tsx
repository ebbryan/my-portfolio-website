"use client";

import BackgroundProvider from "@/components/BackgroundProvider";
import useIsLgScreen from "@/hooks/useLGScreen";
import { ReactNode } from "react";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  const isLG = useIsLgScreen();
  return isLG ? (
    <BackgroundProvider>{children}</BackgroundProvider>
  ) : (
    <>{children}</>
  );
};

export default DefaultLayout;
