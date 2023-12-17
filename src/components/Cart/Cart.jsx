import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
import CartItem from "./CartItem/CartItem";
import { emptyCartAction } from "../../store/actions/cartActions";

const Cart = () => {
  const totalPrice = useSelector((state) => state.cartReducer.totalPrice);
  const products = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cart</h1>
      <div className="cart-container">
        <div className="cart-products">
          {products.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
        </div>
        <div className="cart-summary">
          <div className="cart-summary-header">
            <h2>Cart Summary</h2>
          </div>
          <div className="cart-summary-details">
            <div className="cart-summary-detail">
              <p>Total</p>
              <p>${totalPrice}</p>
            </div>
            <div className="cart-summary-detail">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <button
              className="clear-cart"
              onClick={() => {
                dispatch(emptyCartAction());
              }}
            >
              clear the Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
