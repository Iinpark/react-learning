import React from "react";
import * as serviceWorker from "./serviceWorker";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./Redux/State/Store.js";

function ReRender() {
  ReactDOM.render(
    <App
      Store={Store}
      GetNewPostContent={Store.GetNewPostContent.bind(Store)}
      State={Store.getState.bind(Store)}
    />,
    document.getElementById("root")
  );
}

ReRender();
Store.Subscriber(ReRender);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
