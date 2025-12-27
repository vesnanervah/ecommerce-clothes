import promiseDelayed from "../../utils/promise-delayed";
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
    return promiseDelayed(collections);
}