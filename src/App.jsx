import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Navbar from "./components/NavBar/Navbar";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <Router>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div id={theme} className="App">
            <Navbar  />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </ThemeContext.Provider>
      </Router>
    </>
  );
}

export default App;
