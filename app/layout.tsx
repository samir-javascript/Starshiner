import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import {dark} from "@clerk/themes";
import {
  ClerkProvider,
 
} from '@clerk/nextjs'
import StoreProvider from "@/storeProvider";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "700", "900", "400"]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{
         baseTheme: dark,
         layout: {
          logoImageUrl: "https://stcnt.starshiners.ro/img/logo-StarShinerS-2.svg",
          socialButtonsVariant: "iconButton"
        }
      }} >
        <StoreProvider>
             <body className={roboto.className}>{children}</body>
        </StoreProvider>
     
      </ClerkProvider>
      
    </html>
  );
}
