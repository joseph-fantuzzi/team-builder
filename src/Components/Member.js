import React from "react";
import "./Member.css";

function Member(props) {
  const { member } = props;

  return (
    <div className="member-item">
      <h2>Name: {member.name}</h2>
      <p>Email: {member.email}</p>
      <p>Role: {member.role}</p>
    </div>
  );
}

export default Member;
