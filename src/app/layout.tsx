import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import localFont from "next/font/local";
import React from "react";
import "./globals.css";
import Cursor from "./components/Cursor";
import Provider from "./components/Provider";
import Header from "./components/Header";
import CursorTwo from "./components/CursorTwo";
import MobileNav from "./components/MobileNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

const materialSymbols = localFont({
  variable: "--font-family-symbols", // Variable name (to reference after in CSS/styles)
  style: "normal",
  src: "../../node_modules/material-symbols/material-symbols-rounded.woff2", // This is a reference to woff2 file from NPM package "material-symbols"
  display: "block",
  weight: "100 700",
});

export const metadata: Metadata = {
  title: "Donoso Films",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${materialSymbols.variable}`} lang="es">
      <Provider>
        <body
          data-theme="light"
          className={`${inter.variable} ${oswald.variable}`}
        >
          <Header />
          <MobileNav />
          <Cursor />
          <CursorTwo />
          <main className="main">{children}</main>
        </body>
      </Provider>
    </html>
  );
}
