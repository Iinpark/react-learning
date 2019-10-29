import React from "react";
import styles from "./Posts.module.scss";
import Post from "./Bootstrap-Post";
import PostInput from "./Bootstrap-PostInput";
const Posts = props => {
  let PostsElements = props.posts.PostsBase.map(PostsBase => (
    <Post
      avatar={PostsBase.PostAvatar}
      user={PostsBase.PostAutor}
      content={PostsBase.PostContent}
    />
  ));
  return (
    <div className={styles.wrapper}>
      <div className={styles.PostsWrapper}>
        <PostInput onPostInput={props.onPostInput} NewPost={props.NewPost} />
        {PostsElements}
      </div>
    </div>
  );
};
export default Posts;
