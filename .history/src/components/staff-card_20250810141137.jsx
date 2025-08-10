import staffMembers from "./data.js";

function StaffCard() {
  return (
    <div id="staff-cards">
      {staffMembers.map((person) => (
        <div className="card" key={person.name}>
          <h2>{person.name}</h2>
          <h2>{person.title}</h2>
          <img className="profile-pic" src={person.image} alt="" />
          <p className="staff-info">{person.info}</p>
        </div>
      ))}
    </div>
  );
}

export default StaffCard;
