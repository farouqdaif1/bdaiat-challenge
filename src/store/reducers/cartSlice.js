import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // your reducer functions here
        addToCart: (state, action) => {
            const product = action.payload.product;
            const quantity = action.payload.quantity;

            const existingProduct = state.cart.find(
                (item) => item.id === product.id
            );
            if (!existingProduct) {
                state.cart.push({
                    ...product,
                    quantity: quantity,
                });
            } else {
                existingProduct.quantity = quantity +1;
            }
            state.totalQuantity++;
            state.totalPrice += product.price;
        },
        removeFromCart: (state, action) => {
            const id = action.payload.product.id;
            const quantity = action.payload.quantity;

            const existingProduct = state.cart.find((item) => item.id === id);
            if (existingProduct.quantity === 1) {
                state.cart = state.cart.filter((item) => item.id !== id);
            } else {
                existingProduct.quantity = quantity - 1;
            }
            state.totalQuantity--;

            state.totalPrice -= existingProduct.price;

        },
        deleteFromCart: (state, action) => {
            const id = action.payload.product.id;
            const existingProduct = state.cart.find((item) => item.id === id);
            state.totalQuantity -= existingProduct.quantity;
            state.totalPrice -= existingProduct.price * existingProduct.quantity;
            state.cart = state.cart.filter((item) => item.id !== id);
        }
        ,
        emptyCart: (state) => {
            state.cart = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
    },
});
export const { addToCart, removeFromCart, emptyCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;