import { useLocation, useNavigate } from "react-router";
import CartProducts from "../ui/CartProducts";

export default function Cart() {
  const navigate = useNavigate();
  const location = useLocation();
  const cart = location.state.cart;

  return (
    <div>
      <CartProducts cart={cart} />
    </div>
  );
}
