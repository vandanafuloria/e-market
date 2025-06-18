import { useContext } from "react";
import CartContext from "../context/CartContext";
import { useNavigate } from "react-router";

export default function CartLogo({ itemCount }) {
  const { cartCount, cartDetails } = useContext(CartContext);
  // console.log({ cartDetails });
  const navigate = useNavigate();

  //   console.log("hello this is my context value: ", cartCount);

  const goToCart = () => {
    navigate("/cart", { state: { cart: cartDetails } });
  };

  return (
    <div className="cart-logo" style={{ cursor: "pointer" }} onClick={goToCart}>
      {itemCount > 0 && <span className="counter">{cartCount}</span>}
      <span>
        <i className="fa-solid fa-cart-shopping"></i>
      </span>
    </div>
  );
}
