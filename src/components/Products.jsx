import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
import Tag from "../ui/Tag";

export default function Products({
  search,
  setSearch,
  setCategories,
  categories,
  products,
  setProducts,
  tags,
  setTags,
}) {
  const [page, setPages] = useState(0);

  const searching = `https://dummyjson.com/products/search?q=${search}`;
  const normal = `https://dummyjson.com/products?limit=30&skip=${page * 30}`;

  const URL = search.trim() === "" ? normal : searching;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products); // use `res.products`, not full `res`
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, [page, search]);

  const tag = `https://dummyjson.com/products?limit=999`;
  useEffect(() => {
    fetch(tag)
      .then((res) => res.json())
      .then((res) => {
        const SettingCategories = new Set();
        res.products.forEach((product) => {
          SettingCategories.add(product.category);
        });
        setCategories(Array.from(SettingCategories));
      });
  }, []);

  return (
    <div className="products">
      <div className="tagsName">
        {tags.map((tag) => {
          return <Tag text={tag} tags={tags} setTags={setTags} />;
        })}
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
      <div
        style={{
          margin: "2rem",
        }}
      >
        <button
          onClick={() => {
            setPages(page - 1);
          }}
        >
          {" "}
          <i className="fa-solid fa-arrow-left-long"></i> Prev
        </button>
        <button
          onClick={() => {
            setPages(page + 1);
          }}
        >
          Next <i className="fa-solid fa-arrow-right-long"></i>{" "}
        </button>
      </div>
    </div>
  );
}
