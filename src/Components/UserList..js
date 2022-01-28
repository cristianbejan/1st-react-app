import React from "react";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <ul className={styles["user-list"]}>
      {props.usersList.map((user, index) => (
        <li key={index} className={styles["user-item"]}>
          {`${user.name} (${user.age} years old)`}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
