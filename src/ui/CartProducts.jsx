import { useState } from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router";
export default function CartProducts({ cart }) {
  const navigate = useNavigate();

  const [total, setTotal] = useState([]);

  function handleTotalBill(bill) {}

  return (
    <div className="cart-container">
      <div className="cart-container-description">
        <div className="cart-heading">
          {" "}
          <h1>Shopping Cart</h1> <h1>{cart.length} Items</h1>
        </div>
        <div className="cart-container-options">
          {" "}
          <span>Product Details</span> <span>Quantity</span> <span>Price</span>{" "}
          <span>Total</span>
        </div>

        <div>
          {cart.map((c) => {
            return <CartItem cart={c} billing={handleTotalBill} />;
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
      <div className="total-value">
        <span>Summary</span>
        <h5>{cart.length} Items</h5>

        <div>
          {" "}
          <label htmlFor="ship">SHIPPING</label>
          <input
            type="text"
            id="ship"
            placeholder="Standard delivery cost $5.00"
          />
        </div>
        <div>
          {" "}
          <label htmlFor="code"> PROME CODE</label>
          <input type="text" id="code" placeholder="Enter Your Code" />
          <button> APPLY</button>
        </div>
        <hr />
        <div>
          {" "}
          <span>Total Cost</span> <span>$xxx</span>
        </div>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
}
