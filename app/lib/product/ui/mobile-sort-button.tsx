"use client";

import { showMobileSortMenu } from "./mobile-sort-menu";
import SortButton from "./sort-button";


export default function MobileSortButton({ mobileSortMenuBackdropId }: {mobileSortMenuBackdropId: string}) {

    return <SortButton
        onClick={onMenuButtonClick}
    />

    function onMenuButtonClick() {
        showMobileSortMenu(mobileSortMenuBackdropId)
    }

}