"use client";

import { useState } from "react";
import SortMenu from "./sort-menu";
import clsx from "clsx";
import { useOnClickOutside } from "../../utils/on-click-outside";
import SortButton from "./sort-button";

export default function DesktopSortButton() {
    const dropDownRef = useOnClickOutside<HTMLDivElement>(onOutsideClick)
    const [menuOpened, setMenuOpened] = useState(false);

    return <div
    className="relative"
    ref={dropDownRef}
    >
        <SortButton
            onClick={onMenuButtonClick}
         />
        <div
        className={clsx("absolute z-10 right-0 hidden", { "md:block": menuOpened, "md:hidden": !menuOpened })}
        >
            <SortMenu
            className="shadow-xl"
            onChange={onOutsideClick}
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
}