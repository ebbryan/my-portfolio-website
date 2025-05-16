import type { Metadata } from "next";
import "./globals.css";
import { SiteNavigation } from "@/components/SiteNavigation";
import ProgressBarProvider from "@/components/Providers/ProgressBarProvider";

import { Inter } from "next/font/google";
import DefaultLayout from "./DefaultLayout";

const interFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Earl.Dev",
  description: "Online Portfolio Website",
  openGraph: {
    title: "Earl.Dev",
    description: "Online Portfolio Website",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "Earl.Dev",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/images/og-image.png`,
        width: 900,
        height: 800,
        alt: "og-image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
