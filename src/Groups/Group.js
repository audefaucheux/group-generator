import React from "react";

const Group = ({ id, group }) => {
  return (
    <div>
      Group {id}:
      <ul>
        {group.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Group;
