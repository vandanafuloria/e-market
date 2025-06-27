import img1 from "../assets/clothes.avif";
import img2 from "../assets/bag.jpg";

import img3 from "../assets/image.png";
import img4 from "../assets/kitchen.avif";
import img5 from "../assets/jwlry.jpeg";
import img6 from "../assets/shoes.webp";
import img7 from "../assets/sunglasses.jpg";
import img8 from "../assets/womandress.jpg";

export default function FrontPage({ websiteHandle }) {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <>
      <div className="front-main-container">
        <div className="front-overlay">
          <div className="content">
            <div className="content-left">
              <h1 class="main-title">Shop The Vibe</h1>
              <h2 class="subtitle">Feel The Experience</h2>
              <div className="btn">
                {" "}
                <button className="cta-button" onClick={websiteHandle}>
                  Explore Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
