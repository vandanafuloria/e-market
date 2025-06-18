import logo from "../assets/logo.png";
import Cart from "../components/Cart";
export default function Header({ search, onSearch, cartCount }) {
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
        <img src={logo} />

        <div className="search-bar">
          <input
            type="search"
            placeholder="Its a click away! "
            value={search}
            onChange={(e) => {
              onSearch(e.target.value);
            }}
          />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <Cart itemCount={cartCount} />
      </header>
    </div>
  );
}
