import { useNavigate, useLocation } from "react-router";
export default function ProductDetail() {
  const location = useLocation();
  const { product } = location.state;

  console.log(product);

  return (
    <>
      <div>
        <h1>Your Next Favorite Find Is Here</h1>
        <div className="product-section">
          <div className="product-img">
            <i className="fa-solid fa-heart"></i>
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
            <h3>Minimum Order Qualnity : {product.minimumOrderQuantity}</h3>
            <section className="delivery">
              <div>
                <div>
                  <span>Delivery</span>
                </div>
                <div>
                  <h5> {product.shippingInformation}</h5>
                </div>
              </div>
              <h3>
                <span> Return Policy</span> :{" "}
                <span>{product.returnPolicy}</span>
              </h3>

              <h3>
                {" "}
                <span>Warrentry : </span>{" "}
                <span>{product.warrantyInformation}</span>{" "}
              </h3>
              <h3>
                <span> Weight : </span>
                <span>{product.weight}gm</span>
              </h3>

              <div className="description">
                <span>Description : </span>

                <p>{product.description}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
