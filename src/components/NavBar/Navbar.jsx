import { Link } from "react-router-dom"; // If using React Router
import ReactSwitch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="nav-bar">
      <ul className="pages">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <img className="logo" src="../../../public/Logo.png" alt="logo" />
      <ul className="buttons">
        <li>
          <i className="fa-solid fa-cart-shopping"></i>
        </li>
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
      </ul>
    </nav>
  );
};

export default Navbar;
