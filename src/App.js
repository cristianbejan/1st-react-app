import React, { useState } from "react";
import UserInput from "./Components/UserInput";
import UserList from "./Components/UserList.";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (user) => {
    setUsersList([...usersList, user]);
  };

  const onRemoveHandler = (userId) => {
    const newList = usersList.filter((user) => user.id !== userId);
    setUsersList(newList);
  };

  return (
    <div>
      <UserInput onAddUser={addUserHandler} />
      <UserList usersList={usersList} onDelete={onRemoveHandler} />
    </div>
  );
};

export default App;
