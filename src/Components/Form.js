import React from "react";

function Form(props) {
  const { initialTeam, currentTeam, setCurrentTeam, team, setTeam } = props;

  const onChange = (event) => {
    setCurrentTeam({
      ...currentTeam,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setTeam([...team, currentTeam]);
    setCurrentTeam(initialTeam);
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <label>
        Full Name:
        <input type="text" name="name" value={currentTeam.name} onChange={onChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={currentTeam.email} onChange={onChange} />
      </label>
      <label>
        Role:
        <select value={currentTeam.role} name="role" onChange={onChange}>
          <option value="">-- Select a Role --</option>
          <option value="Frontend Engineer">Frontend Engineer</option>
          <option value="Backend Engineer">Backend Engineer</option>
          <option value="UI Designer">UI Designer</option>
          <option value="UX Designer">UX Designer</option>
          <option value="Data Scientist">Data Scientist</option>
        </select>
      </label>
      <button>Create Member</button>
    </form>
  );
}

export default Form;
