import React from "react";
import { useState } from "react";
import Services from "./service-info";
import { serviceInfo } from "./data";

function ServicePage() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedInfo) {
    // selectedInfo => "Walks", "Boarding", "Groming", "Daycare".
    setSelectedTopic(selectedInfo);

    const serviceStyle = {
      animation: "slide-fwd-tr 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"
    };
}

export default ServicePage;
