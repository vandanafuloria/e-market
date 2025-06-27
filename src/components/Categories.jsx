import { useEffect, useContext, useState } from "react";
import sidebar from "../assets/sidebar.png";
import { ProductContext } from "../context/ProductContext";

export default function Categories({ cat, onClick }) {
  const { categories, handleCategoryFilterAdded } = useContext(ProductContext);

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  return (
    <div className={`tags ${cat ? "show" : ""}`}>
      <div className={"sidebar-header"}>
        <div className="side">
          <span
            style={{ color: "white", fontSize: "1.5rem", fontWeight: "700" }}
          >
            CATEGORY
          </span>
          <img
            style={{ width: "35px", display: "flex" }}
            src={sidebar}
            onClick={onClick}
          />
        </div>

        <p style={{ color: "white" }}>Explore Our collections</p>
      </div>{" "}
      {categories.map((category, index) => {
        return (
          <div
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => handleCategoryFilterAdded(category, index)}
          >
            <span> {toTitleCase(category)}</span>
          </div>
        );
      })}
    </div>
  );
}
