import React, { useState } from "react";

const AddUser = ({ users, setUsers }) => {
  const [newUser, setNewUser] = useState("");

  const handleChange = (e) => {
    setNewUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddUser;
