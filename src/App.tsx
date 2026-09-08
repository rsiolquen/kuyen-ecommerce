import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductList from "./components/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
import products from "./data/products";

function App() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const term = search.toLowerCase();

    return (
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    );
  });

  return (
    <>
      <Header />

      <main>
        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <ProductList products={filteredProducts} />
      </main>

      <Footer />
    </>
  );
}

export default App;