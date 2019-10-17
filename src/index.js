import * as serviceWorker from "./serviceWorker";
import store from "./Redux/Redux-Store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function ReRender(yourState) {
  ReactDOM.render(
    <App
      state={yourState}
      dispatch={store.dispatch.bind(store)}
      store={store}
    />,
    document.getElementById("root")
  );
}

ReRender(store.getState());

store.subscribe(() => {
 let state = store.getState();
 ReRender(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
