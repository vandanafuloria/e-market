import { useEffect, useContext, useState } from "react";
import sidebar from "../assets/sidebar.png";
import { ProductContext } from "../pages/ProductContext";

export default function Categories() {
  const { categories, handleCategoryFilterAdded } = useContext(ProductContext);

  return (
    <div className="tags">
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
