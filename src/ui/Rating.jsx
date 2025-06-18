export default function Rating({ rating }) {
  const lastRate = (rating % 1) * 10;
  const rate = Math.trunc(rating);

  // const star = [<i class="fa-solid fa-star"></i>];

  // const stars = Array(rate).fill(star);
  // if (lastRate >= 5) stars.push(<i class="fa-solid fa-star-half-stroke"></i>);

  return (
    <>
      {Array(rate)
        .fill(null)
        .map((_, index) => {
          return (
            <span key={index} style={{ color: "orange" }}>
              <i class="fa-solid fa-star"></i>
            </span>
          );
        })}
      {lastRate > 5 && (
        <span style={{ color: "orange" }}>
          <i class="fa-solid fa-star-half-stroke"></i>
        </span>
      )}
    </>
  );
}
