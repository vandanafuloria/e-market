import { useState } from "react";
import Header from "./ui/header";
import Products from "./components/Products";

import "./App.css";
import HeroContainer from "./ui/HeroContainer";

function App() {
  return (
    <>
      <Header />
      <HeroContainer />
      <Products />
    </>
  );
}

export default App;
