import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
// import { Navbar, Sidebar } from "@/components";
import React from "react";


const inter = Roboto({ subsets : ['latin'] ,weight : '400'});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal : React.ReactNode
}>) {

  
  return (
    <html lang="en">
      <body className={`${inter.className} flex max-h-screen h-screen overflow-y-hidden`}>
        {children}
        {modal}
      </body>
    </html>
  );
}
