import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";

interface ProductListProps {
  products: any[];
}

function ProductList({ products }: ProductListProps) {
  return (
    <section id="catalog">
      <div className="catalog-header">
        <h1>Productos</h1>
      </div>

      <div className="product-grid">
        {products.map((product: any) => (
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