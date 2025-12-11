
import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./lib/common/ui/fonts";
import NavBar from "./lib/nav/ui/nav-bar";
import BackdropBlur from "./lib/common/ui/backdrop-blur";



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
      <body className={`${roboto.className} text-neutral-800`}>
        <NavBar></NavBar>
        {children}
        <BackdropBlur></BackdropBlur>
      </body>
    </html>
  );
}
