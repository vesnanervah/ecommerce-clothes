import './featured-grid-item.css';

import Image from "next/image";
import { Featured } from "../../product/types/featured";
import Link from "next/link";

export default function FeaturedGridItem({ featured, className = ""}: { featured: Featured, className?: string }) {
    return <Link 
    href={`/shop?featured=${featured.id}`}
    className={`featured-grid-item relative aspect-square md:aspect-4/5 ${className}`}
    >
        <Image alt="Photo of the Featured" fill style={{objectFit: 'cover',}} src={featured.imageUrl ?? "/placeholder.jpg"}/>
        <div className="image-overlay w-full h-full absolute left-0 top-0 bg-black opacity-10 transition-all duration-300"></div>
        <div className="absolute left-6 bottom-6 text-white text-xl capitalize">{featured.name ?? "Featured"}</div>
    </Link>
}