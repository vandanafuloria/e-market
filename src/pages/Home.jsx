import { useEffect, useState } from "react";
import Header from "../ui/header";
import Products from "../components/Products";
import Categories from "../components/Categories";

import { BASE_URL } from "../constants";

import CartContext from "../context/CartContext";

import "../App.css";

function Home() {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState(""); // state lifiting and transfer to siblling
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [page, setPages] = useState(0);
  const [cart, setCart] = useState([]);

  /*



    Header : Searching (need in api call)
    Categories : Categories (api call)
    Products : (api call)

  */

  // const handleProductFetched(products) {

  // }
  const handleCategoryFilterAdded = (category) => {
    setFilters([...filters, category]);
  };

  const handleCategoryFilterRemoved = (category) => {
    setFilters(filters.filter((cate) => cate !== category));
  };

  const handleAddToCart = (product) => {
    console.log("adding to cart");
    setCart((prev) => [...prev, product]);
  };

  const handlePageChange = (page) => {
    setPages(page);
  };

  const handleSearch = (keyword) => {
    setPages(0);
    setSearch(keyword);
  };

  useEffect(() => {
    if (filters.length > 0) return;

    const url = `${BASE_URL}products/search?q=${search}&limit=10&skip=${
      page * 10
    }`;
    console.log("calling url " + url);

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products); // use `res.products`, not full `res`
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, [page, search, filters]);

  useEffect(() => {
    /*
      [fil1, fil2, fil3]

    */
    if (filters.length === 0) return;
    // [f1, f2, f3]
    Promise.all(
      filters.map((filter) =>
        fetch(`${BASE_URL}products/category/${filter}`)
          .then((res) => res.json())
          .then((res) => res.products)
      )
    ).then((res) => {
      const allProducts = [];
      res.forEach((prods) => allProducts.push(...prods));
      setProducts(allProducts);
    });

    // [Promise1, Promise2, Promise3]
    // Promise.all(r).then((res) => console.log(res));
  }, [filters]);

  useEffect(() => {
    fetch(`${BASE_URL}products/category-list`)
      .then((res) => res.json())
      .then((categories) => setCategories(categories));
  }, []);

  return (
    <CartContext
      value={{ cartCount: cart.length, handleAddToCart, cartDetails: cart }}
    >
      <Header search={search} onSearch={handleSearch} cartCount={cart.length} />
      <div className="main-container">
        <Categories
          categories={categories}
          onSelected={handleCategoryFilterAdded}
        />
        <Products
          products={products}
          filters={filters}
          onFilterRemoved={handleCategoryFilterRemoved}
          page={page}
          onPageChange={handlePageChange}
          onAddToCart={handleAddToCart}
        />
      </div>
    </CartContext>
  );
}

export default Home;
