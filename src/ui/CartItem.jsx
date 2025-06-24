import { useState, useEffect } from "react";

export default function CartItem({ cart, freq, onUpdateFreq }) {
  const [count, setCount] = useState(1);

  const [bill, setBill] = useState(Math.ceil(count * cart.price));
  console.log(bill);

  // useEffect(() => {
  //   setBill(Math.ceil(count * cart.price)); // recalculate correctly
  // }, [count]);

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
          <span onClick={() => onUpdateFreq(cart.id, freq - 1)}>
            <i className="fa-solid fa-minus"></i>
          </span>{" "}
          <button style={{ fontSize: "0.6rem" }}>{freq}</button>{" "}
          <span onClick={() => onUpdateFreq(cart.id, freq + 1)}>
            <i className="fa-solid fa-plus"></i>
          </span>
        </div>
        <div>
          {" "}
          <span> ${cart.price}</span>
        </div>
        <div>
          {" "}
          <span>${Math.ceil(cart.price * freq)}</span>
        </div>
      </div>
    </div>
  );
}
