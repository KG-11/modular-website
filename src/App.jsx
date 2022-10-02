import Header from "./components/header";

import bgVideo from "./assets/videos/home.mp4";
import fullImage from "./assets/images/360-preview.webp";

import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <video className="bg-video" src={bgVideo} autoPlay muted loop></video>
      <main>
        <section className="landing">
          <h2 className="title">Lorem ipsum dolor sit amet.</h2>
          <h3 className="title">Lorem ipsum dolor sit amet.</h3>
        </section>
        <section className="categories">
          <div className="category">
            <p className="desc-number">No.1</p>
            <p className="desc-title">Lorem, ipsum dolor.</p>
            <p className="desc">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="category">
            <p className="desc-number">No.2</p>
            <p className="desc-title">Lorem, ipsum dolor.</p>
            <p className="desc">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="category">
            <p className="desc-number">No.3</p>
            <p className="desc-title">Lorem, ipsum dolor.</p>
            <p className="desc">Lorem ipsum dolor sit amet.</p>
          </div>
        </section>
        <section className="category-one">
          <div className="category-heading-row">
            <p>No.1</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className="category-qa">
            <p className="q">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, fugit
              ?
            </p>
            <p className="a">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              corrupti voluptatem ad ipsum. Dolore facere nemo accusamus, earum
              laboriosam ipsa. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Natus corrupti voluptatem ad ipsum. Dolore
              facere nemo accusamus, earum laboriosam ipsa. laboriosam ipsa.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              corrupti voluptatem ad ipsum. Dolore facere nemo accusamus, earum
              laboriosam ipsa. laboriosam ipsa. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Natus corrupti voluptatem ad ipsum.
              Dolore facere nemo accusamus, earum laboriosam ipsa.
            </p>
          </div>
          <div className="category-description">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              corrupti voluptatem ad ipsum. Dolore facere nemo accusamus, earum
              laboriosam ipsa. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Natus corrupti voluptatem ad ipsum. Dolore
              facere nemo accusamus, earum laboriosam ipsa. laboriosam ipsa.
              Lorem ipsum dolor sit.
            </p>
            <p>
              sLorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              corrupti voluptatem ad ipsum. Dolore facere nemo accusamus, earum
              laboriosam ipsa. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Natus corrupti voluptatem ad ipsum. Dolore
              facere nemo accusamus, earum laboriosam ipsa. laboriosam ipsa.
              Lorem ipsum dolor sit.
            </p>
          </div>
          <div className="category-options">
            <p className="heading">Lorem, ipsum dolor.</p>
            <a href="" className="link">
              Lorem ipsum dolor sit.
            </a>
            <a href="" className="link">
              Lorem ipsum dolor sit.
            </a>
            <a href="" className="link">
              Lorem ipsum dolor sit.
            </a>
          </div>
        </section>
        <section className="preview">
          <img src={fullImage} alt="360 preview" />
          <button className="btn-white rounded">Take a look around</button>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
