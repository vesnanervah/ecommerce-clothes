
import { fetchCategories } from "../data/categories";
import { Category } from "../types/category";
import CategoriesFlowItem from "./categories-flow-item";

export default async function CategoriesFlow() {
    const categories = await fetchCategories()

    return <div
    className="flex flex-wrap gap-2 pt-4"
    >
        { categories.map(categoryToFlowItem) }
    </div>

    function categoryToFlowItem(category: Category) {
        return <CategoriesFlowItem 
        category={category} 
        key={category.id}
        />
    }

}