import './collections-grid-item.css';

import Image from "next/image";
import { Collection } from "../../product/types/collection";
import Link from 'next/link';

export default function CollectionsGridItem({ collection, className = "" }: { collection: Collection, className?: string}) {
    return <Link
    href={`/shop?collection=${collection.id}`}
    className={`collections-grid-item relative ${className}`}
    >
        <Image src={collection.imageUrl ?? "/placeholder.jpg"} alt="Image of the collection" fill className="object-cover"/> 
        <div className="image-overlay absolute left-0 top-0 h-full w-full bg-black opacity-20 transition-all duration-300"></div>
        <div className="absolute bottom-8 left-8 text-white capitalize text-2xl">{collection.name ?? "Collection"}</div>
    </Link>
}