import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);

  console.log(products);
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
    </div>
  );
}
