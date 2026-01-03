import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">   
            <Link className="logoLink" to="/">Home</Link>       
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/CartWidget">Carrito</Link>
        </li>
        <li>
          <Link to="/ItemListContainer">Articulos</Link>
        </li>
      </ul>
    </nav>
  );
}
