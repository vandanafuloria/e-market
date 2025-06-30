import { useState } from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router";
import Total from "../components/Total";
import Type from "../components/ProductList";
import ProductList from "../components/ProductList";

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
      <ProductList
        freq={freq}
        products={cart}
        onUpdateFreq={handleUpdateFreq}
        onClick={handleCartProductClicked}
        type={"CART"}
      />
      <Total freq={freq} cart={cart} />
    </div>
  );
}
