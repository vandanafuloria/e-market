import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
export default function Liked() {
  const { liked } = useContext(ProductContext);
  return (
    <>
      <div className="cart-logo">
        {liked.length > 0 && <span className="counter">{liked.length}</span>}
        <span className="emoji">❤️</span>
      </div>
    </>
  );
}
