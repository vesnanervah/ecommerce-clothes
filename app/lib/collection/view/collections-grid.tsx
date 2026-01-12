import { use } from "react";
import CollectionsGridItem from "./collections-grid-item";
import { Collection } from "../types/collection";

export default function CollectionsGrid({ promisedCollections, className = "" }: { promisedCollections: Promise<Array<Collection>>, className?: string }) {
    const collections = use(promisedCollections)

    return <div className={`flex flex-col gap-5 md:grid md:grid-cols-2 ${className}`}>
        { collections.map(CollectionToGridItem) }
    </div>

    function CollectionToGridItem(collection: Collection) {
        return <CollectionsGridItem collection={collection} key={collection.id} className="aspect-square"/>
    }
}