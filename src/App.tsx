import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import products from "./data/products";

function App() {
  
  return (
    <main>
      <h1>KUYEN MANUALIDADES</h1>

    <ProductList products={products} />
     </main>
  );
}

export default App;