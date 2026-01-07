import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { getCartItemById, getTotalCartLen } from "../cart/state/cart-slice";

export const cartSelector = (state: AppState) => state.cart;
export const cartItemSelector = (id: number) => createSelector(cartSelector, cart => getCartItemById(cart, id))
export const cartItemsCountSelector = () => createSelector(cartSelector, getTotalCartLen);