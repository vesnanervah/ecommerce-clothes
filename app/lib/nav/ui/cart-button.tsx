import Image from "next/image";
import { useSelector } from "react-redux";
import { cartItemsCountSelector } from "../../cart/state/selectors";
import Link from "next/link";

export default function CartButton() {
    const count = useSelector(cartItemsCountSelector());

    return <Link 
    href={"/cart"}
    className="flex text-xs items-center"
    >
        <Image height={14} width={14} src="/cart.svg" alt="Cart button"></Image>
        <span>{count}</span>
    </Link>
}