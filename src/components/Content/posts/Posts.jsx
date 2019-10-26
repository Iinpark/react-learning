import React from "react";
import styles from "./Posts.module.css";
import PostInput from "./Bootstrap-PostInput";
const Posts = props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.PostsWrapper}>
          <PostInput onPostInput={props.onPostInput} NewPost={props.NewPost} />
        {props.PostsElements}
      </div>
    </div>
  );
};
export default Posts;
