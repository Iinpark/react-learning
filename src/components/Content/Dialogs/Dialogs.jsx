import React from "react";
import styles from "./Dialogs.module.css";

const Dialogs = props => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.dialogs}>{props.DialogsElements}</div>
        <div className={styles.Messages}>{props.MessagesElements}</div>
      </div>
      <div className="row align-content-center ">
        <textarea
          className="form-control"
          aria-label="With textarea"
          value={props.messages.newMessageContent}
          onChange={props.onMessageInput}
        ></textarea>
        <div className="row align-content-center m-0">
          <div className="col">
            <button className="btn btn-primary" onClick={props.newMessage}>
              Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
