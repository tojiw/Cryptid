import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";

const mono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"]
});
export const metadata: Metadata = {
  title: "Cryptid Dashboard",
  description: "Crypto dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mono.className}>{children}</body>
    </html>
  );
}
