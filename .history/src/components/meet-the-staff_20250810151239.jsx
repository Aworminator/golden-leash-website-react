import React from "react";
import StaffCard from "./staff-card";

function MeetTheStaff() {
  return (
    <section className="staff">
      <h1>Meet The Staff!</h1>
      <div id="staff-cards">
        <StaffCard />
      </div>
      <h2></h2>
    </section>
  );
}

export default MeetTheStaff;
