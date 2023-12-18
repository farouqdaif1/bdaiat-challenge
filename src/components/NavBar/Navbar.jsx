import { Link } from "react-router-dom"; // If using React Router
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const numberOfItems = useSelector((state) => state.cartReducer.totalQuantity);
  const { t } = useTranslation();

  const toggleNav = () => {
    document.getElementById("pages-mob").classList.toggle("disappear");
  };

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
      <div className="bars">
        <i
          className="fa-solid fa-bars"
          onClick={() => {
            toggleNav();
          }}
        ></i>
      </div>
      <ul
        onClick={() => {
          toggleNav();
        }}
        id="pages-mob"
        className="pages-mob disappear"
      >
        <li className="mob-close">
          <i id="mob-close" className="fa-solid fa-x "></i>
        </li>
        <li>
          <Link to="/">{t("HomePage")}</Link>
        </li>
        <li>
          <Link to="/cart">{t("Cart")}</Link>
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
