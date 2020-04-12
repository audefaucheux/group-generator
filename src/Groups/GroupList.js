import React, { useState } from "react";
import Group from "./Group";

const GroupList = ({ users }) => {
  const [groupSize, setGroupSize] = useState(0);
  const [groups, setGroups] = useState([]);

  const getRadomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

  const shuffleUsers = (users) => {
    const currentUsers = [...users];
    const newUsers = [];

    while (currentUsers.length !== 0) {
      const randomIndex = getRadomNumber(currentUsers.length);
      newUsers.push(currentUsers[randomIndex]);
      currentUsers.splice(randomIndex, 1);
    }

    return newUsers;
  };

  const groupUsers = (users, groupSize) => {
    if (groupSize < users.length && groupSize !== 0) {
      const currentUsers = [...users];
      const finalGroups = [];
      const totalGroups = Math.ceil(users.length / groupSize);

      for (let i = 0; i < totalGroups; i++) {
        finalGroups.push(users.splice(0, groupSize));
        currentUsers.splice(0, groupSize);
      }

      setGroups(finalGroups);
    } else {
      alert("something went wrong");
    }
  };

  const handleChange = (e) => {
    setGroupSize(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    groupUsers(users, groupSize);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Group Size:
          <input type="number" value={groupSize} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {groups.map((group, index) => (
        <Group key={index} id={index + 1} group={group} />
      ))}
    </div>
  );
};

export default GroupList;
