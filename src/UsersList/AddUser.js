import React, { useState } from "react";

const AddUser = ({ users, setUsers }) => {
  const [newUser, setNewUser] = useState("");

  const handleChange = (event) => {
      setNewUser(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newUser !== "") {
      setUsers([...users, newUser]);
      setNewUser("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newUser}
        onChange={handleChange}
        placeholder="Add User"
      />
      <input type="submit" value="Submit" data-testid="add-user-button" />
    </form>
  );
};

export default AddUser;
