export default function Rating({ rating }) {
  const lastRate = (rating % 1) * 10;
  const rate = Math.trunc(rating);

  const star = [<i class="fa-solid fa-star"></i>];

  const stars = Array(rate).fill(star);
  if (lastRate >= 5) stars.push(<i class="fa-solid fa-star-half-stroke"></i>);

  return (
    <>
      {stars.map((star) => {
        return <span style={{ color: "orange" }}>{star}</span>;
      })}
    </>
  );
}
