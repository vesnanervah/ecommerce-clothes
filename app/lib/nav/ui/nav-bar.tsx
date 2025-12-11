

"use client";

import { useEffect, useReducer } from "react";
import BurgerButton from "./burger-button";
import CartButton from "./cart-button";
import FavoriteButton from "./favorite-button";
import NavList from "./nav-list";
import ProfileButton from "./profile-button";
import SearchProductButton from "./search-product-button";
import clsx from "clsx";
import { disableBackDropBlur, enableBackDropBlur } from "../../common/ui/backdrop-blur";
import Searchbar from "../../common/ui/searchbar";

enum DropdownContent { mobileMenu, search }
const dropdownCallers = [ "burger-btn", "search-btn" ]
const [burgerBtnId, searchBtnId] = dropdownCallers;

export default function NavBar() {
    const [dropDownContent, dispatchDropdownContent] = useReducer(dropDownContentReducer, null)

    useEffect(() => {
        // Close dropdown and disable backdrop filter on tap outside

        document.addEventListener("click", (e) => {
            const target = e.target as HTMLElement;
            const clickedOnDropdownCaller = dropdownCallers.find((c) => {
                if(target.id == c) {
                    return c
                }
                const elem = document.getElementById(c);
                return elem != null && elem.contains(target) ? c : undefined
            }) != undefined;
            if(dropDownContent != null && !clickedOnDropdownCaller) {
                dispatchDropdownContent(null)
            } 
        })
    });

    return <nav className="w-screen h-[50px] overflow-visible fixed z-10 top-0 right-0">
        
        <div className={`relative top-0 left-0 z-10 h-[50px] pl-4 pr-4 flex justify-between items-center bg-white`}>
            {/* Left part */}
            <BurgerButton id={burgerBtnId} className="md:hidden" onClick={() => dispatchDropdownContent(DropdownContent.mobileMenu)}></BurgerButton>
            <NavList className="hidden md:flex"></NavList>
    
            {/* Right part */}
            <div className="flex gap-3">
                <SearchProductButton id={searchBtnId} onClick={() => dispatchDropdownContent(DropdownContent.search)}></SearchProductButton>
                <ProfileButton></ProfileButton>
                <FavoriteButton></FavoriteButton>
                <CartButton></CartButton>
            </div>
        </div>

        {/* Mobile nav menu */}
        <div className={clsx("fixed -top-full left-0 w-screen z-9 flex flex-col items-center transition-all duration-200 md:hidden border-t border-neutral-300 bg-white pt-4 pb-4", { "top-[50px]": dropDownContent == DropdownContent.mobileMenu})}>
            <NavList></NavList>
        </div>

        {/* Search bar */}
        <div className={clsx("fixed -top-full left-0 w-screen z-9 transition-all duration-200 border-neutral-300 bg-white pt-4 pb-4 pl-4 pr-4", { "top-[50px]": dropDownContent == DropdownContent.search})}>
            <Searchbar className="w-full"></Searchbar>
        </div>
    </nav>

    function dropDownContentReducer(state: DropdownContent | null, action: DropdownContent | null) {
        if (state == action || action == null) {
            disableBackDropBlur()
            return null;
        }
        enableBackDropBlur()
        return action;
    }
}