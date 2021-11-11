import React from "react";

export default function Clients() {
  return (
    <section data-scroll-section id="clients">
        <img
        data-scroll
        data-scroll-direction=""
        // data-scroll-speed="2"
        // data-scroll-position="top"
        data-scroll-class="appear"
        className="cloud2" src="/assets/Cloud 2.svg" alt="" />
      <div className="wrapper">
        <span data-scroll 
        data-scroll-direction="horizontal"
        data-scroll-speed="25"

        >I can also go in this direction</span>
      </div>
    </section>
  );
}
