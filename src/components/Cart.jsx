import { useContext } from "react";
import CartContext from "../context/CartContext";

export default function Cart({ itemCount }) {
  const { cartCount } = useContext(CartContext);
  //   console.log("hello this is my context value: ", cartCount);
  return (
    <div className="cart-logo">
      {itemCount > 0 && <span className="counter">{cartCount}</span>}
      <span>
        <i className="fa-solid fa-cart-shopping"></i>
      </span>
    </div>
  );
}
