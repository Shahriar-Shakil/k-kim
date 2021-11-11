import React from "react";

export default function Contacts() {
  return (
    <section data-scroll-section id="contacts">
      <img class="cat" src="/assets/Cat.svg" alt="" />
      <div className="container">
        <div className="wrapper">
          <h3
            data-scroll
            data-scroll-class="appear"
            data-scroll-direction="horizontal"
            data-scroll-speed="-1"
          >
            Say hi
          </h3>
          <form action="">
            <div className="form-container">
              <input className="email-field" type="email" placeholder="Email" />
              <textarea
                rows="6"
                cols="50"
                className="textArea-field"
                type="textarea"
                placeholder="Your message"
              />
              <div className="form-footer">
                <span className="social-links">
                  <a href="">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </span>
                <button>Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <img 
      data-scroll
      data-scroll-class="appear"
      className="grass" src="/assets/Grass 2.svg" alt="" />
    </section>
  );
}
