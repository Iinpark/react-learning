import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import { GetMessageContent} from "../../../Redux/State/Store";
import Message from "./Message";

console.log();
const Dialogs = props => {
  let DialogsElements = props.UsersBase.map(dialog => (
    <DialogItem name={dialog.user} id={dialog.id} />
  ));
  let MessagesElements = props.MessagesBase.map(MB => (
    <Message name={MB.user} id={MB.id} />
  ));
  let NewMessage = props.NewMessageContent
  let NewMessageSend = e => {
    let body = e.target.value;
    props.dispatch(GetMessageContent(body));
  };

  // извлекаем данные из датабазы и закидываем в переменные

  return (
    <div className={styles.wrapper}>
      <textarea
        className={styles.textarea}
        value={NewMessage}
        onChange={NewMessageSend}
      >

      </textarea>
      <div className="row align-content-center m-0">
        <div className="col">
          <button className="btn btn-primary" onClick={NewMessageSend}>
            Добавить
          </button>
        </div>
      </div>
      <div className={styles.dialogs}>{DialogsElements}</div>
      <div className={styles.Messages}>{MessagesElements}</div>
    </div>
  );
};

export default Dialogs;
