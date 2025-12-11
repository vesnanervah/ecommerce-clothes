import Image from "next/image";

export default function CartButton() {
    return <button className="flex text-xs items-center">
        <Image height={14} width={14} src="/cart.svg" alt="Cart button"></Image>
        {/* Todo: cart logic */}
        <span>0</span>
    </button>
}