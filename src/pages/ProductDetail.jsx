import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router";
import Rating from "../ui/Rating";
import { ProductContext } from "../context/ProductContext";
export default function ProductDetail() {
  const location = useLocation();
  const { product } = location.state;

  const { cart, handleAddToCart } = useContext(ProductContext);

  return (
    <>
      <div className="details">
        <div className="product-section">
          <div className="product-img">
            <img src={product.images[0]} />
            <h3>🚀 {product.brand}</h3>
            <div className="cart">
              <div
                onClick={() => {
                  handleAddToCart(product);
                }}
              >
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
              <span>{product.rating} ⭐️ </span>{" "}
              <span>Reviews: {product.reviews.length}</span>
            </div>
            <section className="delivery">
              <h3>
                <span> Minimum Order Qualnity : </span>
                <span> {product.minimumOrderQuantity} Units</span>
              </h3>

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
            </section>

            <div className="description">
              <span> ✨ Description: </span>

              <p>{product.description}</p>
            </div>

            <div className="reviews">
              {" "}
              <h3>📝 Customer Reviews: </h3>
              {product.reviews.map((rev) => {
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
          </div>
        </div>
      </div>
    </>
  );
}
