import staffMembers from "./data.js";

function StaffCard() {
  return (
    <div>
      {staffMembers.map((person) => (
        <div className="card" key={person.name}>
          <h1>hi</h1>
          <img src="./assets/images/Staff Pictures/alicia.jpg" alt="" />
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
