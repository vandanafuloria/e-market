import clothes from "../assets/clothes.avif";
import bag from "../assets/bag.jpg";
import jute from "../assets/jute.jpg";
import jwlry from "../assets/jwlry.jpeg";
import kitchen from "../assets/kitchen.avif";
import shoes from "../assets/shoes.webp";

import glasses from "../assets/sunglasses.jpg";
const dress =
  "https://t3.ftcdn.net/jpg/06/36/44/26/360_F_636442633_m2RP8H4ynqfdPtpLTXmnLQ9SSpV5ZQdB.jpg";

export default function FrontPage({ websiteHandle }) {
  return (
    <>
      <div className="front-main-container">
        <div className="front-overlay">
          <div className="content">
            <div className="content-left">
              <h1>
                <span>Shop The Vibe</span>
                <br />
                <span> Feel The Vibe</span>
              </h1>
              <button onClick={websiteHandle}>Shop Now</button>
            </div>
            <div className="content-right">
              <div className="collage">
                <div>
                  {" "}
                  <img src={dress} />
                </div>
                <div>
                  {" "}
                  <img src={clothes} />
                </div>
                <div>
                  {" "}
                  <img src={bag} />
                </div>
                <div>
                  {" "}
                  <img src={jute} />
                </div>
                <div>
                  {" "}
                  <img src={kitchen} />
                </div>
                <div>
                  {" "}
                  <img src={jwlry} />
                </div>
                <div>
                  {" "}
                  <img src={shoes} />
                </div>
                <div>
                  {" "}
                  <img src={glasses} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
