import { useSelector } from "react-redux";
import Card from "./Card/Card";

const Home = () => {
  const data = useSelector((state) => state.productsReducer.products);

  return (
    <div className="product-list">
      {data.map((ele) => (
        <Card key={ele.id} product={ele} />
      ))}
    </div>
  );
};

export default Home;
