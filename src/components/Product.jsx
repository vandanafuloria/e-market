import Rating from "../ui/Rating";

import { useNavigate } from "react-router";

export default function Product({
  id,
  img,
  title,
  brand,
  desc,
  discount,
  price,
  rating,
  availability,
  onAddToCart,
  onProductClick,
}) {
  const navigate = useNavigate();
  function goToProduct(id) {
    navigate("/ProductDetail/", { state: { id: id } });
  }
  console.log({ id });
  return (
    <div
      className="product"
      onClick={() => {
        onProductClick();
        // goToProduct(id);
      }}
    >
      <div className="discount">
        <span>{discount}%</span>
        <p>{availability}</p>
        <button onClick={onAddToCart}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="img">
        <img src={img[0]} />
      </div>
      <h6>{title}</h6>
      <span>{brand}</span>
      <h3> ${price}</h3>
      <div>
        <Rating rating={rating} />
      </div>
    </div>
  );
}
