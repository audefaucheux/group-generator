import React from "react";
import User from "./User";
import AddUser from "./AddUser";
import "./styles/UserList.style.css";

const UserList = ({ users, setUsers }) => {
  const handleClickDelete = (id) => {
    setUsers(users.filter((user, index) => index !== id));
  };

  return (
    <React.Fragment>
      <div className="total-users">
        Total users: <span>{users.length}</span>
      </div>
      {users.map((user, index) => (
        <User
          key={index}
          id={index}
          handleClickDelete={() => handleClickDelete(index)}
          user={user}
        />
      ))}
      <AddUser {...{ users, setUsers }} />
    </React.Fragment>
  );
};

export default UserList;
