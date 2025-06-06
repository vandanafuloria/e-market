import bg1 from "../assets/bg1.png";
import cat3 from "../assets/cat3.jpg";
import cat4 from "../assets/cat4.jpg";
import cat5 from "../assets/cat5.jpg";

const clothes =
  "https://s.yimg.com/ny/api/res/1.2/f0cmm.084W4YQj4.1YvtUQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk-/https://s.yimg.com/os/creatr-uploaded-images/2025-01/6b733140-d8e0-11ef-bf77-27a97016200b";

const makeup =
  "https://glam21.in/cdn/shop/articles/12f51da6cd36ef54da0bf039797a3a7d.jpg?v=1676290647&width=1100";
const dairy =
  "https://images.news18.com/ibnlive/uploads/2025/01/01366cbd-11ee-4091-bebd-4511b42f467b-2025-01-9da179e16aee6154ab1e16eac6d44671.jpg";

export default function HeroContainer() {
  return (
    <div className="main-container">
      <div>
        <img src={bg1} />
      </div>
      <div>
        <img src={clothes} />
      </div>
      <div>
        <img src={cat4} />
      </div>
      <div>
        <img src={dairy} />
      </div>
      <div>
        <img src={cat5} />
      </div>
      <div>
        <img src={makeup} />
      </div>
    </div>
  );
}
