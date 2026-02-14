import { useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/ItemCount.css";

export  const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => count < stock && setCount(count + 1);
  const decrement = () => count > 1 && setCount(count - 1);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>

      <button onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};


