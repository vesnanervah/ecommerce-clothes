"use client";

import "swiper/swiper.css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import Image from "next/image";
import ProductImagesSliderControls from "./product-images-slider-controls";
import { useState } from "react";

export default function ProductImagesSlider({ urls }: { urls: Array<string>}) {
    const [activeSlide, setActiveSlide] = useState(0);

    return <Swiper
    slidesPerView={1}
    className="h-full w-full relative"
    onTransitionStart={(s) => {setActiveSlide((s as SwiperClass).activeIndex)}}
    >

        {
            urls.map((url) => {
                return <SwiperSlide key={url}>
                    <Image 
                    src={url} 
                    fill
                    className="object-contain p-8"
                    alt="An image of the product"
                     />
                </SwiperSlide>
            })
        }
        <div
        className="absolute bottom-0 left-0 w-full z-10"
        >
            <ProductImagesSliderControls 
            len={urls.length}
            activeIndex={activeSlide}
            />
        </div>
    </Swiper>
}