"use client";

import "swiper/swiper.css"
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "../types/product";
import ProductCarouselControlButton from "./product-carousel-control-btn";
import { use } from "react";
import ProductGridItem from "./product-grid-item";

export default function ProductsCarousel({ promisedProducts }: { promisedProducts: Promise<Array<Product>> }  ) {
  const products = use(promisedProducts)

  return <Swiper 
  spaceBetween={20} 
  slidesPerView={2}
  slidesOffsetBefore={32}
  slidesOffsetAfter={32}
  breakpoints={{
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 5,
    },
    1920: {
      slidesPerView: 6,
    }
  }} 
  >
    {
      products.map(productToSlide)
    }
    <div
    className="absolute flex justify-between items-center h-full w-full top-0 left-0 z-10"
    >
      <ProductCarouselControlButton className="" direction="left" />
      <ProductCarouselControlButton className="" direction="right" />
    </div>
  </Swiper>
  
  function productToSlide(product: Product) {
    return <SwiperSlide key={product.id}>
      <ProductGridItem product={product}/>
    </SwiperSlide>
  }
}