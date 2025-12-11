

"use client";

import { ActionDispatch, useEffect, useReducer, useRef } from "react";
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

const navElemId = "nav";

export default function NavBar() {
    const [dropDownContent, dispatchDropdownContent] = useReducer(dropDownContentReducer, null)

    useEffect(() => {
        // Close dropdown and disable backdrop filter on tap outside

        document.addEventListener("click", (e) => {
            const nav = document.getElementById(navElemId);
            const target = e.target as HTMLElement;
            const clickledInsideNav = nav!.contains(target);
            if(dropDownContent != null && target.id != navElemId && !clickledInsideNav) {
                dispatchDropdownContent(null)
            } 
        })
    });

    return <nav id={navElemId} className="w-screen h-[50px] overflow-visible fixed z-10 top-0 right-0">
        
        <div className={`relative top-0 left-0 z-10 h-[50px] pl-4 pr-4 flex justify-between items-center bg-white`}>
            {/* Left part */}
            <BurgerButton className="md:hidden" onClick={() => dispatchDropdownContent(DropdownContent.mobileMenu)}></BurgerButton>
            <NavList className="hidden md:flex"></NavList>
    
            {/* Right part */}
            <div className="flex gap-3">
                <SearchProductButton onClick={() => dispatchDropdownContent(DropdownContent.search)}></SearchProductButton>
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