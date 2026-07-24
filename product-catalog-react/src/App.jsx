import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header.jsx";
import ProductCart from "./components/productCart.jsx";
import ProductCartFilter from "./components/filter.jsx";
import PopUpProduct from "./components/popUpProduct.jsx";
import PopUpCheckOut from "./components/popUpCheckOut.jsx";
function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCheckOut, setSelectedCheckOut] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Data tidak dapat diambil dari API");
        }
        const data = await response.json();
        setProducts(data.products);
        setAllProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, []);

  return (
    <>
      <Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

      <ProductCartFilter setProducts={setProducts} allProducts={allProducts} />

      <div className="cartContainer">
        {products.map((elements) => (
          <ProductCart
            key={elements.id}
            title={elements.title}
            description={elements.description}
            category={elements.category}
            price={elements.price}
            thumbnail={elements.thumbnail}
            images={elements.images}
            rating={elements.rating}
            stock={elements.stock}
            products={elements}
            setSelectedProduct={setSelectedProduct}
          />
        ))}
      </div>

      {selectedProduct && (
        <PopUpProduct
          selectedProduct={selectedProduct}
          products={products}
          setSelectedProduct={setSelectedProduct}
          setSelectedCheckOut={setSelectedCheckOut}
        />
      )}

      {isCartOpen && (
        <PopUpCheckOut
          setIsCartOpen={setIsCartOpen}
          selectedCheckOut={selectedCheckOut}
        />
      )}
    </>
  );
}

export default App;
