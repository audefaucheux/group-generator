import React, { useState } from "react";

const AddUser = ({ users, setUsers }) => {
  const [newUser, setNewUser] = useState("");

  const handleChange = event => {
    setNewUser(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setUsers([...users, newUser]);
    setNewUser("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={newUser} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddUser;
