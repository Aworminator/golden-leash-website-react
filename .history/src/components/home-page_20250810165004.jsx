import React from "react";

function HomePage() {
  const scrollToSection = (sectionId) => {

    const element = document.getElementById(sectionId);

    if (element) {
      console.log(`✓ Found element:`, element);
      console.log(
        `Element tag: ${element.tagName}, class: ${element.className}`
      );

  };

  return (
    <section className="home-page">
      <div className="image-container">
        <div>
          <div className="logo-container">
            <img
              src="/golden-leash-website-react/assets/images/GoldenLeashLogo-No-Nose.png"
              className="logo"
            />
            <img
              src="/golden-leash-website-react/assets/images/GoldenLeashLogo-Nose.png"
              className="nose"
              alt=""
            />
          </div>
        </div>

        <ul className="list">
          <li
            className="list-item"
            id="story"
            onClick={() => scrollToSection("our-story")}
            style={{ cursor: "pointer" }}
          >
            Our Story
          </li>
          <li
            className="list-item"
            id="services"
            onClick={() => scrollToSection("services")}
            style={{ cursor: "pointer" }}
          >
            Services
          </li>
          <li
            className="list-item"
            id="contact"
            onClick={() => scrollToSection("contact")}
            style={{ cursor: "pointer" }}
          >
            Contact Us
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HomePage;
