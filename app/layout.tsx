
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./lib/nav/ui/nav-bar";
import BackdropBlur from "./lib/common/ui/backdrop-blur";
import { montseratt } from "./lib/common/ui/fonts";



export const metadata: Metadata = {
  title: "Ecommerce clothes"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montseratt.className} text-black`}>
        <NavBar></NavBar>
        {children}
        <BackdropBlur></BackdropBlur>
      </body>
    </html>
  );
}
