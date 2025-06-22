import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import Rating from "../ui/Rating";
export default function ProductDetail() {
  const location = useLocation();
  const { product } = location.state;

  const [liked, setLiked] = useState(false);

  console.log(product);

  return (
    <>
      <div className="details">
        <div className="product-section">
          <div className="product-img">
            <i
              className="fa-solid fa-heart"
              style={{ color: liked ? "red" : "gray" }}
              onClick={() => setLiked(!liked)}
            ></i>
            <img src={product.images[0]} />
            <div className="cart">
              <div>
                <span>
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span>ADD TO CART</span>
              </div>
              <div>
                <span>
                  <i className="fa-solid fa-bolt"></i>
                </span>
                <span>BUY NOW</span>
              </div>
            </div>
          </div>
          <div className="product-detail">
            <h1>{product.title}</h1>
            <div className="detail-rating">
              <span>
                {product.rating} <i className="fa-solid fa-star"></i>
              </span>{" "}
              <span>Reviews: {product.reviews.length}</span>
            </div>
            <h3 style={{ margin: "1rem 0" }}>
              Minimum Order Qualnity : {product.minimumOrderQuantity} Units
            </h3>
            <section className="delivery">
              <div>
                <h3>
                  {" "}
                  <span>Delivery: </span>{" "}
                  <span>{product.shippingInformation}</span>
                </h3>
              </div>
              <h3>
                <span> Return Policy</span> :{" "}
                <span>{product.returnPolicy}</span>
              </h3>

              <h3>
                {" "}
                <span>Warrentry: </span>{" "}
                <span>{product.warrantyInformation}</span>{" "}
              </h3>
              <h3>
                <span> Weight : </span> <span> {product.weight} gm</span>
              </h3>

              <div className="description">
                <span>Description: </span>

                <p>{product.description}</p>
              </div>

              <div>
                {" "}
                <h3>Reviews: </h3>
                {product.reviews.map((rev) => {
                  console.log(rev.comment);
                  return (
                    <div className="reviews-details">
                      <span>By: {rev.reviewerName}</span>
                      <p>On: {rev.date.split("T")[0]}</p>{" "}
                      <span>{rev.comment}</span>
                      <label>
                        <span style={{ display: "flex" }}>
                          {" "}
                          Rating :
                          <Rating rating={rev.rating} />{" "}
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
