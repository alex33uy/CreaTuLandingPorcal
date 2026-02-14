import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/ItemListContainer.css";
import { getProducts } from "../firebase/firestore";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();
  const { categoryId } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError("Error al cargar productos " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (!categoryId) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === categoryId,
      );
      setFilteredProducts(filtered);
    }
  }, [categoryId, products]);

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const handleCategoryClick = (category) => {
    if (category === "all") {
      navigate("/");
    } else {
      navigate(`/category/${category}`);
    }
  };

  if (loading) return <h2>Cargando productos...</h2>;
  if (error) return <h2>{error}</h2>;

  const handleClick = (id) => {
    navigate(`/item/${id}`);
  };

  return (
    <>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={
              categoryId === category || (!categoryId && category === "all")
                ? "active"
                : ""
            }
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => handleClick(product.id)}
            style={{ cursor: "pointer" }}
          >
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <img src={product.image} alt={product.title} width={150} />
          </div>
        ))}
      </div>
    </>
  );
}
