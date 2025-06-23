import { useState } from "react";

export default function CartItem({ cart }) {
  const [count, setCount] = useState(1);

  function handleIncreaseCount() {
    setCount((prev) => prev + 1);
  }
  function handleDecreaseCount() {
    setCount((prev) => prev - 1);
  }
  return (
    <div className="single-cart">
      <div className="cart-value">
        {" "}
        <div>
          <img src={cart.images[0]} />
        </div>{" "}
        <div>
          {" "}
          <span onClick={handleDecreaseCount}>
            <i className="fa-solid fa-minus"></i>
          </span>{" "}
          <button style={{ fontSize: "0.6rem" }}>{count}</button>{" "}
          <span onClick={handleIncreaseCount}>
            <i className="fa-solid fa-plus"></i>
          </span>
        </div>
        <div>
          {" "}
          <span> ${cart.price}</span>
        </div>
        <div>
          {" "}
          <span>${Math.trunc(count * cart.price)}</span>
        </div>
      </div>
    </div>
  );
}
