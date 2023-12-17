import { useSelector } from "react-redux";
// import { useState } from "react";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const totalPrice = useSelector((state) => state.cartReducer.totalPrice);
  const products = useSelector((state) => state.cartReducer.cart);

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
              <p>Subtotal</p>
              <p>${totalPrice}</p>
            </div>
            <div className="cart-summary-detail">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="cart-summary-detail">
              <p>Tax</p>
              {/* <p>${(totalPrice * 0. 1).toFixed(2)}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
