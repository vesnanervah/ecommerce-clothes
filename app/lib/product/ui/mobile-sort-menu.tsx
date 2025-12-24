"use client";

import clsx from "clsx";
import SortMenu from "./sort-menu";
import { useOnClickOutside } from "../../utils/on-click-outside";
import { disableBackDropBlur, enableBackDropBlur } from "../../common/ui/backdrop-blur";

const mobileSortMenuId = "mobile-sort-menu";
const getElem = () => document.getElementById(mobileSortMenuId);

export default function MobileSortMenu({ mobileSortMenuBackdropId }: { mobileSortMenuBackdropId: string }) {
    const menuRef = useOnClickOutside<HTMLDivElement>(onOutsideClick)

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
            onChange={onOutsideClick}
            />
        </div>


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