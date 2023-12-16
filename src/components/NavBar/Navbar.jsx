import { Link } from 'react-router-dom'; // If using React Router
const Navbar = () => {
  return (
    <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar
