import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../../styles/Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clearCart, getTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2 className="cart-empty">Tu carrito está vacío 🛒</h2>;
  }

  return (
    <div className="cart-container">
      <h2>Carrito de compras</h2>

      <div className="cart-items">
        {cart.map((product) => (
          <div key={product.id} className="cart-item">
            <div>
              <h4>Nombre: {product.title}</h4>
              <p>Cantidad: {product.quantity}</p>
              <p>Precio unitario: ${product.price}</p>
              <p>Subtotal: ${product.price * product.quantity}</p>
            </div>

            <button
              className="remove-btn"
              onClick={() => removeItem(product.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ${getTotal()}</h3>
        <Link to="/checkout">
          <button className="endShopping">Finalizar compra</button>
        </Link>
        <button className="clear-btn" onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;
