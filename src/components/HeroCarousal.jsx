import { useState, useEffect } from "react";

import img1 from "../assets/clothes.avif";
import img2 from "../assets/bag.jpg";

import img3 from "../assets/image.png";
import img4 from "../assets/kitchen.avif";
import img5 from "../assets/jwlry.jpeg";
import img6 from "../assets/shoes.webp";
import img7 from "../assets/sunglasses.jpg";
import img8 from "../assets/womandress.jpg";

export default function CoverflowCarousel() {
  const [current, setCurrent] = useState(2); // start with middle
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <div className="coverflow-container">
      {images.map((img, index) => {
        const offset = index - current;

        return (
          <img
            key={index}
            src={img}
            alt={`img-${index}`}
            className="coverflow-img"
            style={{
              transform: `translateX(${offset * 120}px) scale(${
                offset === 0 ? 1 : 0.7
              })`,
              zIndex: offset === 0 ? 10 : 5 - Math.abs(offset),
              opacity: Math.abs(offset) > 3 ? 0 : 0.6,
              pointerEvents: offset === 0 ? "auto" : "none",
            }}
            onClick={() => {
              setCurrent(index), console.log("hello");
            }}
          />
        );
      })}
    </div>
  );
}
