"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import SortMenu from "./sort-menu";
import { sortOptions } from "../data/sort-options";
import clsx from "clsx";
import { useOnClickOutside } from "../../utils/on-click-outside";

export default function DesktopSortButton() {
    const dropDownRef = useOnClickOutside<HTMLDivElement>(onOutsideClick)
    const router = useRouter();
    const pathName = usePathname();
    const query = useSearchParams();
    const sortQueryParameter = parseInt(query.get("sort") ?? '');
    const [menuOpened, setMenuOpened] = useState(false);
    const selectedSortOption = isNaN(sortQueryParameter) ? undefined : sortOptions.find((option) => option.id === sortQueryParameter);

    return <div
    className="relative"
    ref={dropDownRef}
    >
        <button
        className="flex flex-row gap-1 items-center cursor-pointer"
        onClick={onMenuButtonClick}
        >
            Sort
            <Image 
            className="rotate-90 ml-1"
            height={8} 
            width={8}
            src={`/right-arrow.svg`}
            alt="sort button"
        />
        </button>
        <div
        className={clsx("absolute z-10 right-0 hidden", { "md:block": menuOpened, "md:hidden": !menuOpened })}
        >
            <SortMenu
            className="shadow-xl"
            selectedSortOption={selectedSortOption}
            onOptionClick={onSortOptionClick}
            />
        </div>
    </div>

    function onMenuButtonClick() {
        if(menuOpened) return;
        setMenuOpened(true)
    }

    function onOutsideClick() {
        setMenuOpened(false)
    }

    function onSortOptionClick(option: SortOption) {
        if(option.id != selectedSortOption?.id) {
            const params = new URLSearchParams(query.toString());
            params.set("sort", option.id.toString());
            router.push(`${pathName}?${params.toString()}`);
        }
        setMenuOpened(false);
    }
}