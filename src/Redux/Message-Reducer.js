export const CREATE_NEW_MESSAGE = () => {
  return { type: "CREATE_NEW_MESSAGE" };
};

export const GetMessageContent = NewText => {
  return { type: "GetMessageContent", NewText: NewText };
};



const MessageReducer = () =>{

}