import React from "react";
import Posts from "./Posts";
import Post from "./post";
import { addPost, postInputting } from "../../../Redux/State/State";
import StoreContext from "../../../StoreContext";

const PostsContainer = props => {
  return (
    <StoreContext.Consumer>
      {store => {
        // вытаскиваем посты из пропсов и отрисовываем
        let PostsElements = store.posts.PostsBase.map(PostsBase => (
          <Post
            avatar={PostsBase.PostAvatar}
            user={PostsBase.PostAutor}
            content={PostsBase.PostContent}
          />
        ));

        let onPostInput = PostTextArea => {
          let newPostContent = PostTextArea.target.value;
          let action = postInputting(newPostContent);
          store.dispatch(action);
        };

        let NewPost = () => {
          let action = addPost();
          store.dispatch(action);
        };

        let posts = store.posts;
        return (
          <Posts
            PostsElements={PostsElements}
            onPostInput={onPostInput}
            NewPost={NewPost}
            posts={posts}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default PostsContainer;

//props
// avatar={PostsBase.PostAvatar}
// user={PostsBase.PostAutor}
// content={PostsBase.PostContent}
