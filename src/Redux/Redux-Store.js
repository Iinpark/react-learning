import Redux, { combineReducers, createStore } from "redux";
import PostsReducer from "./PostsReducer";
import MessagesReducer from "./MessagesReducer";
import UsersReducer from "./Users-Reducer";

let reducers = combineReducers({
  messages: MessagesReducer,
  posts: PostsReducer,
    users: UsersReducer
});

let store = createStore(reducers);

export default store;