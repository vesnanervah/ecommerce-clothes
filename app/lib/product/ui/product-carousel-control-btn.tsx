import Image from "next/image";
import { useSwiper } from "swiper/react"

export default function ProductCarouselControlButton({ direction, className = ""}: { direction: "left" | "right", className?: string }) {
    const swiper = useSwiper();


    return <button 
        onClick={onClick} 
        className={`${direction === "left" ? "transform rotate-180" : ""} opacity-50 hover:opacity-100 p-4 ${className}`}
    >
        <Image src={"/right-arrow.svg"} height={32} width={32} alt="Move carousel button" />
    </button>

    function onClick() {
        if(direction === "left") {
            swiper.slidePrev()
        } else {
            swiper.slideNext()
        }
    }
}