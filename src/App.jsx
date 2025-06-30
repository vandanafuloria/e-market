import { Route, Routes, BrowserRouter, useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { useState } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Product from "./components/Product";
import Header from "./ui/header";
import { ProductContext } from "./context/ProductContext";
import FrontPage from "./components/FrontPage";
import Type from "./components/ProductList";
import ProductList from "./components/ProductList";
import useLocalStorage from "./components/LocalStorage";

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
  const [website, setWebsite] = useState(false);
  const [liked, setLiked] = useState([]);

  // function handleLocalStorage(key, initialValue){

  // }

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedLiked = localStorage.getItem("like");

    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedLiked) setLiked(JSON.parse(savedLiked));
  }, []);

  function deleteItem(id) {
    const newCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(newCart));

    setCart(newCart);
  }

  const handleLikeItems = (newLike) => {
    const isInLiked = liked.some((item) => item.id == newLike.id);
    if (isInLiked) {
      const filtered = liked.filter((like) => like.id !== newLike.id);
      setLiked([...filtered]);
    }
    if (isInLiked == false) {
      const updated = [...liked, newLike];
      localStorage.setItem("like", JSON.stringify(updated));
      setLiked(updated);
      //  setLiked((prev) => [...prev, newLike]);
    } else return;
  };

  const handleSearch = (keyword) => {
    setPages(0);
    setSearch(keyword);
  };

  function handleWebsiteVisibility() {
    setWebsite(true);
  }
  const handleAddToCart = (product) => {
    const isInCart = cart.find((item) => item.id == product.id);
    if (!isInCart) {
      const newCart = [...cart, product];
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
    }
  };

  const handleProductsFetched = (prods) => {
    setProducts(prods);
  };

  const handleCategoryFilterAdded = (category, key) => {
    const exists = filters.some((filter) => filter.key === key);
    if (exists) return;

    const filtering = { name: category, key: key };
    setFilters([...filters, filtering]);
  };

  const handleCategoryFilterRemoved = (key) => {
    setFilters(filters.filter((cate) => cate.key !== key));
  };

  const handlePageChange = (page) => {
    setPages(page);
  };

  const handleSetCategories = (categories) => {
    setCategories([...categories]);
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
        liked,
        handleLikeItems,

        handleProductsFetched,
        handleCategoryFilterAdded,
        handleCategoryFilterRemoved,
        handlePageChange,
        handleSetCategories,
        handleAddToCart,
        handleSearch,
        deleteItem,
      }}
    >
      {!website && <FrontPage websiteHandle={handleWebsiteVisibility} />}
      {website && (
        <BrowserRouter>
          <Header />
          <Routes>
            {/** if we need to add props should not use component word bcz it ignores props */}
            <Route path="home" element={<Home />} />
            <Route path="cart" Component={Cart} />
            <Route path="product" element={<ProductDetail />} />
            <Route
              path="favourite"
              element={<ProductList products={liked} type="FAV" />}
            />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      )}
    </ProductContext.Provider>
  );
}
