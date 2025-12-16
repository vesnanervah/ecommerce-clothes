import { Category } from "../types/category";

export default function CategoriesFlowItem({ category }: { category: Category }) {
    return <div 
    className="border border-neutral-800 text-neutral-800 pl-4 pt-2 pr-4 pb-2 rounded-full capitalize text-xs transition-colors duration-150 hover:cursor-pointer hover:bg-neutral-800 hover:text-neutral-100 "
    >
        { category.title ?? `Category number ${category.id}` }
    </div>
}