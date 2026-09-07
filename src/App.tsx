import "./App.css";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import products from "./data/products";

function App() {
  return (
    <>
      <Header />

      <main>
        <ProductList products={products} />
      </main>
    </>
  );
}

export default App;