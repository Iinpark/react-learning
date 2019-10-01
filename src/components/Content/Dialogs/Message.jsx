import React from "react";
import styles from "./Message.module.css";

const Message = props => {
  return (
    <div id="">
      {props.message}
    </div>
  );
};

export default Message;
