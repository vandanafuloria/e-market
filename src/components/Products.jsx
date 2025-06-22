import { useContext, useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
import Tag from "../ui/Tag";
import CartContext from "../context/CartContext";
import { useNavigate } from "react-router";

export default function Products({
  products,
  filters,
  onFilterRemoved,
  page,
  onPageChange,
}) {
  const { handleAddToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleProductClicked = (product) => {
    navigate("/product", { state: { product } });
  };
  return (
    <div className="products">
      <div className="tagsName">
        {filters.map((tag) => (
          <Tag name={tag.name} onClick={() => onFilterRemoved(tag.key)} />
        ))}
      </div>
      <h3>Our Featured Products</h3>

      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>

      <div className="products-container">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              img={product.images}
              title={product.title}
              brand={product.brand}
              desc={product.description}
              discount={product.discountPercentage}
              price={product.price}
              rating={product.rating}
              availability={product.availabilityStatus}
              onAddToCart={() => handleAddToCart(product)}
              onProductClick={() => handleProductClicked(product)}
            />
          );
        })}
      </div>
      <div
        style={{
          margin: "2rem",
        }}
      >
        <button onClick={() => onPageChange(page - 1)}>
          <i className="fa-solid fa-arrow-left-long"></i> Prev
        </button>
        <button onClick={() => onPageChange(page + 1)}>
          Next <i className="fa-solid fa-arrow-right-long"></i>{" "}
        </button>
      </div>
    </div>
  );
}
