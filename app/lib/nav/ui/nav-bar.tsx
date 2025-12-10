

"use client";

import { useReducer } from "react";
import BurgerButton from "./burger-button";
import CartButton from "./cart-button";
import FavoriteButton from "./favorite-button";
import NavList from "./nav-list";
import ProfileButton from "./profile-button";
import SearchProductButton from "./search-product-button";
import clsx from "clsx";
import { disableBackDropBlur, enableBackDropBlur } from "../../common/ui/backdrop-blur";

enum DropdownContent { mobileMenu, search }

export default function NavBar() {
    const [dropDownContent, dispatchDropdownContent] = useReducer(dropDownContentReducer, null)


    return <div className="w-screen overflow-hidden fixed z-10 top-0 right-0">
        
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
        <div className={clsx("relative -top-[100vh] left-0 z-9 flex flex-col items-center transition-all duration-200 md:hidden border-t border-neutral-300 bg-white pt-4 pb-4", { "top-0": dropDownContent == DropdownContent.mobileMenu})}>
            <NavList></NavList>
        </div>

    </div>

    function dropDownContentReducer(state: DropdownContent | null, action: DropdownContent) {
        if (state === action) {
            disableBackDropBlur()
            return null;
        }
        enableBackDropBlur()
        return action;
    }
}