import { useEffect, useState, useContext } from "react";
import Header from "../ui/header";
import Products from "../components/Products";
import Categories from "../components/Categories";

import { BASE_URL } from "../constants";

import CartContext from "../context/CartContext";
import { ProductContext } from "./ProductContext";

import "../App.css";

function Home() {
  const [visibleCat, setVisibleCat] = useState(false);
  const {
    handleProductsFetched,
    cart,
    filters,
    search,
    page,

    handleSetCategories,
  } = useContext(ProductContext);

  function handleCategoryVisibilty() {
    setVisibleCat(true);
  }
  function hideCategoryVisibility() {
    setVisibleCat(false);
  }

  useEffect(() => {
    if (filters.length > 0) return;

    const url = `${BASE_URL}products/search?q=${search}&limit=10&skip=${
      page * 10
    }`;
    console.log("calling url " + url);

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        handleProductsFetched(res.products); // use `res.products`, not full `res`
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
        fetch(`${BASE_URL}products/category/${filter.name}`)
          .then((res) => res.json())
          .then((res) => res.products)
      )
    ).then((res) => {
      const allProducts = [];
      res.forEach((prods) => allProducts.push(...prods));
      handleProductsFetched(allProducts);
    });

    // [Promise1, Promise2, Promise3]
    // Promise.all(r).then((res) => console.log(res));
  }, [filters]);

  useEffect(() => {
    fetch(`${BASE_URL}products/category-list`)
      .then((res) => res.json())
      .then((categories) => handleSetCategories(categories));
  }, []);

  return (
    <CartContext value={{ cartCount: cart.length, cartDetails: cart }}>
      <div className="main-container">
        <Categories cat={visibleCat} onClick={hideCategoryVisibility} />
        <Products cat={visibleCat} onClick={handleCategoryVisibilty} />
      </div>
      //{" "}
    </CartContext>
  );
}

export default Home;
