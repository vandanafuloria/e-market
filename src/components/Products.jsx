import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";

export default function Products({ search, setSearch }) {
  const [products, setProducts] = useState([]);
  const [page, setPages] = useState(0);

  const searching = `https://dummyjson.com/products/search?q=${search}`;
  const normal = `https://dummyjson.com/products?limit=30&skip=${page * 30}`;

  const URL = search.trim() === "" ? normal : searching;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products); // use `res.products`, not full `res`
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, [page, search]);

  return (
    <div className="products">
      <h3>Our Featured Products</h3>
      <h1>Products</h1>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>

      <div className="products-container">
        {products.map((product) => {
          return (
            <Product
              img={product.images}
              title={product.title}
              brand={product.brand}
              desc={product.description}
              discount={product.discountPercentage}
              price={product.price}
              rating={product.rating}
              availability={product.availabilityStatus}
            />
          );
        })}
      </div>
      <div
        style={{
          margin: "2rem",
        }}
      >
        <button
          onClick={() => {
            setPages(page - 1);
          }}
        >
          {" "}
          <i className="fa-solid fa-arrow-left-long"></i> Prev
        </button>
        <button
          onClick={() => {
            setPages(page + 1);
          }}
        >
          Next <i className="fa-solid fa-arrow-right-long"></i>{" "}
        </button>
      </div>
    </div>
  );
}
