import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../firebase/firestore";
import { CartContext } from "../context/CartContext";
import "../styles/ItemDetailContainer.css";
import {ItemCount} from "./ItemCount";

export default function ItemDetail() {
  const { id } = useParams();
  const { addItem } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError("Producto no encontrado " + err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAdd = (quantity) => {
    addItem(product, quantity);
  };

  if (loading) return <h2>Cargando producto...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="item-detail" style={{ padding: "20px" }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width={200} />
      <div className="item-info">
        <p>{product.description}</p>
      <p className="item-price"><strong>${product.price}</strong></p>
      </div>
      <ItemCount
          stock={product.stock || 10}
          initial={1}
          onAdd={handleAdd}
        />
      
      
    </div>
  );
}
