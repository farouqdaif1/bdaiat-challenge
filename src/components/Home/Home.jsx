import { useSelector } from "react-redux";
import Card from "./Card/Card";

const Home = () => {
  const products = useSelector((state) => state.cartReducer.products);
  return (
    <div className="product-list">
      {products.map((ele) => (
        <Card key={ele.id} product={ele} />
      ))}
    </div>
  );
};

export default Home;
