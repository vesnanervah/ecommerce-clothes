import { createSlice } from "@reduxjs/toolkit";
import CartItem from "../types/cart-item";
import Product from "../../product/types/product";

export interface CartStateItems {
    [id: number]: CartItem | undefined
}

export interface CartState {
    items: CartStateItems
}

const initialCartState: CartState = {
    items: {},
}

export function getCartItemById(state: CartState, id: number) {
    return state.items[id];
};
export function setCartItemItem(state: CartState, id: number, value: CartItem | undefined | null) {
    if (value) {
        state.items[id] = value;
    } else {
        delete state.items[id];
    }
}

export function getTotalCartLen(state: CartState) {
    return Object.keys(state.items).map((k) => state.items[parseInt(k)]!.quantity).reduce((acc, current) => {
        return acc + current
    }, 0);
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        add: (state, action) => {
            const actionProduct = action.payload.product as Product | undefined;
            if(!actionProduct) return;
            const found = getCartItemById(state, actionProduct.id);
            const result = found ? { ...found, quantity: found.quantity + 1 } : { quantity: 1, product: actionProduct }
            setCartItemItem(state, actionProduct.id, result) 
        },
        decrease: (state, action) => {
            const actionProduct = action.payload.product as Product | undefined;
            if(!actionProduct) return;
            const found = getCartItemById(state, actionProduct.id);
            if(!found) return;

            const result = found.quantity > 1 ? { ...found, quantity: found.quantity - 1 } : null;
            setCartItemItem(state, actionProduct.id, result)

        },
        remove: (state, action) => {
            const actionProduct = action.payload.product as Product | undefined;
            if(!actionProduct) return;
            const found = getCartItemById(state, actionProduct.id);
            if(!found) return;
            setCartItemItem(state, actionProduct.id, null);
        }
    }
});
