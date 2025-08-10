import React from "react";

function HomePage() {
  const scrollToSection = (sectionId) => {
    console.log(`=== Attempting to scroll to: ${sectionId} ===`);
    
    // List all elements with IDs to debug
    const allElementsWithIds = document.querySelectorAll('[id]');
    console.log('All elements with IDs:', Array.from(allElementsWithIds).map(el => ({ id: el.id, tag: el.tagName })));
    
    const element = document.getElementById(sectionId);
    
    if (element) {
      console.log(`✓ Found element:`, element);
      console.log(`Element tag: ${element.tagName}, class: ${element.className}`);
      
      // Simple scroll to test
      const elementTop = element.offsetTop;
      console.log(`Element offsetTop: ${elementTop}`);
      
      window.scrollTo({
        top: elementTop - 100, // 100px offset from top
        behavior: 'smooth'
      });
    } else {
      console.error(`✗ Element with id '${sectionId}' not found`);
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
