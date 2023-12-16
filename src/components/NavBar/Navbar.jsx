import { Link } from "react-router-dom"; // If using React Router
import ReactSwitch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
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
