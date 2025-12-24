"use client";

import clsx from "clsx";
import SortMenu from "./sort-menu";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useOnClickOutside } from "../../utils/on-click-outside";
import { disableBackDropBlur, enableBackDropBlur } from "../../common/ui/backdrop-blur";
import { sortOptions } from "../data/sort-options";

const mobileSortMenuId = "mobile-sort-menu";
const getElem = () => document.getElementById(mobileSortMenuId);

export default function MobileSortMenu({ mobileSortMenuBackdropId }: { mobileSortMenuBackdropId: string }) {
    const router = useRouter();
    const pathName = usePathname();
    const menuRef = useOnClickOutside<HTMLDivElement>(onOutsideClick)
    const query = useSearchParams();
    const sortQueryParameter = parseInt(query.get("sort") ?? '');
    const selectedSortOption = isNaN(sortQueryParameter) ? undefined : sortOptions.find((option) => option.id === sortQueryParameter);
    

    return <div
        id={mobileSortMenuId}
        ref={menuRef}
        className={clsx("fixed bottom-full left-0 hidden w-screen bg-white pb-6 items-center flex-col md:hidden z-10 transition-all duration-200")}
        >
            <div 
            className="p-4 text-xl border-b border-neutral-300 w-full text-center"
            >
                Sort
            </div>
            <SortMenu
            selectedSortOption={selectedSortOption}
            onOptionClick={onSortOptionClick}
            />
        </div>


    function onSortOptionClick(option: SortOption) {
        if(option.id != selectedSortOption?.id) {
            const params = new URLSearchParams(query.toString());
            params.set("sort", option.id.toString());
            router.push(`${pathName}?${params.toString()}`);
        }
    }

    function onOutsideClick() {
        if(menuRef.current) {
            menuRef.current?.classList.remove("flex");
            menuRef.current?.classList.add("hidden");
            menuRef.current!.style.bottom = "-100%";
        }
        disableBackDropBlur(mobileSortMenuBackdropId);
    }
}

export function showMobileSortMenu(mobileSortMenuBackdropId: string) {
    enableBackDropBlur(mobileSortMenuBackdropId);
    const elem = getElem();
    elem?.classList.remove("hidden");
    setTimeout(() => {
        if(elem) {
            elem?.classList.add("flex");
            elem?.classList.add("bottom-0");
            elem.style.bottom = "0px"
        }
    }, 50)
}