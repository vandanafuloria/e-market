export default function Product({
  img,
  title,
  brand,
  desc,
  discount,
  price,
  rating,
  availability,
}) {
  console.log(rating, title, img);
  return (
    <div className="product">
      <div className="discount">
        {" "}
        <span>{discount}%</span>
        <p>{availability}</p>
        <i className="fa-solid fa-plus"></i>
      </div>{" "}
      <div className="img">
        <img src={img[0]} />
      </div>
      <h6>{title}</h6>
      <span>{brand}</span>
      <h3> ${price}</h3>
      {/* <p>
        Read more <i className="fa-solid fa-arrow-right"></i>
      </p> */}
    </div>
  );
}
