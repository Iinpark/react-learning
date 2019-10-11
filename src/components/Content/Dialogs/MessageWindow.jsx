import React from "react";
import Message from "./Message";
import {Route} from "react-router-dom";

const MessageWindow = props => {
    let MessagesElements = props.MessagesBase.map(UD => (
        <Message message={UD.message} id={UD.id} />
    ));


  return (
    <div>
      <Route path={"/Dialogs/" + props.id}  />
    </div>
  );
};

export default MessageWindow;