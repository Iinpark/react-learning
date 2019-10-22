import React from "react";
import classes from "./content.module.css";
import PageInfo from "./PageInfo/PageInfo";
import { Route } from "react-router-dom";
import PostsContainer from "./posts/Posts-Container";
import DialogsContainer from "./Dialogs/DialogsContainer";

const Content = props => {
  return (
    <div className={classes.cont}>
      <Route path="/PageInfo" render={() => <PageInfo />} />
      <Route
        path="/Dialogs"
        render={() => (
          <DialogsContainer
            users={props.users}
            messages={props.messages}
            dispatch={props.dispatch}
          />
        )}
      />
      <Route
        path="/Feed"
        render={() => (
          <PostsContainer
            posts={props.posts}
            users={props.users}
            dispatch={props.dispatch}
          />
        )}
      />
    </div>
  );
};

export default Content;
