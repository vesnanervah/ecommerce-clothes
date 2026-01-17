import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../../state/store";
import { getCartItemById, getTotalCartLen } from "./cart-slice";

export const cartSelector = (state: AppState) => state.cart;
export const cartItemsSelector = () => createSelector(cartSelector, cart => cart.items);
export const cartItemSelector = (id: number) => createSelector(cartSelector, cart => getCartItemById(cart, id))
export const cartItemsCountSelector = () => createSelector(cartSelector, getTotalCartLen);
export const cartTotalPriceSelector = () => createSelector(cartSelector, (cart) => {
    return Object.keys(cart.items).map((k) => {
        const item = cart.items[parseInt(k)]!;
        return (item.product.price ?? 0) * item.quantity;
    }).reduce<number>((acc, curent) => {
        return acc + curent;
    }, 0)
})