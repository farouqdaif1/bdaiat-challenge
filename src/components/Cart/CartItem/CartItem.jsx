import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import {
  addToCartAction,
  removeFromCartAction,
  deleteFromCartAction,
} from "../../../store/actions/cartActions";
import { useTranslation } from "react-i18next";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  console.log(product.quantity);
  let quantity = product.quantity;
  const { t } = useTranslation();

  return (
    <>
      <div className="cart-item" key={product.id}>
        <div className="cart-item-image">
          <img src={product.images[0]} alt={product.brand} />
        </div>
        <div className="cart-item-details">
          <p className="cart-item-brand">{product.brand}</p>
          <p className="cart-item-title">{product.title}</p>
          <p className="cart-item-description">{product.description}</p>
          <p className="cart-item-price">
            ${product.price}
            &nbsp;&nbsp;
            <span className="original-price-cart">
              {(product.price / (1 - product.discountPercentage / 100)).toFixed(
                2
              )}
            </span>
            <span className="sale">
              &nbsp;&nbsp;{product.discountPercentage}%
            </span>{" "}
          </p>
          <div className="buttons-area">
            <div className="quantity-area-cart">
              <button
                className="min-btn"
                onClick={() => {
                  dispatch(removeFromCartAction({ product, quantity }));
                }}
              >
                -
              </button>
              <p>{`${quantity}`}</p>
              <button
                className="min-btn"
                onClick={() => {
                  dispatch(addToCartAction({ product, quantity }));
                }}
              >
                +
              </button>
              <button
                className="delete-btn"
                onClick={() => {
                  dispatch(deleteFromCartAction({ product }));
                }}
              >
                {t("DeleteBtn")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
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
