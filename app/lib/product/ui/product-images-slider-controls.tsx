"use client";

import clsx from "clsx";
import { useSwiper } from "swiper/react";

export default function ProductImagesSliderControls({ len, activeIndex }: { len: number, activeIndex: number }) {
    const swiper = useSwiper()
    const indexes = Array.from({ length: len}).map((v, i) => {
        return i == activeIndex
    });

    return <div
    className="flex justify-center gap-2"
    >
        { indexes.map(indexToButton) }
    </div>

    function indexToButton(isActive: boolean ,index: number) {
        return <SliderControl key={index} isActive={isActive} onClick={() => {
            if  (isActive) return;
            swiper.slideTo(index);
        }}/>
    }
}
function SliderControl({ isActive, onClick }: { isActive: boolean, onClick: () => void, key: number }) {
    return <button
    onClick={onClick}
    className={clsx("h-4 w-4 border transition-all duration-150 rounded-full cursor-pointer",             
        { 
            "border-black bg-black": isActive,
            "border-neutral-400 bg-transparent": !isActive
        })
    }
    >
    </button>
}
