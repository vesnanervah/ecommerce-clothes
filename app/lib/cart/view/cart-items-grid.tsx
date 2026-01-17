"use client";

import { CartStateItems } from "../state/cart-slice";
import CartGridItem from "./cart-grid-item";

export default function CartItemsGrid({ items }: { items: CartStateItems }) {
    return  <div
    className="w-full max-w-[360px] grid grid-cols-1 gap-4 lg:grid-cols-2 lg:max-w-[736px]"
    >
        {
            Object.keys(items).map((k) => {
                const item = items[parseInt(k)]!;
                return <CartGridItem key={item.product.id} item={item}/>
            })
        }
    </div>
}
