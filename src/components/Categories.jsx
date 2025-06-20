import { useEffect } from "react";

export default function Categories({ categories, onSelected }) {
  return (
    <div className="tags">
      {categories.map((category, index) => {
        return (
          <div key={index}>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => onSelected(category, index)}
            >
              {category}
            </button>
          </div>
        );
      })}
    </div>
  );
}
