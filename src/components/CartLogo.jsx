import { useContext } from "react";
import CartContext from "../context/CartContext";

import { useNavigate } from "react-router";
import { ProductContext } from "../context/ProductContext";

export default function CartLogo() {
  const { cart } = useContext(ProductContext);

  const navigate = useNavigate();
  //   console.log("hello this is my context value: ", cartCount);

  const goToCart = () => {
    navigate("/cart", { state: { cart } });
  };
  const cartCount = cart.length;
  return (
    <div
      className="cart-logo"
      style={{ cursor: "pointer" }}
      onClick={goToCart}
      onMouseOver={() => console.log("mosuseing")}
    >
      {cartCount > 0 && <span className="counter">{cartCount}</span>}
      <span>
        <i className="fa-solid fa-cart-shopping"></i>
      </span>
    </div>
  );
}
