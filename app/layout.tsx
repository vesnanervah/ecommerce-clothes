
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
      <body className={`${roboto.className}`}>
        <NavBar></NavBar>
        <div className="pt-[50px]">
          {children}
        </div>
        <BackdropBlur></BackdropBlur>
      </body>
    </html>
  );
}
