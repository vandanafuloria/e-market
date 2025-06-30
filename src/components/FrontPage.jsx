export default function FrontPage({ websiteHandle }) {
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
