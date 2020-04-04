import React from "react";
import User from "./User";
import AddUser from "./AddUser";

const UsersList = ({ users, setUsers }) => {
  const handleClickDelete = id => {
    setUsers(users.filter((user, index) => index !== id));
  };

  return (
    <div>
      {users.map((user, index) => (
        <User
          key={index}
          handleClickDelete={() => handleClickDelete(index)}
          user={user}
        />
      ))}
      <AddUser {...{ users, setUsers }} />
    </div>
  );
};

export default UsersList;
