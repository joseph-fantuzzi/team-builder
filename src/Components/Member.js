import React from "react";

function Member(props) {
  const { member } = props;

  return (
    <div className="member-container">
      <h2>Name: {member.name}</h2>
      <p>Email: {member.email}</p>
      <p>Role: {member.role}</p>
    </div>
  );
}

export default Member;
