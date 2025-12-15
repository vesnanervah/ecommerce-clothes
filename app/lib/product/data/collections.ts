import { Collection } from "../types/collection";

const collections: Array<Collection> = [
    {
        id: 0,
        name: "Classic look",
        imageUrl: "/classic-look.jpg"
    },
    {
        id: 1,
        name: "Modern look",
        imageUrl: "/modern-look.jpg"
    }
];

// TOOD: fetch from server
export function fetchCollections({ limit }: { limit?: number }) {
    return new Promise<Array<Collection>>( resolve => setTimeout(() => { resolve(collections) }, 1000))
}