import React from "react";
import { useState } from "react";
import Services from "./service-info";
import { serviceInfo } from "./data";

function ServicePage() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedInfo) {
    // selectedInfo => "Walks", "Boarding", "Groming", "Daycare".
    setSelectedTopic(selectedInfo);
  }
  return (
    <section
      className="services"
      style={selectedTopic ? { minHeight: "1500px" } : null}
    >
      <h1>Services</h1>
      <div class="icon-container">
        <Services onSelect={() => handleSelect("Walks")}>Walks</Services>
        <Services onSelect={() => handleSelect("Boarding")}>Boarding</Services>
        <Services onSelect={() => handleSelect("Grooming")}>Grooming</Services>
        <Services onSelect={() => handleSelect("Daycare")}>Daycare</Services>
      </div>

      <div className="service-info info" id="boarding">
        {!selectedTopic ? (
          <h2>Click above for more info </h2>
        ) : (
          <>
            <h1>{serviceInfo[selectedTopic]?.title}</h1>
            <h2>{serviceInfo[selectedTopic]?.price}</h2>
            <p>{serviceInfo[selectedTopic]?.info}</p>
          </>
        )}
      </div>
    </section>
  );
}

export default ServicePage;
