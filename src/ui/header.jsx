import Cart from "../components/CartLogo";
import { useContext } from "react";

import { ProductContext } from "../pages/ProductContext";
import CartLogo from "../components/CartLogo";
export default function Header() {
  const { search, handleSearch } = useContext(ProductContext);
  return (
    <div className="main-header">
      <div className="header-top">
        <div>
          <i className="fa-solid fa-phone"></i>
          <span>+ 1235 2355 98</span>
        </div>
        <div>
          <i className="fa-brands fa-telegram"></i>
          <span>youremail@email.com</span>
        </div>
        <div>
          <i className="fa-solid fa-truck"></i>
          <span>3-5 Business days delivery & Free Returns</span>
        </div>
      </div>
      <header>
        <span>
          {" "}
          <i className="fa-brands fa-shopify"></i>
        </span>

        <div className="search-bar">
          <input
            type="search"
            placeholder="Its a click away! "
            value={search}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <CartLogo />
      </header>
    </div>
  );
}
