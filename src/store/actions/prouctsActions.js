import *  as api from '../api/index.js';
import { setProductsForDisplayAction } from '../actions/cartActions.js';
export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProducts();
        const dataState = [...data.products]
        dispatch(setProductsForDisplayAction(dataState))

    } catch (error) {
        console.log(error.message);
    }
}
