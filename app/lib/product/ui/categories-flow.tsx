"use client";
import { use } from "react";
import { Category } from "../types/category";
import CategoriesFlowItem from "./categories-flow-item";

export default function CategoriesFlow({ promisedCategories }: { promisedCategories: Promise<Array<Category>> }) {
    const categories = use(promisedCategories)
    
    return <div
    className="flex flex-wrap gap-2 pt-4"
    >
        { categories.map(categoryToFlowItem) }
    </div>

    function categoryToFlowItem(category: Category) {
        return <CategoriesFlowItem category={category} />
    }
}