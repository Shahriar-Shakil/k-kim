import React from "react";

export default function HeroSection() {
  return (
    <section data-scroll-section id="hero">
      <img
        data-scroll
        data-scroll-speed="-4"
        data-scroll-position="top"
        data-scroll-offset="100,50%"
        data-scroll-delay="0.06"
        className="hero-avater"
        id="heroAvatar"
        src="./assets/Avatar.svg"
        alt=""
      />
      <div className="container">
        <div className="left">
          <span
            data-scroll
            data-scroll-speed="-5"
            data-scroll-position="top"
            data-scroll-offset="100,70%"
            className="yellowBackground"
          />
          <div className="heroContent">
            <h2>Hello!</h2>
            <p>
              My name is <span className="special">Kevin Kim</span> , and I am a
              designer who focuses on illustration, design, editorial art, and
              style frames for motion graphics.
            </p>
            <a href>More</a>
          </div>
        </div>
        <div className="right">
          <img
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-15"
            data-scroll-position="left"
            // data-scroll-delay="0.03"
            className="cloud"
            src="./assets/Cloud.svg"
            alt=""
          />
          <div className="floating">
            <div className="floatingContent">
              <h2>KEVIN</h2>
              <ul>
                <li>
                  <a href="">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href>
                    <i className="far fa-envelope" />
                  </a>
                </li>
              </ul>
              <h2>KIM</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
