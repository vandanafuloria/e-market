import { useEffect, useContext, useState } from "react";
import sidebar from "../assets/sidebar.png";
import { ProductContext } from "../context/ProductContext";

export default function Categories({ cat, onClick }) {
  const { categories, handleCategoryFilterAdded } = useContext(ProductContext);
  console.log({ cat });
  return (
    <div
      className={`tags ${cat ? "show" : ""}`}
      // style={{ display: cat ? "flex" : "none" }}
    >
      <div className={`tag-sidebar`}>
        {" "}
        <span>All CATEGORY</span>{" "}
        <img
          style={{ width: "40px", display: "flex" }}
          src={sidebar}
          onClick={onClick}
        />
      </div>
      {categories.map((category, index) => {
        return (
          <div key={index}>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => handleCategoryFilterAdded(category, index)}
            >
              {category.toUpperCase()}
            </button>
          </div>
        );
      })}
    </div>
  );
}
