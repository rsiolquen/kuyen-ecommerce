import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";
import type { Product } from "../../data/products";

interface ProductListProps {
  products: Product[];
}

function ProductList({ products }: ProductListProps) {
  return (
    <section id="catalog">
      <div className="catalog-header">
        <h1>Productos</h1>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;