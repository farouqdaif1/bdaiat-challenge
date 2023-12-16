import "./Card.css";
import PropTypes from "prop-types";
const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} />
      <div className="card-body">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-info">Stock: {product.stock}</p>
        <p className="product-info">Rating: {product.rating}</p>
        <p className="product-info">Brand: {product.brand}</p>
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
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
  }),
};
