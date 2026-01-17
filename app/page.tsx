"use client";

import Image from "next/image";
import { BrightCustomButton } from "./lib/common/ui/custom-button";
import FullscreenBlock from "./lib/common/ui/fullscreen-section";
import { fetchFeatured } from "./lib/featured/data/featured";
import { Suspense } from "react";
import FeaturedGrid, { FeaturedGridSceleton } from "./lib/featured/view/featured-grid";
import ProductsCarousel from "./lib/product/ui/products-carousel";
import { fetchProducts } from "./lib/product/data/products";
import { fetchCollections } from "./lib/collection/data/collections";
import CollectionsGrid from "./lib/collection/view/collections-grid";
import Link from "next/link";
import { ReduxProvider } from "./lib/state/view/redux-provider";


export default function Home() {
  const promisedFeatured = fetchFeatured({});
  const promisedProducts = fetchProducts({})
  const promisedCollections = fetchCollections({});

  return <div>
    {/* First block */}
    <FullscreenBlock className="relative">
      <Image
      src={"/woman-with-bags.jpg"} 
      fill 
      sizes="100%" 
      style={{objectFit: 'cover',}} 
      alt="A photo of a woman with bags"
      />
    
      <div 
      className="absolute top-0 left-0 bg-black h-full w-full opacity-10 "
      ></div>
  
      <div 
      className="absolute left-8 md:left-16 bottom-16"
      >
        <div className="text-2xl text-white">
          Elevate Your Style
          <br/>
          Timeless Fashion, Sustainable
          <br/>
          Choices
        </div>
        <div className="h-4"></div>
        <Link
        href={`/shop`}
        >
          <BrightCustomButton text="Shop now" />
        </Link>
      </div>
    </FullscreenBlock>

    {/* Featured block */}
    <div className="p-8">
      <div className="pb-8 text-xl">
        Elevate your lifestyle with a more intelligent, superior wardrobe. 
        <br/>
        Our range is crafted sustainably with longevity in mind.
      </div>
      <Suspense 
      fallback={<FeaturedGridSceleton className="w-full max-w-[1440px] mx-auto" />}
      >
        <FeaturedGrid 
        promisedFeatured={promisedFeatured} 
        className="w-full max-w-[1440px] mx-auto" 
        />
      </Suspense>
    </div>

    {/* Products carousel block */}
    <div 
    className="pt-8 pb-8"
    >
      <div 
      className="text-2xl p-8"
      >What to Wear Now</div>
      <Suspense>
        <ReduxProvider>
          <ProductsCarousel promisedProducts={promisedProducts}/>
        </ReduxProvider>
      </Suspense>    
    </div>  

    {/* Collections block */}
    <div 
    className="p-8"
    >
      <Suspense>
        <CollectionsGrid 
        promisedCollections={promisedCollections} 
        className="max-w-[1440px] mx-auto"
        ></CollectionsGrid>
      </Suspense>
    </div>
  </div>
}

