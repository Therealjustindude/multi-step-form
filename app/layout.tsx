import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MainLayout } from "./ui/MainLayout";

const ubuntuBold = localFont({
  src: "./util/fonts/Ubuntu-Bold.ttf",
  variable: "--font-ubuntu-bold",
});
const ubuntuMedium = localFont({
  src: "./util/fonts/Ubuntu-Medium.ttf",
  variable: "--font-ubuntu-medium",
});
const ubuntuRegular = localFont({
  src: "./util/fonts/Ubuntu-Regular.ttf",
  variable: "--font-ubuntu-regular"
});

export const metadata: Metadata = {
  title: {
    template: '%s | Multi step',
    default: 'Multi step',
  },
  description: "Mulit step form generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntuRegular.variable} ${ubuntuMedium.variable} ${ubuntuBold.variable} antialiased`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
