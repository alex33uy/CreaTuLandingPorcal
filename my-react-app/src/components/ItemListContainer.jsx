import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ItemListContainer.css";
   

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Error al cargar productos");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <h2>Cargando productos...</h2>;
  if (error) return <h2>{error}</h2>;

   const handleClick = (id) => {
    navigate(`/item/${id}`);
  };

  return (
    <div className="grid">
      {products.map((product) => (
        <div key={product.id}
        onClick={() => handleClick(product.id)}
        style={{ cursor: "pointer" }}
        >
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <img src={product.image} alt={product.title} width={150} />
        </div>
      ))}
    </div>
  );
}

