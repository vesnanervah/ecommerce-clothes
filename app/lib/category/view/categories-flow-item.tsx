"use client";

import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Category } from "../../product/types/category";

export default function CategoriesFlowItem({ category}: { category: Category}) {
    const path = usePathname();
    const query = useSearchParams();
    const isSelected  = query.get("category") === category.id.toString();
    const className = "border border-neutral-800 pl-4 pt-2 pr-4 pb-2 rounded-full capitalize text-xs transition-colors duration-150 hover:cursor-pointer hover:bg-neutral-800 hover:text-neutral-100";

    return isSelected ? 
    <div className={clsx(className, "text-neutral-100 bg-neutral-800")}>
        { category.title ?? `Category number ${category.id}` }
    </div> : 
    <Link 
    href={getHref()}
    className={clsx(className, "text-neutral-800")}
    >
        { category.title ?? `Category number ${category.id}` }
    </Link>

    function getHref() {
        const params = new URLSearchParams(query);
        params.set("category", category.id.toString());
        return `${path}?${params.toString()}`;
    }

}