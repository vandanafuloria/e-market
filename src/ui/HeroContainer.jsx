import cat4 from "../assets/cat4.jpg";

const fragrance =
  "https://m.media-amazon.com/images/I/71J7DUz0zKL._AC_UF350,350_QL80_.jpg";

const clothes =
  "https://s.yimg.com/ny/api/res/1.2/f0cmm.084W4YQj4.1YvtUQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk-/https://s.yimg.com/os/creatr-uploaded-images/2025-01/6b733140-d8e0-11ef-bf77-27a97016200b";

const makeup =
  "https://glam21.in/cdn/shop/articles/12f51da6cd36ef54da0bf039797a3a7d.jpg?v=1676290647&width=1100";
const dairy =
  "https://images.news18.com/ibnlive/uploads/2025/01/01366cbd-11ee-4091-bebd-4511b42f467b-2025-01-9da179e16aee6154ab1e16eac6d44671.jpg";
const laptops =
  "https://websiteguy.com.au/wp-content/uploads/2023/03/web-designers-central-coast.jpg";
const watchs =
  "https://www.citizenwatches.co.in/images/Detailimage1735640704.jpg";

export default function HeroContainer() {
  return (
    <div className="main-container">
      <div>
        <img src={fragrance} />
      </div>
      <div>
        <img src={clothes} />
      </div>
      <div>
        <img src={cat4} />
      </div>
      <div>
        <img src={watchs} />
      </div>
      <div>
        <img src={laptops} />
      </div>
      <div>
        <img src={makeup} />
      </div>
    </div>
  );
}
