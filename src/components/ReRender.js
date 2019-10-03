import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

export function ReRender(State, CreateNewPost){
    ReactDOM.render(
        <App State={State} CreateNewPost={CreateNewPost} />,
        document.getElementById("root")
    );
};
