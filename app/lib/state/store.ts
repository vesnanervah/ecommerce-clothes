import { configureStore, Store } from "@reduxjs/toolkit";
import { cartSlice } from "../cart/state/cart-slice";


export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});



type AppStore = typeof store;
export type AppState = ReturnType<AppStore['getState']>;