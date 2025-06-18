import { Route, Routes, BrowserRouter } from "react-router";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

/*
/home => pages/Home.jsx
/cart => pages/cart.jsx
/product/id => pages/product.jsx

*/
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" Component={Home} />
        <Route path="cart" Component={Cart} />
        <Route path="*" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}
