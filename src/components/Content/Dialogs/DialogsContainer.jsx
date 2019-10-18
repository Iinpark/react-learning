import React from "react";
import Dialogs from "./Dialogs";
import DialogItem from "./DialogItem";
import Message from "./Message";
import { addMessage, messageInputting } from "../../../Redux/State/State";

const DialogsContainer = props => {
  let DialogsElements = props.users.UsersBase.map(dialog => (
    <DialogItem name={dialog.user} id={dialog.id} />
  ));
  let MessagesElements = props.messages.MessagesBase.map(UD => (
    <Message message={UD.message} id={UD.id} />
  )); //извлекаем данные из пропсов, закидываем в <Message> и <DialogItem>

  const newMessage = () => {
    let action = addMessage();
    props.dispatch(action);
  };
  let onMessageInput = e => {
    let body = e.target.value;
    props.dispatch(messageInputting(body));
  };
  return (
    <Dialogs
      DialogsElements={DialogsElements}
      MessagesElements={MessagesElements}
      newMessage={newMessage}
      onMessageInput={onMessageInput}
      messages={props.messages}
    />
  );
};

export default DialogsContainer;
