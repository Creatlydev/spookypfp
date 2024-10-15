import type { Metadata } from "next";
import localFont from "next/font/local";
import {Rubik} from 'next/font/google'
import "./globals.css";

const spookyBold = localFont({
  src: "./fonts/SpookypixelsBold.otf",
  variable: '--spooky-bold'
});
const spookyOutline = localFont({
  src: "./fonts/SpookypixelsOutline.otf",
  variable: '--spooky-outline'
});

const rubik = Rubik({
  subsets: ['latin'],
  weight: 'variable'
})

export const metadata: Metadata = {
  title: "Spooky-PFP: 🎃 Crea Avatares Espeluznantes para Halloween",
  description: "Crea avatares terroríficos para Halloween con AvatarTerror. Convierte tu foto en un vampiro, fantasma o monstruo con filtros espeluznantes. ¡Es fácil, rápido y aterradoramente divertido!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spookyBold.variable} ${spookyOutline.variable} ${rubik.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
