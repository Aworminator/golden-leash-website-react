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
  const isDesktop = window.innerWidth >= 1024;

  return (
    <section
      className="services"
      id="services"
      style={
        selectedTopic && isDesktop ? { minHeight: "150px" } : null
      }
    >
      <h1>Services</h1>
      <div className="icon-container">
        <Services onSelect={() => handleSelect("Walks")}>paw</Services>
        <Services onSelect={() => handleSelect("Boarding")}>house</Services>
        <Services onSelect={() => handleSelect("Grooming")}>bath</Services>
        <Services onSelect={() => handleSelect("Daycare")}>dog</Services>
      </div>

      <div
        key={selectedTopic}
        className={`service-info info ${
          selectedTopic ? "service-animate" : ""
        }`}
        id="boarding"
      >
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
