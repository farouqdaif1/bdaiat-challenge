import { Link } from "react-router-dom"; // If using React Router
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const numberOfItems = useSelector((state) => state.cartReducer.totalQuantity);
  const { t } = useTranslation();

  return (
    <nav className="nav-bar">
      <ul className="pages">
        <li>
          <Link to="/">{t("HomePage")}</Link>
        </li>
        <li>
          <Link to="/setting">{t("setting")}</Link>
        </li>
      </ul>
      <ul className="buttons">
        <Link to="/cart">
          <li className="shopping">
            <i className="fa-solid fa-cart-shopping"></i>
            {<span className="cart-items">{numberOfItems}</span>}
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
