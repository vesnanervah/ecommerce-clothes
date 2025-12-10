import Link from "next/link";
import { NavItem } from "../data/nav-items";

export default function NavButton({ item }: { item: NavItem }) {
    return <Link href={item.route} className="text-base font-light pl-5 pt-1 pr-5 pb-1">
        {item.label}
    </Link>


}