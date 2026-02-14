import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/CartWidget.css";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);
  const quantity = getQuantity();

  return (
    <span to="/cart" className="cart-widget">
      🛒
      {quantity > 0 && (
        <span className="cart-badge">{quantity}</span>
      )}
    </span>
  );
};

export default CartWidget;

