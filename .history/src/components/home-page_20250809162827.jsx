import React from "react";

function HomePage() {
  return (
    <section className="home-page">
      <div className="image-container">
        <div>
          <div className="logo-container">
            <img
              src="/assets/images/GoldenLeashLogo-No Nose.png"
              className="logo"
            />
            <img
              src="/assets/images/GoldenLeashLogo Nose.png"
              className="nose"
              alt=""
            />
          </div>
        </div>

        <ul className="list">
          <li className="list-item" id="story">
            Our Story
          </li>
          <li className="list-item" id="service">
            Services
          </li>
          <li className="list-item" id="contact">
            Contact Us
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HomePage;
