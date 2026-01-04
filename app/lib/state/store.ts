import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../cart/state/cart-slice";


export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})
