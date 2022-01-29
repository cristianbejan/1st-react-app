import React from "react";
import styles from "./UserList.module.css";
import UserItem from "./UserItem";

const UserList = (props) => {
  return (
    <ul className={styles["user-list"]}>
      {props.usersList.map((user) => (
        <UserItem
          key={user.id}
          // name={user.name}
          // age={user.age}
          // id={user.id}
          user={user}
          onRemove={props.onDelete}
        />
      ))}
    </ul>
  );
};

export default UserList;
