import type { Metadata } from "next";
import localFont from "next/font/local";
import {Rubik} from 'next/font/google'
import "./globals.css";
import Image from "next/image";
import bats from '@/public/bats.png'
import skull from '@/public/skull.png'
import spider from '@/public/spider.png'

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

        {/* FIXED IMAGES */}
            <Image
              className="pointer-events-none hidden sm:block opacity-80 fixed top-0 left-0 -translate-y-[20%] -translate-x-[20%]"
              src={bats}
              alt=""
              priority
            />

            <Image
              className="pointer-events-none hidden sm:block opacity-80 fixed top-0 right-0 -translate-y-[50%] translate-x-[50%]"
              src={spider}
              alt=""
            />

            <Image
              className="pointer-events-none hidden sm:block opacity-80 fixed bottom-0 translate-y-[50%] left-0 -translate-x-[50%]"
              src={spider}
              alt=""
            />

            <Image
              className="pointer-events-none hidden sm:block opacity-80 w-80 fixed bottom-0 translate-y-[25%] right-0 translate-x-[50%] z-10"
              src={skull}
              alt=""
            />
      </body>
    </html>
  );
}
