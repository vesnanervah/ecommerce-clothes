import Image from "next/image";
import CartItem from "../types/cart-item";
import CartItemControls from "./cart-item-controls";
import { cartSlice } from "../state/cart-slice";
import { useDispatch } from "react-redux";

export default function CartGridItem({ item }: { item:CartItem }) {
    const dispath = useDispatch();

    return <div
    className="relative p-2"   
    >
        <div
        className="absolute top-1 right-1"
        >
            x
        </div>
        <div
        className="text-xl pb-8"
        >
            {item.product.name}
        </div>
        <div 
        className="flex items-center"
        >
            <Image
            src={item.product.previewUrl!}
            width={320}
            height={320}
            alt="Photo of product"
            />

        </div>
        <div
        className="flex justify-between"
        >
            <div>
                {(item.product.price ?? 0) * item.quantity}
            </div>
            <CartItemControls 
            onDecrease={decrease}
            onIncrease={increase}
            quantity={item.quantity}
            />
                
        </div>
    </div>

    function decrease() {
        dispath(cartSlice.actions.add({ product: item.product }))
    }

    function increase() {
        dispath(cartSlice.actions.decrease({ product: item.product }))
    }
}