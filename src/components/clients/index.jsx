import React from "react";

export default function Clients() {
  return (
    <section data-scroll-section id="clients">
      <img
        data-scroll
        data-scroll-direction=""
        data-scroll-class="appear"
        className="cloud2"
        src="/assets/Cloud 2.svg"
        alt=""
      />
      <div className="wrapper">
          {/* <p>Brand I've break worked with</p> */}
        <span
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="25"
        >
          <img src="/assets/clients/dell.png" alt="" />
          <img src="/assets/clients/facebook.png" alt="" />
          <img src="/assets/clients/instagram.png" alt="" />
          <img src="/assets/clients/linkedin-logo.png" alt="" />
          <img src="/assets/clients/visa.png" alt="" />
          <img src="/assets/clients/youtube.png" alt="" />
        </span>
      </div>
    </section>
  );
}
