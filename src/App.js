import React, { useState } from "react";
import UsersList from "./UsersList/UsersList";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState(["Aude"]);

  return (
    <div>
      Group Generator
      <div>
        <UsersList {... {users, setUsers}} />
      </div>
    </div>
  );
};

export default App;
