import { useState } from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router";
import Total from "../components/Total";
import Type from "../components/Type";

export default function CartProducts({ cart }) {
  const navigate = useNavigate();

  const [freq, setFreq] = useState(() => {
    const f = {};
    cart.forEach((item) => (f[item.id] = 1));
    return f;
  });

  const handleUpdateFreq = (id, f) => {
    if (f < 0) return;
    setFreq({ ...freq, [id]: f });
  };

  function handleCartProductClicked(product) {
    navigate("/product", { state: { product } });
  }

  return (
    <div className="cart-container">
      <Type
        freq={freq}
        cart={cart}
        onUpdateFreq={handleUpdateFreq}
        onClick={handleCartProductClicked}
        type={"Shopping Cart"}
      />
      <Total freq={freq} cart={cart} />
    </div>
  );
}
