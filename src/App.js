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

  return (
    <div className="container">
      <h1>Team Builder</h1>
      <Form initialTeam={initialTeam} team={team} setTeam={setTeam} currentTeam={currentTeam} setCurrentTeam={setCurrentTeam} />
      {team.map((member, index) => {
        return <Member key={index} member={member} />;
      })}
    </div>
  );
}

export default App;
