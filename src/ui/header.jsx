export default function Header({ search, setSearch }) {
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
        <h1>VegeFoods</h1>
        <div className="search-bar">
          <input
            type="search"
            placeholder="Its a click away! "
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </header>
    </div>
  );
}
