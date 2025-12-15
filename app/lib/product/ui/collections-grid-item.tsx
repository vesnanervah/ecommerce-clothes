import Image from "next/image";
import { Collection } from "../types/collection";

export default function CollectionsGridItem({ collection, className = "" }: { collection: Collection, className?: string}) {
    return <div className={`relative ${className}`}>
        <Image src={collection.imageUrl ?? "/placeholder.jpg"} alt="Image of the collection" fill className="object-cover"/> 
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-20"></div>
        <div className="absolute bottom-8 left-8 text-white capitalize text-2xl">{collection.name ?? "Collection"}</div>
    </div>
}