import React from "react";
import GroupMember from "./GroupMember";

const Group = ({ id, group }) => {
  return (
    <div>
      {`Group ${id}:`}
      <ul>
        {group.map((user, index) => (
          <GroupMember key={index} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default Group;
