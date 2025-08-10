import React from "react";

function HomePage() {
  const scrollToServices = () => {
    const servicesElement = document.getElementById("services");
    if (servicesElement) {
      servicesElement.scrollIntoView({
        behavior: "smooth",
      });
    }
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
          <li className="list-item">Our Story</li>
          <li
            className="list-item"
            onClick={scrollToServices("service")}
            style={{ cursor: "pointer" }}
          >
            Services
          </li>
          <li className="list-item">Contact Us</li>
        </ul>
      </div>
    </section>
  );
}

export default HomePage;
