import { useEffect, useState } from "react";
import "./CatalogPage.css";

import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import ProductList from "../components/ProductList/ProductList";
import SearchBar from "../components/SearchBar/SearchBar";
import type { Product } from "../types/Product";

function CatalogPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [productsDJ, setProductsDJ] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products",
        );

        if (!response.ok) {
          throw new Error("Falló la carga de productos");
        }

        const data: { products: Product[] } =
          await response.json();

        setProductsDJ(data.products);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Ocurrió un error inesperado");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = productsDJ.filter((product) =>
    product.title
      .toLowerCase()
      .includes(search.trim().toLowerCase()),
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <>
      <SearchBar
        value={search}
        onChange={setSearch}
      />

      {filteredProducts.length === 0 ? (
        <p>
          No se encontraron productos para: {search}
        </p>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </>
  );
}

export default CatalogPage;