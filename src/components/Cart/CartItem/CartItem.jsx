// import React from "react";
import { useDispatch } from "react-redux";
// import { useState } from "react";
import PropTypes from "prop-types";

import {
  addToCartAction,
  removeFromCartAction,
} from "../../../store/actions/cartActions";
const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  let quantity = product.quantity;
  return (
    <div>
      <div className="cart-item" key={product.id}>
        <div className="cart-item-image">
          <img src={product.images[0]} alt={product.brand} />
        </div>
        <div className="cart-item-details">
          <p className="cart-item-brand">{product.brand}</p>
          <p className="cart-item-description">{product.description}</p>
          <p className="cart-item-price">
            ${product.price}
            &nbsp;&nbsp;
            <span className="original-price">
              {(product.price / (1 - product.discountPercentage / 100)).toFixed(
                2
              )}
            </span>
            <span className="sale">
              &nbsp;&nbsp;{product.discountPercentage}%
            </span>{" "}
          </p>
          <div className="buttons-area">
            <div className="quantity-area">
              <button
                onClick={() => {
                  quantity = product.quantity - 1;

                  dispatch(removeFromCartAction({ product, quantity }));
                }}
              >
                -
              </button>
              <p>{`${product.quantity + 1}`}</p>
              <button
                onClick={() => {
                  quantity = product.quantity + 1;
                  dispatch(addToCartAction({ product }));
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
CartItem.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    discountPercentage: PropTypes.number,
    id: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
    rating: PropTypes.number,
    stock: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    quantity: PropTypes.number,
  }),
};
