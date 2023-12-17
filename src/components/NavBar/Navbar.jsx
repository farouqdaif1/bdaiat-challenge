import { Link } from "react-router-dom"; // If using React Router
import ReactSwitch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import SwitchLang from "./SwitchLang/SwitchLang";
const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const numberOfItems = useSelector((state) => state.cartReducer.totalQuantity);
  const { t } = useTranslation();

  return (
    <nav className="nav-bar">
      <ul className="pages">
        <li>
          <Link to="/">{t('HomePage')}</Link>
        </li>
      </ul>
      <ul className="buttons">
        <Link to="/cart">
          <li className="shopping">
            <i className="fa-solid fa-cart-shopping"></i>
            {<span className="cart-items">{numberOfItems}</span>}
          </li>
        </Link>
        <li className="switch">
          <label>
            {theme === "light" ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </li>
        <li>
          <SwitchLang />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
