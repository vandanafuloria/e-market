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
        <span className="discount-badge">{discount}%</span>
        <span className="stock-badge">{availability}</span>
      </div>
      <div className="img">
        <img src={img[0]} />
      </div>
      <h6>{title}</h6>
      <span>{brand}</span>
      <div className="rating-div">
        <Rating rating={rating} />
      </div>
      <h3> ${price}</h3>

      <div className="buttons">
        {" "}
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(product);
          }}
        >
          ADD TO CART
        </button>
        <button className="btn btn-secondry">♡ SAVE</button>
      </div>
    </div>
  );
}
