import React, { useState } from "react";
import "./App.css";

const initialTeam = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [team, setTeam] = useState(initialTeam);
  return <div>Hi</div>;
}

export default App;
