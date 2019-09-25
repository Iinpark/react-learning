import React from "react";
import classes from "./content.module.css";
import PageInfo from "../PageInfo/PageInfo";
import Dialogs from "../Dialogs/Dialogs";
import { Route } from "react-router-dom";
import Posts from "../posts/Posts";

const Content = () => {
  return (
    <div className={classes.cont}>
      <Route path="/PageInfo" component={PageInfo} />
      <Route path="/Dialogs" component={Dialogs} />
      <Route path="/Feed" component={Posts} />
    </div>
  );
};

export default Content;
