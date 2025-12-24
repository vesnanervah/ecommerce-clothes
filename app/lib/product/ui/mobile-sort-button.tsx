"use client";

import Image from "next/image";
import { showMobileSortMenu } from "./mobile-sort-menu";


export default function MobileSortButton({ mobileSortMenuBackdropId }: {mobileSortMenuBackdropId: string}) {

    return <button
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

    function onMenuButtonClick() {
        showMobileSortMenu(mobileSortMenuBackdropId)
    }

}