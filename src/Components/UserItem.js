import React from "react";
import styles from "./UserItem.modal.css";

const UserItem = (props) => {
  const deleteHandler = () => {
    props.onRemove(props.user.id);
  };
  return (
    <li>
      {`${props.user.name} (${props.user.age} years old)`}
      <button type="button" onClick={deleteHandler}>
        Delete
      </button>
    </li>
  );
};

export default UserItem;
