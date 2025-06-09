import { use, useState } from "react";
import Header from "./ui/header";
import Products from "./components/Products";
import Categories from "./components/Categories";

import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState(""); // state lifiting and transfer to siblling

  console.log(categories);

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <div className="main-container">
        <Categories categories={categories} />
        <Products
          search={search}
          setSearch={setSearch}
          setCategories={setCategories}
          categories={categories}
        />
      </div>
    </>
  );
}

export default App;
