//@ts-nocheck
import { Link, useLocation } from "@remix-run/react";
import { useEffect } from "react";
import { PATHNAMES } from "~/configs/pathnames";
import "~/styles/header.scss";

export default function Header() {
  const location = useLocation();

  const _onSwitchPage = () => {};

  useEffect(() => {
    if (location.pathname !== PATHNAMES.About) return;
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

        document.querySelector(".revealers")?.remove();

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
      .to(
        ".word h1, .nav-item a, .line a,  .line p,  .site-info h2 .line span",
        {
          y: 0,
          duration: 3,
          ease: "hop2",
          stagger: 0.1,
          delay: 1.25,
        }
      )
      .to(".cover-img", {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 2,
        ease: "hop",
        delay: -4.75,
      });
  }, [location]);

  return (
    <div className="header">
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
          <Link to={PATHNAMES.About} className="hover-line">
            About
          </Link>
        </div>
        <div onClick={_onSwitchPage} className="nav-item">
          <Link
            onClick={_onSwitchPage}
            to={PATHNAMES.Work}
            className="hover-line"
          >
            Work
          </Link>
        </div>
        <div className="nav-item">
          <Link to={PATHNAMES.Journal} className="hover-line">
            Journal
          </Link>
        </div>
        <div className="nav-item">
          <Link to={PATHNAMES.Contact} className="hover-line">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
