import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Navbar from "./components/NavBar/Navbar";
import { useDispatch } from "react-redux";
import { getProducts } from "./store/actions/prouctsActions";
import Setting from "./components/setting/setting";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Router>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div id={theme} className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
          </div>
        </ThemeContext.Provider>
      </Router>
    </>
  );
}

export default App;
