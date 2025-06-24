import { useState, useEffect } from "react";

export default function CartItem({ cart, billing }) {
  const [count, setCount] = useState(1);

  const [bill, setBill] = useState(Math.ceil(count * cart.price));
  console.log(bill);

  useEffect(() => {
    setBill(Math.ceil(count * cart.price)); // recalculate correctly
  }, [count]);

  useEffect(() => {
    billing(bill);
  }, [bill]);

  function handleIncreaseCount() {
    setCount((prev) => prev + 1);
  }

  function handleDecreaseCount() {
    setCount((prev) => Math.max(prev - 1, 1)); // last one is the decrease count should not go below 1;
  }

  return (
    <div className="single-cart">
      <div className="cart-value">
        {" "}
        <div>
          <img src={cart.images[0]} />
        </div>{" "}
        <div style={{ display: "flex", gap: 10 }}>
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
          <span>${bill}</span>
        </div>
      </div>
    </div>
  );
}
