'use client';

import BurgerButton from "./burger-button";
import CartButton from "./cart-button";
import FavoriteButton from "./favorite-button";
import NavList from "./nav-list";
import ProfileButton from "./profile-button";
import SearchProductButton from "./search-product-button";

export default function NavBar({ onBurgerClick, onSearchClick, onProfileClick, onFavoriteClick, onCartClick }: 
    { onBurgerClick: () => void, onSearchClick: () => void, onProfileClick: () => void, onFavoriteClick: () => void, onCartClick: () => void }) {

    return <div className="h-[50px] w-screen pl-4 pr-4 flex justify-between items-center bg-white">
        {/* Left part */}
        <BurgerButton className="md:hidden" onClick={onBurgerClick}></BurgerButton>
        <NavList className="hidden md:flex"></NavList>

        {/* Right part */}
        <div className="flex gap-3">
            <SearchProductButton onClick={onSearchClick}></SearchProductButton>
            <ProfileButton onClick={onProfileClick}></ProfileButton>
            <FavoriteButton onClick={onFavoriteClick}></FavoriteButton>
            <CartButton onClick={onCartClick}></CartButton>
        </div>
    </div>
}