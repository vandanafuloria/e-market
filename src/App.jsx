import { Route, Routes, BrowserRouter, useNavigate } from "react-router";
import { useContext } from "react";
import { useState } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Product from "./components/Product";
import Header from "./ui/header";
import { ProductContext } from "./pages/ProductContext";

/*
/home => pages/Home.jsx
/cart => pages/cart.jsx
/product/id => pages/product.jsx

*/

export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]); // state lifiting and transfer to siblling
  const [filters, setFilters] = useState([]);
  const [page, setPages] = useState(0);

  const handleSearch = (keyword) => {
    setPages(0);
    setSearch(keyword);
  };
  const handleAddToCart = (cart) => {
    setCart((prev) => [...prev, product]);
  };
  const handleProductsFetched = (prods) => {
    setProducts(prods);
    console.log(prods);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        search,
        cart,
        categories,
        filters,
        page,
        handleProductsFetched,
      }}
    >
      <BrowserRouter>
        <Header onSearch={handleSearch} HandleCartCount={handleAddToCart} />
        <Routes>
          {/** if we need to add props should not use component word bcz it ignores props */}
          <Route path="home" element={<Home />} />
          <Route path="cart" Component={Cart} />
          <Route path="product" element={<ProductDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );
}
