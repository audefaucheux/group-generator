import React from "react";
import User from "./User";
import AddUser from "./AddUser";
import { UserListStyle } from "./styles/UserList.style";

const UserList = ({ users, setUsers }) => {
  const handleClickDelete = (id) => {
    setUsers(users.filter((user, index) => index !== id));
  };

  return (
    <UserListStyle>
      {`Total users : ${users.length}`}
      {users.map((user, index) => (
        <User
          key={index}
          id={index}
          handleClickDelete={() => handleClickDelete(index)}
          user={user}
        />
      ))}
      <AddUser {...{ users, setUsers }} />
    </UserListStyle>
  );
};

export default UserList;
