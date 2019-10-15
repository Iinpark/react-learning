import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";

const Dialogs = props => {

  let DialogsElements = props.UsersBase.map(dialog => (
    <DialogItem name={dialog.user} id={dialog.id} />
  ));
  let MessagesElements = props.messages.MessagesBase.map(UD => (
    <Message message={UD.message} id={UD.id} />
  )); //извлекаем данные из пропсов, закидываем в <Message> и <DialogItem>

    let state = props.store

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.dialogs}>{DialogsElements}</div>
        <div className={styles.Messages}>{MessagesElements}</div>
      </div>
        <div className="row align-content-center ">
        <textarea
            className="form-control"
            aria-label="With textarea"
        ></textarea>
        <div className="row align-content-center m-0">
            <div className="col">
                <button className="btn btn-primary">Добавить</button>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Dialogs;
