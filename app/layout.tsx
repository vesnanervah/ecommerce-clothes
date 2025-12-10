
import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./lib/common/ui/fonts";



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
      <body
        className={`${roboto.className}`}
      >
        {children}
      </body>
    </html>
  );
}
