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
      id="services"
      style={selectedTopic ? { minHeight: "1500px" } : null}
    >
      <h1>Services</h1>
      <div className="icon-container">
        <Services onSelect={() => handleSelect("Walks")}>house</Services>
        <Services onSelect={() => handleSelect("Boarding")}></Services>
        <Services onSelect={() => handleSelect("Grooming")}>paw</Services>
        <Services onSelect={() => handleSelect("Daycare")}>bath</Services>
      </div>

      <div className="service-info info" id="boarding">
        {!selectedTopic ? (
          <h3>Click above for more info </h3>
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
