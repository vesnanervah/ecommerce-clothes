import Image from "next/image";
import { Featured } from "../types/featured";

export default function FeaturedGridItem({ featured, className = ""}: { featured: Featured, className?: string }) {
    return <div className={`relative aspect-square md:aspect-4/5 ${className}`}>
        <Image alt="Photo of the Featured" fill style={{objectFit: 'cover',}} src={featured.imageUrl ?? "/placeholder.jpg"}/>
        <div className="w-full h-full absolute left-0 top-0 bg-black opacity-10"></div>
        <div className="absolute left-6 bottom-6 text-white text-xl capitalize">{featured.name ?? "Featured"}</div>
    </div>
}