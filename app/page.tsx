"use client"

import Image from "next/image";
import { BrightCustomButton } from "./lib/common/ui/custom-button";
import FullscreenBlock from "./lib/common/ui/fullscreen-section";


export default function Home() {
  return <div>

    {/* First block */}
    <FullscreenBlock>
      <Image src={"/woman-with-bags.jpg"} fill sizes="100%" style={{objectFit: 'cover',}} alt="A photo of a woman with bags"></Image>
      
      <div className="absolute top-0 left-0 bg-neutral-900 h-full w-full opacity-10"></div>
  
      <div className="absolute left-8 md:left-16 bottom-16">
        <div className="text-2xl text-neutral-50">
          Elevate Your Style
          <br/>
          Timeless Fashion, Sustainable
          <br/>
          Choices
        </div>
        <div className="h-4"></div>
        <BrightCustomButton text="Shop now"></BrightCustomButton>
      </div>
  
    </FullscreenBlock>


  </div>
}
