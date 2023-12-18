import "./Card.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  addToCartAction,
  removeFromCartAction,
} from "../../../store/actions/cartActions";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Card = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const maxTitleLength = 28;
  const truncatedTitle =
    product.title.length > maxTitleLength
      ? product.title.slice(0, maxTitleLength) + "..."
      : product.title;
  const { t } = useTranslation();
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} />
      <div className="card-body">
        <h3 className="product-title">{truncatedTitle}</h3>
        <p className="product-info">
          {t("brand")}: {product.brand}
        </p>
        <div className="product-data">
          <p className="product-info">
            {t("Rating")}: {product.rating}{" "}
            <i className="star fa-solid fa-star"></i>
          </p>
          <p className="product-info">
            {t("Stock")}: {product.stock}
          </p>
        </div>
        <p className="product-price">
          ${product.price}
          &nbsp;&nbsp;
          <span className="original-price">
            {(product.price / (1 - product.discountPercentage / 100)).toFixed(
              2
            )}
          </span>
          <span className="sale">
            &nbsp;&nbsp;{product.discountPercentage}%
          </span>
        </p>
        <div className="buttons-area">
          <button
            className="add-to-cart-btn"
            onClick={() => {
              setQuantity(quantity + 1);
              dispatch(addToCartAction({ product, quantity }));
            }}
          >
            {t("AddBtn")}
          </button>
          <div className="quantity-area">
            <button
              className="min-btn"
              onClick={() => {
                setQuantity(quantity - 1);
                dispatch(removeFromCartAction({ product, quantity }));
              }}
            >
              -
            </button>
            <span>{product.quantity > 0 ? product.quantity : 0}</span>
            <button
              className="min-btn"
              onClick={() => {
                setQuantity(quantity + 1);
                dispatch(addToCartAction({ product, quantity }));
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
Card.propTypes = {
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
