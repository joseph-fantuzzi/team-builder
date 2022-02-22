import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Member from "./Components/Member";

const initialTeam = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [currentTeam, setCurrentTeam] = useState(initialTeam);
  const [team, setTeam] = useState([]);
  const [appearance, setAppearance] = useState(false);

  return (
    <div className="container">
      <h1 className="title">Team Builder</h1>
      <Form setAppearance={setAppearance} initialTeam={initialTeam} team={team} setTeam={setTeam} currentTeam={currentTeam} setCurrentTeam={setCurrentTeam} />
      {appearance && (
        <div className="member-container">
          <h1>Team Members:</h1>
          {team.map((member, index) => {
            return <Member key={index} member={member} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
