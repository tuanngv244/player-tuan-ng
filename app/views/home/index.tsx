//@ts-nocheck
import { Link } from "@remix-run/react";
import { useEffect } from "react";
import "~/styles/home.scss";
export default function Home() {
  return (
    <div className="container page">
      <div className="revealers">
        <div className="revealer r-1"></div>
        <div className="revealer r-2"></div>
      </div>
      <div className="images">
        <div className="img">
          <img src="/imgs/img-intro-5.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/imgs/img-intro-6.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/imgs/img-intro-7.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/imgs/img-intro-2.jpg" alt="" />
        </div>
        <div className="img main">
          <img src="/imgs/img-intro-1.jpg" alt="" />
        </div>
        <div className="img main">
          <img src="/imgs/img-intro-3.jpg" alt="" />
        </div>
        <div className="img main">
          <img src="/imgs/img-intro-4.jpg" alt="" />
        </div>
      </div>
      <div className="hero-content">
        <div className="cover-img">
          <img src="/imgs/img-studio.jpg" alt="" />
        </div>

        <div className="site-info">
          <div className="row">
            <div className="col">
              <div className="line">
                <p className="bold">Feature Works</p>
              </div>
            </div>
            <div className="col">
              <h2>
                Hi, I'm Cyan👋 A Software Engineer from Vietnam. <br />I always
                want to bring great experience to clients. I love this job,
                always to learn and build up skills. <br />I always try my best
                in every product with my co-workers. It's great to connect with
                someone who shares similar interests!
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <div className="address">
                <div className="line">
                  <p> Arc Studio</p>
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
                  <Link
                    to="mailto:tuanngv24.4@gmail.com"
                    className="hover-line"
                  >
                    tuanngv24.4@gmail.com
                  </Link>
                </div>
                <br />
                <div className="line">
                  <Link to="#" className="hover-line">
                    Instagram
                  </Link>
                </div>
                <div className="line">
                  <Link to="#" className="hover-line">
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
