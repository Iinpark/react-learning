import { combineReducers, createStore } from "redux";
import Posts_Reducer from "./Posts-Reducer";


let Reducers = combineReducers({
   Posts_Reducer
});
let Store = createStore(Reducers);

let PageUpdate = () => {};
export const Subscriber = callback => {
    PageUpdate = callback;
};


export default Store;
