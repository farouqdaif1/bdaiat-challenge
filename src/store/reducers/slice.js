import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    products: [],
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // your reducer functions here
        setProducts: (state, action) => {

            // console.log(state.products);
            state.products = action.payload;
            // console.log(state);

        }
    },
});
export const { setProducts } = productSlice.actions

export default productSlice.reducer;