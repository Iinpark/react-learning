import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";
import {addMessage, messageInputing, postInputing} from "../../../Redux/State/State";

const Dialogs = props => {

  let DialogsElements = props.UsersBase.map(dialog => (
    <DialogItem name={dialog.user} id={dialog.id} />
  ));
  let MessagesElements = props.messages.MessagesBase.map(UD => (
    <Message message={UD.message} id={UD.id} />
  )); //извлекаем данные из пропсов, закидываем в <Message> и <DialogItem>

const newMessage = () =>{
    let action = addMessage();
    props.dispatch(action)
}

let onMessageInput = (e) =>{
    let body = e.target.value;
    props.dispatch(messageInputing(body));
};
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
            value={props.messages.newMessageContent}
            onChange={onMessageInput}
        ></textarea>
        <div className="row align-content-center m-0">
            <div className="col">
                <button className="btn btn-primary" onClick={newMessage}>Добавить</button>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Dialogs;
