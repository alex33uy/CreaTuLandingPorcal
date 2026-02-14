import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { createOrder } from "../firebase/firestore";
import "../styles/Checkout.css";

export default function Checkout() {
  const { cart, getTotal, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const order = {
      buyer,
      items: cart.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      total: getTotal(),
    };

    try {
      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
    } catch (error) {
      console.error("Error al crear orden", error);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div>
        <h2>¡Compra realizada con éxito!</h2>
        <p>Tu número de orden es:</p>
        <strong>{orderId}</strong>
      </div>
    );
  }

  return (
    <div>
      <h2>Finalizar Compra</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
          required
        />

        <h3>Total: ${getTotal()}</h3>

        <button type="submit" disabled={loading}>
          {loading ? "Procesando..." : "Confirmar Compra"}
        </button>
      </form>
    </div>
  );
}
