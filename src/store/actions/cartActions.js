import { addToCart, removeFromCart, emptyCart, deleteFromCart,setProductsForDisplay } from '../reducers/cartSlice';


export const addToCartAction = (product) => (dispatch) => {
    dispatch(addToCart(product));

}

export const removeFromCartAction = (id) => (dispatch) => {
    dispatch(removeFromCart(id));
}

export const deleteFromCartAction = (id) => (dispatch) => {
    dispatch(deleteFromCart(id));
}

export const emptyCartAction = () => (dispatch) => {
    dispatch(emptyCart());
}
export const setProductsForDisplayAction = (products) => (dispatch) => { 
    dispatch(setProductsForDisplay(products));
}
