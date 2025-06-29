import { useState, useEffect } from "react";

export default function CartItem({ cart, freq, onUpdateFreq, onClick }) {
  return (
    <div className="single-cart" onClick={onClick}>
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
