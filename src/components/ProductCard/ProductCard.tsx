import "./ProductCard.css";
import type { Product } from "../../data/products";
interface ProductCardProps {
    product: Product
}

function ProductCard({product}: ProductCardProps){
    return (
        <article className="product-card">
            <img className="product-card-image" src={product.image} alt={product.name}/>
            <div className="product-card-body">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <a>{product.price > 0 ? `$${product.price.toLocaleString("es-CL")}` : "Consultar precio"}</a>
            </div>
        </article>
    );
}

export default ProductCard;