import CartItem from "../ui/CartItem";
import { useNavigate } from "react-router";

export default function ProductList({
  products,
  freq = {},
  onClick,
  onUpdateFreq,
  type,
}) {
  const navigate = useNavigate();
  const label = type === "CART" ? "Shopping Cart 🛒" : "Favourite Items ❤️";
  return (
    <>
      <div className="cart-container-description">
        <div className="cart-heading">
          <h1>{label}</h1> <h1>{products.length} Items</h1>
        </div>
        <div className="cart-container-options">
          <span>Product Details</span>
          {type === "CART" && <span>Quantity</span>}
          <span>Price</span>
          <span>Total</span>
        </div>

        <div>
          {products.map((c) => {
            return (
              <CartItem
                cart={c}
                freq={freq[c.id]}
                onUpdateFreq={onUpdateFreq}
                onClick={() => onClick(c)}
                isQuantityVisible={type == "CART"}
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
