import CartItem from "../ui/CartItem";
import { useNavigate } from "react-router";

export default function Type({ cart, freq, onClick, onUpdateFreq, type }) {
  console.log(cart, "ths is jfkjsdkfljsklj");
  const navigate = useNavigate();
  return (
    <>
      <div className="cart-container-description">
        <div className="cart-heading">
          {" "}
          <h1>{type}</h1> <h1>{cart.length} Items</h1>
        </div>
        <div className="cart-container-options">
          {" "}
          <span>Product Details</span> <span>Quantity</span> <span>Price</span>{" "}
          <span>Total</span>
        </div>

        <div>
          {cart.map((c) => {
            return (
              <CartItem
                cart={c}
                freq={freq[c.id]}
                onUpdateFreq={onUpdateFreq}
                onClick={() => onClick(c)}
              />
            );
          })}
          <div
            className="shopping-continue"
            style={{ color: "#FC4A1A", fontWeight: 500, fontSize: "1.2rem" }}
            onClick={() => navigate("/home/")}
          >
            {" "}
            <span>
              <i className="fa-solid fa-arrow-left-long"></i>
            </span>{" "}
            <span>Continue Shopping</span>
          </div>
        </div>
      </div>
    </>
  );
}
