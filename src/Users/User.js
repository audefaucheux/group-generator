import React from "react";

const User = ({ id, user, handleClickDelete }) => (
  <div>
    {user}
    <button onClick={handleClickDelete} data-testid={`delete-button-${id}`}>
      x
    </button>
  </div>
);

export default User;
