//@ts-nocheck
import { useEffect } from "react";
import "~/styles/home.scss";
export default function Home() {
  useEffect(() => {
    // document.addEventListener("DOMContentLoaded", () => {
    console.log("hello", document.querySelector(".container"));
    CustomEase.create(
      "hop",
      "M0, 0 C0.355,0.22 0.448,0.079 0.5,0.5 0.542,0.846 0.615,1 1,1"
    );
    CustomEase.create(
      "hop2",
      "M0,0 C0.078,0.617 0.114,0.716 0.255,0.828 0.373,0.922 0.561,1 1,1"
    );

    const splitH2 = new SplitType(".site-info h2", { types: "lines" });

    splitH2.lines.forEach((line) => {
      const text = line.textContent;
      const wrapper = document.createElement("div");
      wrapper.className = "line";
      const span = document.createElement("span");
      span.textContent = text;
      wrapper.appendChild(span);
      line.parentNode.replaceChild(wrapper, line);
    });

    const mainTl = gsap.timeline();
    const revealerTl = gsap.timeline();
    const scaleTl = gsap.timeline();

    revealerTl
      .to(".r-1", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1.5,
        ease: "hop",
      })
      .to(
        ".r-2",
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)",
          duration: 1.5,
          ease: "hop",
        },
        "<"
      );
    // });
  }, []);
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
