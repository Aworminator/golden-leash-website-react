import React from "react";

function Contact() {
  return 
    <section className="contact">
      <h1>Contact Us</h1>
      <div class="address-phone">
        <p>For the safety and well being of our staff and dogs, <br />
           all services and facility tours are by appointment <strong>only.</strong>
        
      </p>
        <p>
          <div className="callOrText">
            <div className="contact-icons">
          <i className="fa-solid fa-phone icon"></i> <h2>or</h2> <i className="fa-solid fa-mobile icon"></i>
          </div>
          <a href="tel:+13134019884">313-401-9884</a>
          <br />
          <h2>Our Location</h2>
          <div>4450 13th St 
            <br />Wyandotte, MI
            <br />48192
          </div>
        </p>
        </div>
    </section>
}

export default Contact;
