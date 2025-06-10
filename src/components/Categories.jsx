import { useEffect } from "react";

export default function Categories({ categories, onSelected }) {
  return (
    <div className="tags">
      {categories.map((category) => {
        return (
          <div>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => onSelected(category)}
            >
              {category}
            </button>
          </div>
        );
      })}
    </div>
  );
}
