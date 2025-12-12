"use client"

import Image from "next/image";
import { BrightCustomButton } from "./lib/common/ui/custom-button";
import FullscreenBlock from "./lib/common/ui/fullscreen-section";
import { fetchFeatured } from "./lib/product/data/featured";
import { Suspense } from "react";
import FeaturedGrid, { FeaturedGridSceleton } from "./lib/product/ui/featured-grid";


export default function Home() {
  const promisedFeatured = fetchFeatured({});

  return <div>
    {/* First block */}
    <FullscreenBlock>
      <Image src={"/woman-with-bags.jpg"} fill sizes="100%" style={{objectFit: 'cover',}} alt="A photo of a woman with bags"/>
      
      <div className="absolute top-0 left-0 bg-black h-full w-full opacity-10 "></div>
  
      <div className="absolute left-8 md:left-16 bottom-16">
        <div className="text-2xl text-white">
          Elevate Your Style
          <br/>
          Timeless Fashion, Sustainable
          <br/>
          Choices
        </div>
        <div className="h-4"></div>
        <BrightCustomButton text="Shop now"/>
      </div>
    </FullscreenBlock>

    {/* Featured block */}

    <div className="p-8">
      <div className="pb-8 text-xl">
        Elevate your lifestyle with a more intelligent, superior wardrobe. 
        <br/>
        Our range is crafted sustainably with longevity in mind.
      </div>
      <Suspense fallback={<FeaturedGridSceleton className="w-full max-w-[1440px] mx-auto" />}>
        <FeaturedGrid promisedFeatured={promisedFeatured} className="w-full max-w-[1440px] mx-auto" />
      </Suspense>
    </div>
  </div>
}
