"use client"

import { useSelector } from "react-redux";
import { ReduxProvider } from "../../state/view/redux-provider";
import { cartItemsSelector, cartTotalPriceSelector } from "../state/selectors";
import Link from "next/link";
import { DarkCustomButton } from "../../common/ui/custom-button";
import CartItemsGrid from "./cart-items-grid";
import CartSummary from "./cart-summary";

export default function CartItemsGridWithSummary() {
    return <ReduxProvider>
        <Content/>
    </ReduxProvider>
}

function Content() {
    const items = useSelector(cartItemsSelector())
    const total = useSelector(cartTotalPriceSelector())

    if(Object.keys(items).length === 0) {
        return <div 
        className="text-xl flex items-center flex-col gap-4"
        >
            Cart is empty...
            <Link
            href="/shop"
            >
                <DarkCustomButton
                text="Go to Shop"
                />
            </Link>
        </div>
    }

    return <div
    className="flex flex-col gap-8 items-center md:flex-row md:items-start md:justify-center"
    >
        <CartItemsGrid
        items={items}
        />
        <CartSummary 
        total={total}
        />

    </div>
}