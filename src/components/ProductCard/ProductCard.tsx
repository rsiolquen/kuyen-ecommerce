import "./ProductCard.css";
import type { Product } from "../../data/products";
interface ProductCardProps {
    product: Product
}

function ProductCard({product}: ProductCardProps){
    return (
     <article className="product-card">
      <img className="product-card-image"
        src={product.image}
        alt={product.name}
      />

      <div className="product-card-body">
        <span className="product-category">
          {product.category}
        </span>

        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <p className="product-price">
          {product.priceFrom && "Desde "}
          ${product.price.toLocaleString("es-CL")}
        </p>
      </div>
    </article>
    );
}

export default ProductCard;