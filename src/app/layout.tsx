import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts/fonts";
import { SiteNavigation } from "@/components/SiteNavigation";
import BackgroundProvider from "@/components/BackgroundProvider";
import ProgressBarProvider from "@/components/Providers/ProgressBarProvider";

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
      <body className={`${inter.variable} antialiased`}>
        <BackgroundProvider>
          <ProgressBarProvider>
            <SiteNavigation />
            {children}
          </ProgressBarProvider>
        </BackgroundProvider>
      </body>
    </html>
  );
}
