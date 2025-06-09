import { useEffect } from "react";

export default function Categories({
  categories,
  setProducts,
  products,
  setTags,
  tags,
}) {
  function handleCategoryClick(type) {
    // this function working on category function
    fetch(`https://dummyjson.com/products?limit=999`)
      .then((res) => res.json())
      .then((res) => {
        const filtered = res.products.filter(
          (product) => product.category === type
        );
        setProducts(filtered); // ✅ update with filtered products
      });
  }

  return (
    <div className="tags">
      {categories.map((type) => {
        return (
          <div>
            <button
              onClick={() => {
                handleCategoryClick(type);
                setTags([...tags, type]);
              }}
            >
              {console.log(tags)} {type}
            </button>
          </div>
        );
      })}
    </div>
  );
}
