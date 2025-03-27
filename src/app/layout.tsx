import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts/fonts";

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
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
