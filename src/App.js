import React, { useState } from "react";
import UserList from "./Users/UserList";
import GroupList from "./Groups/GroupList";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState(["Aude", "John", "Sam", "Claire", "Amy"]);

  console.log("adding some stuff");
  return (
    <React.Fragment>
      <h1>Group Generator</h1>
      <div id="generator">
        <UserList {...{ users, setUsers }} />
        <GroupList {...{ users }} />
      </div>
    </React.Fragment>
  );
};

export default App;
