import React from "react";

function HomePage() {
  const scrollToServices = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
        </div>

        <ul>
          <li
            className="list-item"
            onClick={() => scrollToServices("services")}
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
