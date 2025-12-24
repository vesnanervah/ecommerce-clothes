import clsx from "clsx";
import { sortOptions } from "../data/sort-options";

export default function SortMenu({ className = '', selectedSortOption, onOptionClick }: { 
    className?: string, selectedSortOption?: SortOption | undefined, onOptionClick: (option: SortOption) => void
}) {
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

}