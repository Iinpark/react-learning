import React from "react";
import Posts from "./Posts";
import {addPost, postInputting} from "../../../Redux/State/State";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPostInput: PostTextArea => {
      let newPostContent = PostTextArea.target.value;
      let action = postInputting(newPostContent);
      dispatch(action);
    },
    NewPost: () => {
      let action = addPost();
      dispatch(action);
    }
  };
};

const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
export default PostsContainer;

//props
// avatar={PostsBase.PostAvatar}
// user={PostsBase.PostAutor}
// content={PostsBase.PostContent}
