import { useLocation, useNavigate } from "react-router";

export default function Cart() {
  const navigate = useNavigate();
  const location = useLocation();
  const cart = location.state.cart;
  console.log(cart);
  return (
    <div>
      <h1>This is Cart Page</h1>
      <button onClick={() => navigate("/home")}>Go Back to Home</button>
      {cart.map((c) => c.title)}
    </div>
  );
}
