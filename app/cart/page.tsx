import CartItemsGrid from "../lib/cart/view/cart-items-grid";
import CartItemsGridWithSummary from "../lib/cart/view/cart-items-grid-with-summary";

export default function Page() {

    return <div
    className="pb-8"
    >
        <div
        className="flex justify-center p-8 text-2xl"
        >
            Cart
        </div>
        <div
        className="pl-4 pr-4"
        >
            <CartItemsGridWithSummary />
        </div>
    </div>
}