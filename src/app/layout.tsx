import type { Metadata } from "next";
import { Antonio, Inter, Oswald } from "next/font/google";
import localFont from "next/font/local";
import React from "react";
import "./globals.css";
import Cursor from "./components/Cursor";
import Provider from "./components/Provider";
import Header from "./components/Header";
import CursorTwo from "./components/CursorTwo";
import MobileNav from "./components/MobileNav";
import Theme from "./components/Theme";
import Whatsapp from "./components/Whatsapp";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const antonio = Antonio({ subsets: ["latin"], variable: "--font-antonio" });

const materialSymbols = localFont({
  variable: "--font-family-symbols", // Variable name (to reference after in CSS/styles)
  style: "normal",
  src: "../../node_modules/material-symbols/material-symbols-rounded.woff2", // This is a reference to woff2 file from NPM package "material-symbols"
  display: "block",
  weight: "100 700",
});

export const metadata: Metadata = {
  title: "Donoso Films",
  description:
    "Donoso Films es una productora audiovisual colombiana con sede en Bogotá. Tenemos 25 años de experiencia en la industria audiovisual, nos gusta crear vínculos duraderos con nuestros clientes y entregar productos bien finalizados que los llenen de satisfacción.",
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
          className={`${inter.variable} ${oswald.variable} ${antonio.variable}`}
        >
          <Cursor />
          <CursorTwo />
          <Header />
          <MobileNav />
          <Theme />
          <Whatsapp />
          {children}
        </body>
      </Provider>
    </html>
  );
}
