import Rating from "../ui/Rating";

import { useNavigate } from "react-router";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { use } from "react";

export default function Product({
  id,
  img,
  title,
  brand,

  discount,
  price,
  rating,
  availability,

  onProductClick,
  product,
}) {
  const { handleAddToCart } = useContext(ProductContext);
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
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(product);
          }}
        >
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
