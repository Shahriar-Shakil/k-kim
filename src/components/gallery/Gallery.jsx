import React from 'react'

export default function Gallery() {
    return (
        <section data-scroll-section id="gallery">
          <div className="container">
            <div
            //  data-scroll
            //  data-scroll-speed="2"
            //  data-scroll-position="top"
            className="gallery-left">
              <a
               
                href=""
              >
                <img src="/assets/gallery/gallery1.png" alt="" />
              </a>
              <a href="">
                <img src="/assets/gallery/gallery3.png" alt="" />
              </a>
              <a href="">
                <img src="/assets/gallery/gallery5.png" alt="" />
              </a>   <a href="">
                <img src="/assets/gallery/gallery5.png" alt="" />
              </a>   <a href="">
                <img src="/assets/gallery/gallery5.png" alt="" />
              </a>
              <button
                data-scroll
                data-scroll-class="appear"
              >
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
              <a href="">
                <img src="/assets/gallery/gallery2.png" alt="" />
              </a>
              <a href="">
                <img src="/assets/gallery/gallery4.png" alt="" />
              </a>
              <a href="">
                <img src="/assets/gallery/gallery5.png" alt="" />
              </a>   <a href="">
                <img src="/assets/gallery/gallery5.png" alt="" />
              </a>   <a href="">
                <img src="/assets/gallery/gallery5.png" alt="" />
              </a>
            </div>
          </div>
        </section>
    )
}
