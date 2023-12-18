import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
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
            const quantity = action.payload.quantity + 1;
            const existingProduct = state.cart.find(
                (item) => item.id === product.id
            );
            if (!existingProduct) {
                state.cart.push({
                    ...product,
                    quantity: quantity,
                });
                state.products[product.id - 1] = {
                    ...product,
                    quantity: quantity,
                };

            } else {
                existingProduct.quantity = quantity;
                state.products[product.id - 1] = existingProduct;
            }
            state.totalQuantity++;
            state.totalPrice += product.price;
        },
        removeFromCart: (state, action) => {
            const id = action.payload.product.id;
            const quantity = action.payload.quantity - 1;

            const existingProduct = state.cart.find((item) => item.id === id);
            if (existingProduct.quantity === 1) {
                state.cart = state.cart.filter((item) => item.id !== id);
                state.products[action.payload.product.id - 1] = existingProduct
            } else {
                existingProduct.quantity = quantity;
                state.products[action.payload.product.id - 1] = existingProduct;
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
            console.log(existingProduct)
            existingProduct.quantity = 0;
            state.products[action.payload.product.id - 1] = existingProduct;

        }
        ,
        emptyCart: (state) => {
            state.cart = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
            state.products = state.products.map((item) => {
                item.quantity = 0;
                return item;
            });
        },
        setProductsForDisplay: (state, action) => {
            state.products = action.payload;
        },
    },
});
export const { addToCart, removeFromCart, emptyCart, deleteFromCart, setProductsForDisplay } = cartSlice.actions;
export default cartSlice.reducer;