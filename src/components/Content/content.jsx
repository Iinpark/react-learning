import React from "react";
import classes from "./content.module.css";
import PageInfo from "./PageInfo/PageInfo";
import Dialogs from "./Dialogs/Dialogs";
import { Route } from "react-router-dom";
import Posts from "./posts/Posts";

const Content = props => {
  return (
    <div className={classes.cont}>
      <Route path="/PageInfo" render={() => <PageInfo />} />
      <Route
        path="/Dialogs"
        render={() => (
          <Dialogs
            UsersBase={props.State.UsersBase}
            MessagesBase={props.State.MessagesBase}
            NewMessageContent={props.State.NewMessageContent}
            dispatch={props.dispatch}
          />
        )}
      />
      <Route
        path="/Feed"
        render={() => (
          <Posts
            PostsBase={props.State.PostsBase}
            UsersBase={props.State.UsersBase}
            GetNewPostContent={props.GetNewPostContent}
            dispatch={props.dispatch}
          />
        )}
      />
    </div>
  );
};

export default Content;
