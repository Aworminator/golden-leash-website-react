import React from "react";

function HomePage() {
  const scrollToSection = (sectionId) => {
    // Add a small delay to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Get the element's position relative to the document
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = rect.top + scrollTop - 50; // 50px offset from top
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        console.log(`Scrolling to ${sectionId} at position:`, targetPosition);
      } else {
        console.error(`Element with id '${sectionId}' not found`);
      }
    }, 100);
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
