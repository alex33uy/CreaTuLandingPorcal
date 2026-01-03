import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ItemDetailContainer.css";
import { CartContext } from "../context/CartContext";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  

   const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <h2>Cargando...</h2>;

  return (
    <div className="item-detail" style={{ padding: "20px" }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width={200} />
      <div className="item-info">
        <p>{product.description}</p>
      <p className="item-price"><strong>${product.price}</strong></p>
      </div>
      <div className="item-actions">
        <button onClick={handleAdd}>Agregar al Carrito</button>
      </div>
      
      
    </div>
  );
}
