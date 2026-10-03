import "./ProductCard.css";

interface ProductCardProps {
  product: any;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <img
        className="product-card-image"
        src={product.images[0]}
        alt={product.title}
      />

      <div className="product-card-body">
        <span className="product-category">
          {product.category}
        </span>

        <h2>{product.title}</h2>

        <p>{product.description}</p>

        <p className="product-price">
          ${product.price}
        </p>
      </div>
    </article>
  );
}

export default ProductCard;