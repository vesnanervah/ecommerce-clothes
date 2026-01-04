import { createSlice } from "@reduxjs/toolkit";
import CartItem from "../types/cart-item";
import Product from "../../product/types/product";

export interface CartState {
    items: Map<number, CartItem>,
    getItemById: (id: number) => CartItem | undefined,
}

const initialCartState: CartState = {
    items: new Map<number, CartItem>(),
    getItemById: function (id) {
        return this.items.get(id);
    }
}


export const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        add: (state, action) => {
            const actionProduct = action.payload.product as Product | undefined;
            if(!actionProduct) return;

            const found = state.getItemById(actionProduct.id);
            if (found) {
                state.items.set(actionProduct.id, { ...found, quantity: found.quantity + 1 }) 
            } else {
                state.items.set(actionProduct.id, { quantity: 1, product: actionProduct })
            }
        },
        remove: (state, action) => {
            const actionProduct = action.payload.product as Product | undefined;
            if(!actionProduct) return;
            const found = state.getItemById(actionProduct.id);
            if(!found) return;

            if (found.quantity > 1) {
                state.items.set(actionProduct.id, { ...found, quantity: found.quantity - 1 })
            } else {
                state.items.delete(actionProduct.id)
            }
        } 
    }
})
