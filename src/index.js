import React from "react";
import * as serviceWorker from "./serviceWorker";
import { ReRender } from "./components/ReRender";
import State, {CreateNewPost} from "./Redux/State/State";

//TODO:исправить циклическую зависимость

ReRender(State, CreateNewPost);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();