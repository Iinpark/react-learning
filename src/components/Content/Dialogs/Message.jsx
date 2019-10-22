import React from "react";

const Message = props => {
  return (
    <div id={props.id}>
      {props.message}
    </div>
  );
};

export default Message;
