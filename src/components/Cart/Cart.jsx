import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
import CartItem from "./CartItem/CartItem";
import { emptyCartAction } from "../../store/actions/cartActions";
import { useTranslation } from "react-i18next";
const Cart = () => {
  const totalPrice = useSelector((state) => state.cartReducer.totalPrice);
  const products = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="cart-header">{t("Cart")}</h1>
      <div className="cart-container">
        <div className="cart-products">
          {products.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
        </div>
        <div className="cart-summary">
          <div className="cart-summary-header">
            <h2>{t("CartSummary")}</h2>
          </div>
          <div className="cart-summary-details">
            <div className="cart-summary-detail">
              <p>{t("Total")}</p>
              <p>${totalPrice}</p>
            </div>
            <div className="cart-summary-detail">
              <p>{t("Shipping")}</p>
              <p>{t("FreeShipping")}</p>
            </div>
            <button
              className="clear-cart"
              onClick={() => {
                dispatch(emptyCartAction());
              }}
            >
              {t("clearTheCart")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
