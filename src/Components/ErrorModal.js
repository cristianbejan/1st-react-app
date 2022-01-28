import React from "react";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <div className={styles.modal}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.msg}>
          <p>{props.message}</p>
        </div>
        <footer>
          <button type="submit" onClick={props.onConfirm}>
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
