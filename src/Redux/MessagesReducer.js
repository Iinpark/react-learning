const WHILE_MESSAGE_INPUTTING = "WHILE_MESSAGE_INPUTTING";
const ADD_MESSAGE = "ADD_MESSAGE";

const initialState = {
  newMessageContent: "",
  MessagesBase: [
    { id: 0, message: "Hi" },
    { id: 1, message: "Yo" },
    { id: 2, message: "In" },
    { id: 3, message: "Elon" },
    { id: 4, message: "We" },
    { id: 5, message: "Trust" },
    { id: 6, message: "Just" },
    { id: 7, message: "read the" },
    { id: 8, message: "instructions" }
  ]
};

const MessagesReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case WHILE_MESSAGE_INPUTTING:
      state.newMessageContent = action.newContent;
      break;
    case ADD_MESSAGE:
      let newMessage = {
        message: state.newMessageContent,
        id: 5
      };
      state.MessagesBase.push(newMessage);
      state.newMessageContent = "";
      break;
  }
  return state;
};
export default MessagesReducer;
