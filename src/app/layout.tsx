import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

import { Inter } from 'next/font/google'
import clsx from "clsx";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Next E-Commerce",
  description: "Next E-Commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={clsx(inter.className, 'bg-slate-700')}
        >
          <Navbar />
          <main className="h-full p-16">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
