import { addToCart, removeFromCart, emptyCart } from '../reducers/cartSlice';


export const addToCartAction = (product) => (dispatch) => {
    dispatch(addToCart(product));

}

export const removeFromCartAction = (id) => (dispatch) => {
    dispatch(removeFromCart(id));
}

export const emptyCartAction = () => (dispatch) => {
    dispatch(emptyCart());
}
