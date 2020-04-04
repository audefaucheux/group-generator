import React from "react";

const User = ({ user, handleClickDelete }) => {
  return (
    <div>
      {user}
      <button onClick={handleClickDelete}>x</button>
    </div>
  );
};

export default User;
