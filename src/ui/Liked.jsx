import { useContext } from "react";
import { useNavigate } from "react-router";
import { ProductContext } from "../context/ProductContext";

export default function Liked() {
  const { liked } = useContext(ProductContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="cart-logo" onClick={() => navigate("favourite")}>
        {liked.length > 0 && <span className="counter">{liked.length}</span>}
        <span className="emoji">❤️</span>
      </div>
    </>
  );
}
