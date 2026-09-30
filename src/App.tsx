import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CatalogPage from "./pages/CatalogPage";

function App() {
  return (
    <>
      <Header />

      <main>
        <CatalogPage />
      </main>

      <Footer />
    </>
  );
}

export default App;