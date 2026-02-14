import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">   
            <Link className="logoLink" to="/">Inicio</Link>       
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/ItemListContainer">Articulos</Link>
        </li>
        <li>
          <Link to="/Cart"><CartWidget /></Link>
        </li> 
      </ul>
    </nav>
  );
}
