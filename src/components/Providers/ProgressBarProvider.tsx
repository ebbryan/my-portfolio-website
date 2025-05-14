"use client";

import { ProgressProvider } from "@bprogress/next/app";

const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height="2px"
      color="#272E3F"
      options={{ showSpinner: false }}
      shallowRouting
      disableSameURL
    >
      {children}
    </ProgressProvider>
  );
};

export default ProgressBarProvider;
