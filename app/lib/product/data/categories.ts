import promiseDelayed from "../../utils/promise-delayed";
import { Category } from "../types/category";

const categories: Array<Category> = [
    {
        id: 0,
        title: "outerwear"
    },
    {
        id: 1,
        title: "pants"
    },
    {
        id: 2,
        title: "shoes"
    },
    {
        id: 3,
        title: "dress"
    },
    {
        id: 4,
        title: "shirts"
    }
]

export async function fetchCategories() {
    return promiseDelayed(categories)
}