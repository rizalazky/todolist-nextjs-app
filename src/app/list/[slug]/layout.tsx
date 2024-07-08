import type { Metadata } from "next";
// import { Navbar, Sidebar } from "@/components";
import React from "react";



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
    
      <div className={`flex max-h-screen h-screen overflow-y-hidden w-full`}>
        {children}
        {modal}
      </div>
  );
}
