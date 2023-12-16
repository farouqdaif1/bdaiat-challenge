import *  as api from '../api/index.js';
import { setProducts } from '../reducers/slice';
export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProducts();
        const dataState = [...data.products]
        dispatch(setProducts(dataState));
    } catch (error) {
        console.log(error.message);
    }
}
