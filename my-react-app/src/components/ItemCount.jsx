import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ItemCount.css";

const ItemCount = ({ product, stock = 10, initial = 1 }) => {
  const [count, setCount] = useState(initial);
  const [added, setAdded] = useState(false);
  const { addItem } = useContext(CartContext);

  const increment = () => count < stock && setCount(count + 1);
  const decrement = () => count > 1 && setCount(count - 1);

  const handleAdd = () => {
    addItem(product, count);
    setAdded(true);
  };

  return (
    <div className="itemcount">
      {!added ? (
        <>
          <div className="itemcount-controls">
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
          </div>

          <button
            className="itemcount-add"
            onClick={handleAdd}
            disabled={stock === 0}
          >
            Agregar al carrito
          </button>
        </>
      ) : (
        <button className="itemcount-go">
          Ir al carrito
        </button>
      )}
    </div>
  );
};

export default ItemCount;
