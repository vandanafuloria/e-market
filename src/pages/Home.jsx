import { useEffect, useState, useContext } from "react";
import Header from "../ui/header";
import Products from "../components/Products";
import Categories from "../components/Categories";
import FrontPage from "../components/FrontPage";
import spinner from "../assets/spinner.svg";

import { BASE_URL } from "../constants";

import CartContext from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

import "../App.css";

function Home() {
  const [isMounted, setIsMounted] = useState(false); // controls if sidebar exists
  const [isVisible, setIsVisible] = useState(false); // controls animation state
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleProductsFetched,
    cart,
    filters,
    search,
    page,
    handleSetCategories,
  } = useContext(ProductContext);

  function handleMouseOver() {
    console.log("function reached");
  }

  function handleCategoryVisibilty() {
    setIsMounted(true);
    setTimeout(() => {
      setIsVisible(true);
    }, 10);
  }

  function hideCategoryVisibility() {
    setIsVisible(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 400);
  }

  // Fetch products if no filters
  useEffect(() => {
    const t = setTimeout(() => {
      if (filters.length > 0) return;

      setIsLoading(true);

      const url = `${BASE_URL}products/search?q=${search}&limit=10&skip=${
        page * 10
      }`;

      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          handleProductsFetched(res.products);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching products:", err);
          setIsLoading(false);
        });
    }, 300);

    return () => clearInterval(t);
  }, [page, search, filters]);

  // Fetch filtered category products
  useEffect(() => {
    if (filters.length === 0) return;

    setIsLoading(true);

    Promise.all(
      filters.map((filter) =>
        fetch(`${BASE_URL}products/category/${filter.name}`)
          .then((res) => res.json())
          .then((res) => res.products)
      )
    )
      .then((res) => {
        const allProducts = [];
        res.forEach((prods) => allProducts.push(...prods));
        handleProductsFetched(allProducts);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error loading filtered products:", err);
        setIsLoading(false);
      });
  }, [filters]);

  // Fetch all category list
  useEffect(() => {
    fetch(`${BASE_URL}products/category-list`)
      .then((res) => res.json())
      .then((categories) => handleSetCategories(categories));
  }, []);

  return (
    <CartContext value={{ cartCount: cart.length, cartDetails: cart }}>
      <div className="main-container">
        {isLoading && (
          <div className="fullscreen-loader">
            <img src={spinner} alt="Loading..." className="loader-svg" />
          </div>
        )}
        {isMounted && (
          <Categories cat={isVisible} onClick={hideCategoryVisibility} />
        )}
        <Products
          cat={isVisible}
          onClick={handleCategoryVisibilty}
          onMouseOver={handleMouseOver}
        />
      </div>
    </CartContext>
  );
}

export default Home;
