import React, { useState } from "react";
import Group from "./Group";

const GroupList = ({ users }) => {
  const [groupSize, setGroupSize] = useState(1);
  const [groups, setGroups] = useState([]);
  const [errorMessage, setErrorMessage] = useState(undefined);

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
    if (groupSize < users.length && groupSize >= 1) {
      const shuffledUsers = shuffleUsers(users);
      const remainingUsers = [...shuffledUsers];
      const finalGroups = [];
      const totalGroups = Math.ceil(users.length / groupSize);

      for (let i = 0; i < totalGroups; i++) {
        finalGroups.push(shuffledUsers.splice(0, groupSize));
        remainingUsers.splice(0, groupSize);
      }

      setGroups(finalGroups);
      setErrorMessage(undefined);
    } else {
      setErrorMessage("Group Size must be smaller than the total users");
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
          <input
            data-testid="group-size-input"
            type="number"
            min={1}
            value={groupSize}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {errorMessage ||
        groups.map((group, index) => (
          <Group key={index} id={index + 1} group={group} />
        ))}
    </div>
  );
};

export default GroupList;
