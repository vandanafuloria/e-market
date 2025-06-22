import { useEffect, useContext } from "react";
import { ProductContext } from "../pages/ProductContext";

export default function Categories() {
  const { categories, handleCategoryFilterAdded } = useContext(ProductContext);
  console.log(...categories);

  return (
    <div className="tags">
      {categories.map((category, index) => {
        return (
          <div key={index}>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => handleCategoryFilterAdded(category, index)}
            >
              {category}
            </button>
          </div>
        );
      })}
    </div>
  );
}
