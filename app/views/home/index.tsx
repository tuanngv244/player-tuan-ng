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

    scaleTl.to(".img:first-child", {
      scale: 1,
      duration: 2,
      ease: "power4.inOut",
    });

    const images = document.querySelectorAll(".img:not(:first-child)");
    images.forEach((img, index) => {
      scaleTl.to(
        img,
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.inOut",
        },
        ">-0.5"
      );
    });

    mainTl
      .add(revealerTl)
      .add(scaleTl, "-=1.25")
      .add(() => {
        document.querySelectorAll(".img:not(.main)").forEach((img) => {
          img.remove();
        });

        const state = Flip.getState(".main");

        const imagesContainer = document.querySelector(".images");
        imagesContainer.classList.add("stacked-container");

        document.querySelectorAll(".main").forEach((img, i) => {
          img.classList.add("stacked");
          img.style.order = i;
          gsap.set(".img.stacked", {
            clearProps: "transform, top, left",
          });
        });

        return Flip.from(state, {
          duration: 2,
          ease: "hop",
          absolute: true,
          stagger: {
            amout: -0.3,
          },
        });
      })
      .to(".word h1, .nav-item p, .line p, .site-info h2 .line span", {
        y: 0,
        duration: 3,
        ease: "hop2",
        stagger: 0.1,
        delay: 1.25,
      })
      .to(".cover-img", {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 2,
        ease: "hop",
        delay: -4.75,
      });
    // .to(".cover-img img", {
    //   duration: 3,
    //   filter: "brightness(1)",
    //   delay: -6,
    // });

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
        <div className="site-logo">
          <div className="word">
            <h1>Tuan</h1>
          </div>
          <div className="word">
            <h1>
              Ng.<sup>&copy;</sup>{" "}
            </h1>
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
                  <p>tuanngv24.4@gmail.com</p>
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
    </div>
  );
}
