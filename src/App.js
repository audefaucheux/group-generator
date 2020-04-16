import React, { useState } from "react";
import UsersList from "./UsersList/UsersList";
import GroupList from "./Groups/GroupList";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState(["Aude", "John", "Sam", "Claire", "Amy"]);

  return (
    <div>
      <h1>Group Generator</h1>
      <div>
        <UsersList {...{ users, setUsers }} />
        <br />
        <GroupList {...{ users }} />
      </div>
    </div>
  );
};

export default App;
