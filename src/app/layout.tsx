import type { Metadata } from "next";
import "./globals.css";
import { SiteNavigation } from "@/components/SiteNavigation";
import BackgroundProvider from "@/components/BackgroundProvider";
import ProgressBarProvider from "@/components/Providers/ProgressBarProvider";

import { Inter } from "next/font/google";
import DefaultLayout from "./DefaultLayout";

const interFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Earl.Dev",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.className} antialiased`}>
        <DefaultLayout>
          <ProgressBarProvider>
            <SiteNavigation />
            {children}
          </ProgressBarProvider>
        </DefaultLayout>
      </body>
    </html>
  );
}
