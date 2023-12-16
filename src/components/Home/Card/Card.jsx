import './Card.css';
const Card = () => {
  let product = {
    brand: "Apple",
    category: "smartphones",
    description: "An apple mobile which is nothing like apple",
    discountPercentage: 12.96,
    id: 1,
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
    price: 549,
    rating: 4.69,
    stock: 94,
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    title: "iPhone 9",
  };
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
