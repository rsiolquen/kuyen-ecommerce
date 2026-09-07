
import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard/ProductCard'
import { products } from './data/products'

function App() {
  const [count, setCount] = useState(0)
  return (
    <main>
      <h1>KUYEN MANUALIDADES</h1>

      <section id="catalog">
      <div className="catalog-header">
        <h1>Catálogo</h1>
        <p>Productos disponibles</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
    </section>
    </main>
  );
}

export default App;