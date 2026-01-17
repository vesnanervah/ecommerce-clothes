"use client";

import { useDispatch, useSelector } from "react-redux";
import { DarkCustomButton } from "../../common/ui/custom-button";
import { ReduxProvider } from "../../state/view/redux-provider";
import Product from "../types/product";
import { cartItemSelector } from "../../cart/state/selectors";
import CartItemControls from "../../cart/view/cart-item-controls";
import { cartSlice } from "../../cart/state/cart-slice";

export default function AddProductToCartButton({ product }: { product: Product }) {
    return <ReduxProvider>
        <AddToCartButtonOrCartControls
        product={product}
        />
    </ReduxProvider>
}

function AddToCartButtonOrCartControls({ product }: { product: Product }) {
    const dispatch = useDispatch();
    const item = useSelector(cartItemSelector(product.id));

    if(item) {
        return <div
        className="flex"
        >
            <CartItemControls
            onIncrease={() => dispatch(cartSlice.actions.add({ product }))}
            onDecrease={() => dispatch(cartSlice.actions.decrease({ product }))}
            quantity={item.quantity}
            innerButtonsClassName="p-2"
            />
        </div>


    }

    return <DarkCustomButton 
    text={"Add to Cart"}
    className="w-full" 
    onClick={ () => dispatch(cartSlice.actions.add({ product }))}
    />
}
