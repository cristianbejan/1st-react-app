import React, { useState } from "react";
import ErrorModal from "./ErrorModal";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(false);

  const usernameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageInputHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredName.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }

    const users = {
      name: enteredName,
      age: enteredAge,
    };
    props.onAddUser(users);

    setEnteredName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={formSubmitHandler}>
        <div className={styles["user-input"]}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={enteredName}
              onChange={usernameInputHandler}
            ></input>
            <label>Age (Years)</label>
            <input
              type="number"
              value={enteredAge}
              onChange={ageInputHandler}
            ></input>
          </div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
