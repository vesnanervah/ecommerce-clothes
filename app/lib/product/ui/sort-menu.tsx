"use client";

import clsx from "clsx";
import { sortOptions } from "../data/sort-options";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SortMenu({ className = '', onChange}: { className?: string, onChange: () => void }) {
    const router = useRouter();
    const pathName = usePathname();
    const query = useSearchParams();
    const sortQueryParameter = parseInt(query.get("sort") ?? '');
    const selectedSortOption = isNaN(sortQueryParameter) ? undefined : sortOptions.find((option) => option.id === sortQueryParameter);
        

    return <div
    className={`flex flex-col gap-6 p-4 bg-white items-center ${className}`}
    >
        {sortOptions.map(sortOptionToElement)}
    </div>

    function sortOptionToElement(option: SortOption) {
        return <button
        key={option.id}
        onClick={() => onOptionClick(option)}
        className={clsx("text-nowrap transition-colors duration-200 cursor-pointer hover:text-black",{"text-black": selectedSortOption?.id === option.id, "text-neutral-500":  selectedSortOption?.id != option.id})}
        >
            {option.label}
        </button>
    }

    function onOptionClick(option: SortOption) {
        if(option.id != selectedSortOption?.id) {
            const params = new URLSearchParams(query.toString());
            params.set("sort", option.id.toString());
            router.push(`${pathName}?${params.toString()}`);
            onChange()
        }
    }

}