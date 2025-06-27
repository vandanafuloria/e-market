import { useContext, useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
import Tag from "../ui/Tag";
import CartContext from "../context/CartContext";
import { useNavigate } from "react-router";
import { ProductContext } from "../context/ProductContext";
import sidebar from "../assets/sidebar.png";
import CartProducts from "../ui/CartProducts";

export default function Products({ cat, onClick }) {
  const navigate = useNavigate();
  const {
    onPageChange,
    page,
    handleCategoryFilterRemoved,
    filters,
    products,
    cart,
  } = useContext(ProductContext);

  const handleProductClicked = (product) => {
    navigate("/product", { state: { product } });
  };

  return (
    <div className="products">
      <div className="tagsName">
        {filters.map((tag) => (
          <Tag
            name={tag.name}
            onClick={() => handleCategoryFilterRemoved(tag.key)}
          />
        ))}
      </div>
      <img
        style={{ display: cat ? "none" : "flex" }}
        src={sidebar}
        onClick={onClick}
      />
      <h3>Our Featured Products</h3>

      <div className="products-container">
        {products.map((product) => {
          return (
            <Product
              product={product}
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
