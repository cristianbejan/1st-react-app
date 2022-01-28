import React, { useState } from "react";
import UserInput from "./Components/UserInput";
import UserList from "./Components/UserList.";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (user) => {
    setUsersList([...usersList, user]);
  };

  return (
    <div>
      <UserInput onAddUser={addUserHandler} />
      <UserList usersList={usersList} />
    </div>
  );
};

export default App;
