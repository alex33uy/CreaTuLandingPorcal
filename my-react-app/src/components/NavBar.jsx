import "../styles/Navbar.css";


export default function Navbar() {
return (
<nav className="navbar">
<div className="logo">MiProyecto</div>


<ul className="nav-links">
<li>
<a to="/">Inicio</a>
</li>
<li>
<a to="/productos">Productos</a>
</li>
<li>
<a to="/contacto">Contacto</a>
</li>
</ul>
</nav>
);
}