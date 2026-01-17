import Image from "next/image";
import CartItem from "../types/cart-item";
import CartItemControls from "./cart-item-controls";
import { cartSlice } from "../state/cart-slice";
import { useDispatch } from "react-redux";

export default function CartGridItem({ item }: { item:CartItem }) {
    const dispath = useDispatch();

    return <div
    className="w-full max-w-[360px] relative p-4 border border-neutral-200"   
    >
        <button
        className="absolute top-0 right-2 text-neutral-400"
        onClick={remove}
        >
            x
        </button>
        <div
        className="text-xl pb-4 text-center"
        >
            {item.product.name}
        </div>
        <div 
        className="h-[280px] overflow-hidden w-full flex justify-center items-center"
        >
            <Image
            src={item.product.previewUrl!}
            alt="Photo of product"
            width={240}
            height={280}
            style={{objectFit: 'cover',}} 
            />

        </div>
        <div
        className="flex justify-between pt-4 items-center"
        >
            <CartItemControls 
            onDecrease={decrease}
            onIncrease={increase}
            quantity={item.quantity}
            innerButtonsClassName="p-1"
            />
            <div>
                ${(item.product.price ?? 0) * item.quantity}
            </div> 
        </div>
    </div>

    function decrease() {
        dispath(cartSlice.actions.decrease({ product: item.product }))
    }

    function increase() {
        dispath(cartSlice.actions.add({ product: item.product }))
    }

    function remove() {
        dispath(cartSlice.actions.remove({ product: item.product }));
    }
}