import { useState } from "react";
import Header from "./ui/header";
import Products from "./components/Products";

import "./App.css";
import HeroContainer from "./ui/HeroContainer";

function App() {
  const [search, setSearch] = useState(""); // state lifiting and transfer to siblling
  console.log(search);
  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <HeroContainer />
      <Products search={search} setSearch={setSearch} />
    </>
  );
}

export default App;
