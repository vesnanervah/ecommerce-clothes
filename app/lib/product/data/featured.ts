// TODO: move to server

import { Featured } from "../types/featured"

const featured: Array<Featured> = [
    {
        id: 1,
        name: "New arrivals",
        imageUrl: "/1.jpg"
    },
    {
        id: 2,
        name: "The casual edit",
        imageUrl: "/2.jpg"
    },
    {
        id: 3,
        name: "Best-Sellers",
        imageUrl: "/3.jpg"
    },
]

export function fetchFeatured({ limit }: { limit?: number | undefined}) {
    return new Promise<Array<Featured>>( resolve => setTimeout(() => resolve(featured), 3000))
}