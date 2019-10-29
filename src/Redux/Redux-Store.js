import Redux, { combineReducers, createStore } from "redux";
import PostsReducer from "./PostsReducer";
import MessagesReducer from "./MessagesReducer";
import UsersReducer from "./Users-Reducer";

let reducers = combineReducers({
  messages: MessagesReducer,
  posts: PostsReducer,
  users: UsersReducer
});

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
