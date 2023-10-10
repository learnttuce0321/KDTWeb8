import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

export const { addCart, deleteCart } = cartSlice.actions
export default store

