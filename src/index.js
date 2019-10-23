import * as serviceWorker from "./serviceWorker";
import store from "./Redux/Redux-Store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Provider from "./StoreContext";

function ReRender(yourStore) {
  ReactDOM.render(
    <Provider value={store}>
      <App/>
    </Provider>,
    document.getElementById("root")
  );
}
console.log(store.dispatch);
ReRender(store.getState());

store.subscribe(() => {
  let state = store.getState();
  ReRender(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// state={yourState}
// dispatch={store.dispatch.bind(store)}
// store={store}
