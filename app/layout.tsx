
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./lib/nav/ui/nav-bar";
import { montseratt } from "./lib/common/ui/fonts";
import Footer from "./lib/common/ui/footer";
import BackdropBlur from "./lib/common/ui/backdrop-blur";



export const metadata: Metadata = {
  title: "Ecommerce clothes"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navBackdropId = "nav-backdrop-id";

  return (
    <html lang="en">
      <body 
      className={`${montseratt.className} text-black`}
      >
        <NavBar 
        backdropId={navBackdropId} 
        />
        <div
        className="pt-[50px]"
        >
        {children}

        </div>
        <Footer />
        
        <BackdropBlur 
        id={navBackdropId}
        />
      </body>
    </html>
  );
}
