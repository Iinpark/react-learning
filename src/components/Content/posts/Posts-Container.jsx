import React from "react";
import Posts from "./Posts";
import Post from "./Bootstrap-Post";
import { addPost, postInputting } from "../../../Redux/State/State";

const PostsContainer = props => {
  // вытаскиваем посты из пропсов и отрисовываем
  let PostsElements = props.posts.PostsBase.map(PostsBase => (
    <Post
      avatar={PostsBase.PostAvatar}
      user={PostsBase.PostAutor}
      content={PostsBase.PostContent}
    />
  ));

  let onPostInput = PostTextArea => {
    let newPostContent = PostTextArea.target.value;
    let action = postInputting(newPostContent);
    props.dispatch(action);
  };

  let NewPost = () => {
    let action = addPost();
    props.dispatch(action);
  };

  return (
    <Posts
      PostsElements={PostsElements}
      onPostInput={onPostInput}
      NewPost={NewPost}
      posts={props.posts}
    />
  );
};

export default PostsContainer