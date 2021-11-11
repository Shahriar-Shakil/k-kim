import React from "react";
import Link from "next/link";
import { useHover } from "../../utils/useHover";

export default function Gallery() {
  // const [hoverRef, isHovered] = useHover();
  function MouseOver(event) {
    event.target.classList.add("active");
    document.body.classList.add("hover-image");
  }
  function MouseOut(event) {
    event.target.classList.remove("active");
    document.body.classList.remove("hover-image");
  }
  return (
    <section data-scroll-section id="gallery">
      <div className="container">
        <div
          //  data-scroll
          //  data-scroll-speed="2"
          //  data-scroll-position="top"
          className="gallery-left"
        >
          <div className="wrapper">
            <div
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
              className="content"
            >
              <Link href="/">
                <a>
                  <div className="content-overlay"></div>
                  <img
                    className="content-image"
                    src="/assets/gallery/gallery1.png"
                  />
                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">This is a title</h3>
                  </div>
                </a>
              </Link>
            </div>
          </div>{" "}
          <div className="wrapper">
            <div
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
              className="content"
            >
              <Link href="/">
                <a>
                  <div className="content-overlay"></div>
                  <img
                    className="content-image"
                    src="/assets/gallery/gallery2.png"
                  />
                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">This is a title</h3>
                  </div>
                </a>
              </Link>
            </div>
          </div>{" "}
          <div className="wrapper">
            <div
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
              className="content"
            >
              <Link href="/">
                <a>
                  <div className="content-overlay"></div>
                  <img
                    className="content-image"
                    src="/assets/gallery/gallery3.png"
                  />
                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">This is a title</h3>
                  </div>
                </a>
              </Link>
            </div>
          </div>{" "}
          <div className="wrapper">
            <div
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
              className="content"
            >
              <Link href="/">
                <a>
                  <div className="content-overlay"></div>
                  <img
                    className="content-image"
                    src="/assets/gallery/gallery4.png"
                  />
                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">This is a title</h3>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <button data-scroll data-scroll-class="appear">
            See More Projects{" "}
          </button>
        </div>
        <div
          // data-scroll-section
          // data-scroll
          // data-scroll-speed=""
          // data-scroll-position="top"
          // data-scroll-repeat={true}
          //  data-scroll-offset="400,0"

          className="gallery-right"
        >
          <div className="wrapper">
            <div
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
              className="content"
            >
              <Link href="/">
                <a>
                  <div className="content-overlay"></div>
                  <img
                    className="content-image"
                    src="/assets/gallery/gallery5.png"
                  />
                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">This is a title</h3>
                  </div>
                </a>
              </Link>
            </div>
          </div>{" "}
          <div className="wrapper">
            <div
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
              className="content"
            >
              <Link href="/">
                <a>
                  <div className="content-overlay"></div>
                  <img
                    className="content-image"
                    src="/assets/gallery/gallery4.png"
                  />
                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">This is a title</h3>
                  </div>
                </a>
              </Link>
            </div>
          </div>{" "}
          <div className="wrapper">
            <div
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
              className="content"
            >
              <Link href="/">
                <a>
                  <div className="content-overlay"></div>
                  <img
                    className="content-image"
                    src="/assets/gallery/gallery1.png"
                  />
                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">This is a title</h3>
                  </div>
                </a>
              </Link>
            </div>
          </div>{" "}
          <div className="wrapper">
            <div
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
              className="content"
            >
              <Link href="/">
                <a>
                  <div className="content-overlay"></div>
                  <img
                    className="content-image"
                    src="/assets/gallery/gallery2.png"
                  />
                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">This is a title</h3>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
