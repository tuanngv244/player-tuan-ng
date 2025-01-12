import "~/styles/home.scss";
export default function Home() {
  return (
    <div className="container">
      <div className="revealers">
        <div className="revealer r-1"></div>
        <div className="revealer r-2"></div>
      </div>
      <div className="images">
        <div className="img">
          <img src="/imgs/img-studio-2.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/imgs/img-trvl-1.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/imgs/img-trvl-2.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/imgs/img-trvl-3.jpg" alt="" />
        </div>
        <div className="img main">
          <img src="/imgs/img-studio.jpg" alt="" />
        </div>
        <div className="img main">
          <img src="/imgs/img-trvl-4.jpg" alt="" />
        </div>
        <div className="img main">
          <img src="/imgs/img-trvl-5.jpg" alt="" />
        </div>
      </div>
      <div className="hero-content">
        <div className="site-logo">
          <div className="word">
            <h1>Tuan</h1>
          </div>
          <div className="word">
            <h1>Ng.</h1>
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="nav-item">
          <p>About</p>
        </div>
        <div className="nav-item">
          <p>Work</p>
        </div>
        <div className="nav-item">
          <p>Journal</p>
        </div>
        <div className="nav-item">
          <p>Contact</p>
        </div>
      </div>
      <div className="cover-img">
        <img src="/imgs/img-studio.jpg" alt="" />
      </div>
      <div className="site-logo">
        <div className="row">
          <div className="col">
            <div className="line">
              <p>Feature Works</p>
            </div>
          </div>
          <div className="col">
            <h2>
              Hi, I'm Cyan👋 A Software Engineer from Vietnam. <br />I always
              want to bring great experience to clients. I love this job, always
              to learn and build up skills. <br />I always try my best in every
              product with my co-workers. It's great to connect with someone who
              shares similar interests!
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="address">
              <div className="line">
                <p>Arc Studio</p>
              </div>
              <div className="line">
                <p>Riverstone</p>
              </div>
              <div className="line">
                <p>- 28 Orchard Lane</p>
              </div>
              <div className="line">
                <p>N1 4DX</p>
              </div>
            </div>
            <div className="socials">
              <div className="line">
                <p>SayHi@Arc.com</p>
              </div>
              <br />
              <div className="line">
                <p>Instagram</p>
              </div>
              <div className="line">
                <p>LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
