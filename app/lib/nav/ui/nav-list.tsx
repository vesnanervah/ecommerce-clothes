import { NavItem, navItems } from "../data/nav-items";
import HomeButton from "./home-button";
import NavButton from "./nav-button";

export default function NavList({ className = '' }: { className?: string }) {
    return <div className={`flex flex-col items-center gap-2 md:gap-0 md:flex-row ${className}`}>
        <HomeButton></HomeButton>
        <span className="w-4"></span>
        {navItems.map(NavButtonFromNavItem)}
    </div>
}

function NavButtonFromNavItem(item: NavItem) {
    return <NavButton item={item} key={item.route}></NavButton>
}