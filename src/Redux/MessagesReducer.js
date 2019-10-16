const WHILE_MESSAGE_INPUTTING = "WHILE_MESSAGE_INPUTTING";
const ADD_MESSAGE = "ADD_MESSAGE";

const MessagesReducer = (state, action) => {
  switch (action.type) {
    case WHILE_MESSAGE_INPUTTING:
      state.messages.newMessageContent = action.newContent;
      break;
    case ADD_MESSAGE:
      let newMessage = {
        message: state.messages.newMessageContent,
        id: 5
      };
      state.messages.MessagesBase.push(newMessage);
      state.messages.newMessageContent = "";
      break;
  }
  return state;
};
export default MessagesReducer;
